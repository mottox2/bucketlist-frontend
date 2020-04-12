import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

import axios from "axios";
import jwt_decode from "jwt-decode";

export default new Vuex.Store({
    state: {
        userId : "",
        token : "",
    },
    mutations:{
        setUserId(state,newValue){
            state.userId = newValue
        },
        clearUserId(state){
            state.userId = ""
        },
        setToken(state,newValue){
            state.token = newValue
        },
        clearToken(state){
            state.token = ""
        },        
    },
    getters: {
        userId: function(state)  {
            return state.userId
        },
        token: function(state)  {
            return state.token
        }
    },
    actions: {
        setUser: function(context,payload){
            console.log(typeof(payload))
            axios.post("/api/v1/token", payload).then(function (response) {
                const token = response.data["token"];
                context.commit("setToken", token); 
                const decoded = jwt_decode(token);
                context.commit("setUserId", decoded.user_id);
            });
        },
    },
    plugins: [createPersistedState(
        { storage: window.sessionStorage },
        
    )]
})
