<template>
  <v-container>
    <v-form @submit.prevent="submitSignUp" v-model="form">
      <v-row dense no-gutters>
        <v-col cols="12">
          <v-list border="sm" rounded="lg" class="mb-2">
            <v-list-item>
              <v-list-item-title>
                Benefits for creating an account include:</v-list-item-title
              >
              <v-list-item-subtitle>
                <v-icon icon="mdi-check"></v-icon>
                The ability to track your progress as you complete
                lessons</v-list-item-subtitle
              >
              <v-list-item-subtitle>
                <v-icon icon="mdi-check"></v-icon>
                Access free lessons in every course</v-list-item-subtitle
              >
              <v-list-item-subtitle
                ><v-icon icon="mdi-check"></v-icon> Access to download our
                Vue.js Cheat Sheets</v-list-item-subtitle
              >
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>

      <v-row dense no-gutters>
        <v-col cols="12">
          <v-text-field
            v-model="email"
            label="Account Email"
            type="email"
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
            variant="outlined"
            density="compact"
            :rules="[useEmailRules().required, useEmailRules().minLength(6)]"
            rounded
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-checkbox
            v-model="termsAccepted"
            label="I agree to the Terms and Conditions"
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
            variant="text"
          >
            Sign Up
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
                @click="$emit('sign-in-google')"
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
      <v-row justify="space-between" align="center" class="mt-2">
        <v-col cols="12">
          <v-btn
            variant="text"
            size="large"
            flat
            rounded
            class="text-indigo text-none"
            block
            @click="$emit('switch-to-sign-in')"
          >
            Already have an account? Sign In
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script setup>
import { ref, computed } from "vue";

// --- Emits ---
const emit = defineEmits([
  "sign-up-submit",
  "switch-to-sign-in",
  "sign-in-google",
]);

// --- State ---
const email = ref("");
const password = ref("");
const loading = ref(false);
const loading_github = ref(false);
const loading_google = ref(false);
const form = ref(true);

// --- Methods ---
const submitSignUp = () => {
  // Basic validation check (you might use v-form's validation state)
  if (
    email.value &&
    password.value &&
    useEmailRules().email(email.value) === true &&
    useEmailRules().minLength(6)(password.value) === true
  ) {
    console.log("Sign Up Submitted:", {
      email: email.value,
      password: "***",
    });
    emit("sign-up-submit", {
      email: email.value,
      password: password.value,
    });
    // Optionally reset fields or close dialog via parent
  } else {
    console.log("Sign Up form invalid");
    // Optionally show error message
  }
};
</script>

<style scoped>
/* Add any specific styles if needed */
</style>
