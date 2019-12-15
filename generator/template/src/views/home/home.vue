<template>
  <v-container class="pt-0" fluid>
    <v-row class="vh-80">
      <v-col cols="12" class="vh-80">
        <v-row class="mt-6">
          <v-col cols="12" md="4" offset-md="7" class="text-end my-8">
            <div v-scroll-reveal="slideInLeft" class="mb-3 hidden-sm-and-down">
              <span class="display-3 secondary--text">New Site</span>
              <span class="display-3 secondary-dark--text font-weight-bold">&nbsp;by PixelThin</span>
            </div>
          </v-col>
        </v-row>
        <v-row class="mt-12">
          <v-col cols="6" md="2" offset-md="4" class="text-end mb-6 mt-12">
            <v-btn outlined class="pa-6 base-dark primary--text mt-12" to="/about-us">About Us</v-btn>
          </v-col>
          <v-col cols="6" md="2" class="text-left mb-6 mt-12">
            <v-btn outlined class="pa-6 base-dark primary--text mt-12" to="/contact-us">Contact Us</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
.logo-centered {
  width: 100px;
  margin-left: auto;
  margin-right: auto;
}
</style>

<script>
import { slideInLeft, slideInRight } from "@/lib/transitions";

export default {
  data: () => ({
    slideInLeft,
    slideInRight
  }),
  components: {}
};
</script>
