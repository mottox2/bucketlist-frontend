<template>
  <v-app-bar>
    <v-toolbar-title class="display-2 font-weight-black"
      >Bucketlist</v-toolbar-title
    >
    <v-spacer></v-spacer>
    <v-toolbar-items v-if="userId != ''">
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon large v-on="on">
            <v-avatar size="32px" item>
              <v-img src="../assets/logo.png"
            /></v-avatar>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title
              ><router-link to="/bucketlist">
                bucketlist
              </router-link></v-list-item-title
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-title
              ><router-link to="/profile">
                profile
              </router-link></v-list-item-title
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-title
              ><router-link to="/logout">
                logout
              </router-link></v-list-item-title
            >
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar-items>
    <v-toolbar-items v-else-if="userId == ''">
      <v-btn to="/signin">
        signin
      </v-btn>
      <v-btn to="/signup">
        signup
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  computed: {
    userId: function () {
      return this.$store.getters.userId;
    },
  },
};
</script>
