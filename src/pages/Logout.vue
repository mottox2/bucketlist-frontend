<template>
  <v-app>
    <v-container> ログアウトしました</v-container>
  </v-app>
</template>

<script>
import router from "../router";

export default {
  name: "logout",
  methods: {
    logout() {
      this.$store.commit("clearToken");
      this.$store.commit("clearUserId");
      router.push({ name: "home" });
    },
  },
  created: function () {
    this.logout();
  },
};
</script>
