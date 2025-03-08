<template>
      <v-fade-transition hide-on-leave>
        <v-row justify="center" align="baseline" class="py-16">
          <v-col cols="12" md="6">
            <v-card class="mx-auto rounded-lg" elevation="10">
              <v-toolbar color="cyan-darken-3" density="comfortable">
                <v-card-title>Welcome Back!</v-card-title>
                <template v-slot:append>
                  <v-btn
                    icon="$close"
                    variant="text"
                    @click="() =>
                    navigateTo('/')
                    "
                  ></v-btn>
                </template>
              </v-toolbar>
              <v-divider></v-divider>

             <FormLogin Sign="Sign In" />

              <v-divider></v-divider>
              <v-card-actions class="bg-grey-lighten-3 text-grey-darken-1">
                <v-btn flat rounded class="text-indigo text-none"
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

</script>
