<template>
  <v-container class="pa-4" fluid>
    <v-card class="mx-auto">
      <v-card-title>Upload Image</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="handleUpload">
          <v-row dense class="pt-2 mx-auto">
            <v-col cols="12" sm="12">
              <v-img
                lazy-src="https://picsum.photos/id/11/100/60"
                :src="preview"
                height="245"
                cover
                class="mb-5 rounded"
              />
            </v-col>
            <v-col cols="12" sm="12">
              <v-file-input
                v-model="file"
                accept="image/*"
                show-size
                label="Select Image"
                append-icon="mdi-camera"
                class="mb-5"
                @change="previewImage"
                variant="outlined"
                density="compact"
              />
            </v-col>
            <v-col cols="12" sm="12">
              <v-btn
                :loading="loading"
                :disabled="loading || !file"
                @click="handleUpload"
                color="primary"
                block
              >
                Upload Image
              </v-btn>
            </v-col>
            <v-col cols="12" sm="12" v-if="message">
              <v-alert :type="loading ? 'info' : 'success'" class="mt-4">
                {{ message }}
              </v-alert>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const file = ref(null);
const preview = ref("");
const loading = ref(false);
const message = ref("");

const previewImage = () => {
  if (file.value) {
    preview.value = URL.createObjectURL(file.value);
  }
};

const handleUpload = async () => {
  if (!file.value) return;

  loading.value = true;
  message.value = "";

  const formData = new FormData();
  formData.append("image", file.value);

  try {
    const res = await fetch("/api/image-upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (res.ok) {
      message.value = "✅ Image uploaded successfully!";
    } else {
      throw new Error(data.error || "Upload failed");
    }
  } catch (err) {
    message.value = "❌ " + err.message;
  } finally {
    loading.value = false;
  }
};
</script>
