<template>
  <v-layout class="py-2">
    <v-row justify="center" align="center" class="w-full h-full">
      <v-col cols="12" md="10">
        <v-card class="pa-4">
          <v-card-title class="text-h5">Settings-{{ navDrawer }}</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <p>List of settings for your courses.</p>
            <!-- Add your assignment list or table here -->
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-layout>
</template>
<script setup lang="ts">
const { navDrawer } = useDrawer();
</script>
