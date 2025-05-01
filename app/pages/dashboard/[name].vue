<template>
  <v-layout>
    <dashboardInstructors v-if="$route.params.name == 'instructor'" />
    <courses v-else-if="$route.params.name == 'courses'" />
    <DashboardCreateCourse v-else="$route.params.name == 'createCourse'" />
  </v-layout>
</template>
<script setup lang="ts">
import courses from "~/components/courses/courses.vue";
</script>
