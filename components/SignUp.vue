<template>
  <v-dialog activator="parent">
    <template v-slot:default="{ isActive }">
      <v-fade-transition hide-on-leave>
        <v-row justify="center" align="top">
          <v-col cols="12" md="6">
            <v-card class="mx-auto rounded-lg" elevation="10" max-width="500px">
              <v-toolbar color="cyan-darken-4" density="comfortable">
                <v-card-title>Let's Get You Signed Up.!</v-card-title>
                <template v-slot:append>
                  <v-btn
                    icon="$close"
                    variant="text"
                    @click="isActive.value = false"
                  ></v-btn>
                </template>
              </v-toolbar>
              <v-divider></v-divider>
              <v-card
                    color="cyan-darken-3"
                    variant="outlined"
                    class="mx-8 my-6 rounded-lg border-10"
                  >
                    <v-list>
                      <v-list-item>
                        <v-list-item-title>
                          Benefits for creating an account
                          include:</v-list-item-title
                        >
                        <v-list-item-subtitle>
                          <v-icon icon="mdi-check"></v-icon>
                          The ability to track your progress as you complete
                          lessons</v-list-item-subtitle
                        >
                        <v-list-item-subtitle>
                          <v-icon icon="mdi-check"></v-icon>
                          Access free lessons in every
                          course</v-list-item-subtitle
                        >
                        <v-list-item-subtitle
                          ><v-icon icon="mdi-check"></v-icon> Access to download
                          our Vue.js Cheat Sheets</v-list-item-subtitle
                        >
                      </v-list-item>
                    </v-list>
                  </v-card>

                  <!-- ********************Form Declare ********************-->
             <FormLogin Sign="Sign Up"/>

              <v-divider></v-divider>
              <v-card-actions class="bg-grey-lighten-3 text-grey-darken-1">
                <v-btn flat rounded class="text-indigo text-none"
                  >I already have an account</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-fade-transition>
    </template>
  </v-dialog>
</template>

<script setup>
import { ref } from "vue";

const form = ref(true);
const email = ref(null);
const password = ref(null);
const loading_github = ref(false);
const loading_google = ref(false);
const dialog = ref(false);

function onSubmit() {
  if (!form.value) return;
  loading.value = true;
  setTimeout(() => (loading.value = false), 2000);
}
function required(v) {
  return !!v || "Field is required";
}
</script>
