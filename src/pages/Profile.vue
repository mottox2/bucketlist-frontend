<template>
  <v-app>
    <v-container>
      <v-card class="elevation-12">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>プロフィール</v-toolbar-title>
          <v-spacer />
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field label="username" v-model="username" name="username" />
            <v-text-field label="email" v-model="email" name="email" />
            <v-text-field
              label="password"
              v-model="password"
              type="password"
              name="old_password"
            />
            <v-text-field
              label="new password"
              v-model="new_password"
              type="password"
              name="password"
            />
            <v-text-field
              label="confirmation password"
              v-model="confirmation_password"
              type="password"
              name="password"
            />
          </v-form>
        </v-card-text>
        <v-row justify="center">
          <v-btn color="primary" v-on:click="updateProfiles()"> 更 新 </v-btn>
          <v-btn color="error" v-on:click.ctrl="deleteProfiles()">
            退 会
          </v-btn>
        </v-row>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
import axios from "axios";
import router from "../router";

export default {
  name: "Profile",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      new_password: "",
      confirmation_password: "",
    };
  },
  methods: {
    getProfile() {
      var _this = this;
      var token = localStorage.getItem("access_token");
      var user_id = localStorage.getItem("user_id");
      const auth = {
        headers: {
          Authorization: "JWT " + token,
        },
      };
      axios.get("/api/v1/users/" + user_id, auth).then(function (response) {
        _this.username = response.data.username;
        _this.email = response.data.email;
      });
    },
    updateProfiles() {
      var token = localStorage.getItem("access_token");
      var user_id = localStorage.getItem("user_id");
      var data = {
        username: this.username,
        email: this.email,
        password: this.password,
      };
      if (
        this.new_password != "" &&
        this.confirmation_password &&
        this.new_password === this.confirmation_password
      ) {
        data.password = this.new_password;
      }
      axios
        .put("/api/v1/users/" + user_id, data, {
          headers: { Authorization: "JWT " + token },
        })
        .then(function (response) {
          console.log(response.data);
        });
    },
    deleteProfiles() {
      var token = localStorage.getItem("access_token");
      var user_id = localStorage.getItem("user_id");

      axios
        .delete("/api/v1/users/" + user_id, {
          headers: { Authorization: "JWT " + token },
        })
        .then(function (response) {
          console.log(response.data);
          router.push({ name: "home" });
        });
    },
  },
  created: function () {
    this.profiles = this.getProfile();
  },
};
</script>
