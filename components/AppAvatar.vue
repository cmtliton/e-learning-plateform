<template>
  <v-layout>
    <template #append>
      <v-btn class="text-none me-2" height="48" icon slim>
        <v-avatar
          color="surface-light"
          image="https://cdn.vuetifyjs.com/images/john.png"
          size="32"
        />

        <v-menu activator="parent">
          <v-list density="compact" nav>
            <v-list-item append-icon="mdi-cog-outline" link title="Settings" />

            <v-list-item append-icon="mdi-logout" link title="Logout" />
          </v-list>
        </v-menu>
      </v-btn>
    </template>
  </v-layout>
</template>
<script setup></script>
