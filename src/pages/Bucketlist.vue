<template>
  <v-app>
    <v-container>
      <v-row>
        <v-text-field
          class="input"
          type="title"
          v-model="title"
          name="title"
        ></v-text-field>
        <v-btn small v-on:click="saveBucketlist()">記録</v-btn>
      </v-row>
      <v-layout wrap>
        <v-flex v-for="(bucketlist, id) in bucketlists" :key="id">
          <v-card color="gray" width="200px" height="100px">
            <v-card-text align="center">
              {{ bucketlist.title }}
            </v-card-text>
            <v-card-actions align="center">
              <v-spacer></v-spacer>
              <v-btn small v-on:click="editBucketlist(bucketlist)"
                >この目標を具体的にする</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import axios from "axios";
import router from "../router";

export default {
  name: "Bucketlist",

  data() {
    return {
      bucketlists: [],
      title: "",
      text: "",
    };
  },
  computed: {
    userId: function () {
      return this.$store.getters.userId;
    },
    token: function () {
      return this.$store.getters.token;
    },
  },
  methods: {
    getBucketlist: function () {
      const _this = this;
      const token = _this.token;
      const userId = _this.userId;
      const auth = {
        headers: {
          Authorization: "JWT " + token,
        },
      };
      axios
        .get("/api/v1/users/" + userId + "/bucketlists", auth)
        .then(function (response) {
          return (_this.bucketlists = response.data);
        });
    },
    saveBucketlist: function () {
      const _this = this;
      const token = _this.token;
      const userId = _this.userId;
      const data = {
        title: _this.title,
        text: "text",
        user_id: userId,
      };

      axios
        .post("/api/v1/users/" + userId + "/bucketlists", data, {
          headers: { Authorization: "JWT " + token },
        })
        .then(function () {
          _this.title = "";
          _this.bucketlists = _this.getBucketlist();
        })
        .catch(function(){
        });
    },
    editBucketlist(bucketlist) {
      const bucketlist_id = bucketlist.id;
      router.push({
        name: "bucketlistdetail",
        params: { bucketlist_id: bucketlist_id },
      });
    },
  },
  created: function () {
    this.bucketlists = this.getBucketlist();
  },
};
</script>
