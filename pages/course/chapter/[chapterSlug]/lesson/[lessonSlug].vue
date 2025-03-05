<template>
        <div>
            <p class="mx-2 text-body-1 text-white my-2 text-center">Lesson {{ chapter.number }} - {{ lesson.number }} {{ lesson.title }}</p>
             <VideoPlayer v-if="lesson.videoId" :videoId="lesson.videoId" :liton="chapter.number"></VideoPlayer>
            <div class="d-flex text-body-2 mx-2">
                <NuxtLink v-if="lesson.sourceUrl"
                class="text-white mx-2"
                :to="lesson.sourceUrl"
                >Download Source Code
            </NuxtLink> 
            <NuxtLink v-if="lesson.downloadUrl" class="text-white mx-2" :to="lesson.downloadUrl">
                Download Video
            </NuxtLink>
            
            </div>
            <p class="ma-2 text-body-2 text-white">{{ lesson.text }}</p>
              <LessonCompleteButton :model-value="isLessonComplete"
            @update:model-value="toggleComplete"/>
        </div>
</template>
<script setup>
import { useLocalStorage } from '@vueuse/core';
import { ref } from 'vue';
const course = useCourse();
const route = useRoute();

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

const title = computed(()=>{
    return `${lesson.value.title}-${course.title}`;
});

useHead({
    title,
});

const progress = useLocalStorage('progress', []);

const isLessonComplete = computed(() => {
  if (!progress.value[chapter.value.number - 1]) {
    return false;
  }

  if (
    !progress.value[chapter.value.number - 1][
      lesson.value.number - 1
    ]
  ) {
    return false;
  }

  return progress.value[chapter.value.number - 1][
    lesson.value.number - 1
  ];
});

const toggleComplete = () => {
  if (!progress.value[chapter.value.number - 1]) {
    progress.value[chapter.value.number - 1] = [];
  }

  progress.value[chapter.value.number - 1][
    lesson.value.number - 1
  ] = !isLessonComplete.value;
};
</script>