<template>
  <v-layout>
    <dashboardInstructors v-if="$route.params.name == 'instructor'" />
    <courses v-else-if="$route.params.name == 'courses'" />
    <DashboardStudents v-else-if="$route.params.name == 'students'" />
    <DashboardAssignments v-else-if="$route.params.name == 'assignments'" />
    <DashboardSettings v-else-if="$route.params.name == 'settings'" />
    <DashboardCreateCourse v-else="$route.params.name == 'createcourse'" />
  </v-layout>
</template>
<script setup lang="ts">
import courses from "~/components/courses/courses.vue";
</script>
