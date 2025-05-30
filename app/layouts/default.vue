<template>
  <v-app class="bg-image">
    <LayoutAppBar />
    <LayoutPageAppDrawer />
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
  background-repeat: repeat-x repeat-y;
  background-size: 100%;
}
</style>
