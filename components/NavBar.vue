<template>
    <v-app-bar color="cyan-darken-4" flat density="compact" class="border-b-thin">
      <template v-slot:prepend>
        <NuxtLink to="/" class="mt-2 text-decoration-none">
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
        </v-app-bar-title
      >

        <v-tabs v-model="tab" color="white">
    <v-tab :value="index" v-for="(item, index) in items" :key="index" :to="item.url">
        {{ item.title }}
        </v-tab>
        </v-tabs>
    </v-app-bar>

</template>
<script setup lang="ts">
import {ref} from 'vue'
const tab = ref(null)
const items = [
    {
      id: 1,
      name: 'Courses',
      title: 'Courses',
      url: '/',
      description: '',
      src: 'mdi-account-outline',
      created_at: '',
      updated_at: '',
      created_by: '',
      updated_by: '',
      menus: []
    },
    {
      id: 2,
      name: 'Learning Paths',
      title: 'Learning Paths',
      url: '/learning-path',
      description: '',
      src: 'mdi-account-outline',
      created_at: '',
      updated_at: '',
      created_by: '',
      updated_by: '',
      menus: []
    },
    {
      id: 3,
      name: 'Blog',
      title: 'Blog',
      url: '/blog',
      description: '',
      src: 'mdi-account-outline',
      created_at: '',
      updated_at: '',
      created_by: '',
      updated_by: '',
      menus: []
    },
    {
      id: 4,
      name: 'Conferences',
      title: 'Conferences',
      url: '/conferences',
      description: '',
      src: 'mdi-account-outline',
      created_at: '',
      updated_at: '',
      created_by: '',
      updated_by: '',
      menus: []
    },
    {
      id: 5,
      name: 'Pricing',
      title: 'Pricing',
      url: '/pricing',
      description: '',
      src: 'mdi-account-outline',
      created_at: '',
      updated_at: '',
      created_by: '',
      updated_by: '',
      menus: []
    }
]
</script>