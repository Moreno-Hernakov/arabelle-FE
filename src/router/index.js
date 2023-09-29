import VueRouter from 'vue-router'

import userMain from '../components/landing/main.vue';
import registerComponent from '../components/auth/register.vue';
import loginComponent from '../components/auth/login.vue';
import mainUserComponent from '../components/layouts/user/main.vue';

// user page
import homeComponent from '../components/user/home.vue';
import exploreComponent from '../components/user/explore.vue';
import searchComponent from '../components/user/search.vue';
import profileComponent from '../components/user/profile.vue';

const routes = [
    {
      path: '/home', 
      name: "mainUser",
      component: mainUserComponent, 
      children: [
            {
              path: "",
              name: "home",
              component: homeComponent,
            },
            {
              path: "/explore",
              name: "explore",
              component: exploreComponent,
            },
            {
              path: "/search",
              name: "search",
              component: searchComponent,
            },
            {
              path: "/profile",
              name: "profile",
              component: profileComponent,
            },
      ]
    },
    { 
      // user
      path: '/', 
      name: "user-main",
      component: userMain, 
    //   redirect: { name: 'landing' },
    //   children: [
    //     {
    //       path: "/",
    //       name: "landing",
    //       component: landing,
    //     },
    //     { 
    //       path: '/home', 
    //       component: home, 
    //       beforeEnter(to, from, next){
    //         if (!localStorage.getItem("token")){
    //           next('/login')
    //           return
    //         } 
    //           next()
    //       }
    //     },
    //   ]
    },
    {
      path: '/login', 
      name: "login",
      component: loginComponent, 
    },
    {
      path: '/register', 
      name: "register",
      component: registerComponent, 
    }
]

const router = new VueRouter({routes})
export default router