<template>
  <v-container>
    <v-form v-model="form" @submit.prevent="submitSignIn">
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
            Sign In
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
                @click="$emit('sign-in-github')"
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
    <v-row
      justify="space-between"
      align="center"
      class="mt-2 bg-grey-lighten-3 text-grey-darken-1"
      dense
    >
      <v-col cols="6">
        <v-btn
          variant="text"
          size="large"
          flat
          rounded
          class="text-indigo text-none"
          block
          @click="$emit('switch-to-sign-up')"
        >
          Sign Up
        </v-btn>
      </v-col>
      <v-col cols="6">
        <v-btn
          variant="text"
          size="large"
          flat
          rounded
          class="text-indigo text-none"
          block
          @click="$emit('switch-to-sign-up')"
        >
          Forgot Password?
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

// --- Emits ---
// Define the events this component can emit
defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
  loading_google: {
    type: Boolean,
    default: false,
  },
  loading_github: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits([
  "sign-in-submit",
  "switch-to-sign-up",
  "sign-in-google",
  "sign-in-github",
]);

// --- State ---
const email = ref("");
const password = ref("");
const form = ref(true); // Form validation state

// --- Methods ---
const submitSignIn = () => {
  // Basic validation check (you might use v-form's validation state)
  if (
    email.value &&
    password.value &&
    useEmailRules().email(email.value) === true
  ) {
    emit("sign-in-submit", { email: email.value, password: password.value });
  } else {
    console.log("Sign In form invalid");
    // Optionally show an error message
  }
};
</script>

<style scoped>
/* Add any specific styles if needed */
</style>
