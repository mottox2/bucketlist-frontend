<template>
  <div class="bucketlist">
    <v-text>bucketlist</v-text>
    <ul>
      <li v-for="(bucketlist, id) in bucketlists" :key="id">
        {{ bucketlist.title }}
      </li>
    </ul>
    <button v-on:click="getBucketlist">げっと</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Bucketlist',

  data(){
    return {
      bucketlists:[]
    }
  },
  methods:{
    getBucketlist(){
      var _this = this;
      var token = localStorage.getItem('access_token')
      var user_id = localStorage.getItem('user_id')
      const auth = {
        headers: {
          'Authorization': 'JWT ' + token,
        }
      }
      axios.get('http://localhost:8000/api/v1/users/'+ user_id +'/bucketlists',auth).then(function(response){
        console.log(response.data);
        _this.bucketlists = response.data;
      })
    }
  }
}
</script>