<template>
  <v-container>
    <div class="text-h4 font-weight-bold mx-auto pb-6" style="max-width: 620px">
      AssisThem subscription gives you access to our library of Vue courses
    </div>
    <PricingTable />
    <ProductCard />
  </v-container>
</template>

<script setup lang="ts">
const user = useSupabaseUser();
const Plans = [
  {
    title: "Monthly",
    price: 25,
    unit: "Per Month",
    status: true,
    Descriptions: [
      { id: 1, title: "Watch premium Vue courses", src: "", status: true },
      {
        id: 2,
        title: "New couses released regularly",
        src: "",
        status: true,
      },
      {
        id: 3,
        title: "Exclusive content by Evan You",
        src: "",
        status: true,
      },
      { id: 4, title: "Donate to the Vue.js project", src: "", status: true },
    ],
  },
  {
    title: "Annual",
    price: 10,
    unit: "Per Month",
    disc_title: "2 Discounts Applied",
    status: true,
    Descriptions: [
      {
        id: 1,
        title: "60% off with the BlackFriday-24 discount",
        src: "",
        status: true,
      },
      { id: 2, title: "Watch premium Vue courses", src: "", status: true },
      {
        id: 3,
        title: "New couses released regularly",
        src: "",
        status: true,
      },
      {
        id: 4,
        title: "Exclusive content by Evan You",
        src: "",
        status: true,
      },
      { id: 5, title: "Donate to the Vue.js project", src: "", status: true },
    ],
  },
  {
    title: "Free",
    price: 50,
    unit: "Per Month",
    status: true,
    Descriptions: [
      {
        id: 1,
        title: "Unlock additional free lessons",
        src: "",
        status: true,
      },
      { id: 2, title: "Track your progress", src: "", status: true },
      { id: 3, title: "Download our cheat sheets", src: "", status: true },
    ],
  },
];
useHead({
  title: "Pricing",
});
</script>

<style scoped>
#bg-pricing {
  background-image: url("/public/course/pricing.jpg");
  background-repeat: repeat-x repeat-y;
  background-size: 100%;
}
</style>
