import { createRouter, createWebHistory } from 'vue-router'
import UserLogin from '../views/user/UserLogin.vue';
import UserHome from '../views/user/UserHome.vue';
import AboutView from '../views/AboutView.vue';
import UserRegister from '../views/user/UserRegister.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AboutView
    },
    {
      path: '/user',
      name: 'user-parent',
      children: [
        {
          path: '',
          name: 'user',
          component: UserHome,          
        },
        {
          path: 'register',
          name: 'user-register',
          component: UserRegister,          
        },
        {
          path: 'login',
          name: 'user-login',
          component: UserLogin,          
        },
        {
          path: ':user',
          name: 'user-home',
          component: UserHome,          
        },
      ]
    }  
  ]
})

export default router