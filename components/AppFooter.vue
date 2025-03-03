<template>
  <v-footer class="border rounded-b-xl bg-teal-lighten-1">
    <v-row class="pt-12">
      <v-col cols="12" md="4" class="text-h6">
        <v-card flat color="teal-lighten-1">
          <template v-slot:prepend>
            <v-img
              src="~/assets/logo_new.png"
              width="55"
              @click="home()"
              class="cursor-pointer"
            ></v-img>
            <p class="ps-2 text-h4 cursor-pointer" v-on:click="home()">
              AssisThem
            </p>
          </template>
          <p class="ps-4 text-subtitle-1">
            Excel Your Business with Vue Components!
          </p>
          <v-btn
            v-for="icon in icons"
            :key="icon.id"
            :icon="icon.src"
            class="mx-0"
            variant="text"
            :href="icon.url"
            target="blank"
          ></v-btn>
        </v-card>
      </v-col>
      <v-col cols="12" md="8">
        <v-row>
          <v-col
            cols="6"
            md="3"
            sm="6"
            class="text-h6 font-weight-bold"
            v-for="footer in footers"
            :key="footer.id"
          >
            {{footer.title}}

            <v-row
              class="mx-0 mt-3 my-3 text-body-1 text-medium-emphasis"
              v-for="item in footer.items"
              :key="item.id"
            >
              <v-hover>
                <template v-slot:default="{isHovering, props}">
                  <NuxtLink :to="item.url">
                    <div
                      v-bind="props"
                      :class="isHovering? 'font-weight-bold text-success cursor-pointer rounded-xl' : undefined"
                    >
                      {{item.title}}
                    </div>
                  </NuxtLink>
                </template>
              </v-hover>
            </v-row>
          </v-col>
        </v-row>
      </v-col>

      <v-row class="ma-2 border-t-thin">
        <v-col cols="12" md="4"
          ><p class="text-subtitle-1 text-medium-emphasis text-start">Subscribe to newsletter</p>
          <p class="text-subtitle-2 text-medium-emphasis text-start">
            Get Tips & Tricks, Updates, Fresh Blogs & Offers.
          </p>
          </v-col
        >
        <v-col cols="12" md="4">
          <div class="d-flex">
            <v-text-field
            v-model.email="Email"
              variant="outlined"
              placeholder="Enter your email"
              density="compact"
              color="success"
            ></v-text-field>
            <v-btn
              variant="tonal"
              class="ml-2 bg-success text-white rounded-lg"
            >
              Subscribe
            </v-btn>
          </div>
        </v-col>

        <v-row class="border-t-thin">
          <v-col cols="12" md="6">
            <p class="text-medium-emphasis text-center">
              Need any further assistance? <strong>Call Us: </strong> +880
              1728-493546, +880 1711-034299
            </p>
          </v-col>
          <v-col cols="12" md="6">
            <p class="text-medium-emphasis text-center">
              @2024-{{ new Date().getFullYear() }}<strong> AssisThem.</strong>
              All rights reserved.
            </p>
          </v-col>
        </v-row>
      </v-row>
    </v-row>
  </v-footer>
</template>

<script setup>
  import { ref } from 'vue'

  const Email = ref()
  const icons = ref([
    {
      id: 1,
      name: 'Facebook',
      title: 'Facebook',
      src: 'mdi-facebook',
      url: 'https://www.facebook.com/liton.miah.585/',
      desc: '',
      status: true,
    },
    {
      id: 2,
      name: 'Whatsapp',
      title: 'Whatsapp',
      src: 'mdi-whatsapp',
      url: 'https://wa.link/q5ruqv',
      desc: '',
      status: true,
    },
    {
      id: 3,
      name: 'Instagram',
      title: 'Instagram',
      src: 'mdi-instagram',
      url: '',
      desc: '',
      status: true,
    },
    {
      id: 4,
      name: 'Twitter',
      title: 'Twitter',
      src: 'mdi-twitter',
      url: '',
      desc: '',
      status: true,
    },
    {
      id: 5,
      name: 'Linkdin',
      title: 'Linkdin',
      src: 'mdi-linkdin',
      url: 'https://www.linkedin.com/in/md-liton-miah-61a77b33b/',
      desc: '',
      status: true,
    },
  ])
  const footers = ref([
    {
      id: 3,
      name: 'Products',
      title: 'Products',
      src: 'mdi-account-outlined',
      url: '',
      desc: '',
      status: true,
      items: [
        {
          id: 1,
          name: 'Application UI',
          title: 'Application UI',
          src: 'mdi-account-outlined',
          url: '/products/cards',
          desc: '',
          status: true,
        },
        {
          id: 2,
          name: 'Marketing',
          title: 'Marketing',
          src: 'mdi-account-outlined',
          url: '/products/galleries',
          desc: '',
          status: true,
        },
        {
          id: 3,
          name: 'Ecommerce',
          title: 'Ecommerce',
          src: 'mdi-account-outlined',
          url: '/products/Cards',
          desc: '',
          status: true,
        },
        {
          id: 4,
          name: 'Vue Gallery',
          title: 'Vue Gallery',
          src: 'mdi-account-outlined',
          url: '/products/galleries',
          desc: '',
          status: true,
        },
      ],
    },
    {
      id: 1,
      name: 'solutions',
      title: 'Solutions',
      src: 'mdi-account-outlined',
      url: '',
      desc: '',
      status: true,
      items: [
        {
          id: 1,
          name: 'Marketing',
          title: 'Marketing',
          src: 'mdi-account-outlined',
          url: '/',
          desc: '',
          status: true,
        },
        {
          id: 2,
          name: 'Analytics',
          title: 'Analytics',
          src: 'mdi-account-outlined',
          url: '/',
          desc: '',
          status: true,
        },
        {
          id: 3,
          name: 'Commerce',
          title: 'Commerce',
          src: 'mdi-account-outlined',
          url: '/',
          desc: '',
          status: true,
        },
        {
          id: 4,
          name: 'Insights',
          title: 'Insights',
          src: 'mdi-account-outlined',
          url: '/',
          desc: '',
          status: true,
        },
      ],
    },
    {
      id: 2,
      name: 'Support',
      title: 'Support',
      src: 'mdi-account-outlined',
      url: '',
      desc: '',
      status: true,
      items: [
        {
          id: 1,
          name: 'Pricing',
          title: 'Pricing',
          src: 'mdi-account-outlined',
          url: '/',
          desc: '',
          status: true,
        },
        {
          id: 2,
          name: 'Documentation',
          title: 'Documentation',
          src: 'mdi-account-outlined',
          url: '/',
          desc: '',
          status: true,
        },
        {
          id: 3,
          name: 'Guides',
          title: 'Guides',
          src: 'mdi-account-outlined',
          url: '/',
          desc: '',
          status: true,
        },
        {
          id: 4,
          name: 'API Status',
          title: 'API Status',
          src: 'mdi-account-outlined',
          url: '/',
          desc: '',
          status: true,
        },
      ],
    },

    {
      id: 4,
      name: 'Company',
      title: 'Company',
      src: 'mdi-account-outlined',
      url: '',
      desc: '',
      status: true,
      items: [
        {
          id: 1,
          name: 'About',
          title: 'About',
          src: 'mdi-account-outlined',
          url: '/',
          desc: '',
          status: true,
        },
        {
          id: 2,
          name: 'Blog',
          title: 'Blog',
          src: 'mdi-account-outlined',
          url: '/',
          desc: '',
          status: true,
        },
        {
          id: 3,
          name: 'Changelog',
          title: 'Changelog',
          src: 'mdi-account-outlined',
          url: '/',
          desc: '',
          status: true,
        },
        {
          id: 4,
          name: 'Jobs',
          title: 'Jobs',
          src: 'mdi-account-outlined',
          url: '/',
          desc: '',
          status: true,
        },
        {
          id: 5,
          name: 'Contact us',
          title: 'Contact us',
          src: 'mdi-account-outlined',
          url: '/',
          desc: '',
          status: true,
        },
      ],
    },
  ])
  function home() {
    useRouter().push('/')
  }
</script>
<style scoped>
  a {
    text-decoration: none;
  }
</style>
