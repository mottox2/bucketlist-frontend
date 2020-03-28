import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import axios from "axios";
import jwt_decode from "jwt-decode";

export default new Vuex.Store({
    state: {
        userId : ""
    },
    mutations:{
        setUserId(state,newValue){
            state.userId = newValue
        },
        clearUserId(state){
            state.userId = ""
        }
    },
    getters: {
        userId: function(state)  {
            return state.userId
        }
    },
    actions: {
        setUserId: function(context,payload){

            axios.post("/api/v1/token", payload).then(function (response) {
                let token = response.data["token"];
        
                const decoded = jwt_decode(token);
                context.commit("setUserId", decoded.user_id);
              });
            },
        }
    
})
