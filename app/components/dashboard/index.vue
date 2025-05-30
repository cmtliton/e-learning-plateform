<template>
  <v-container fluid>
    <v-row class="mb-6">
      <v-col cols="12">
        <h1 class="text-h4 font-weight-bold">Welcome Back, Admin!</h1>
        <p class="text-subtitle-1">
          Here’s what’s happening with your LMS today
        </p>
      </v-col>
    </v-row>

    <!-- Stats Cards -->
    <v-row>
      <v-col cols="12" md="3" v-for="card in statCards" :key="card.title">
        <v-card class="pa-4" elevation="0">
          <v-icon size="36" color="primary">{{ card.icon }}</v-icon>
          <div class="text-h6 mt-2">{{ card.value }}</div>
          <div class="text-caption text-grey-darken-1">{{ card.title }}</div>
        </v-card>
      </v-col>
    </v-row>

    <!-- Chart Placeholder -->
    <v-row class="mt-6">
      <v-col cols="12" md="8">
        <v-card height="300px" class="pa-4" flat>
          <div class="text-subtitle-1 font-weight-medium mb-2">
            Course Enrollments (Coming soon)
          </div>
          <!-- Replace with chart lib like ApexCharts or Chart.js -->
          <div class="d-flex align-center justify-center fill-height text-grey">
            Chart goes here
          </div>
        </v-card>
      </v-col>

      <!-- Recent Activity -->
      <v-col cols="12" md="4">
        <v-card class="pa-4" height="300px">
          <div class="text-subtitle-1 font-weight-medium mb-2">
            Recent Activity
          </div>
          <v-list density="compact">
            <v-list-item v-for="(activity, i) in activities" :key="i">
              <v-list-item-content>
                <v-list-item-title>{{ activity }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const statCards = [
  { title: "Total Students", value: 1200, icon: "mdi-account-group" },
  { title: "Courses", value: 35, icon: "mdi-book-open-page-variant" },
  { title: "Instructors", value: 12, icon: "mdi-account-tie" },
  { title: "Active Sessions", value: 87, icon: "mdi-chart-line" },
];

const activities = [
  'User John enrolled in "Vue Basics"',
  'Admin added new course "Nuxt Mastery"',
  'Instructor Sarah updated "JavaScript 101"',
];
</script>

<style scoped>
h1 {
  margin-bottom: 0.25rem;
}
</style>
