<template>
  <v-fade-transition hide-on-leave>
    <v-row justify="center" align="baseline" class="py-16">
      <v-col cols="12" md="6">
        <v-card class="mx-auto rounded-lg" elevation="10" max-width="480px">
          <v-toolbar color="cyan-darken-3" density="comfortable">
            <v-card-title>Welcome Back!</v-card-title>
            <template v-slot:append>
              <v-btn
                icon="$close"
                variant="text"
                @click="() => navigateTo('/')"
              ></v-btn>
            </template>
          </v-toolbar>
          <v-divider></v-divider>

          <div class="ma-4">
            <UserSignInForm
              v-if="currentView === 'signIn'"
              @sign-in-submit="handleSignIn"
              @switch-to-sign-up="switchToSignUp"
              @sign-in-google="Login('google')"
              @sign-in-github="Login('github')"
              :loading_github="loading_github"
              :loading_google="loading_google"
            />
            <UserSignUpForm
              v-else
              @sign-up-submit="handleSignUp"
              @switch-to-sign-in="switchToSignIn"
              @sign-in-google="Login('google')"
              @sign-in-github="Login('github')"
              :loading_github="loading_github"
              :loading_google="loading_google"
            />
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-fade-transition>
</template>

<script setup lang="ts">
const emit = defineEmits(["sign-in-submit", "switch-to-sign-up"]);
useHead({
  title: "Login",
  meta: [{ name: "", content: "" }],
});
const currentView = ref("signIn");
const loading_github = ref(false);
const loading_google = ref(false);

const switchToSignIn = () => {
  currentView.value = "signIn";
};

const switchToSignUp = () => {
  currentView.value = "signUp";
};

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
  useAuth().login(provider);
};

const handleSignIn = async (formData: any) => {
  const queryParams =
    query.redirectTo !== undefined ? `?redirectTo=${query.redirectTo}` : "";
  const redirectTo = `${window.location.origin}/confirm${queryParams}`;
  const { error } = await supabase.auth.signInWithPassword({
    email: formData.email,
    password: formData.password,
  });
  if (error) {
    console.error(error);
    alert("Invalid credentials. Please try again." + error.message);
  } else {
    navigateTo(redirectTo, { replace: true });
  }
};

const handleSignUp = async (formData: any) => {
  const { email, password } = formData;
  const { error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });
  if (error) {
    alert("Error signing up: " + error.message);
  } else {
    alert("Check your email for the confirmation link.");
  }
};
</script>
