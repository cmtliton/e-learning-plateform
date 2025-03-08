<template>
    <v-navigation-drawer v-model="drawer">
      <!-- AppDrawerList.vue -->
      <v-list density="compact" item-props :items="items" nav />
      <!-- AppDrawerList.vue -->
  
      <template #append>
        <v-list-item
          class="ma-2"
          link
          nav
          prepend-icon="mdi-cog-outline"
          title="Settings"
        />
      </template>
    </v-navigation-drawer>
  </template>
  <script setup>
    import { ref } from 'vue'
  
    const drawer = ref(false)
  
    const items = ref([])
  </script>
  