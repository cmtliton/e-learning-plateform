<!-- pages/register.vue -->
<template>
  <v-container class="fill-height">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card class="elevation-12 pa-6">
          <v-card-title class="text-h5 mb-4"> Create an Account </v-card-title>

          <v-form ref="form" v-model="isFormValid" @submit.prevent="register">
            <v-text-field
              v-model="email"
              label="Email"
              prepend-icon="mdi-email"
              type="email"
              :rules="emailRules"
              required
            ></v-text-field>

            <v-text-field
              v-model="password"
              label="Password"
              prepend-icon="mdi-lock"
              :type="showPassword ? 'text' : 'password'"
              :rules="passwordRules"
              :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
              @click:append-inner="showPassword = !showPassword"
              required
            ></v-text-field>

            <v-text-field
              v-model="confirmPassword"
              label="Confirm Password"
              prepend-icon="mdi-lock-check"
              :type="showConfirmPassword ? 'text' : 'password'"
              :rules="confirmPasswordRules"
              :append-inner-icon="
                showConfirmPassword ? 'mdi-eye-off' : 'mdi-eye'
              "
              @click:append-inner="showConfirmPassword = !showConfirmPassword"
              required
            ></v-text-field>

            <v-divider class="my-4"></v-divider>

            <v-text-field
              v-model="fullName"
              label="Full Name"
              prepend-icon="mdi-account"
              :rules="nameRules"
              required
            ></v-text-field>

            <v-checkbox
              v-model="termsAccepted"
              :rules="termsRules"
              label="I agree to the Terms and Conditions"
              required
            ></v-checkbox>

            <div class="d-flex flex-column gap-4 mt-4">
              <v-btn
                type="submit"
                color="primary"
                block
                :disabled="!isFormValid || loading"
                :loading="loading"
              >
                Register
              </v-btn>

              <div class="text-center">
                Already have an account?
                <NuxtLink to="/login" class="text-decoration-none"
                  >Login</NuxtLink
                >
              </div>
            </div>
          </v-form>

          <v-snackbar
            v-model="snackbar.show"
            :color="snackbar.color"
            :timeout="3000"
            location="top"
          >
            {{ snackbar.text }}
            <template v-slot:actions>
              <v-btn variant="text" @click="snackbar.show = false">
                Close
              </v-btn>
            </template>
          </v-snackbar>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const supabase = useSupabaseClient();

// Form data
const form = ref(null);
const isFormValid = ref(false);
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const fullName = ref("");
const termsAccepted = ref(false);
const showPassword = ref(false);
const showConfirmPassword = ref(false);
const loading = ref(false);

// Validation rules
const emailRules = [
  (v) => !!v || "Email is required",
  (v) => /.+@.+\..+/.test(v) || "Email must be valid",
];

const passwordRules = [
  (v) => !!v || "Password is required",
  (v) => v.length >= 8 || "Password must be at least 8 characters",
  (v) =>
    /[A-Z]/.test(v) || "Password must contain at least one uppercase letter",
  (v) => /[0-9]/.test(v) || "Password must contain at least one number",
];

const confirmPasswordRules = [
  (v) => !!v || "Please confirm your password",
  (v) => v === password.value || "Passwords do not match",
];

const nameRules = [
  (v) => !!v || "Full name is required",
  (v) => v.length >= 3 || "Name must be at least 3 characters",
];

const termsRules = [(v) => !!v || "You must agree to the terms and conditions"];

// Snackbar for notifications
const snackbar = ref({
  show: false,
  text: "",
  color: "success",
});

// Registration function
async function register() {
  if (!isFormValid.value) {
    form.value.validate();
    return;
  }

  loading.value = true;

  try {
    // Register user with Supabase
    const { data, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
      options: {
        data: {
          full_name: fullName.value,
        },
      },
    });

    if (error) throw error;

    // Insert additional user data in profiles table
    if (data.user) {
      const { error: profileError } = await supabase.from("profiles").insert({
        user_id: data.user.id,
        full_name: fullName.value,
        updated_at: new Date(),
      });

      if (profileError) throw profileError;
    }

    snackbar.value = {
      show: true,
      text: "Registration successful! Please check your email to verify your account.",
      color: "success",
    };

    // Reset form
    email.value = "";
    password.value = "";
    confirmPassword.value = "";
    fullName.value = "";
    termsAccepted.value = false;

    // Redirect to login after a delay
    setTimeout(() => {
      router.push("/login");
    }, 3000);
  } catch (error) {
    console.error("Registration error:", error);
    snackbar.value = {
      show: true,
      text: error.message || "Registration failed. Please try again.",
      color: "error",
    };
  } finally {
    loading.value = false;
  }
}
</script>
