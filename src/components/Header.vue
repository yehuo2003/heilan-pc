<template>
  <div id="header">
    <header class="p-0">
      <!-- 导航栏：左 右-->
      <div class="row bg-ccc">
        <!-- 左导航-->
        <div class="col-sm-6">
          <ul class="d-flex list-unstyled justify-content-center mb-0">
            <li>你好，欢迎来到海澜之家！</li>
            <li>
              <a href="login.html">
                <b>请登录 |</b>
              </a>
            </li>
            <li>
              <a>
                <b>&nbsp;合作账号登录</b>
              </a>
            </li>
            <li>
              &nbsp;
              <a href="login.html">
                <img :src="$store.state.pcUrl+'logo10.jpg'">
                <img :src="$store.state.pcUrl+'qqimg.jpg'">
                <img :src="$store.state.pcUrl+'taobaoimg.jpg'">
              </a>
            </li>
            <li>
              <a href="reg.html">
                <b>&nbsp;| 免费注册</b>
              </a>
            </li>
          </ul>
        </div>
        <!-- 右导航-->
        <div class="col-sm-6">
          <div>
            <ul class="d-flex list-unstyled justify-content-center mb-0">
              <li>
                <a href="order.html">我的海澜之家 |</a>
              </li>
              <li>
                <a href="faq.html">&nbsp在线客服 |</a>
              </li>
              <li class="cate">
                <a href="cart.html">&nbsp我的购物袋有0件商品 |</a>
              </li>
              <li>
                <a href="faq.html">&nbsp帮助&nbsp</a>
              </li>
              <li>
                <a href="login.html" class="btn p-0 mb-1">
                  <img :src="$store.state.pcUrl+'logo10.jpg'">加关注
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 标题：左 中 右-->
      <!-- 左边附近门店-->
      <div class="row">
        <div class="col-4 align-content-center">
          <div class="text-center mt-3">
            <img :src="$store.state.pcUrl+'ditub.png'">
            <p>附近门店</p>
          </div>
        </div>
        <div class="col-4 text-center pr-5 mt-1">
          <img :src="$store.state.pcUrl+'logo.png'">
        </div>
        <div class="col-4">
          <div class="text-center mt-5 mr-5 pr-5">
            <input type="text" value="冬季新品" class="input-group-sm h-50">
            <a href="cate.html">
              <img :src="$store.state.pcUrl+'TB2b.c1XRzkJKJjSspiXXXd4XXa_!!693060164.jpg'">
            </a>
          </div>
        </div>
      </div>
      <!-- 导航栏-->
      <div class="navBox position-relative">
        <div class="row">
          <div class="col-12 p-0">
            <nav id="box">
              <ul class="nav justify-content-center ml-5">
                <li>
                  <a href="index.html" class="nav-link">首页</a>
                </li>
                <li class="nav-item">
                  <a href="cate.html" class="nav-link">所有商品</a>
                </li>
                <li class="nav-item">
                  <a href="cate.html" class="nav-link">火热新品</a>
                </li>
                <li class="nav-item">
                  <a href="cate.html" class="nav-link">秋季热卖</a>
                </li>
                <li class="nav-item">
                  <a href="cate.html" class="nav-link">卫衣</a>
                </li>
                <li class="nav-item">
                  <a href="cate.html" class="nav-link">大衣</a>
                </li>
                <li class="nav-item">
                  <a href="cate.html" class="nav-link">夹克</a>
                </li>
                <li class="nav-item">
                  <a href="cate.html" class="nav-link">针织衫/毛衫</a>
                </li>
                <li class="nav-item">
                  <a href="cate.html" class="nav-link">衬衫</a>
                </li>
                <li class="nav-item">
                  <a href="cate.html" class="nav-link">休闲裤</a>
                </li>
                <li class="nav-item">
                  <a href="cate.html" class="nav-link">牛仔裤</a>
                </li>
                <li class="nav-item">
                  <a href="cate.html" class="nav-link">西服</a>
                </li>
                <li class="nav-item">
                  <a href="cate.html" class="nav-link">林更新同款</a>
                </li>
                <li class="nav-item">
                  <a href="cate.html" class="nav-link">潮男时尚</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div id="content" class="position-absolute w-100 p-0">
          <ul>
            <li></li>
            <li>
              <div class="d-flex justify-content-start">
                <ul class="m-5 list-unstyled">
                  <h6>所有宝贝</h6>
                  <li class="mt-5">
                    <a href="cate.html">人气排序</a>
                  </li>
                  <li>
                    <a href="cate.html">销量排序</a>
                  </li>
                  <li>
                    <a href="cate.html">价格排序</a>
                  </li>
                </ul>
                <ul class="m-5 list-unstyled">
                  <h6>冬季新品</h6>
                  <li class="mt-5">
                    <a href="#">人气排序</a>
                  </li>
                  <li>
                    <a href="#">羽绒服</a>
                  </li>
                  <li>
                    <a href="#">大衣</a>
                  </li>
                  <li>
                    <a href="#">衬衫</a>
                  </li>
                  <li>
                    <a href="#">夹克</a>
                  </li>
                </ul>
                <ul class="m-5 list-unstyled">
                  <h6>秋季新品</h6>
                  <li class="mt-5">
                    <a href="#">卫衣</a>
                  </li>
                  <li>
                    <a href="#">长袖衬衫</a>
                  </li>
                  <li>
                    <a href="#">长袖t恤</a>
                  </li>
                  <li>
                    <a href="#">夹克</a>
                  </li>
                  <li>
                    <a href="#">大衣</a>
                  </li>
                  <li>
                    <a href="#">针织衫</a>
                  </li>
                  <li>
                    <a href="#">休闲裤</a>
                  </li>
                  <li>
                    <a href="#">牛仔裤</a>
                  </li>
                  <li>
                    <a href="#">西服</a>
                  </li>
                </ul>
                <ul class="m-5 list-unstyled">
                  <h6>上装</h6>
                  <li class="mt-5">
                    <a href="#">卫衣</a>
                  </li>
                  <li>
                    <a href="#">长袖衬衫</a>
                  </li>
                  <li>
                    <a href="#">长袖t恤</a>
                  </li>
                  <li>
                    <a href="#">夹克</a>
                  </li>
                  <li>
                    <a href="#">大衣</a>
                  </li>
                  <li>
                    <a href="#">针织衫</a>
                  </li>
                </ul>
                <ul class="m-5 list-unstyled">
                  <h6>裤装</h6>
                  <li class="mt-5">
                    <a href="#">西裤</a>
                  </li>
                  <li>
                    <a href="#">休闲裤</a>
                  </li>
                  <li>
                    <a href="#">牛仔裤</a>
                  </li>
                </ul>
                <ul class="m-5 list-unstyled">
                  <h6>价格区间</h6>
                  <li class="mt-5">
                    <a href="#">98-158</a>
                  </li>
                  <li>
                    <a href="#">168-238</a>
                  </li>
                  <li>
                    <a href="#">258-298</a>
                  </li>
                  <li>
                    <a href="#">299-398</a>
                  </li>
                  <li>
                    <a href="#">399-558</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div class="d-flex justify-content-start text-left">
                <ul class="m-5 list-unstyled">
                  <h6>冬季新品</h6>
                  <li class="mt-5">
                    <a href="#">人气排序</a>
                  </li>
                  <li>
                    <a href="#">羽绒服</a>
                  </li>
                  <li>
                    <a href="#">大衣</a>
                  </li>
                  <li>
                    <a href="#">衬衫</a>
                  </li>
                  <li>
                    <a href="#">夹克</a>
                  </li>
                </ul>
                <a href="cate.html" class="m-5">
                  <img :src="$store.state.pcUrl+'o1cn011d59pn863bqh4z3_!!693060164.jpg'">
                </a>
              </div>
            </li>
            <li>
              <div class="d-flex justify-content-start text-left">
                <ul class="m-5 list-unstyled">
                  <h6>秋季热卖</h6>
                  <li class="mt-5">
                    <a href="#">卫衣</a>
                  </li>
                  <li>
                    <a href="#">长袖衬衫</a>
                  </li>
                  <li>
                    <a href="#">长袖t恤</a>
                  </li>
                  <li>
                    <a href="#">夹克</a>
                  </li>
                  <li>
                    <a href="#">大衣</a>
                  </li>
                  <li>
                    <a href="#">针织衫</a>
                  </li>
                  <li>
                    <a href="#">休闲裤</a>
                  </li>
                  <li>
                    <a href="#">牛仔裤</a>
                  </li>
                  <li>
                    <a href="#">西服</a>
                  </li>
                </ul>
                <a href="cate.html" class="m-5">
                  <img :src="$store.state.pcUrl+'o1cn011d59pjowexjlv1s_!!693060164.jpg'">
                </a>
              </div>
            </li>
            <li>
              <div class="d-flex justify-content-start text-left">
                <ul class="m-5 list-unstyled">
                  <li>
                    <a href="#">时尚易搭</a>
                  </li>
                  <li>
                    <a href="#">加绒卫衣</a>
                  </li>
                </ul>
                <a href="cate.html" class="m-5">
                  <img :src="$store.state.pcUrl+'o1cn011d59pmaedu9i4um_!!693060164.jpg'">
                </a>
              </div>
            </li>
            <li>
              <div class="d-flex justify-content-start text-left">
                <ul class="m-5 list-unstyled">
                  <li>
                    <a href="#">保暖长款</a>
                  </li>
                  <li>
                    <a href="#">时尚款</a>
                  </li>
                  <li>
                    <a href="#">户外款</a>
                  </li>
                  <li>
                    <a href="#">连帽款</a>
                  </li>
                  <li>
                    <a href="#">大衣</a>
                  </li>
                  <li>
                    <a href="#">针织衫</a>
                  </li>
                </ul>
                <a href="cate.html" class="m-5">
                  <img :src="$store.state.pcUrl+'o1cn011d59pn88cfxhdjb_!!693060164.jpg'">
                </a>
              </div>
            </li>
            <li>
              <div class="d-flex justify-content-start text-left">
                <ul class="m-5 list-unstyled">
                  <li>
                    <a href="#">双面穿夹克</a>
                  </li>
                  <li>
                    <a href="#">摇粒绒夹克</a>
                  </li>
                  <li>
                    <a href="#">牛仔夹克</a>
                  </li>
                  <li>
                    <a href="#">皮夹克</a>
                  </li>
                </ul>
                <a href="cate.html" class="m-5">
                  <img :src="$store.state.pcUrl+'o1cn011d59plw73l9uyre_!!693060164.jpg'">
                </a>
              </div>
            </li>
            <li>
              <div class="d-flex justify-content-start text-left">
                <ul class="m-5 list-unstyled">
                  <li>
                    <a href="#">基础款</a>
                  </li>
                  <li>
                    <a href="#">羊绒款</a>
                  </li>
                  <li>
                    <a href="#">加长款</a>
                  </li>
                  <li>
                    <a href="#">时尚假两件</a>
                  </li>
                </ul>
                <a href="cate.html" class="m-5">
                  <img :src="$store.state.pcUrl+'o1cn011d59plw73l9uyre_!!693060164.jpg'">
                </a>
              </div>
            </li>
            <li>
              <div class="d-flex justify-content-start text-left">
                <ul class="m-5 list-unstyled">
                  <li>
                    <a href="#">休闲衬衫</a>
                  </li>
                  <li>
                    <a href="#">正装衬衫</a>
                  </li>
                  <li>
                    <a href="#">针织衬衫</a>
                  </li>
                  <li>
                    <a href="#">免烫衬衫</a>
                  </li>
                  <li>
                    <a href="#">保暖衬衫</a>
                  </li>
                </ul>
                <a href="cate.html" class="m-5">
                  <img :src="$store.state.pcUrl+'o1cn011d59plxu5xavvvy_!!693060164.jpg'">
                </a>
              </div>
            </li>
            <li>
              <div class="d-flex justify-content-start text-left">
                <ul class="m-5 list-unstyled">
                  <li>
                    <a href="#">基础实穿</a>
                  </li>
                  <li>
                    <a href="#">温暖磨毛</a>
                  </li>
                  <li>
                    <a href="#">灯芯绒</a>
                  </li>
                </ul>
                <a href="cate.html" class="m-5">
                  <img :src="$store.state.pcUrl+'o1cn011d59pkailuz4h1r_!!693060164.jpg'">
                </a>
              </div>
            </li>
            <li>
              <div class="d-flex justify-content-start text-left">
                <ul class="m-5 list-unstyled">
                  <li>
                    <a href="#">基础牛仔</a>
                  </li>
                  <li>
                    <a href="#">温暖加绒</a>
                  </li>
                </ul>
                <a href="cate.html" class="m-5">
                  <img :src="$store.state.pcUrl+'o1cn011d59pllue32gfcw_!!693060164.jpg'">
                </a>
              </div>
            </li>
            <li>
              <div class="d-flex justify-content-start text-left">
                <ul class="m-5 list-unstyled">
                  <li>
                    <a href="#">休闲西服</a>
                  </li>
                  <li>
                    <a href="#">套装西服</a>
                  </li>
                </ul>
                <a href="cate.html" class="m-5">
                  <img :src="$store.state.pcUrl+'o1cn011d59plo6dlqybsw_!!693060164.jpg'">
                </a>
              </div>
            </li>
            <li>
              <div class="d-flex justify-content-start text-left">
                <ul class="m-5 list-unstyled">
                  <li>
                    <a href="#">夹克</a>
                  </li>
                  <li>
                    <a href="#">针织衫</a>
                  </li>
                  <li>
                    <a href="#">西服</a>
                  </li>
                  <li>
                    <a href="#">休闲上衣</a>
                  </li>
                  <li>
                    <a href="#">风衣</a>
                  </li>
                  <li>
                    <a href="#">大衣</a>
                  </li>
                </ul>
                <a href="#" class="m-5">
                  <img :src="$store.state.pcUrl+'o1cn011d59plluztas8oj_!!693060164.jpg'">
                </a>
              </div>
            </li>
            <li>
              <div class="d-flex justify-content-start text-left">
                <ul class="m-5 list-unstyled">
                  <li>
                    <a href="#">针织衫</a>
                  </li>
                  <li>
                    <a href="#">休闲裤</a>
                  </li>
                  <li>
                    <a href="#">牛仔裤</a>
                  </li>
                  <li>
                    <a href="#">西服</a>
                  </li>
                </ul>
                <a href="cate.html" class="m-5">
                  <img :src="$store.state.pcUrl+'o1cn011d59plexgjp4trk_!!693060164.jpg'">
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    navList() {
      $("#box .nav-item").mouseenter(function() {
        var idx = $(this).index();
        $("#content>ul>li")
          .eq(idx)
          .show()
          .siblings()
          .hide();
      });
      $(".navBox").mouseleave(function() {
        $("#content>ul>li").hide();
      });
    }
  },
  mounted() {
    this.navList();
  }
};
</script>

<style>
#header ul > li > a {
  color: #666;
  line-height: 30px;
}
#content > ul li div.text-left h6 {
  padding-left: 8px;
}
.bg-ccc {
  border-bottom: 1px solid #cccccc;
  background: #eee;
  line-height: 30px;
}
.bg-ccc li {
  margin: 0px;
}
#header .btn {
  border: 1px solid #ccc;
  color: #1582bd;
  background: #f0f0f0;
  font-size: 14px;
}
.input-group-sm {
  border-radius: 10px;
  font-size: 14px;
  width: 30%;
}
.nav > li > a {
  color: #666;
  font-size: 14px;
  font-weight: normal;
}
.nav > li > a:hover {
  font-weight: bold;
  color: #333;
}
#content > ul {
  list-style-type: none;
}

#content > ul > li {
  margin: 0;
  padding-top: 50px;
  padding-right: 100px;
  background-color: #f4f4f4;
  display: none;
  font-weight: bold;
  height: 450px;
}
#content ul > li > a {
  margin-top: 10px;
  padding: 5px;
  border-bottom: 1px solid #000;
}
#content ul > li > a:hover {
  color: #ff5200;
  font-weight: bold;
  text-decoration: none;
}
.current {
  display: block !important;
  z-index: 10;
}
#content div {
  position: relative;
  left: 333px;
}
#content {
  z-index: 99;
}
</style>

