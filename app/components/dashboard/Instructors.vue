<template>
  <v-container>
    <v-row>
      <v-col cols="auto" md="6" v-for="card in cards" :key="card.title">
        <v-card
          elevation="2"
          min-width="250"
          min-height="250"
          class="py-16 bg-cyan-darken-2"
        >
          <v-card-title class="text-h6">
            <v-icon start>{{ card.icon }}</v-icon>
            {{ card.title }}
          </v-card-title>
          <v-card-text class="text-center text-h5 font-weight-bold">
            {{ card.value }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const cards = [
  { title: "Courses", value: 8, icon: "mdi-book-open" },
  { title: "Students", value: 132, icon: "mdi-account-group" },
  { title: "Assignments", value: 24, icon: "mdi-file-document" },
  { title: "Submissions", value: 220, icon: "mdi-upload" },
];
</script>
