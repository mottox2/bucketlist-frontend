<template>
  <div class="bucketlist">
    <router-link to="/bucketlist"> 100個の目標へ戻る </router-link>

    <input class="input" type="title" v-model="bucketlist.title" name="title">
    <input class="input" type="text" v-model="bucketlist.text" name="text">

    <button v-on:click="updateBucketlist(bucketlist)">update</button>
    <button v-on:click="deleteBucketlist(bucketlist)">del</button>
    <router-link to="/bucketlist"> 100個の目標へ戻る </router-link>
  </div>
</template>

<script>
import axios from 'axios';
import router from '../router'

export default {
  name: 'Bucketlist',

  data(){
    return {
      bucketlist:{},
    }
  },created: function(){
    this.bucketlist = this.getBucketlist()
  },
  methods:{
    getBucketlist(){
      var _this = this
      var token = localStorage.getItem('access_token')
      var user_id = localStorage.getItem('user_id')
      var bucketlist_id = this.$route.params['bucketlist_id']
      const auth = {
        headers: {
          'Authorization': 'JWT ' + token,
        }
      }
      axios.get('/api/v1/users/'+ user_id +'/bucketlists/' + bucketlist_id,auth).then(function(response){

        _this.bucketlist = response.data
        console.log(_this.bucketlist);
      })
    },
    updateBucketlist(bucketlist){
      var token = localStorage.getItem('access_token')
      var user_id = localStorage.getItem('user_id')
      var bucketlist_id = bucketlist.id
      let data = {
          title:this.bucketlist.title,
          text:this.bucketlist.text,
          user_id: localStorage.getItem('user_id')
      }
      console.log(data);
      axios.put('/api/v1/users/'+ user_id +'/bucketlists/'+ bucketlist_id,data,{headers:{'Authorization': 'JWT ' + token}}).then(function(response){
        console.log(response.data);
      })
    },
    deleteBucketlist(bucketlist){
      var token = localStorage.getItem('access_token')
      var user_id = localStorage.getItem('user_id')
      var bucketlist_id = bucketlist.id

      axios.delete('/api/v1/users/'+ user_id +'/bucketlists/'+ bucketlist_id,{headers:{'Authorization': 'JWT ' + token}}).then(function(response){
        console.log(response.data);
        router.push({ name: 'bucketlist'})
      })
    }
  }
}
</script>