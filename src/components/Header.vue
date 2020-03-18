<template>
  <div class="header">
    <router-link to="/"> home </router-link>
    <router-link to="/profile"> profile </router-link>
    <router-link to="/bucketlist"> bucketlist </router-link>
    <div>login</div>
    <input class="input" type="email" v-model="email" name="email">
    <input class="password" type="password" v-model="password" name="password">
    <button v-on:click="signin">認証</button>
  </div>
</template>

<script>
import axios from 'axios';
import jwt_decode from 'jwt-decode';

export default {
  name: 'header',
  data(){
    return{
      user_id:"",
      email:"",
      password:"",
      token:"",
    }
  },
  methods:{
    signin(){
      var _this = this;
      const URL = 'http://localhost:8000/api/v1/token'
      const payload = {
        email: this.email,
        password: this.password,
      }
      axios.post(URL, payload).then(function(response){
        _this.token = response.data["token"]
        console.log(_this.token)
        const decoded = jwt_decode(_this.token)
        console.log(decoded)
        localStorage.setItem('access_token', _this.token)
        localStorage.setItem('user_id', decoded.user_id)        
      })
    }
  }
}
</script>