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

          <div class="ma-4"><UsersFormLogin Sign="Sign In" /></div>

          <v-divider></v-divider>
          <v-card-actions class="bg-grey-lighten-3 text-grey-darken-1">
            <v-btn
              flat
              rounded
              class="text-indigo text-none"
              @click="$emit('switch-to-sign-up')"
              >Sign Up</v-btn
            >
            <v-spacer></v-spacer>
            <v-btn flat rounded class="text-indigo text-none"
              >Forgot your password?</v-btn
            >
          </v-card-actions>
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
</script>
