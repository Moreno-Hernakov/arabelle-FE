import VueRouter from 'vue-router'

import userMain from '../components/user/main.vue'
const routes = [
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
]

const router = new VueRouter({routes})
export default router