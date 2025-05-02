<template>
  <div>
    <!-- Button to trigger the dialog -->
    <v-btn
      icon="mdi-plus-circle-outline"
      variant="text"
      color="primary"
      size="small"
      @click="useCreateCourse().addLessonDetails(sectionIndex, lessonIndex)"
    >
    </v-btn>
    <v-dialog v-model="useCreateCourse().dialogLesson" max-width="950">
      <v-card
        :subtitle="`${isEditing ? 'Update' : 'Create'} Lesson`"
        :title="`${isEditing ? 'Edit' : 'Add'} a Lesson`"
        class="rounded-lg"
      >
        <template v-slot:text>
          <v-row dense>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="
                  useCreateCourse().course.chapters[sectionIndex].lessons[
                    lessonIndex
                  ].title
                "
                label="Title"
                variant="outlined"
                density="compact"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="
                  useCreateCourse().course.chapters[sectionIndex].lessons[
                    lessonIndex
                  ].videoId
                "
                label="Video ID"
                variant="outlined"
                density="compact"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                v-model="
                  useCreateCourse().course.chapters[sectionIndex].lessons[
                    lessonIndex
                  ].downloadUrl
                "
                label="Download URL"
                variant="outlined"
                density="compact"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="
                  useCreateCourse().course.chapters[sectionIndex].lessons[
                    lessonIndex
                  ].sourceUrl
                "
                label="Source URL"
                variant="outlined"
                density="compact"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-textarea
                v-model="
                  useCreateCourse().course.chapters[sectionIndex].lessons[
                    lessonIndex
                  ].text
                "
                label="Description"
                variant="outlined"
                density="compact"
              ></v-textarea>
            </v-col>

            <v-col cols="12" sm="6">
              <v-img
                lazy-src="https://picsum.photos/10/6?image=20"
                :src="preview"
                height="140"
                cover
              />
            </v-col>
          </v-row>
        </template>

        <v-divider></v-divider>

        <v-card-actions class="bg-surface-light">
          <v-btn
            text="Cancel"
            variant="plain"
            @click="useCreateCourse().dialogLesson = false"
          ></v-btn>

          <v-spacer></v-spacer>

          <v-btn text="Save" @click="save"></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script setup>
import { shallowRef } from "vue";

defineProps({
  sectionIndex: {
    type: Number,
    required: true,
  },
  lessonIndex: {
    type: Number,
    required: true,
  },
});

const isEditing = shallowRef(false);
</script>
