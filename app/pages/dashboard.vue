<template>
  <v-container min-height="100vh" align-center justify-center>
    <v-row dense no-gutters>
      <v-col cols="12" md="12" align="center">
        <NuxtPage />
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
definePageMeta({
  layout: "custom",
});
useHead({
  title: "Dashboard",
  meta: [{ name: "", content: "" }],
});
</script>
