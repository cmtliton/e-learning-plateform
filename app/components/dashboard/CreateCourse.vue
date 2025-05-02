<template>
  <v-layout fluid>
    <v-card class="mx-auto">
      <v-card-title class="text-h6 bg-cyan-darken-2">
        {{ editing ? "Edit Course" : "Create New Course" }}
      </v-card-title>
      <v-card-text>
        <v-row dense>
          <v-col cols="12" sm="6">
            <CoursesCreateCourseInfo />
          </v-col>
          <v-col cols="12" sm="6">
            <CoursesImageUploader />
          </v-col>
          <v-col cols="12">
            <CoursesCreateCourseContents />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-layout>
</template>

<script setup lang="ts">
import { ref } from "vue";
const editing = ref(false); // Set to true if editing an existing course
</script>

<style scoped>
.v-card-title {
  color: white;
}
</style>
