<template>
  <v-btn
    id="activator-target"
    width="90"
    class="rounded-pill bg-green text-none text-subtitle-1"
  >
    Login
  </v-btn>
  <v-dialog activator="#activator-target">
    <template v-slot:default="{ isActive }">
      <v-fade-transition hide-on-leave>
        <v-row justify="center">
          <v-col cols="12" md="6">
            <v-card class="mx-auto rounded-lg" elevation="10">
              <v-toolbar color="indigo-darken-3" density="comfortable">
                <v-card-title>Welcome Back!</v-card-title>
                <template v-slot:append>
                  <v-btn
                    icon="$close"
                    variant="text"
                    @click="isActive.value = false"
                  ></v-btn>
                </template>
              </v-toolbar>
              <v-divider></v-divider>

              <v-row dense no-gutters>
                <v-col cols="12">
                  <v-card-text>
                    <v-text-field
                      v-model="email"
                      :readonly="loading"
                      :rules="[required]"
                      class="mb-0"
                      placeholder="Account Email"
                      clearable
                      rounded
                      variant="outlined"
                      density="compact"
                    ></v-text-field>

                    <v-text-field
                      v-model="password"
                      :readonly="loading"
                      :rules="[required]"
                      placeholder="Enter your password"
                      clearable
                      variant="outlined"
                      rounded
                      density="compact"
                    ></v-text-field>
                    <v-btn
                      :disabled="!form"
                      :loading="loading"
                      class="bg-primary text-none text-subtitle-1"
                      size="large"
                      type="submit"
                      rounded
                      block
                      @click="isActive.value = true"
                    >
                      Sign In
                    </v-btn>
                  </v-card-text>
                </v-col>
                <v-col cols="6" class="text-center mb-4">
                  <v-hover>
                    <template v-slot:default="{props, isHovering}">
                      <v-btn
                        v-bind="props"
                        :class="isHovering ? 'bg-indigo-darken-4 text-none text-white' : 'text-none' "
                        min-width="92"
                        variant="outlined"
                        rounded
                        @click="dialog = false"
                        size="large"
                        prepend-icon="mdi-google"
                      >
                        Google
                      </v-btn>
                    </template>
                  </v-hover>
                </v-col>
                <v-col cols="6" class="text-center mb-4">
                  <v-hover>
                    <template v-slot:default="{props, isHovering}">
                      <v-btn
                        v-bind="props"
                        :class="isHovering ? 'bg-indigo-darken-4 text-none text-white' : 'text-none' "
                        min-width="92"
                        variant="outlined"
                        size="large"
                        rounded
                        @click="dialog = false"
                        prepend-icon="mdi-github"
                      >
                        Github
                      </v-btn>
                    </template>
                  </v-hover>
                </v-col>
              </v-row>

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
  </v-dialog>
</template>

<script setup>
  import { ref } from 'vue'

  const form = ref(true)
  const email = ref(null)
  const password = ref(null)
  const loading = ref(false)
  const dialog = ref(false)

  function onSubmit() {
    if (!form.value) return
    loading.value = true
    setTimeout(() => (loading.value = false), 2000)
  }
  function required(v) {
    return !!v || 'Field is required'
  }
</script>
