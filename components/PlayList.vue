<template>
  <v-card class="mx-auto" max-width="100%" theme="dark" elevation="0">
    <v-list v-model:opened="open" height="545">
      <v-list-group
        v-for="(chapter, index) in props.chapters"
        :key="chapter.slug"
        :value="chapter.slug"
      >
        <template v-slot:activator="{props}">
          <v-list-item :title="chapter.title" v-bind="props"></v-list-item>
          <v-divider></v-divider>
        </template>
        <v-list-item
          :class="{
            'ml-n14 cursor-pointer': true,
            'text-success': lesson.path === $route.fullPath
          }"
          v-if="chapter.lessons"
          v-for="(lesson, i) in chapter.lessons"
          :subtitle="`${index+1}-${i+1} ${lesson.title}`"
          :Key="lesson.slug"
          :to="lesson.path"
          slim
          :value="lesson.slug"
        >
          <template v-slot:prepend="{ isSelected }">
            <v-list-item-action start class="ma-n2">
              <v-checkbox-btn
                :model-value="isSelected"
                color="green-lighten-1"
              ></v-checkbox-btn>
            </v-list-item-action>
          </template>
          <v-tooltip activator="parent" open-delay="700" location="top"
            >{{ lesson.title }}</v-tooltip
          >
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-card>
</template>

<script setup>
  import { ref } from 'vue'
  const open = ref(['1-chapter-1', '3-chapter-3', '2-chapter-2'])
  const isSelected = ref([])
  const props = defineProps({
    chapters: {
      type: Array,
      required: true,
    },
  });

</script>

<style scoped></style>
