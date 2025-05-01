<template>
  <v-container>
    <h1 class="ml-2 text-indigo-darken-4">Mastering Vue 3</h1>
    <v-row>
      <v-col cols="12" md="4" v-for="(course, index) in courses">
        <v-hover v-slot="{ isHovering, props }">
          <v-card
            class="mx-auto"
            max-width="344"
            v-bind="props"
            :key="index"
            :to="course.url"
          >
            <v-img
              height="200px"
              lazy-src="https://picsum.photos/id/11/100/60"
              :src="course.image"
              cover
            ></v-img>

            <v-card-text>
              <h2 class="text-h6 text-primary">{{ course.title }}</h2>
              {{ course.desc }}
            </v-card-text>

            <v-card-title>
              <v-rating
                :model-value="4"
                background-color="orange"
                class="me-2"
                color="orange"
                dense
                hover
              ></v-rating>
              <span class="text-primary text-subtitle-2">64 Reviews</span>
            </v-card-title>

            <v-overlay
              :model-value="!!isHovering"
              class="align-center justify-center"
              scrim="#036358"
              contained
            >
              <v-btn variant="flat">See more info</v-btn>
            </v-overlay>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
const courses = ref([
  {
    id: 1,
    title: "Introduction to Typescript",
    desc: "Learn the fundamentals of Vue 3 in this course that starts with the very basics.",
    image: "/course/from-vuex-to-pinia_WH_800x424px.png",
    url: "course/chapter/0-chapter-1/lesson/0-route-and-view",
  },
  {
    id: 2,
    title: "Proven Component Patterns",
    desc: "Learn the fundamentals of Vue 3 in this course that starts with the very basics.",
    image: "/course/Pinia Fundamentals.png",
    url: "course/chapter/0-chapter-1/lesson/0-route-and-view",
  },
  {
    id: 3,
    title: "Q&A with Evan You",
    desc: "Learn the fundamentals of Vue 3 in this course that starts with the very basics.",
    image: "/course/pinia-a&q.png",
    url: "course/chapter/0-chapter-1/lesson/0-route-and-view",
  },
]);
</script>
