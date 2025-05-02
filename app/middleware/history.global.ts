import { useLocalStorage } from "@vueuse/core";

export default defineNuxtRouteMiddleware((to, from) => {
  const naviationHistory = useLocalStorage("history", []);
  naviationHistory.value.push(to.path);
  // console.log(
  //     `Navigation history: ${naviationHistory.value.join(
  //         '\n'
  //     )}`
  // );
});
