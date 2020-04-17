import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Bucketlist from "./pages/Bucketlist";
import BucketlistDetail from "./pages/BucketlistDetail";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import SigninComplete from "./pages/SignupComplete";
import Logout from "./pages/Logout";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
    },
    {
      path: "/bucketlist",
      name: "bucketlist",
      component: Bucketlist,
    },
    {
      path: "/bucketlist/:bucketlist_id",
      name: "bucketlistdetail",
      component: BucketlistDetail,
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup,
    },
    {
      path: "/signin",
      name: "signin",
      component: Signin,
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout,
    },
    {
      path: "/signup-complete/:token",
      name: "signup-complete",
      component: SigninComplete,
    },
  ],
});
