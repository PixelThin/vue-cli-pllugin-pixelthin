<template>
  <v-app light class="ov-x-hidden">
    <header-nav></header-nav>
    <nav-drawer></nav-drawer>
    <v-content class="base-dark--text lato">
      <router-view></router-view>
    </v-content>
    <footer-nav></footer-nav>
  </v-app>
</template>
<style lang="scss">
@import "@/sass/custom.scss";
</style>
<script>
import navDrawer from "@/components/nav-drawer/nav-drawer.vue";
import headerNav from "@/components/header-nav/header-nav.vue";
import footerNav from "@/components/footer-nav.vue";
export default {
  name: "App",
  components: {
    headerNav,
    footerNav,
    navDrawer,
  },
  data: () => ({
    //
  })
};
</script>
