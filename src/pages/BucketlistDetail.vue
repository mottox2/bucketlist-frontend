<template>
  <v-app>
    <v-container>
      <v-row justify="center">
    <v-btn to="/bucketlist"> 100個の目標へ戻る </v-btn>
      </v-row>
      <v-row>
        <v-card-text align="center">
          <v-form>
            <v-text-field label="目標" type="title" v-model="title" name="title"/>
            <v-text-field label="具体的に！" type="text" v-model="text" name="text"/>
          </v-form>
          <v-btn color="primary" v-on:click="updateBucketlist()">目標を更新</v-btn>
          <v-btn color="error" v-on:click.ctrl="deleteBucketlist()">目標を削除…</v-btn>
        </v-card-text>
      </v-row>
      <v-row justify="center">
        <v-btn to="/bucketlist"> 100個の目標へ戻る </v-btn>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import axios from 'axios';
import router from '../router'

export default {
  name: 'Bucketlist',

  data(){
    return {
      title:"",
      text:""
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

        _this.title = response.data.title
        _this.text = response.data.text        
      })
    },
    updateBucketlist(){
      var token = localStorage.getItem('access_token')
      var user_id = localStorage.getItem('user_id')
      var bucketlist_id = this.$route.params['bucketlist_id']
      let data = {
          title:this.title,
          text:this.text,
          user_id: localStorage.getItem('user_id')
      }
      axios.put('/api/v1/users/'+ user_id +'/bucketlists/'+ bucketlist_id,data,{headers:{'Authorization': 'JWT ' + token}}).then(function(){
        router.push({ name: 'bucketlist'})
      })
    },
    deleteBucketlist(){
      var token = localStorage.getItem('access_token')
      var user_id = localStorage.getItem('user_id')
      var bucketlist_id = this.$route.params['bucketlist_id']

      axios.delete('/api/v1/users/'+ user_id +'/bucketlists/'+ bucketlist_id,{headers:{'Authorization': 'JWT ' + token}}).then(function(){
        router.push({ name: 'bucketlist'})
      })
    }
  }
}
</script>