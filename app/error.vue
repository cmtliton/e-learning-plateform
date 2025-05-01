<template>
  <v-empty-state
    image="/connection.svg"
    text="There might be a problem with your connection or our servers. Please check your internet connection or try again later. We appreciate your patience."
  >
    <template v-slot:title v-if="error.statusCode === 404">
      <div class="text-h5 mt-8 text-error">
        I guess that page doesn't exist!<br />{{ error.message }}
      </div>
    </template>
    <template v-slot:title v-else>
      <div class="text-h5 mt-8 text-error">
        It looks like something broke!<br />
        Sorry about that.<br />{{ error.message }}
      </div>
    </template>
    <template v-slot: actions>
      <v-hover v-slot:default="{isHovering, props}">
        <v-btn
        :class="isHovering ? 'bg-indigo-darken-4 text-none text-subtitle-1 text-error' : 'text-none text-subtitle-1 text-error'"
        @click="handleError"
        flat
        rounded
        append-icon="mdi-arrow-right"
        v-bind="props"
        >Go first Lesson</v-btn
      >
      </v-hover>
    </template>
  </v-empty-state>
</template>

<script setup>
const error = useError();

const handleError = () => {
  clearError({
    redirect: "/course/chapter/0-chapter-1/lesson/0-hello-laravel-11",
  });
};
</script>
