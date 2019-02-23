import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import NotFound from "./views/NotFound.vue";

import Main from "./views/Main.vue";
import Faq from "./views/Faq.vue";
import Cate from "./views/Cate.vue";
import Cart from "./views/Cart.vue";
import Goods from "./views/Goods.vue";
import Login from "./views/Login.vue";
import Reg from "./views/Reg.vue";
import Order from "./views/Order.vue";

Vue.use(Router);
// 整个项目的路由词典：访问路径 <=> 视图组件
export default new Router({
  routes: [
    { path: "/", redirect: "/index" },
    {
      path: "/index",
      component: Main,
      children: [
        { path: "/", component: Index },
        { path: "/faq", component: Faq },
        { path: "/cart", component: Cart },
        { path: "/cate", component: Cate },
        { path: "/goods", component: Goods },
        { path: "/login", component: Login },
        { path: "/order", component: Order },
        { path: "/reg", component: Reg }
      ]
    },
    { path: "/*", component: NotFound }
  ]
});
