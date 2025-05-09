<template>
  <v-navigation-drawer
    v-model="navDrawer"
    class="bg-cyan-darken-2"
    location="left"
    :permanent="!$vuetify.display.smAndDown"
    :temporary="$vuetify.display.smAndDown"
    width="300"
    style="max-height: 685px; overflow-y: auto"
    app
    flat
  >
    <v-list density="compact" nav>
      <v-list-item
        v-for="(item, index) in items"
        :key="index"
        link
        :title="item.title"
        :prepend-icon="item.icon"
        :to="item.url"
      />
    </v-list>
  </v-navigation-drawer>
</template>
<script setup>
const { navDrawer } = useDrawer();
const { logout } = useAuth();
const { profile, email, name } = useAuth();

defineProps({
  items: {
    type: Array,
  },
  user: {
    type: Object,
  },
});
</script>
