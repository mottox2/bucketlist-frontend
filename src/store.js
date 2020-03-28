import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default {
    state: {
        userId : ""
    },
    mutations:{
        setUserId(newValue){
            this.state.userId = newValue
            console.log(this.state.userId)
        },
        clearUserId(){
            this.state.userId = ""
            console.log(this.state.userId)
        }
    },
    getters: {
        userId: state => {
            console.log(state.userId)

            return state.userId
        }
    }
}

