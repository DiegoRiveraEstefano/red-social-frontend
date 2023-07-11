import { createRouter, createWebHistory } from 'vue-router'
import UserLogin from '../views/user/UserLogin.vue';
import UserHome from '../views/user/UserHome.vue';
import UserRegister from '../views/user/UserRegister.vue';
import PostView from '../views/post/PostView.vue';
import PostUpload from '../views/post/PostUpload.vue';
import PostDetailed from '../views/post/PostDetailed.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PostView,
    },
    {
      path: '/post',
      name: 'post-parent',
      children: [
        {
          path: '',
          name: 'post-views',
          component: PostView,          
        },
        {
          path: 'upload',
          name: 'post-upload',
          component: PostUpload,          
        },
        {
          path: ':post',
          name: 'post-detailed',
          component: PostDetailed,          
        },
      ]
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