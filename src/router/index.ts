import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import ChildrenTest from "@/views/ChildrenTest.vue";
import Movie from "@/components/MyMovie/Movie.vue";
import MyMovie from "@/views/MyMovie.vue";
import Login from "@/views/Login.vue";
import UserInfo from "@/components/UserInfo/userInfo.vue";
import Users from "@/components/UserInfo/components/MyUsers.vue";
import Rights from "@/components/UserInfo/components/MyRights.vue";
import Goods from "@/components/UserInfo/components/MyGoods.vue";
import Orders from "@/components/UserInfo/components/MyOrders.vue";
import Settings from "@/components/UserInfo/components/MySettings.vue";

const routes: Array<RouteRecordRaw> = [
  {
    // 命名路由的name的值唯一，不能重复，否则页面显示空白
    path: "/",
    redirect: "/login",
  },
  {
    // 命名路由的name的值唯一，不能重复，否则页面显示空白
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    // 命名路由的name的值唯一，不能重复，否则页面显示空白
    path: "/userInfo",
    name: "UserInfo",
    component: UserInfo,
    children: [
      { path: "users", component: Users },
      { path: "rights", component: Rights },
      { path: "goods", component: Goods },
      { path: "orders", component: Orders },
      { path: "settings", component: Settings },
    ],
  },
  {
    path: "/about/:test",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue"),
    component: About,
  },
  {
    path: "/movie/:movieId",
    name: "movie",
    component: Movie,
    props: true,
  },
  {
    path: "/movie",
    name: "MyMovie",
    component: MyMovie,
    props: true,
  },
  /*
    嵌套路由
     */
  {
    path: "/childrenTest",
    name: "ChildrenTest",
    component: ChildrenTest,
    // // 重定向
    redirect: "/childrenTest/about",
    children: [
      // 子路由中path 开头不需要加/
      {
        path: "home",
        name: "Home1",
        component: Home,
      },
      {
        path: "about",
        name: "About1",
        component: About,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
// 导航守卫
// router.beforeEach((to, from, next) => {
//   // console.log(to.path);
//   if(to.path === "/login") return next();
//   const token = localStorage.getItem("token");
//   if (!token){
//     return next("/login");
//   }
//   next();
// });
export default router;
