import { createRouter, createWebHistory, RouteRecordRaw, createWebHashHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/bu/stu'
  },
  {
    path: '/bu',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home/Index.vue'),
    children: [
      {
        path: '/bu/stu',
        component: () => import(/* webpackChunkName: "stu" */ '../views/Stu/Index.vue')
      },
      {
        path: '/bu/stuDetails',
        component: () => import(/* webpackChunkName: "stuDetails" */ '../views/StuDetails/Index.vue')
      },
      {
        path: '/bu/buWeChat',
        component: () => import(/* webpackChunkName: "buWeChat" */ '../views/BuWeChat/Index.vue')
      },
      {
        path: '/bu/outher',
        component: () => import(/* webpackChunkName: "buOuther" */ '../views/BuOuther/Index.vue')
      },
    ]
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login/Index.vue'),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
