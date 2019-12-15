<template>
  <v-app-bar color="base" :elevation="2" app>
    <v-toolbar-title class="headline text-uppercase">
      <router-link class="no-decor" to="/">
        <v-img height="40" width="200" src="@/assets/pixelthin-logo-web.png" />
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn text to="/about-us">About Us</v-btn>
      <v-btn text to="/contact-us">Contact Us</v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>
<style lang="scss" scoped>
</style>
<script>
export default {};
</script>
