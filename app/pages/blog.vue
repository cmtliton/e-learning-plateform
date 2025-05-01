<template>
  <v-layout>
    <CourseCard />
  </v-layout>
</template>
<script setup lang="ts">
import { ref } from "vue";
const isComplete = ref(false);

const toggleComplete = () => {
  return (isComplete.value = !isComplete.value);
};
useHead({
  title: "Blog",
});
</script>
