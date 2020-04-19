<template>
  <v-app>
    <div id="app">
      <Header />
      <router-view />
    </div>
  </v-app>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "app",
  components: {
    Header,
  },
};
</script>
