<template>
  <v-app class="bg-image">
    <AppBar :user="user ? user : {}" :items="items" />
    <AppDrawer :user="user ? user : {}" :items="items" />
    <v-main>
      <NuxtPage />
    </v-main>
    <AppFooter></AppFooter>
  </v-app>
</template>
<script setup lang="ts">
import AppBar from "../components/layout/AppBar.vue";
import AppDrawer from "../components/layout/AppDrawer.vue";
const user = useSupabaseUser();
const { auth } = useSupabaseClient();

const name = computed(() => user.value?.user_metadata.full_name);
const profile = computed(() =>
  user.value?.user_metadata.avatar_url !== undefined
    ? user.value?.user_metadata.avatar_url
    : "https://lh3.googleusercontent.com/a/ACg8ocIGyEMzmZQoA-rB038ib2nZi2McQxbilYvkLQ5upkUmwQ-o4k_H=s96-c"
);
const email = computed(() => user.value?.user_metadata.email);

const logout = async () => {
  const { error } = await auth.signOut();
  if (error) {
    console.error(error);
    return true;
  }
  await navigateTo("/");
};

onMounted(() => {
  console.log("Mounted", user.value);
});

const items = ref([
  {
    title: "Dashboard",
    icon: "mdi-view-dashboard",
    url: "/dashboard/instructor",
  },
  {
    title: "My Courses",
    icon: "mdi-book-open-variant",
    url: "/dashboard/courses",
  },
  {
    title: "Students",
    icon: "mdi-account-group",
    url: "/dashboard/students",
  },
  {
    title: "Assignments",
    icon: "mdi-clipboard-text",
    url: "/dashboard/assignments",
  },
  {
    title: "Create Course",
    icon: "mdi-plus-circle-outline",
    url: "/dashboard/createCourse",
  },

  {
    title: "Settings",
    icon: "mdi-cog",
    url: "/dashboard/settings",
  },
]);
</script>

<style scoped>
.bg-image {
  background-image: url("/assets/background-light.jpg");
  background-position: center;
  background-repeat: repeat-y repeat-x;
  background-size: 100%;
}
</style>
