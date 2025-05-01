<template>
  <v-container class="pa-4" fluid>
    <v-card class="mx-auto">
      <v-card-text>
        <v-form @submit.prevent="submitForm" ref="form">
          <v-row dense class="mx-5">
            <v-col cols="12">
              <h4 class="text-h6 mb-2">Course Content</h4>
            </v-col>

            <v-col cols="12">
              <v-expansion-panels>
                <v-expansion-panel
                  v-for="(section, sectionIndex) in useCreateCourse().course
                    .chapters"
                  :key="sectionIndex"
                  :title="section.title || `New Chapter ${sectionIndex + 1}`"
                >
                  <v-expansion-panel-text>
                    <v-text-field
                      v-model="section.title"
                      label="Chapter Title"
                      variant="outlined"
                      density="compact"
                    ></v-text-field>

                    <v-list dense>
                      <v-list-item
                        v-for="(lesson, lessonIndex) in section.lessons"
                        :key="lessonIndex"
                      >
                        <v-row dense no-gutters>
                          <v-col cols="12" sm="10">
                            <v-text-field
                              v-model="lesson.title"
                              placeholder="Lesson Title"
                              prepend-inner-icon="mdi-book-open-variant"
                              variant="outlined"
                              density="compact"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="1">
                            <CoursesCreateLesson
                              :sectionIndex="sectionIndex"
                              :lessonIndex="lessonIndex"
                            />
                          </v-col>
                          <v-col cols="12" sm="1">
                            <v-btn
                              icon="$close"
                              variant="text"
                              color="error"
                              size="x-small"
                              @click="
                                useCreateCourse().removeLesson(
                                  sectionIndex,
                                  lessonIndex
                                )
                              "
                            ></v-btn>
                          </v-col>
                        </v-row>
                      </v-list-item>
                    </v-list>

                    <v-btn
                      color="primary"
                      variant="text"
                      prepend-icon="mdi-plus"
                      @click="useCreateCourse().addLesson(sectionIndex)"
                    >
                      Add Lesson
                    </v-btn>
                  </v-expansion-panel-text>

                  <v-btn
                    icon="mdi-delete"
                    variant="text"
                    color="error"
                    size="x-small"
                    @click.stop="useCreateCourse().removeSection(sectionIndex)"
                  ></v-btn>
                </v-expansion-panel>
              </v-expansion-panels>

              <v-btn
                color="primary"
                variant="outlined"
                prepend-icon="mdi-plus"
                class="my-4"
                @click="useCreateCourse().addSection"
              >
                Add Section
              </v-btn>
            </v-col>

            <v-col cols="12">
              <div class="d-flex justify-end">
                <v-btn color="primary" type="submit" :loading="loading" block>
                  {{ editing ? "Update Contents" : "Create Contents" }}
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { CoursesCreateLesson } from "#components";
import { ref, computed, watch } from "vue";

// Form data
const course = ref<any>({
  title: "",
  slug: "",
  description: "",
  imageUrl: "",
  category: "",
  level: "beginner",
  price: 0,
  discount: 0,
  isFeatured: false,
  isPublished: false,
  chapters: [
    {
      title: "Introduction",
      slug: "introduction",
      number: 1,
      lessons: [
        {
          title: "Welcome to the Course",
          slug: "welcome-to-the-course",
          number: 1,
          videoId: "",
          text: "",
          downloadUrl: "",
          imageUrl: "",
          sourceUrl: "",
        },
        {
          title: "Course Overview",
          slug: "course-overview",
          number: 2,
          videoId: "",
          text: "",
          downloadUrl: "",
          imageUrl: "",
          sourceUrl: "",
        },
      ],
    },
  ],
});

const categories = [
  "Web Development",
  "Mobile Development",
  "Data Science",
  "Machine Learning",
  "Design",
  "Business",
  "Marketing",
];

const levels = [
  { title: "Beginner", value: "beginner" },
  { title: "Intermediate", value: "intermediate" },
  { title: "Advanced", value: "advanced" },
];

const courseImage = ref<any>(null);
const imagePreview = ref<any>("");
const loading = ref<boolean>(false);
const editing = ref<boolean>(false);
const form = ref<any>(null);

// Validation rules
const required = (value: string) => !!value || "This field is required";
const positiveNumber = (value: number) =>
  value >= 0 || "Must be a positive number";
const percentage = (value: number) =>
  (value >= 0 && value <= 100) || "Must be between 0 and 100";

// Computed properties
const slugHint = computed(() => {
  if (!course.value.title) return "Will be generated from title";
  const generatedSlug = course.value.title
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
  course.value.slug = generatedSlug;
  return `Will be: ${generatedSlug}`;
});

// Watch title to auto-generate slug
watch(
  () => course.value.title,
  (newTitle) => {
    if (newTitle && !course.value.slug) {
      course.value.slug = newTitle
        .toLowerCase()
        .replace(/[^\w ]+/g, "")
        .replace(/ +/g, "-");
    }
  }
);

// Methods
const previewImage = () => {
  if (courseImage.value) {
    // const reader = new FileReader();
    // reader.onload = (e) => {
    //   imagePreview.value = e.target?.result;
    // };
    // reader.readAsDataURL(courseImage.value);
    imagePreview.value = URL.createObjectURL(courseImage.value);
  } else {
    imagePreview.value =
      "https://cdn.vuetifyjs.com/images/parallax/material.jpg";
  }
};

const addSection = () => {
  course.value.chapters.push({
    title: "",
    lessons: [{ title: "" }],
  });
};

const removeSection = (index: number) => {
  course.value.chapters.splice(index, 1);
};

const addLesson = (sectionIndex: number) => {
  course.value.chapters[sectionIndex].lessons.push({ title: "" });
};

const removeLesson = (sectionIndex: number, lessonIndex: number) => {
  course.value.chapters[sectionIndex].lessons.splice(lessonIndex, 1);
};

const resetForm = () => {
  if (form.value) {
    form.value.reset();
  }
  imagePreview.value = "";
  courseImage.value = null;
  // Reset to default chapters
  course.value.chapters = [
    {
      title: "Introduction",
      lessons: [
        { title: "Welcome to the Course" },
        { title: "Course Overview" },
      ],
    },
  ];
};

const submitForm = async () => {
  const { valid } = await form.value.validate();

  if (valid) {
    loading.value = true;

    try {
      // Prepare form data for upload
      const formData = new FormData();
      formData.append("title", course.value.title);
      formData.append("slug", course.value.slug);
      formData.append("description", course.value.description);
      formData.append("short_description", course.value.short_description);
      formData.append("category", course.value.category);
      formData.append("level", course.value.level);
      formData.append("price", course.value.price);
      formData.append("discount", course.value.discount);
      formData.append("is_featured", course.value.is_featured);
      formData.append("is_published", course.value.is_published);
      formData.append("chapters", JSON.stringify(course.value.chapters));

      if (courseImage.value) {
        formData.append("imageUrl", courseImage.value);
      }

      // Here you would typically make an API call
      // Example:
      // const response = await fetch('/api/courses', {
      //   method: editing.value ? 'PUT' : 'POST',
      //   body: formData
      // })

      // Simulate API call
      console.log("Submitting:", course.value);
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Show success message
      // Reset form if it's a new course
      if (!editing.value) {
        resetForm();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      loading.value = false;
    }
  }
};
</script>

<style scoped>
.v-card-title {
  color: white;
}
</style>
