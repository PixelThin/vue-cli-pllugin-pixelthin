<template>
  <v-container fluid class="pt-0">
    <v-row class="vh-60">
      <v-col class="text-end mt-10" cols="12" md="5" offset-md="6">
        <v-img src="https://picsum.photos/id/417/300/100" />
        <v-row class="mt-12">
          <v-col cols="12" md="4" offset-md="6" class="text-end my-8">
            <div
              v-scroll-reveal="slideInLeft"
              class="display-1 mb-3 primary--text hidden-sm-and-down"
            >
              <span class="font-weight-light">Elegance</span>
              <br />
              <span class="font-weight-bold primary--text text-uppercase">innovation</span>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="mt-12">
      <v-col cols="12" md="6" offset-md="3">
        <p class="display-1 text-uppercase font-weight-light">About Us</p>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { slideInLeft, slideInRight } from "@/lib/transitions";
export default {
  components: {
  },
  data: () => ({
    slideInLeft,
    slideInRight,
    showQuickContact: false
  })
};
</script>
