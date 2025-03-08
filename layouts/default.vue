<template>
  <v-app class="bg-image">
    <NavBar/>
    <v-main>
      <NuxtPage/>
    </v-main>
    <AppFooter></AppFooter>
  </v-app>
</template>

<style scoped>
.bg-image{
background-image: url("/assets/1.jpg");
background-repeat: repeat-x repeat-y;
background-size: 100%;
}
</style>