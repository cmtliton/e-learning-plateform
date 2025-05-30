<template>
  <v-card v-if="!$vuetify.display.mdAndDown">
    <v-navigation-drawer
      v-model="drawer"
      class="bg-cyan-darken-2"
      location="left"
      permanent
      width="250"
      style="max-height: 685px; overflow-y: auto"
      app
      flat
    >
      <v-list density="compact" nav>
        <v-list-item
          v-for="(item, index) in itemsDashboard"
          :key="index"
          link
          :title="item.title"
          :prepend-icon="item.icon"
          :to="item.url"
        />
      </v-list>
    </v-navigation-drawer>
  </v-card>
  <v-navigation-drawer
    v-model="navDrawer"
    class="bg-cyan-darken-2"
    location="left"
    temporary
    width="250"
    style="max-height: 685px; overflow-y: auto"
    app
    flat
    v-else
  >
    <v-list density="compact" nav>
      <v-list-item
        v-for="(item, index) in itemsDashboard"
        :key="index"
        link
        :title="item.title"
        :prepend-icon="item.icon"
        :to="item.url"
      />
    </v-list>
  </v-navigation-drawer>
</template>
<script setup lang="ts">
const { navDrawer, drawer } = useDrawer();
const { itemsDashboard } = useMenus();
</script>
