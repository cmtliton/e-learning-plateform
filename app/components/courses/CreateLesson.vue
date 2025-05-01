<template>
  <div>
    <!-- Button to trigger the dialog -->
    <v-btn
      icon="mdi-plus"
      variant="text"
      color="primary"
      size="small"
      @click="useCreateCourse().addLessonDetails(sectionIndex, lessonIndex)"
    >
    </v-btn>
    <v-dialog v-model="useCreateCourse().dialogLesson" max-width="500">
      <v-card
        :subtitle="`${isEditing ? 'Update' : 'Create'} your favorite book`"
        :title="`${isEditing ? 'Edit' : 'Add'} a Book`"
      >
        <template v-slot:text>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="
                  useCreateCourse().course.chapters[sectionIndex].lessons[
                    lessonIndex
                  ].title
                "
                label="Title"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-model="record.author"
                label="Author"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-select
                v-model="record.genre"
                :items="['Fiction', 'Dystopian', 'Non-Fiction', 'Sci-Fi']"
                label="Genre"
              ></v-select>
            </v-col>

            <v-col cols="12" md="6">
              <v-number-input
                v-model="record.year"
                :max="adapter.getYear(adapter.date())"
                :min="1"
                label="Year"
              ></v-number-input>
            </v-col>

            <v-col cols="12" md="6">
              <v-number-input
                v-model="record.pages"
                :min="1"
                label="Pages"
              ></v-number-input>
            </v-col>
          </v-row>
        </template>

        <v-divider></v-divider>

        <v-card-actions class="bg-surface-light">
          <v-btn text="Cancel" variant="plain" @click="dialog = false"></v-btn>

          <v-spacer></v-spacer>

          <v-btn text="Save" @click="save"></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script setup>
import { onMounted, ref, shallowRef } from "vue";
import { useDate } from "vuetify";

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

const adapter = useDate();

const DEFAULT_RECORD = {
  title: "",
  author: "",
  genre: "",
  year: adapter.getYear(adapter.date()),
  pages: 1,
};

const books = ref([]);
const record = ref(DEFAULT_RECORD);
const dialog = shallowRef(false);
const isEditing = shallowRef(false);

const headers = [
  { title: "Title", key: "title", align: "start" },
  { title: "Author", key: "author" },
  { title: "Genre", key: "genre" },
  { title: "Year", key: "year", align: "end" },
  { title: "Pages", key: "pages", align: "end" },
  { title: "Actions", key: "actions", align: "end", sortable: false },
];

onMounted(() => {
  reset();
});

function add() {
  isEditing.value = false;
  record.value = DEFAULT_RECORD;
  dialog.value = true;
}

function edit(id) {
  isEditing.value = true;

  const found = books.value.find((book) => book.id === id);

  record.value = {
    id: found.id,
    title: found.title,
    author: found.author,
    genre: found.genre,
    year: found.year,
    pages: found.pages,
  };

  dialog.value = true;
}

function remove(id) {
  const index = books.value.findIndex((book) => book.id === id);
  books.value.splice(index, 1);
}

function save() {
  if (isEditing.value) {
    const index = books.value.findIndex((book) => book.id === record.value.id);
    books.value[index] = record.value;
  } else {
    record.value.id = books.value.length + 1;
    books.value.push(record.value);
  }

  dialog.value = false;
}

function reset() {
  dialog.value = false;
  record.value = DEFAULT_RECORD;
  books.value = [
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
      year: 1960,
      pages: 281,
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      year: 1949,
      pages: 328,
    },
    {
      id: 3,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Fiction",
      year: 1925,
      pages: 180,
    },
    {
      id: 4,
      title: "Sapiens",
      author: "Yuval Noah Harari",
      genre: "Non-Fiction",
      year: 2011,
      pages: 443,
    },
    {
      id: 5,
      title: "Dune",
      author: "Frank Herbert",
      genre: "Sci-Fi",
      year: 1965,
      pages: 412,
    },
  ];
}
</script>
