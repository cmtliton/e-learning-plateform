<template>
  <v-navigation-drawer
    v-model="navDrawer"
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
    <v-list>
      <v-list-item align="center">
        <NuxtLink
          :to="item.url"
          class="text-decoration-none text-white"
          :key="item.id"
          :value="item.id"
          v-for="(item, i) in itemsPage"
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

<script setup lang="ts">
const { navDrawer } = useDrawer();
const { user, logout, profile, email, name } = useAuth();
const { itemsPage } = useMenus();
</script>
