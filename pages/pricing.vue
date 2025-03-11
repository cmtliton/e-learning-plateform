<template>
    <v-container>
      <div
        class="text-h4 font-weight-bold mx-auto pb-6"
        style="max-width: 620px"
      >
        AssisThem subscription gives you access to our library of Vue courses
      </div>
      <v-row class="d-flex align-center">
        <v-col cols="12" md="4">
          <v-card
            class="pt-10 pb-5 d-flex flex-column align-center justify-center ga-5 rounded-xl"
            elevation="5"
          >
            <div class="text-h6 font-weight-bold">MONTHLY</div>

            <div class="text-h2 font-weight-bold">$19</div>

            <div class="text-body-1 text-medium-emphasis">Per Month</div>

            <v-btn
              class="text-body-1 font-weight-bold"
              color="surface-variant"
              flat
              rounded
              text="GET STARTED"
            />

            <div class="text-center text-body-1 text-medium-emphasis">
              First two weeks free. <br />
              Amazing features.
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card
            class="pt-10 pb-5 d-flex flex-column align-center justify-center ga-10 rounded-xl"
            color="primary"
            elevation="5"
            hover
          >
            <div class="text-h6 font-weight-bold">ANNUALY</div>

            <div class="text-h2 font-weight-bold">$29</div>

            <div class="text-body-1 text-white">Per Month</div>

            <v-btn
              class="px-10 text-body-1"
              color="accent"
              flat
              height="55"
              rounded
              text="GET IN TOUCH"
            />

            <div class="text-center text-body-1">
              First two weeks free. <br />
              Save 45% with this plan<br />Amazing features.
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card
            class="pt-10 pb-5 d-flex flex-column align-center justify-center ga-5 rounded-xl"
            elevation="5"
          >
            <div class="text-h6 font-weight-bold">LIFETIME</div>

            <div class="text-h2 font-weight-bold">$19</div>

            <div class="text-body-1 text-medium-emphasis">Per Month</div>

            <v-btn
              class="text-body-1 font-weight-bold"
              color="surface-variant"
              flat
              rounded
              text="GET STARTED"
            />

            <div class="text-center text-body-1 text-medium-emphasis">
              First two weeks free. <br />
              Amazing features.
            </div>
          </v-card>
        </v-col>
      </v-row>
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
    title: 'Pricing'
})
</script>

<style scoped>
#bg-pricing {
  background-image: url("/public/course/pricing.jpg");
  background-repeat: repeat-x repeat-y;
  background-size: 100%;
}
</style>
