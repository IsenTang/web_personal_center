import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

const Layouts = () => import('@/layout/index.vue');

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      hidden: true
    }
  },
  {
    path: '/',
    component: Layouts,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        name: 'Dashboard',
        meta: {
          title: '首页',
          keepAlive: true
        }
      },
      {
        path: 'user',
        component: () => import('@/views/user/index.vue'),
        name: 'User',
        meta: {
          title: '用户',
          keepAlive: true
        }
      }
    ]
  }
];

// * 异步路由
// const asyncRoutes: RouteRecordRaw[] = [];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...routes]
});

export default router;
