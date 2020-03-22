<template>
  <v-app>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>Login form</v-toolbar-title>
              <v-spacer />
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  label="email"
                  name="email"
                  type="email"
                  v-model="email"
                />

                <v-text-field
                  id="password"
                  label="Password"
                  name="password"
                  type="password"
                  v-model="password"
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <router-link to="/signup">
                アカウントをお持ちではないですか？
              </router-link>
              <v-spacer />
              <v-btn color="primary" v-on:click="signin">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import axios from "axios";
import jwt_decode from "jwt-decode";

export default {
  name: "signin",
  data() {
    return {
      user_id: "",
      email: "",
      password: "",
      token: ""
    };
  },
  methods: {
    signin() {
      var _this = this;
      const payload = {
        email: this.email,
        password: this.password
      };

      axios.post("/api/v1/token", payload).then(function(response) {
        _this.token = response.data["token"];

        // トークンをデコードする
        const decoded = jwt_decode(_this.token);

        // localStorageにaccess_tokenとuser_idを設定する
        localStorage.setItem("access_token", _this.token);
        localStorage.setItem("user_id", decoded.user_id);
      });
    }
  }
};
</script>

<style></style>
