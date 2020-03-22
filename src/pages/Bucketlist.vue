<template>
  <div class="bucketlist">

    <input class="input" type="title" v-model="title" name="title">
    <button v-on:click="saveBucketlist()">せーぶ</button>
    <ul>
      <li v-for="(bucketlist, id) in bucketlists" :key="id">
        {{ bucketlist.title }}
        <button v-on:click="editBucketlist(bucketlist)">夢を具体的にする</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import router from '../router'

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
    getBucketlist: function(){
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
        return _this.bucketlists = response.data;
      })
    },
    saveBucketlist: function(){
      var _this = this;
      var token = localStorage.getItem('access_token')
      var user_id = localStorage.getItem('user_id')
      var data = {
          title:_this.title,
          text:"text",
          user_id: localStorage.getItem('user_id')
      }
      axios.post('/api/v1/users/'+ user_id +'/bucketlists',data,{
        headers:{'Authorization': 'JWT ' + token}
        }).then(function(response){
          console.log(response.data);
          _this.title = '';
          _this.bucketlists = _this.getBucketlist()
      })
    },
    editBucketlist(bucketlist){
      var bucketlist_id = bucketlist.id
      router.push({ name: 'bucketlistdetail', params: { bucketlist_id: bucketlist_id }})      
    }
  },
  created: function(){
    this.bucketlists = this.getBucketlist()
  }
}
</script>