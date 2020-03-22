<template>
  <v-card color="grey lighten-4" flat height="70px" tile>
    <v-toolbar>
      <v-toolbar-title class="display-2 font-weight-black"
        >Bucketlist</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn to="/">
          home
        </v-btn>
        <v-btn to="/profile">
          profile
        </v-btn>
        <v-btn to="/bucketlist">
          bucketlist
        </v-btn>
        <v-btn to="/signin">
          signin
        </v-btn>
        <v-btn to="/signup">
          signup
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-card>
</template>
