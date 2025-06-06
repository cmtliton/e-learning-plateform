const itemsDashboard = ref<any[]>([
  {
    title: "Dashboard",
    icon: "mdi-view-dashboard",
    url: "/dashboard/instructor",
  },
  {
    title: "My Courses",
    icon: "mdi-book-open-variant",
    url: "/dashboard/courses",
  },
  {
    title: "Students",
    icon: "mdi-account-group",
    url: "/dashboard/students",
  },
  {
    title: "Assignments",
    icon: "mdi-clipboard-text",
    url: "/dashboard/assignments",
  },
  {
    title: "Create Course",
    icon: "mdi-plus-circle-outline",
    url: "/dashboard/createCourse",
  },

  {
    title: "Settings",
    icon: "mdi-cog",
    url: "/dashboard/settings",
  },
]);

const itemsPage = ref<any[]>([
  {
    id: 1,
    name: "Courses",
    title: "Courses",
    url: "/",
    description: "",
    icon: "mdi-account-outline",
    created_at: "",
    updated_at: "",
    created_by: "",
    updated_by: "",
    menus: [],
  },
  {
    id: 2,
    name: "Learning Paths",
    title: "Learning Paths",
    url: "/learning-path",
    description: "",
    icon: "mdi-account-outline",
    created_at: "",
    updated_at: "",
    created_by: "",
    updated_by: "",
    menus: [],
  },
  {
    id: 3,
    name: "Blog",
    title: "Blog",
    url: "/blog",
    description: "",
    icon: "mdi-account-outline",
    created_at: "",
    updated_at: "",
    created_by: "",
    updated_by: "",
    menus: [],
  },
  {
    id: 4,
    name: "Conferences",
    title: "Conferences",
    url: "/conferences",
    description: "",
    icon: "mdi-account-outline",
    created_at: "",
    updated_at: "",
    created_by: "",
    updated_by: "",
    menus: [],
  },
  {
    id: 5,
    name: "Pricing",
    title: "Pricing",
    url: "/pricing",
    description: "",
    icon: "mdi-account-outline",
    created_at: "",
    updated_at: "",
    created_by: "",
    updated_by: "",
    menus: [],
  },
  {
    id: 5,
    name: "New Course",
    title: "New Course",
    url: "/dashboard/createCourse",
    description: "",
    icon: "mdi-plus-circle-outline",
    created_at: "",
    updated_at: "",
    created_by: "",
    updated_by: "",
    menus: [],
  },
]);

export const useMenus = () => {
  return {
    itemsPage,
    itemsDashboard,
  };
};
