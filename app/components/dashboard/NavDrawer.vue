<template>
  <v-card elevation="0" class="bg-cyan-darken-2">
    <v-navigation-drawer
      v-model="navDrawer"
      class="bg-cyan-darken-2"
      location="left"
      :permanent="!$vuetify.display.smAndDown"
      :temporary="$vuetify.display.smAndDown"
      app
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
  </v-card>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useDrawer } from "~/composables/useDrawer";
const { navDrawer } = useDrawer();
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
