<template>
<v-layout>
  <v-row no-gutters dense>
  <v-col cols="12" sm="9">
        <NuxtPage/>
  </v-col>
  <v-col cols="12" sm="3">
    <p class="text-center text-body-1 my-2">Course {{ useCourse().title }}</p>
    <PlayList :chapters="chapters"></PlayList>
  </v-col>
</v-row>
</v-layout>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const { chapters } = useCourse();
</script>
