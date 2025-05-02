<template>
  <div>
    <!-- Button to trigger the dialog -->
    <v-btn
      @click="openDialog('signIn')"
      class="rounded-pill bg-green text-capitalize text-subtitle-1"
      width="90"
    >
      {{ currentView === "signIn" ? "Login" : "Sign Up" }}
    </v-btn>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-card class="mx-auto rounded-lg" elevation="10" max-width="480px">
        <v-toolbar color="cyan-darken-3" density="comfortable">
          <v-card-title>
            {{
              currentView === "signIn"
                ? "Welcome Back!"
                : "Let's Get You Signed Up.!"
            }}
          </v-card-title>
          <template v-slot:append>
            <v-btn icon="$close" variant="text" @click="closeDialog"></v-btn>
          </template>
        </v-toolbar>

        <v-divider></v-divider>

        <v-card-text class="pa-0">
          <!-- Conditionally render the forms -->
          <UserSignInForm
            v-if="currentView === 'signIn'"
            @sign-in-submit="handleSignIn"
            @switch-to-sign-up="switchToSignUp"
            @sign-in-google="Login('google')"
            @sign-in-github="Login('github')"
            :loading_github="loading_github"
            :loading_google="loading_google"
            :loading="loading"
          />
          <UserSignUpForm
            v-else
            @sign-up-submit="handleSignUp"
            @switch-to-sign-in="switchToSignIn"
            @sign-in-google="Login('google')"
            @sign-in-github="Login('github')"
            :loading_github="loading_github"
            :loading_google="loading_google"
            :loading="loading"
          />
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const supabase = useSupabaseClient();
const { query } = useRoute();
const user = useSupabaseUser();
// --- State ---
const dialog = ref(false); // Controls dialog visibility
const currentView = ref("signIn"); // 'signIn' or 'signUp'
const loading_github = ref(false);
const loading_google = ref(false);
const loading = ref(false);

// --- Methods ---
const openDialog = (view = "signIn") => {
  currentView.value = view;
  dialog.value = true;
};

const closeDialog = () => {
  dialog.value = false;
};

const switchToSignIn = () => {
  currentView.value = "signIn";
};

const switchToSignUp = () => {
  currentView.value = "signUp";
};

const handleSignIn = async (formData: any) => {
  loading.value = true;
  const queryParams =
    query.redirectTo !== undefined ? `?redirectTo=${query.redirectTo}` : "";
  const redirectTo = `${window.location.origin}/confirm${queryParams}`;
  const { error } = await supabase.auth.signInWithPassword({
    email: formData.email,
    password: formData.password,
  });
  if (error) {
    console.error(error);
    alert("Invalid credentials. Please try again." + error);
  } else {
    navigateTo(redirectTo, { replace: true });
    closeDialog();
  }

  loading.value = false;
};

const handleSignUp = async (formData: any) => {
  loading.value = true;
  const { email, password } = formData;
  const { error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });
  if (error) {
    alert("Error signing up: " + error.message);
  } else {
    alert("Check your email for the confirmation link.");
    closeDialog();
  }

  loading.value = false;
};

watchEffect(async () => {
  if (user.value) {
    await navigateTo(query.redirectTo as string, {
      replace: true,
    });
  }
});

const Login = async (provider: any) => {
  provider === "google"
    ? (loading_google.value = true)
    : (loading_github.value = true);
  useAuth().login(provider);
};
</script>

<style scoped></style>
