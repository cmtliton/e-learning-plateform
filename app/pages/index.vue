<template>
  <v-container>
    <ProductCard></ProductCard>
    <CourseCard></CourseCard>
  </v-container>
</template>

<script setup lang="ts">
useHead({
  title: "Courses",
  meta: [{ name: "", content: "" }],
});
</script>

<style scoped>
#bg_course {
  background-image: url("/public/course/courses_front.jpg");
  background-repeat: no-repeat;
  background-position-x: center;
  background-size: 100%;
}
</style>
