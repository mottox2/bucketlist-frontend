import Vue from 'vue'
import App from './App.vue'

import router from './router'
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

import axios from 'axios';
import vuetify from './plugins/vuetify';


Vue.config.productionTip = false

axios.defaults.baseURL = "http://localhost:8000";

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
