<template>
  <v-row dense no-gutters class="mx-6">
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
          @click=""
          variant="text"
        >
          {{ Sign }}
        </v-btn>
      </v-card-text>
    </v-col>
    <v-col cols="6" class="text-center mb-4">
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
          >
            Google
          </v-btn>
        </template>
      </v-hover>
    </v-col>
    <v-col cols="6" class="text-center mb-4">
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
          >
            Github
          </v-btn>
        </template>
      </v-hover>
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
import { ref } from "vue";

const form = ref(true);
const email = ref(null);
const password = ref(null);
const loading = ref(false);

defineProps({
  Sign: {
    type: String,
    required: true,
  }
})

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
