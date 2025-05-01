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
          <SignInForm
            v-if="currentView === 'signIn'"
            @sign-in-submit="handleSignIn"
            @switch-to-sign-up="switchToSignUp"
          />
          <SignUpForm
            v-else
            @sign-up-submit="handleSignUp"
            @switch-to-sign-in="switchToSignIn"
            @sign-in-google="Login('google')"
          />
        </v-card-text>

        <!-- Actions can be placed here OR within the forms as done above -->
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SignInForm from "./SignInForm.vue"; // Adjust path if needed
import SignUpForm from "./SignUpForm.vue"; // Adjust path if needed

// --- State ---
const dialog = ref(false); // Controls dialog visibility
const currentView = ref("signIn"); // 'signIn' or 'signUp'
const loading_github = ref(false);
const loading_google = ref(false);

// --- Methods ---
const openDialog = (view = "signIn") => {
  currentView.value = view;
  dialog.value = true;
};

const closeDialog = () => {
  dialog.value = false;
  // Optional: Reset view to default when closing
  // setTimeout(() => { currentView.value = 'signIn'; }, 300); // Delay if needed for transition
};

const switchToSignIn = () => {
  currentView.value = "signIn";
};

const switchToSignUp = () => {
  currentView.value = "signUp";
};

const handleSignIn = (formData: any) => {
  console.log("Handling Sign In in AuthDialog:", formData);
  // Perform actual sign-in logic (API call, etc.)
  // On success:
  closeDialog();
  // On failure:
  // Show error message (potentially within the SignInForm)
};

const handleSignUp = (formData: any) => {
  console.log("Handling Sign Up in AuthDialog:", formData);
  // Perform actual sign-up logic (API call, etc.)
  // On success:
  // Maybe switch to sign in view or show success message
  // switchToSignIn();
  // Or just close
  closeDialog();
  // On failure:
  // Show error message (potentially within the SignUpForm)
};

// If actions were in this component:
// const submitForm = () => {
//   // This would require refs to the child forms to trigger their submit methods
//   // Or have the child forms emit data on every change (less ideal)
//   // It's generally better to have the submit buttons within the forms themselves.
//   console.log('Submit logic would go here if actions were in parent');
// }

const supabase = useSupabaseClient();
const { query } = useRoute();
const user = useSupabaseUser();

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
  const queryParams =
    query.redirectTo !== undefined ? `?redirectTo=${query.redirectTo}` : "";
  const redirectTo = `${window.location.origin}/confirm${queryParams}`;
  const { error } = await supabase.auth.signInWithOAuth({
    provider: provider,
    options: { redirectTo },
  });
  if (error) {
    console.error(error);
  }
};
</script>

<style scoped>
/* Optional: Add styles for the dialog trigger button or dialog itself */
</style>
