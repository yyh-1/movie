import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path:'/',
        component: () => import('./views/Home'),
    },
    {
        path:'/home',
        component: () => import('./views/Home'),
    },
    {
        path:'/chosen',
        component: () => import('./views/Chosen'),
    },
    {
        path:'/community',
        component: () => import('./views/Community'),
    },
    {
        path:'/report',
        component: () => import('./views/Report'),
    },
    {
        path:'/login',
        component: () => import('./views/Login'),
    },
  ]

  const router = new VueRouter({
    mode: 'history',
    routes,
  });

  export default router;