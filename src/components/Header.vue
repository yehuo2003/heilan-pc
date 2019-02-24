<template>
  <header id="header" class="p-0">
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
            <li v-for="item of rightList" :key="item.id" class="mr-1">
              <a href="javascript:;">{{item.title}}</a>
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
              <li class="pt-2">
                <router-link to="/">首页</router-link>
              </li>
              <li v-for="item of navBarList" :key="item.id" class="nav-item">
                <router-link to="/cate" class="nav-link">{{item.title}}</router-link>
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
              <ul v-for="item of liastnav" :key="item.id" class="m-5 list-unstyled">
                <h6 class="mb-4 ml-2">{{item.title}}</h6>
                <li v-for="i of item.list" :key="i.lid">
                  <router-link to="/cate">{{i.title}}</router-link>
                </li>
              </ul>
            </div>
          </li>
          <li v-for="(item,index) of navtitle" :key="index">
            <div class="d-flex justify-content-start text-left">
              <ul class="m-5 list-unstyled">
                <h6 class="mb-4">{{item.title}}</h6>
                <li v-for="t of item.list" :key="t.tid">
                  <router-link to="/cate">{{t.title}}</router-link>
                </li>
              </ul>
              <a href="cate.html" class="m-5">
                <img :src="$store.state.pcUrl+item.img">
              </a>
            </div>
          </li>

          <li v-for="item of navlist" :key="item.id + 1">
            <div class="d-flex justify-content-start text-left">
              <ul class="m-5 list-unstyled">
                <li v-for="(c,i) of item.list" :key="i">
                  <a href="javascript:;">{{c.title}}</a>
                </li>
              </ul>
              <a href="cate.html" class="m-5">
                <img :src="$store.state.pcUrl+item.img">
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      rightList: [
        { id: 1, title: "我的海澜之家 |" },
        { id: 2, title: "在线客服 |" },
        { id: 3, title: "我的购物袋有0件商品 |" },
        { id: 4, title: "帮助" }
      ],
      navBarList: [
        { id: 1, title: "所有商品" },
        { id: 2, title: "火热新品" },
        { id: 3, title: "秋季热卖" },
        { id: 4, title: "卫衣" },
        { id: 5, title: "大衣" },
        { id: 6, title: "夹克" },
        { id: 7, title: "针织衫/毛衫" },
        { id: 8, title: "衬衫" },
        { id: 9, title: "休闲裤" },
        { id: 10, title: "牛仔裤" },
        { id: 11, title: "西服" },
        { id: 12, title: "林更新同款" },
        { id: 13, title: "潮男时尚" }
      ],
      liastnav: [
        {
          id: 1,
          title: "所有宝贝",
          list: [
            { lid: 1, title: "人气排序" },
            { lid: 2, title: "销量排序" },
            { lid: 3, title: "价格排序" }
          ]
        },
        {
          id: 2,
          title: "冬季新品",
          list: [
            { lid: 1, title: "人气排序" },
            { lid: 2, title: "羽绒服" },
            { lid: 3, title: "大衣" },
            { lid: 4, title: "衬衫" },
            { lid: 5, title: "夹克" }
          ]
        },
        {
          id: 3,
          title: "秋季新品",
          list: [
            { lid: 1, title: "卫衣" },
            { lid: 2, title: "长袖衬衫" },
            { lid: 3, title: "长袖t恤" },
            { lid: 4, title: "夹克" },
            { lid: 5, title: "大衣" },
            { lid: 6, title: "针织衫" },
            { lid: 7, title: "休闲裤" },
            { lid: 8, title: "牛仔裤" },
            { lid: 9, title: "西服" }
          ]
        },
        {
          id: 4,
          title: "上装",
          list: [
            { lid: 1, title: "卫衣" },
            { lid: 2, title: "长袖衬衫" },
            { lid: 3, title: "长袖t恤" },
            { lid: 4, title: "夹克" },
            { lid: 5, title: "大衣" },
            { lid: 6, title: "针织衫" }
          ]
        },
        {
          id: 5,
          title: "裤装",
          list: [
            { lid: 1, title: "西裤" },
            { lid: 2, title: "休闲裤" },
            { lid: 3, title: "牛仔裤" }
          ]
        },
        {
          id: 6,
          title: "价格区间",
          list: [
            { lid: 1, title: "98-158" },
            { lid: 2, title: "168-238" },
            { lid: 3, title: "258-298" },
            { lid: 4, title: "299-398" },
            { lid: 5, title: "399-558" }
          ]
        }
      ],
      navtitle: [
        {
          id: 1,
          title: "秋季热卖",
          list: [
            { tid: 1, title: "卫衣" },
            { tid: 2, title: "长袖衬衫" },
            { tid: 3, title: "长袖t恤" },
            { tid: 4, title: "夹克" },
            { tid: 5, title: "大衣" },
            { tid: 6, title: "针织衫" },
            { tid: 7, title: "休闲裤" },
            { tid: 8, title: "牛仔裤" },
            { tid: 9, title: "西服" }
          ],
          img: "o1cn011d59pjowexjlv1s_!!693060164.jpg"
        },
        {
          id: 2,
          title: "冬季新品",
          list: [
            { tid: 1, title: "人气排序" },
            { tid: 2, title: "羽绒服" },
            { tid: 3, title: "大衣" },
            { tid: 4, title: "衬衫" },
            { tid: 5, title: "夹克" }
          ],
          img: "o1cn011d59pn863bqh4z3_!!693060164.jpg"
        }
      ],
      navlist: [
        {
          id: 1,
          list: [{ title: "时尚易搭" }, { title: "加绒卫衣" }],
          img: "o1cn011d59pmaedu9i4um_!!693060164.jpg"
        },
        {
          id: 2,
          list: [
            { title: "长袖T恤" },
            { title: "羊毛/羊绒衫" },
            { title: "免烫衬衫" }
          ],
          img: "o1cn011d59pmaedu9i4um_!!693060164.jpg"
        },
        {
          id: 3,
          list: [
            { title: "保暖长款" },
            { title: "时尚款" },
            { title: "户外款" },
            { title: "连帽款" },
            { title: "大衣" },
            { title: "针织衫" }
          ],
          img: "o1cn011d59pn88cfxhdjb_!!693060164.jpg"
        },
        {
          id: 4,
          list: [
            { title: "双面穿夹克" },
            { title: "摇粒绒夹克" },
            { title: "牛仔夹克" },
            { title: "皮夹克" },
            { title: "夹克" }
          ],
          img: "o1cn011d59plw73l9uyre_!!693060164.jpg"
        },
        {
          id: 5,
          list: [
            { title: "基础款" },
            { title: "羊绒款" },
            { title: "加长款" },
            { title: "时尚假两件" },
            { title: "夹克" }
          ],
          img: "o1cn011d59plw73l9uyre_!!693060164.jpg"
        },
        {
          id: 6,
          list: [
            { title: "休闲衬衫" },
            { title: "正装衬衫" },
            { title: "针织衬衫" },
            { title: "免烫衬衫" },
            { title: "保暖衬衫" }
          ],
          img: "o1cn011d59plxu5xavvvy_!!693060164.jpg"
        },
        {
          id: 7,
          list: [
            { title: "基础实穿" },
            { title: "温暖磨毛" },
            { title: "灯芯绒" }
          ],
          img: "o1cn011d59pkailuz4h1r_!!693060164.jpg"
        },
        {
          id: 8,
          list: [{ title: "基础牛仔" }, { title: "温暖加绒" }],
          img: "o1cn011d59pllue32gfcw_!!693060164.jpg"
        },
        {
          id: 9,
          list: [{ title: "休闲西服" }, { title: "套装西服" }],
          img: "o1cn011d59plo6dlqybsw_!!693060164.jpg"
        },
        {
          id: 10,
          list: [
            { title: "西服" },
            { title: "休闲上衣" },
            { title: "风衣" },
            { title: "大衣" },
            { title: "针织衫" },
            { title: "夹克" }
          ],
          img: "o1cn011d59plluztas8oj_!!693060164.jpg"
        },
        {
          id: 11,
          list: [
            { title: "针织衫" },
            { title: "休闲裤" },
            { title: "牛仔裤" },
            { title: "西服" }
          ],
          img: "o1cn011d59plexgjp4trk_!!693060164.jpg"
        }
      ]
    };
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

