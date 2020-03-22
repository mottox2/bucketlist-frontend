<template>
  <div class="header">
    <v-toolbar>
      <v-toolbar-title class="display-2 font-weight-black">Bucketlist</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn>
          <router-link to="/"> home </router-link>
        </v-btn>
        <v-btn>
          <router-link to="/profile"> profile </router-link>
        </v-btn>
        <v-btn>
          <router-link to="/bucketlist"> bucketlist </router-link>
        </v-btn>
        <v-btn>
          <router-link to="/signin"> signin </router-link>
        </v-btn>
        <v-btn>
          <router-link to="/signup"> signup </router-link>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>