import type { Course, Chapter, Lesson } from "~~/types/course";
export const useCreateCourse = defineStore("createCourse", () => {
  const course = ref<Course>({
    id: 0,
    title: "",
    slug: "",
    description: "",
    imageUrl: "",
    price: 0,
    discount: 0,
    category: "",
    level: "",
    isFeatured: false,
    isPublished: false,
    chapters: [
      {
        id: 0,
        title: "",
        slug: "",
        number: 0,
        lessons: [
          {
            title: "",
            slug: "",
            number: 0,
            videoId: "",
            text: "",
            downloadUrl: "",
            imageUrl: "",
            sourceUrl: undefined,
          },
        ],
      },
    ],
  } as Course);

  const dialogLesson = ref<boolean>(false);

  function addLessonDetails(sectionIndex: number, Index: number) {
    dialogLesson.value = true;
  }
  const addSection = () => {
    course.value.chapters.push({
      title: "",
      lessons: [],
      slug: "",
      number: 0,
      id: 0,
    });
  };

  const removeSection = (index: number) => {
    course.value.chapters.splice(index, 1);
  };

  const addLesson = (sectionIndex: number) => {
    console.log("addLesson", sectionIndex);
    course.value.chapters[sectionIndex]?.lessons.push({
      id: 0,
      title: "",
      slug: "",
      number: 0,
      videoId: "",
      text: "",
      downloadUrl: "",
      imageUrl: "",
      sourceUrl: undefined,
      path: "",
    });
  };

  const removeLesson = (sectionIndex: number, lessonIndex: number) => {
    course.value.chapters[sectionIndex]?.lessons.splice(lessonIndex, 1);
  };

  return {
    course,
    dialogLesson,
    addLessonDetails,
    addSection,
    removeSection,
    addLesson,
    removeLesson,
  };
});
