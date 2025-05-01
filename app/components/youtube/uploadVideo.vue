<template>
  <div>
    <div v-if="!isAuthenticated">
      <button
        @click="handleAuthClick"
        class="bg-red-600 text-white px-4 py-2 rounded"
      >
        Authorize YouTube Access
      </button>
    </div>

    <div v-else class="space-y-4">
      <div class="p-4 bg-green-100 text-green-800 rounded">
        Successfully authenticated with YouTube!
      </div>

      <div class="space-y-2">
        <label class="block font-medium">Video Title</label>
        <input
          v-model="videoData.title"
          type="text"
          class="w-full p-2 border rounded"
        />
      </div>

      <div class="space-y-2">
        <label class="block font-medium">Video Description</label>
        <textarea
          v-model="videoData.description"
          class="w-full p-2 border rounded"
        ></textarea>
      </div>

      <div class="space-y-2">
        <label class="block font-medium">Video File</label>
        <input
          type="file"
          accept="video/*"
          @change="handleFileChange"
          class="w-full p-2 border rounded"
        />
      </div>

      <button
        @click="uploadVideo"
        :disabled="uploading || !selectedFile"
        class="bg-blue-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
      >
        {{ uploading ? "Uploading..." : "Upload Video" }}
      </button>

      <div v-if="uploadProgress > 0" class="pt-2">
        <div class="h-2 bg-gray-200 rounded">
          <div
            class="h-2 bg-blue-500 rounded"
            :style="{ width: `${uploadProgress}%` }"
          ></div>
        </div>
        <p class="text-sm text-gray-600 mt-1">{{ uploadProgress }}% uploaded</p>
      </div>

      <div v-if="videoUrl" class="p-4 bg-blue-100 text-blue-800 rounded">
        Video uploaded successfully!
        <a :href="videoUrl" target="_blank" class="underline"
          >View on YouTube</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { google } from "googleapis";

const isAuthenticated = ref(false);
const uploading = ref(false);
const uploadProgress = ref(0);
const videoUrl = ref("");
const selectedFile = ref(null);
const oauthClient = ref(null);
const videoData = ref({
  title: "",
  description: "",
  privacyStatus: "private", // or 'public', 'unlisted'
});

const config = useRuntimeConfig();
// Initialize OAuth client
onMounted(() => {
  oauthClient.value = new google.auth.OAuth2(
    config.public.googleClientId,
    config.public.googleClientSecret,
    config.public.googleRedirectUri || window.location.origin
  );

  // Check if we have tokens in localStorage
  const tokens = localStorage.getItem("youtube_tokens");
  if (tokens) {
    oauthClient.value.setCredentials(JSON.parse(tokens));
    isAuthenticated.value = true;
  }
});

const handleAuthClick = async () => {
  // Generate the URL for the consent page
  const authUrl = oauthClient.value.generateAuthUrl({
    access_type: "offline",
    scope: ["https://www.googleapis.com/auth/youtube.upload"],
    prompt: "consent",
  });

  // Redirect to the consent page
  window.location.href = authUrl;
};

// Handle the OAuth callback (this should be in a separate page)
const handleAuthCallback = async (code) => {
  try {
    const { tokens } = await oauthClient.value.getToken(code);
    oauthClient.value.setCredentials(tokens);
    localStorage.setItem("youtube_tokens", JSON.stringify(tokens));
    isAuthenticated.value = true;
  } catch (error) {
    console.error("Error authenticating:", error);
  }
};

const handleFileChange = (event) => {
  selectedFile.value = event.target.files[0];
};

const uploadVideo = async () => {
  if (!selectedFile.value) return;

  uploading.value = true;
  uploadProgress.value = 0;
  videoUrl.value = "";

  try {
    const youtube = google.youtube({
      version: "v3",
      auth: oauthClient.value,
    });

    const response = await youtube.videos.insert(
      {
        part: "snippet,status",
        requestBody: {
          snippet: {
            title: videoData.value.title,
            description: videoData.value.description,
          },
          status: {
            privacyStatus: videoData.value.privacyStatus,
          },
        },
        media: {
          body: selectedFile.value,
        },
      },
      {
        // For progress events
        onUploadProgress: (evt) => {
          if (evt.bytesRead) {
            uploadProgress.value = Math.round(
              (evt.bytesRead / evt.totalBytesRead) * 100
            );
          }
        },
      }
    );

    videoUrl.value = `https://youtu.be/${response.data.id}`;
    console.log("Video uploaded:", response.data);
  } catch (error) {
    console.error("Error uploading video:", error);
    // Handle token expiration
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("youtube_tokens");
      isAuthenticated.value = false;
    }
  } finally {
    uploading.value = false;
  }
};

// If this component is loaded with a code in the URL, handle the auth callback
if (process.client) {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get("code");
  if (code) {
    handleAuthCallback(code);
    // Remove the code from URL
    window.history.replaceState({}, document.title, window.location.pathname);
  }
}
</script>
