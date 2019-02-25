<template>
  <header id="header" class="p-0">
    <!-- 导航栏：左 右-->
    <div class="row bg-ccc">
      <!-- 左导航-->
      <div class="col-sm-6">
        <!-- <h1>{{liastnav}}</h1> -->
        <ul class="d-flex list-unstyled justify-content-center mb-0">
          <li>你好，欢迎来到海澜之家！</li>
          <li>
            <router-link to="/login">
              <b>请登录 |</b>
            </router-link>
          </li>
          <li>
            <a>
              <b>&nbsp;合作账号登录</b>
            </a>
          </li>
          <li>&nbsp;
            <router-link to="/login">
              <img :src="$store.state.pcUrl+'logo10.jpg'">
              <img :src="$store.state.pcUrl+'qqimg.jpg'">
              <img :src="$store.state.pcUrl+'taobaoimg.jpg'">
            </router-link>
          </li>
          <li>
            <router-link to="/reg">
              <b>&nbsp;| 免费注册</b>
            </router-link>
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
          <router-link to="/cate">
            <img :src="$store.state.pcUrl+'TB2b.c1XRzkJKJjSspiXXXd4XXa_!!693060164.jpg'">
          </router-link>
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
          <li v-for="item of navtitle" :key="item.cid">
            <div class="d-flex justify-content-start text-left">
              <ul class="m-5 list-unstyled">
                <h6 class="mb-4">{{item.title}}</h6>
                <li v-for="t of item.list" :key="t.tid">
                  <router-link to="/cate">{{t.title}}</router-link>
                </li>
              </ul>
              <router-link to="/cate" class="m-5">
                <img :src="$store.state.pcUrl+item.img">
              </router-link>
            </div>
          </li>

          <li v-for="item of navtwolist" :key="item.cid">
            <div class="d-flex justify-content-start text-left">
              <ul class="m-5 list-unstyled">
                <li v-for="(c,i) of item.list" :key="i">
                  <a href="javascript:;">{{c.title}}</a>
                </li>
              </ul>
              <router-link to="/cate" class="m-5">
                <img :src="$store.state.pcUrl+item.img">
              </router-link>
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
      // 右边导航表
      rightList: [],
      // 一级导航条目
      navBarList: [],
      // 导航表-所有商品
      liastnav: [],
      // 导航列表二级条目-从第2条开始关联
      // 不带一级标题的
      navtitle: [],
      // 导航列表二级条目-从第4条开始关联
      // 不带一级标题的
      navtwolist: []
    };
  },
  methods: {
    // 右边导航列表
    rList() {
      var url = this.$store.state.apiUrl + "rightList";
      this.$axios
        .get(url)
        .then(({ data }) => {
          this.rightList = data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 导航条目
    ListSum() {
      var url = this.$store.state.apiUrl + "navBarList";
      this.$axios
        .get(url)
        .then(({ data }) => {
          for (var i = 0; i < data.length; i++) {
            // 循环遍历出二级标题列表
            var list = data[i];
            var sum = {};
            sum.id = list.cid;
            sum.title = list.title;
            this.navBarList.push(sum);
            // 如果是火热新品或者是秋季热卖，就加入到navtitle
            if (list.cid == 2 || list.cid == 3) {
              this.navtitle.push(list);
            }
            // 从第三条以后的数据，全部加入到navtwolist里
            if (list.cid > 3) {
              this.navtwolist.push(list);
            }
          }
          // 查询 所有商品 条目下的内容
          this.allList();
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 查询一级条目下所有条目
    allList() {
      var url = this.$store.state.apiUrl + "liastnav";
      this.$axios
        .get(url)
        .then(({ data }) => {
          this.liastnav = data;
        })
        .catch(err => {
          console.log(err);
        });
    },
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
  created() {
    this.rList();
    this.ListSum();
  },
  mounted() {
    setTimeout(() => {
      this.navList();
    }, 0);
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

