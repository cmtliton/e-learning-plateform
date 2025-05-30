<template>
  <div>
    <p class="mx-2 text-body-1 text-white my-2 text-center">
      Lesson {{ chapter.number }} - {{ lesson.number }} {{ lesson.title }}
    </p>
    <VideoPlayer
      v-if="lesson.videoId"
      :videoId="lesson.videoId"
      :liton="chapter.number"
    ></VideoPlayer>
    <div class="d-flex text-body-2 mx-2">
      <NuxtLink
        v-if="lesson.sourceUrl"
        class="text-white mx-2"
        :to="lesson.sourceUrl"
        >Download Source Code
      </NuxtLink>
      <NuxtLink
        v-if="lesson.downloadUrl"
        class="text-white mx-2"
        :to="lesson.downloadUrl"
      >
        Download Video
      </NuxtLink>
    </div>
    <p class="ma-2 text-body-2 text-white">{{ lesson.text }}</p>
    <LessonCompleteButton
      :model-value="isLessonComplete"
      @update:model-value="toggleComplete"
    />
  </div>
</template>
<script setup>
import { useLocalStorage } from "@vueuse/core";
const course = useCourse();
const route = useRoute();
const progress = useLocalStorage("progress", []);

definePageMeta({
  middleware: [
    function ({ params }, from) {
      const course = useCourse();
      const chapter = course.chapters.find(
        (chapter) => chapter.slug === params.chapterSlug
      );
      if (!chapter) {
        return abortNavigation(
          createError({
            statusCode: 404,
            message: "Chapter not found",
          })
        );
      }

      const lesson = chapter.lessons.find(
        (lesson) => lesson.slug === params.lessonSlug
      );
      if (!lesson) {
        return abortNavigation(
          createError({
            statusCode: 404,
            message: "Lesson not found",
          })
        );
      }
    },
    "auth",
  ],
});

const chapter = computed(() => {
  return course.chapters.find(
    (chapter) => chapter.slug === route.params.chapterSlug
  );
});

const lesson = computed(() => {
  return chapter.value.lessons.find(
    (lesson) => lesson.slug === route.params.lessonSlug
  );
});

const title = computed(() => {
  return `${lesson.value.title}-${course.title}`;
});

useHead({
  title,
});

const isLessonComplete = computed(() => {
  if (!progress.value[chapter.value.number - 1]) {
    return false;
  }

  if (!progress.value[chapter.value.number - 1][lesson.value.number - 1]) {
    return false;
  }

  return progress.value[chapter.value.number - 1][lesson.value.number - 1];
});

const toggleComplete = () => {
  if (!progress.value[chapter.value.number - 1]) {
    progress.value[chapter.value.number - 1] = [];
  }

  progress.value[chapter.value.number - 1][lesson.value.number - 1] =
    !isLessonComplete.value;
};
</script>
