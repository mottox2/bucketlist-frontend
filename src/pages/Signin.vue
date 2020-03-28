<template>
  <v-app>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>ログイン</v-toolbar-title>
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
              <v-btn color="primary" v-on:click="signin">Login</v-btn>
              <v-spacer />
              <router-link to="/signup">
                アカウントをお持ちではないですか？
              </router-link>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "signin",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    signin() {
      const payload = {
        email: this.email,
        password: this.password,
      };

      this.$store.dispatch("setUserId", payload);
    },
  },
};
</script>
