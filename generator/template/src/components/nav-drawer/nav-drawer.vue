<template>
  <v-navigation-drawer
    color="navigation1"
    @input="handleInput"
    temporary
    right
    app
    :value="drawerOpen"
  >
    <v-list-item class="justify-end">
      <v-btn icon @click="close()">
        <v-icon class="ml-2" small>fa-times</v-icon>
      </v-btn>
    </v-list-item>
    <v-divider></v-divider>
    <v-list-item>
      <v-btn text to="/about-us">
        <span class="mr-2">About Us</span>
      </v-btn>
    </v-list-item>
    <v-list-item>
      <v-btn text to="/contact-us">
        <span class="mr-2">Contact Us</span>
      </v-btn>
    </v-list-item>
  </v-navigation-drawer>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  components: {
  },
  computed: {
    ...mapGetters(["drawerOpen"])
  },
  methods: {
    close() {
      this.$store.commit("setDrawerOpen", false);
    },
    handleInput(value) {
      // To prevent an infinite loop, we only update the store if we're
      // closing the nav-drawer. This works because the only close action
      // that doesn't directly set the store is when clicking outside the
      // nav-drawer to close it. The close and open icons directly set the store.
      if (value === false) {
        this.$store.commit("setDrawerOpen", false);
      }
    }
  }
}
</script>
