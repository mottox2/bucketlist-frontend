import Vue from 'vue'
import App from './App.vue'

import router from './router'
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

import axios from 'axios';
import vuetify from './plugins/vuetify';

import store from "./store"

Vue.config.productionTip = false


axios.defaults.baseURL = process.env.VUE_APP_BACKENDHOST;

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
