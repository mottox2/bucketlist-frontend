<template>
    <div>
      <div>signup</div>
      <input class="input" type="email" v-model="email" name="email">
      <input class="password" type="password" v-model="password" name="password">
      <input class="password" type="password" v-model="confirmation" name="confirmation">
      <button v-on:click="signup">サインアップ</button>  

      <router-link to="/signin"> アカウントをお持ちの方はこちら </router-link>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'signup',
  data(){
    return{
      email:"",
      password:"",
      confirmation:""
    }
  },
  methods:{
    signup(){
        if(this.password === this.confirmation){
          var data = {
              email: this.email,
              password: this.password,
          }
          console.log(data)       
          axios.post('/api/v1/users/', data).then(function(response){
              console.log(response)
          })
        }else{
          console.log("だめです")          
        }
    }
  }
}
</script>

<style>

</style>
