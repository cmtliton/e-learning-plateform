import { ref } from "vue";
const navDrawer = ref(false);
const drawer = ref(false);
export const useDrawer = () => {
  return { navDrawer, drawer };
};
