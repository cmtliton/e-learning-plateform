<template>
  <v-layout>
    <v-row dense no-gutters>
      <v-col cols="12" md="2">
        <dashboardNavDrawer />
      </v-col>
      <v-col cols="12" md="10" align="center">
        <NuxtPage />
      </v-col>
    </v-row>
  </v-layout>
</template>
<script setup>
useHead({
  title: "Dashboard",
  meta: [{ name: "", content: "" }],
});
</script>
