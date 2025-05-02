<template>
  <v-app-bar color="cyan-darken-4" flat density="compact" class="border-b-thin">
    <template v-slot:prepend>
      <NuxtLink to="/" class="mt-2 text-decoration-none ps-1">
        <img width="55" height="40" src="~/assets/logo_new.png" />
      </NuxtLink>
    </template>

    <v-app-bar-title
      class="text-wheet ml-1 mt-0 cursor-pointer"
      style="
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        font-size: 35px;
      "
    >
      <NuxtLink to="/" class="mt-2 text-decoration-none text-white">
        AssisThem
      </NuxtLink>
    </v-app-bar-title>
    <template #append v-if="user">
      <UserCard />
    </template>

    <!-- ********************* Mobile Devices Tab *********************** -->
    <template v-if="$vuetify.display.mdAndDown" #append>
      <div class="hidden-md-and-up mr-3">
        <v-app-bar-nav-icon
          variant="text"
          @click.stop="drawer = !drawer"
          v-if="!drawer"
        ></v-app-bar-nav-icon>
        <v-btn
          v-if="drawer"
          icon="$close"
          variant="text"
          @click.stop="drawer = !drawer"
        ></v-btn>
      </div>
    </template>

    <!-- ********************* Large Devices Tab *********************** -->
    <v-tabs
      v-model="tab"
      color="white"
      align-tabs="end"
      v-if="$vuetify.display.smAndUp"
    >
      <v-tab
        class="text-none text-body-1"
        :value="index"
        v-for="(item, index) in items"
        :key="index"
        :to="item.url"
      >
        {{ item.title }}
      </v-tab>
      <v-spacer />
      <v-tab v-if="!user">
        <userAuthDialog />
      </v-tab>
    </v-tabs>
  </v-app-bar>

  <!-- ********************* Large Devices Tab End*********************** -->

  <!-- ************Navigation Drawer/Side Bar for uses small devices  ****************** -->

  <v-navigation-drawer
    v-model="drawer"
    location="right"
    width="300"
    temporary
    class="bg-cyan-darken-3 border"
    expand-on-hover
  >
    <v-list v-if="user">
      <v-list-item :prepend-avatar="profile" :title="name" :subtitle="email">
      </v-list-item>
    </v-list>

    <v-divider></v-divider>
    <v-list v-model:opened="open">
      <v-list-item align="center">
        <NuxtLink
          :to="item.url"
          class="text-decoration-none text-white"
          :key="item.id"
          :value="item.id"
          v-for="(item, i) in items"
        >
          <v-list-item-title class="py-2"> {{ item.title }}</v-list-item-title>
          <v-divider></v-divider>
        </NuxtLink>
        <v-list-item-title class="py-2" v-if="!user">
          <UserAuthDialog />
        </v-list-item-title>
        <v-list-item-title class="py-2" v-if="user">
          <v-btn
            prepend-icon="mdi-logout"
            text="Logout"
            block
            rounded="xl"
            variant="outlined"
            class="text-none"
            @click="logout"
          ></v-btn>
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script setup>
import { ref } from "vue";
const tab = ref(null);
const drawer = ref(false);
const open = ref([]);
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

const items = [
  {
    id: 1,
    name: "Courses",
    title: "Courses",
    url: "/",
    description: "",
    src: "mdi-account-outline",
    created_at: "",
    updated_at: "",
    created_by: "",
    updated_by: "",
    menus: [],
  },
  {
    id: 2,
    name: "Learning Paths",
    title: "Learning Paths",
    url: "/learning-path",
    description: "",
    src: "mdi-account-outline",
    created_at: "",
    updated_at: "",
    created_by: "",
    updated_by: "",
    menus: [],
  },
  {
    id: 3,
    name: "Blog",
    title: "Blog",
    url: "/blog",
    description: "",
    src: "mdi-account-outline",
    created_at: "",
    updated_at: "",
    created_by: "",
    updated_by: "",
    menus: [],
  },
  {
    id: 4,
    name: "Conferences",
    title: "Conferences",
    url: "/conferences",
    description: "",
    src: "mdi-account-outline",
    created_at: "",
    updated_at: "",
    created_by: "",
    updated_by: "",
    menus: [],
  },
  {
    id: 5,
    name: "Pricing",
    title: "Pricing",
    url: "/pricing",
    description: "",
    src: "mdi-account-outline",
    created_at: "",
    updated_at: "",
    created_by: "",
    updated_by: "",
    menus: [],
  },
];
</script>
