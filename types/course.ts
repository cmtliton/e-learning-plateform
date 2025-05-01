export type Lesson = {
  id: number;
  title: string;
  slug: string;
  number: number;
  videoId: string;
  text: string;
  imageUrl: string;
  downloadUrl?: string;
  sourceUrl?: string;
};

export type LessonWithPath = Lesson & {
  path: string;
};

export type Chapter = {
  id: number;
  title: string;
  slug: string;
  number: number;
  lessons: Lesson[] | LessonWithPath[];
};

export type Course = {
  id: number;
  title: string;
  slug: string;
  description: string;
  imageUrl: string;
  price: number;
  discount: number;
  category: string;
  level: string;
  isFeatured?: boolean;
  isPublished?: boolean;
  chapters: Chapter[];
};
