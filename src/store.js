export default {
    state: {
        user:{
            user_id : ""
        }
    },
    getUserIdAction(){
        return this.state.user.user_id
    },
    setUserIdAction(newValue){
        this.state.user.user_id = newValue
        console.log(this.state.user.user_id)
    },
    clearUserIdAction(){
        this.state.user.user_id = ""
    }
}

