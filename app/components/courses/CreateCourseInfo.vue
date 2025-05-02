<template>
  <v-container fluid>
    <v-card class="mx-auto">
      <v-card-title class="text-black text-h6">Course Create</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="submitForm" ref="form">
          <v-row dense class="pt-5 mx-auto">
            <v-col cols="12" sm="12">
              <v-text-field
                v-model="useCreateCourse().course.title"
                label="Course Title"
                :rules="[required]"
                required
                density="compact"
                variant="outlined"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="12">
              <v-textarea
                v-model="useCreateCourse().course.description"
                label="Description"
                :rules="[required]"
                required
                variant="outlined"
                rows="4"
                density="compact"
              ></v-textarea>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                v-model="useCreateCourse().course.price"
                label="Price ($)"
                type="number"
                min="0"
                step="0.01"
                :rules="[required, positiveNumber]"
                required
                variant="outlined"
                density="compact"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                v-model="useCreateCourse().course.discount"
                label="Discount (%)"
                type="number"
                min="0"
                max="100"
                :rules="[percentage]"
                variant="outlined"
                suffix="%"
                density="compact"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-select
                v-model="useCreateCourse().course.category"
                :items="categories"
                label="Category"
                :rules="[required]"
                required
                variant="outlined"
                density="compact"
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6">
              <v-select
                v-model="useCreateCourse().course.level"
                :items="levels"
                label="Difficulty Level"
                :rules="[required]"
                required
                variant="outlined"
                density="compact"
              ></v-select>
            </v-col>
            <v-col cols="12">
              <div class="d-flex justify-end">
                <v-btn color="primary" type="submit" :loading="loading" block>
                  {{ editing ? "Update Course" : "Create Course" }}
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
      formData.append("slug", course.value.slugHint);
      formData.append("description", course.value.description);
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
