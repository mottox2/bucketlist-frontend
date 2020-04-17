<template>
  <v-app>
    <v-container>
      <v-row>
        <v-card-text align="center">
          <v-form>
            <v-text-field
              label="目標"
              type="title"
              v-model="title"
              name="title"
            />
            <v-text-field
              label="具体的に！"
              type="text"
              v-model="text"
              name="text"
            />
          </v-form>

          <v-btn color="primary" v-on:click="updateBucketlist()"
            >目標を更新</v-btn
          >
          <v-dialog v-model="dialog" persistent max-width="290">
            <template v-slot:activator="{ on }">
              <v-btn color="error" v-on="on">目標を削除…</v-btn>
            </template>
            <v-card>
              <v-card-title class="headline">本当に削除しますか？</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="error" v-on:click="deleteBucketlist()"
                  >削除する…</v-btn
                >
                <v-btn @click="dialog = false">やっぱりやめる</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card-text>
      </v-row>
      <v-row justify="center">
        <v-btn to="/bucketlist"> 100個の目標へ戻る </v-btn>
      </v-row>
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
      title: "",
      text: "",
      dialog: false,
    };
  },
  methods: {
    getBucketlist() {
      const _this = this;
      const token = _this.token;
      const userId = _this.userId;
      const bucketlist_id = this.$route.params["bucketlist_id"];
      const auth = {
        headers: {
          Authorization: "JWT " + token,
        },
      };
      axios
        .get("/api/v1/users/" + userId + "/bucketlists/" + bucketlist_id, auth)
        .then(function (response) {
          _this.title = response.data.title;
          _this.text = response.data.text;
        });
    },
    updateBucketlist() {
      const _this = this;
      const token = _this.token;
      const userId = _this.userId;
      const bucketlist_id = this.$route.params["bucketlist_id"];
      let payload = {
        title: this.title,
        text: this.text,
        user_id: _this.userId,
      };
      axios
        .put(
          "/api/v1/users/" + userId + "/bucketlists/" + bucketlist_id,
          payload,
          { headers: { Authorization: "JWT " + token } }
        )
        .then(function () {
          router.push({ name: "bucketlist" });
        });
    },
    deleteBucketlist() {
      const _this = this;
      const token = _this.token;
      const userId = _this.userId;
      const bucketlist_id = this.$route.params["bucketlist_id"];

      axios
        .delete("/api/v1/users/" + userId + "/bucketlists/" + bucketlist_id, {
          headers: { Authorization: "JWT " + token },
        })
        .then(function () {
          router.push({ name: "bucketlist" });
        });
    },
  },
  computed: {
    userId: function () {
      return this.$store.getters.userId;
    },
    token: function () {
      return this.$store.getters.token;
    },
  },
  created: function () {
    this.bucketlist = this.getBucketlist();
  },
};
</script>
