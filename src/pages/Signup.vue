<template>
    <div>
        <div>signup</div>
        <input class="input" type="email" v-model="email" name="email">
        <input class="password" type="password" v-model="password" name="password">
        <button v-on:click="signup">サインあっぷ</button>  
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
    }
  },
  methods:{
    signup(){

        var data = {
            email: this.email,
            password: this.password,
        }
        console.log(data)       
        axios.post('/api/v1/users/', data).then(function(response){
            console.log(response)
        })
    }
  }
}
</script>

<style>

</style>
