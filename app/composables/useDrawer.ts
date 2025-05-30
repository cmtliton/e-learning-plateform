import { ref } from "vue";
const navDrawer = ref(false);
const drawer = ref(true);
export const useDrawer = () => {
  return { navDrawer, drawer };
};
