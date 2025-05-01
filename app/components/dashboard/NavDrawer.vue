<template>
  <v-card min-height="550" max-width="250" flat>
    <v-navigation-drawer
      permanent
      class="border bg-cyan-darken-2"
      location="left"
    >
      <v-list density="compact" nav>
        <v-list-item
          link
          title="Dashboard"
          prepend-icon="mdi-view-dashboard"
          to="/dashboard/instructor"
        />
        <v-list-item
          link
          title="Courses"
          prepend-icon="mdi-book-open-variant"
          to="/dashboard/courses"
        />
        <v-list-item link title="Students" prepend-icon="mdi-account-group" />
        <v-list-item
          link
          title="Assignments"
          prepend-icon="mdi-clipboard-text"
        />
        <v-list-item
          link
          title="Settings"
          prepend-icon="mdi-cog"
          to="/dashboard/3"
        />
        <v-list-item
          link
          title="Create Course"
          prepend-icon="mdi-plus-circle-outline"
          to="/dashboard/createCourse"
        />
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>
<script setup lang="ts">
import { ref } from "vue";
const items = ref([
  {
    id: 1,
    name: "Courses",
    title: "Courses",
    url: "/dashboard/coursesCourses",
    description: "",
    src: "mdi-account-outline",
    created_at: "",
    updated_at: "",
    created_by: "",
  },
  {
    id: 2,
    name: "Students",
    title: "Students",
    url: "/dashboard/1",
    description: "",
    src: "mdi-account-outline",
    created_at: "",
    updated_at: "",
    created_by: "",
  },
  {
    id: 3,
    name: "Assignments",
    title: "Assignments",
    url: "/dashboard/2",
    description: "",
    src: "mdi-account-outline",
    created_at: "",
    updated_at: "",
    created_by: "",
  },
  {
    id: 4,
    name: "Settings",
    title: "Settings",
    url: "/dashboard/3",
    description: "",
    src: "mdi-account-outline",
    created_at: "",
    updated_at: "",
    created_by: "",
  },
]);
</script>
