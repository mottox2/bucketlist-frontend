import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

import axios from "axios";
import jwt_decode from "jwt-decode";

export default new Vuex.Store({
  state: {
    userId: "",
    token: "",
  },
  mutations: {
    setUserId(state, newValue) {
      state.userId = newValue;
    },
    clearUserId(state) {
      state.userId = "";
    },
    setToken(state, newValue) {
      state.token = newValue;
    },
    clearToken(state) {
      state.token = "";
    },
  },
  getters: {
    userId: function (state) {
      return state.userId;
    },
    token: function (state) {
      return state.token;
    },
  },
  actions: {
    setUser: function (context, payload) {
      axios
        .post("/api/v1/token", payload)
        .then(function (response) {
          if (response.status === 200) {
            const token = response.data["token"];
            const decoded = jwt_decode(token);
            context.commit("setToken", token);
            context.commit("setUserId", decoded.user_id);
          }
        })
        .catch(function (error) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.statusText);
          console.log(error.response.headers);
        });
    },
  },
  plugins: [createPersistedState({ storage: window.sessionStorage })],
});
