<template>
  <v-navigation-drawer
    permanent
    class="bg-cyan-darken-2"
    location="left"
    height="100vh"
  >
    <v-list density="compact" nav>
      <v-list-item
        v-for="(item, index) in items"
        :key="index"
        link
        :title="item.title"
        :prepend-icon="item.icon"
        :to="item.to"
      />
    </v-list>
  </v-navigation-drawer>
</template>
<script setup lang="ts">
import { ref } from "vue";
const items = ref([
  {
    title: "Dashboard",
    icon: "mdi-view-dashboard",
    to: "/dashboard/instructor",
  },
  {
    title: "My Courses",
    icon: "mdi-book-open-variant",
    to: "/dashboard/courses",
  },
  {
    title: "Students",
    icon: "mdi-account-group",
    to: "/dashboard/students",
  },
  {
    title: "Assignments",
    icon: "mdi-clipboard-text",
    to: "/dashboard/assignments",
  },
  {
    title: "Create Course",
    icon: "mdi-plus-circle-outline",
    to: "/dashboard/createCourse",
  },

  {
    title: "Settings",
    icon: "mdi-cog",
    to: "/dashboard/settings",
  },
]);
</script>
