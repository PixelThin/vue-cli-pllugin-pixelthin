<template>
  <v-container class="pt-0" fluid>
    <v-row align="center">
      <v-col cols="11">
        <div
          v-scroll-reveal="slideInLeft"
          class="display-1 mb-3 hidden-sm-and-down font-weight-light text-end mr-12 text-uppercase"
        >
          Contact Us
          <span class="font-weight-light secondary-dark--text display-2">Let's Talk</span>
        </div>
      </v-col>
    </v-row>
    <v-row class="d-flex d-sm-none vh-25">
      <v-col cols="12" class="my-auto">
        <div class="title text-center font-weight-light text-uppercase">
          Contact Us
          <span class="secondary-dark--text headline">We're Here</span>
        </div>
      </v-col>
    </v-row>
    <v-row fluid class="align-center mt-9 mb-12">
      <v-col cols="12" md="4" offset-md="3">
        <v-card @click="dialog=true">
          <v-img :src="`${imageHost}/contact-image.jpg`"></v-img>
          <v-card-title class="display-1 justify-center mt-3">Let's get in touch!</v-card-title>
          <v-card-text class="text-center">Use our form to ask a question.</v-card-text>
          <v-card-actions class="justify-center mb-12">
            <v-btn class="base-dark primary--text" @click="showQuickContact=true">Contact Us!</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col
        md="3"
        class="primary-dark-gradient hidden-sm-and-down ml-n12 mt-n12 align-self-stretch"
      >
        <v-row>
          <v-col cols="8" offset="3" class="mt-12">
            <v-img src="https://picsum.photos/id/417/300/100" class="mt-12" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { slideInLeft } from "@/lib/transitions";
export default {
  data() {
    return {
      slideInLeft,
      showQuickContact: false
    };
  },
};
</script>
