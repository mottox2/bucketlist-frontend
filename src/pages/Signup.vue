<template>
  <v-app>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>新規ユーザ登録</v-toolbar-title>
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
                <v-text-field
                  id="confirmation"
                  label="Password"
                  name="confirmation"
                  type="password"
                  v-model="confirmation"
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" v-on:click="signup">signup</v-btn>
              <v-spacer />
              <router-link to="/signin">
                アカウントをお持ちの方はこちら
              </router-link>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  name: "signup",
  data() {
    return {
      email: "",
      password: "",
      confirmation: "",
    };
  },
  methods: {
    signup() {
      if (this.password === this.confirmation) {
        const payload = {
          email: this.email,
          password: this.password,
        };

        axios.post("/api/v1/users/", payload).then(function () {
          console.log("done");
        });
      } else {
        console.log("no");
      }
    },
  },
};
</script>

<style></style>
