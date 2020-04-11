<template>
  <v-app>
    <v-container> </v-container>
  </v-app>
</template>

<script>
import router from "../router"
export default {
  name: "logout",
  methods: {
    logout() {
      this.$store.commit("clearUserId");
      router.push({ name: "home" });
    },
  },
};
</script>
