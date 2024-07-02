import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  }
];

// * 异步路由
// const asyncRoutes: RouteRecordRaw[] = [];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...routes]
});

export default router;
