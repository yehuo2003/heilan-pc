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
const router = new Router({
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

// 全局路由守卫
router.beforeEach((to, from, next) => {
  var userAgentInfo = navigator.userAgent;
  var Agents = new Array(
    "Android",
    "iPhone",
    "SymbianOS",
    "Windows Phone",
    "iPad",
    "iPod"
  );
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  if (!flag) {
    window.location.href = "http://yehuo.applinzi.com";
  } else {
    next(); // 必须使用 next ,执行效果依赖 next 方法的调用参数
  }
  window.scrollTo(0, 0);
  console.log(flag);
});

export default router;
