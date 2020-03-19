<template>
    <div>
        <div>signin</div>
        <input class="input" type="email" v-model="email" name="email">
        <input class="password" type="password" v-model="password" name="password">
        <button v-on:click="signin">サインイン</button>  
    </div>
</template>

<script>
import axios from 'axios';
import jwt_decode from 'jwt-decode';

export default {
  name: 'signin',
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
        const payload = {
            email: this.email,
            password: this.password,
        }
        console.log(payload)
        axios.post('/api/v1/token', payload).then(function(response){
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

<style>

</style>
