<script setup>
const props = defineProps({
  videoId: {
    type: Number,
    required: true,
  },
  liton: {
    type: Number,
    required: true,
  }
});
</script>
<template>
  <v-responsive :aspect-ratio="16 / 9">
    <iframe v-if="liton !== 100"
    width="100%"
    height="99%"
    :src="`https://player.vimeo.com/video/${props.videoId}`"
    title="Video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
  <iframe v-if="liton===100"
    width="100%"
    height="99%"
    :src="`https://www.youtube.com/embed/${videoId}`"
    title="Video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
  </v-responsive>
  
</template>

<style scoped></style>
