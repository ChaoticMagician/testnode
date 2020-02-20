import Vue from "vue";
import VueRouter from "vue-router";
import homepage from "../views/homepage.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: () => import("../views/login.vue")
  },
  {
    path: "/imapp",
    name: "imapp",
    component: () => import("../views/imapppage.vue")
  },
  {
    path: "/home",
    name: "home",
    redirect: '/homepage',//重定向首页
    component:homepage,
    children:[
      {
        path: "/homepage",
        name: "homepage",
        components:{
          default: () => import("../components/formComponents/test1form.vue"),
        },
      },
      {
        path: "/register/input",
        name: "registerInput",
        components:{
          default: () => import("../components/registerComp/registerInput.vue"),
        },
      },
      {
        path: "/register/out",
        name: "registerout",
        components:{
          default: () => import("../components/registerComp/registerOut.vue"),
        },
      },
      {
        path: "/register/damage",
        name: "registerDamage",
        components:{
          default: () => import("../components/registerComp/registerDamage.vue"),
        },
      },
      {
        path: "/register/check",
        name: "registerCheck",
        components:{
          default: () => import("../components/registerComp/registerCheck.vue"),
        },
      },
      {
        path: "/goods/goodsControl",
        name: "goodsControl",
        components:{
          default: () => import("../components/goodsComp/goodsControl.vue"),
        },
      },
      {
        path: "/goods/goodsQuery",
        name: "goodsQuery",
        components:{
          default: () => import("../components/goodsComp/goodsQuery.vue"),
        },
      },
      {
        path: "/statistics/index",
        name: "statistics",
        components:{
          default: () => import("../components/statisticsComp/statistics.vue"),
        },
      },
      {
        path: "/warn/rule",
        name: "warnrule",
        components:{
          default: () => import("../components/warnRuleComp/warnRule.vue"),
        },
      },
      {
        path: "/warn/record",
        name: "warnRecord",
        components:{
          default: () => import("../components/warnRuleComp/warnRecord.vue"),
        },
      },
    ],
  }
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
});

export default router;
