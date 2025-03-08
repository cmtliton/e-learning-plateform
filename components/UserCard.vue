<template>
  <v-btn class="text-none me-2" height="48" icon slim>
    <v-avatar :image="profile" size="32" v-if="user" />

    <v-menu activator="parent">
      <v-list density="compact" nav>
        <v-list-item append-icon="mdi-account-outline" link :title="name" />

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
const user = useSupabaseUser();
const { auth } = useSupabaseClient();
const name = computed(() => user.value?.user_metadata.full_name);
const profile = computed(() => user.value?.user_metadata.avatar_url);
const logout = async () => {
  const { error } = await auth.signOut();
  if (error) {
    console.error(error);
    return true
  }
  await navigateTo('/');
};
</script>
