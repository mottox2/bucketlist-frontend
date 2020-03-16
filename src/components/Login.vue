<template>
  <div class="login">
    <v-text>login</v-text>
    <input class="input" type="email" v-model="email" name="email">
    <input class="password" type="password" v-model="password" name="password">
    <button v-on:click="signin">認証</button>
  </div>
</template>

<script>
import axios from 'axios';
import jwt_decode from 'jwt-decode';

export default {
  name: 'Login',
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