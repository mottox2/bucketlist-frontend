<template>
  <v-app>
    <v-container>
    </v-container>
  </v-app>
</template>

<script>

export default {
  name: "logout",
  methods: {
    logout() {
        this.$store.commit("clearUserId")
      }
    }
  }

</script>