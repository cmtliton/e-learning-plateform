<template>
  <v-btn class="text-none me-2" height="48" icon slim>
    <v-avatar :image="profile" size="32" v-if="user" />

    <v-menu activator="parent">
      <v-list density="compact" nav>
        <v-list-item
          append-icon="mdi-account-outline"
          link
          :title="name ? name : 'Unnamed'"
        />

        <v-list-item
          append-icon="mdi-logout"
          link
          title="Logout"
          @click="logout"
        />
      </v-list>
    </v-menu>
  </v-btn>
</template>
<script setup lang="ts">
const { user, profile, name, logout } = useAuth();
</script>
