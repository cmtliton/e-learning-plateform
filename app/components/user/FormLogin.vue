<template>
  <v-form @submit.prevent="">
    <v-row dense no-gutters>
      <v-col cols="12">
        <v-text-field
          v-model="email"
          label="Account Email"
          type="email"
          required
          variant="outlined"
          density="compact"
          rounded
          :rules="[useEmailRules().required, useEmailRules().email]"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="password"
          label="Password"
          type="password"
          required
          variant="outlined"
          density="compact"
          :rules="[useEmailRules().required, useEmailRules().minLength(6)]"
          rounded
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-checkbox
          v-show="Sign === 'Sign Up'"
          v-model="termsAccepted"
          label="I agree to the Terms and Conditions"
          required
          class="mt-n3 mb-n6"
        ></v-checkbox>
      </v-col>
      <v-col cols="12">
        <v-btn
          :disabled="!form"
          :loading="loading"
          class="bg-primary text-none text-subtitle-1"
          size="large"
          type="submit"
          rounded
          block
          @click=""
          variant="text"
        >
          {{ Sign }}
        </v-btn>
      </v-col>
      <v-col cols="6" class="text-center my-2">
        <v-hover>
          <template v-slot:default="{ props, isHovering }">
            <v-btn
              v-bind="props"
              :class="
                isHovering
                  ? 'bg-indigo-darken-4 text-none text-white'
                  : 'text-none'
              "
              min-width="92"
              variant="outlined"
              rounded
              @click="login('google')"
              size="large"
              prepend-icon="mdi-google"
              :loading="loading_google"
            >
              Google
            </v-btn>
          </template>
        </v-hover>
      </v-col>
      <v-col cols="6" class="text-center my-2">
        <v-hover>
          <template v-slot:default="{ props, isHovering }">
            <v-btn
              v-bind="props"
              :class="
                isHovering
                  ? 'bg-indigo-darken-4 text-none text-white'
                  : 'text-none'
              "
              min-width="92"
              variant="outlined"
              size="large"
              rounded
              @click="login('github')"
              prepend-icon="mdi-github"
              :loading="loading_github"
            >
              Github
            </v-btn>
          </template>
        </v-hover>
      </v-col>
    </v-row>
  </v-form>
</template>
<script setup lang="ts">
import { ref } from "vue";

const form = ref(true);
const email = ref(null);
const password = ref(null);
const loading = ref(false);
const loading_github = ref(false);
const loading_google = ref(false);
const termsAccepted = ref("");

defineProps({
  Sign: {
    type: String,
    required: true,
  },
});

function onSubmit() {
  if (!form.value) return;
  loading.value = true;
  setTimeout(() => (loading.value = false), 2000);
}
function required(v: any) {
  return !!v || "Field is required";
}
const { title } = useCourse();
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

const login = async (provider: any) => {
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
