<template>
  <div class="bucketlist">
    <v-text>bucketlist</v-text>
    <ul>
      <li v-for="(bucketlist, id) in bucketlists" :key="id">
        {{ bucketlist.title }}
      </li>
    </ul>
    <button v-on:click="getBucketlist">げっと</button>
    <button v-on:click="saveBucketlist">せーぶ</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Bucketlist',

  data(){
    return {
      bucketlists:[],
      title:"",
      text:"",
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
      axios.get('/api/v1/users/'+ user_id +'/bucketlists',auth).then(function(response){
        console.log(response.data);
        _this.bucketlists = response.data;
      })
    },
    saveBucketlist(){
      var token = localStorage.getItem('access_token')
      var user_id = localStorage.getItem('user_id')
      let data = {
          title:"title",
          text:"text",
          user_id: localStorage.getItem('user_id')
      }
      axios.post('/api/v1/users/'+ user_id +'/bucketlists',data,{headers:{'Authorization': 'JWT ' + token}}).then(function(response){
        console.log(response.data);
      })
    }
  }
}
</script>