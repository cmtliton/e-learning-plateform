<template>
  <v-container>
    <v-row class="d-flex align-center">
      <v-col cols="12" md="4">
        <v-card
          class="pt-10 pb-5 d-flex flex-column align-center justify-center ga-5 rounded-xl"
          elevation="5"
        >
          <div class="text-h6 font-weight-bold">MONTHLY</div>

          <div class="text-h2 font-weight-bold">$19</div>

          <div class="text-body-1 text-medium-emphasis">Per Month</div>

          <v-btn
            class="text-body-1 font-weight-bold"
            color="surface-variant"
            flat
            rounded
            text="GET STARTED"
          />

          <div class="text-center text-body-1 text-medium-emphasis">
            First two weeks free. <br />
            Amazing features.
          </div>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card
          class="pt-10 pb-5 d-flex flex-column align-center justify-center ga-10 rounded-xl"
          color="primary"
          elevation="5"
          hover
        >
          <div class="text-h6 font-weight-bold">ANNUALY</div>

          <div class="text-h2 font-weight-bold">$29</div>

          <div class="text-body-1 text-white">Per Month</div>

          <v-btn
            class="px-10 text-body-1"
            color="accent"
            flat
            height="55"
            rounded
            text="GET IN TOUCH"
          />

          <div class="text-center text-body-1">
            First two weeks free. <br />
            Save 45% with this plan<br />Amazing features.
          </div>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card
          class="pt-10 pb-5 d-flex flex-column align-center justify-center ga-5 rounded-xl"
          elevation="5"
        >
          <div class="text-h6 font-weight-bold">LIFETIME</div>

          <div class="text-h2 font-weight-bold">$19</div>

          <div class="text-body-1 text-medium-emphasis">Per Month</div>

          <v-btn
            class="text-body-1 font-weight-bold"
            color="surface-variant"
            flat
            rounded
            text="GET STARTED"
          />

          <div class="text-center text-body-1 text-medium-emphasis">
            First two weeks free. <br />
            Amazing features.
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
const firstLesson = useFirstLesson();
const courses = ref([
  {
    id: 1,
    title: "Introduction to Typescript",
    desc: "Learn the fundamentals of Vue 3 in this course that starts with the very basics.",
    image: "/course/intro-to-vue-3.png",
    url: "course/chapter/0-chapter-1/lesson/0-route-and-view",
  },
  {
    id: 2,
    title: "Proven Component Patterns",
    desc: "Learn the fundamentals of Vue 3 in this course that starts with the very basics.",
    image: "/course/Proven Component Patterns.png",
    url: "course/chapter/0-chapter-1/lesson/0-route-and-view",
  },
  {
    id: 3,
    title: "Q&A with Evan You",
    desc: "Learn the fundamentals of Vue 3 in this course that starts with the very basics.",
    image: "/course/Q&A with Evan You.png",
    url: "course/chapter/0-chapter-1/lesson/0-route-and-view",
  },
]);
</script>
