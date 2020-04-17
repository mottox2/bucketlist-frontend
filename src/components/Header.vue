<template>
  <v-app-bar color="primary">
    <v-toolbar-title class="display-2 font-weight-black"
      ><router-link to="/">Bucketlist</router-link></v-toolbar-title
    >
    <v-spacer></v-spacer>
    <v-toolbar-items v-if="userId != ''">
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon large v-on="on">
            <v-avatar size="24px" item>
              <v-img src="../../static/star.png"
            /></v-avatar>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="menu in menus" :key="menu">
            <v-list-item-content>
              <v-list-item-title
                ><router-link :to="menu.url">{{
                  menu.name
                }}</router-link></v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar-items>
    <div v-else-if="userId == ''">
      <v-btn text outlined to="/signin">
        signin
      </v-btn>
      <v-btn text outlined to="/signup">
        signup
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        { name: "bucketlist", url: "/bucketlist" },
        { name: "profile", url: "/profile" },
        { name: "logout", url: "/logout" },
      ],
    };
  },
  computed: {
    userId: function () {
      return this.$store.getters.userId;
    },
  },
};
</script>
