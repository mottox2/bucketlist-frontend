<template>
  <v-app>
    <v-container>
      ユーザ登録が完了しました
    </v-container>
  </v-app>
</template>

<script>
import axios from "axios";
import router from "../router";

export default {
  name: "signup_complete",
  methods: {
    signup_complete() {
      const token = this.$route.params["token"];
      axios.get("/api/v1/users/complete/" + token).then(function () {
        router.push({ name: "bucketlist" });
      });
    }
  },
  created: function () {
    this.signup_complete();
  },
};
</script>

<style></style>
