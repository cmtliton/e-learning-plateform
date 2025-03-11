<template>
  <v-layout>
    <v-row no-gutters dense>
      <v-col cols="12" sm="9">
        <NuxtErrorBoundary>
          <NuxtPage />
          <template #error="{error}">
            <p class="text-center text-h6 my-2 text-error">
              Oh no, something went wrong with the lesson!<br/>
              <code>{{ error }}</code>
            </p>
            <p class="text-center">
              <v-btn color="error" class="text-none rounded-xl" @click="resetError(error)">Reset</v-btn>
            </p>
          </template>
        </NuxtErrorBoundary>
      </v-col>
      <v-col cols="12" sm="3">
        <p class="text-center text-body-1 my-2 text-white">
          Course {{ useCourse().title }}
        </p>
        <PlayList :chapters="chapters"></PlayList>
      </v-col>
    </v-row>
  </v-layout>
</template>
<script setup>
import { ref } from "vue";
const { chapters } = useCourse();

const resetError = async (error) => {
  await navigateTo(
    '/course/chapter/1-chapter-1/lesson/1-introduction-to-typescript-with-vue-js-3'
  );
  error.value = null;
};
useHead({
    title: 'Course',
    meta: [
        {name: '', content: ''},
    ]
})
</script>
