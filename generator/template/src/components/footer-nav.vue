<template>
  <v-container fluid class="secondary">
    <v-row class="vh-1 5 mt-4 subtitle-2 font-weight-light">
      <v-col cols="3" offset="1" md="2" offset-md="1">
        <router-link to="/">
          <v-img src="@/assets/pixelthin-logo-text-turquoise.png" />
        </router-link>
      </v-col>
      <v-col cols="3" md="2" offset-md="2">
        <v-row v-for="link in links" :key="link.to">
          <router-link
            class="base--text no-decor"
            :to="link.to"
            :href="link.href"
            :outlined="link.outlined"
          >{{link.name}}</router-link>
        </v-row>
      </v-col>
      <v-col cols="3" offset="1" md="2" offset-md="0">
        <v-row v-for="link in linksRight" :key="link.to">
          <router-link
            class="base--text no-decor"
            :to="link.to"
            :href="link.href"
            :outlined="link.outlined"
          >{{link.name}}</router-link>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="7" md="4" class="primary--text body-2 font-weight-light text-center">
        <router-link class="no-decor font-weight-medium primary-dark--text" to="/">&copy;Site Name</router-link>
      </v-col>
      <v-col
        cols="4"
        offset="1"
        md="4"
        offset-md="4"
        class="primary-dark--text text-end body-2 font-weight-light align-self-end"
      >
        Site Design:
        <a
          href="https://pixelthin.com"
          class="no-decor font-weight-medium primary-dark--text"
        >PixelThin, LLC</a>
      </v-col>
    </v-row>
  </v-container>
</template>
<style lang="scss" scoped>
.footer-btn {
  width: 200px;
}
</style>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    links() {
      return [
        { name: "About Us", to: "/about-us" },
        { name: "Contact Us", to: "/contact-us" }
      ];
    },
    linksRight() {
      return [
        { name: "About Us", to: "/about" },
        { name: "Contact Us", to: "/contact-us" }
      ];
    }
  }
};
</script>
