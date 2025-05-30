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
          @click.stop="navDrawer = !navDrawer"
          v-if="!navDrawer"
        ></v-app-bar-nav-icon>
        <v-btn
          v-if="navDrawer"
          icon="$close"
          variant="text"
          @click.stop="navDrawer = !navDrawer"
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
        <UserAuthDialog />
      </v-tab>
    </v-tabs>
  </v-app-bar>
</template>
<script setup lang="ts">
import UserCard from "../user/UserCard.vue";
const { navDrawer } = useDrawer();
const tab = ref(null);
const { itemsPage } = useMenus();
const items = itemsPage;
const { user } = useAuth();
</script>
