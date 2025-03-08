<template>
  <v-sheet class="d-flex align-center py-16" color="secondary" id="bg-pricing">
    <v-container>
      <v-row class="d-flex align-center">
        <v-col cols="12" md="5">
          <div class="text-h4 font-weight-bold">
            AssisThem subscription gives you access to our library of Vue
            courses
          </div>

          <div class="text-body-1 text-medium-emphasis mt-5"></div>
        </v-col>

        <v-col cols="12" md="3">
          <v-hover v-slot:default="{isHovering, props}">
            <v-card
            class="pt-10 pb-5 d-flex flex-column align-center justify-center ga-5 rounded-xl cursor-pointer"
            elevation="5"
            :color="isHovering ? 'indigo-lighten-1' : undefined"
            v-bind="props"
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
            >
            </v-btn>
            <div class="text-center text-body-1 text-medium-emphasis">
              First two weeks free. <br />
              Amazing features.
            </div>
            <SignIn />
          </v-card>
          </v-hover>
        </v-col>

        <v-col cols="12" md="4">
          <v-hover v-slot:default="{ isHovering, props }">
            <v-card
              class="pt-10 pb-5 d-flex flex-column align-center justify-center ga-10 rounded-xl cursor-pointer"
              :elevation="isHovering ? '10' : '5'"
              v-bind="props"
              :border="isHovering ? 'lg' : 0"
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
              >
                GET IN TOUCH
              </v-btn>
              <div class="text-center text-body-1">
                First two weeks free. <br />
                Save 45% with this plan<br />Amazing features.
              </div>
              <SignUp />
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
      <ProductCard />
      <CourseCard />
    </v-container>
  </v-sheet>
</template>
<script setup lang="ts">
const user = useSupabaseUser()
const { query } = useRoute();
watchEffect(async () => {
  if (user.value) {
    await navigateTo(query.redirectTo as string, {
      replace: true,
    });
  }
});
</script>
<style scoped>
#bg-pricing {
  background-image: url("/public/course/pricing.jpg");
  background-repeat: repeat-x;
  background-size: 100%;
}
</style>
