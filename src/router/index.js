import Vue from "vue";
import VueRouter from "vue-router";

const home = () => import("../views/home/Home.vue")
const category = () => import('../views/category/Category.vue')
const cart = () => import('../views/cart/Cart.vue')
const profile = () => import('../views/profile/Profile.vue')

Vue.use(VueRouter);

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/category',
    component: category
  },
  {
    path: '/cart',
    component: cart
  },{
    path: '/profile',
    component: profile
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkActiveClass:'mui-active' //覆盖默认路由高亮的类，默认的类叫做router-link-active
});

export default router;
