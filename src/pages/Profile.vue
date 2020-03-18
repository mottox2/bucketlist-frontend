<template>
  <div class="profile">
    <v-text>profile</v-text>
      {{ profiles.email }}
    <button v-on:click="getProfile">げっと</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Profile',
  data(){
    return {
      profiles:[]
    }
  },
  methods:{
    getProfile(){
      var _this = this;
      var token = localStorage.getItem('access_token')
      var user_id = localStorage.getItem('user_id')
      const auth = {
        headers: {
          'Authorization': 'JWT ' + token,
        }
      }
      axios.get('/api/v1/users/'+ user_id ,auth).then(function(response){
        console.log(response.data);
        _this.profiles = response.data;
      })
    }
  }
}
</script>