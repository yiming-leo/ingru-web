import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {//主页，展示我们的业务
    path: '/',
    name: 'home',
    component: HomeView
  },
  {//招聘，表单填写信息
    path: '/recruitment',
    name: 'recruitment',
    component: () => import('../views/RecruitmentView.vue')
  },
  {//投资，展示投资组合
    path: '/investment',
    name: 'investment',
    component: () => import('../views/InvestmentView.vue')
  },
  {//管理，管理一些表单信息
    path: '/management',
    name: 'management',
    component: () => import('../views/ManagementView.vue')
  },
  {//关于，一些次要内容
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
