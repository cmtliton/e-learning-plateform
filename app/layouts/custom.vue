<template>
  <v-app class="bg-image">
    <LayoutAppBar />
    <LayoutAppDrawer />
    <v-main>
      <NuxtPage />
    </v-main>
    <AppFooter></AppFooter>
  </v-app>
</template>
<script setup lang="ts"></script>

<style scoped>
.bg-image {
  background-image: url("/assets/background-light.jpg");
  background-position: center;
  background-repeat: repeat-y repeat-x;
  background-size: 100%;
}
</style>
