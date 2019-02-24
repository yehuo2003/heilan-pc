<template>
  <div class="container p-0">
    <!--轮播图-->
    <div id="my_car" class="carousel heilan-carousel slide" data-ride="carousel">
      <!--指示图-->
      <ul class="carousel-indicators">
        <li
          v-for="item of imglist"
          :key="item.id"
          :class="item.cls"
          data-target="#my_car"
          :data-slide-to="item.id"
          class="active"
        ></li>
      </ul>
      <!-- 轮播的图片-->
      <div v-for="item of imglist" :key="item.id" class="carousel-item" :class="item.cls">
        <router-link to="/cate">
          <img :src="$store.state.pcUrl+item.img">
        </router-link>
      </div>
    </div>
    <!-- 小图：世界由你来更新-->
    <div class="text-center p-5 m-5">
      <router-link to="/cate">
        <img :src="$store.state.pcUrl+'O1CN011D59Q2lYLCvCGpI_!!693060164.jpg'">
      </router-link>
    </div>
    <!-- 品类精选-->
    <div class="text-center p-5 m-5">
      <router-link to="/cate">
        <img :src="$store.state.pcUrl+'O1CN011D59PK2iSNq2xBj_!!693060164.jpg'">
      </router-link>
    </div>
    <!-- 每两周精选：上图片，下列表-->
    <div class="text-center p-5 m-5 my_bg1 pr-3">
      <!-- 两张轮播小图-->
      <div class="carousel slide my_border" data-ride="carousel">
        <div class="carousel-item active">
          <router-link to="/cate">
            <img :src="$store.state.pcUrl+'5b7fb2cdNd346b688.jpg'">
          </router-link>
        </div>
        <div class="carousel-item">
          <router-link to="/cate">
            <img :src="$store.state.pcUrl+'5b7fb2cdNdd1f69eb.jpg'">
          </router-link>
        </div>
        <!-- 列表-->
        <ul class="list-unstyled d-flex flex-wrap p-5 justify-content-between heilan-cars">
          <router-link v-for="item of heilist" :key="item.id" to="/cate" class="m-3">{{item.title}}</router-link>
        </ul>
      </div>
    </div>
    <!-- 背景图-->
    <div id="myScrollspy">
      <div class="my_bg2 d-flex flex-wrap">
        <router-link v-for="item of bglist" :key="item.id" to="/goods">
          <img :src="$store.state.pcUrl+item.img">
        </router-link>
      </div>
      <div class="my_bg3">
        <!-- 精选专题-->
        <img :src="$store.state.pcUrl+'O1CN011D59PGriaJuapBW_!!693060164.png'">
        <!-- 四张轮播-->
        <div id="slide" class="slide position-relative">
          <!-- 轮播的图片-->
          <ul class="list-unstyled">
            <li v-for="item of carousel" :key="item.id">
              <router-link to="/cate">
                <img :src="$store.state.pcUrl+item.img" :alt="item.id">
              </router-link>
            </li>
          </ul>
          <!-- 左右切换按钮 -->
          <div class="arrow" id="arrow">
            <a href="javascript:;" class="prev" id="arrLeft">
              <img :src="$store.state.pcUrl+'prev.png'" alt="prev">
            </a>
            <a href="javascript:;" class="next" id="arrRight">
              <img :src="$store.state.pcUrl+'next.png'" alt="next">
            </a>
          </div>
        </div>
      </div>
      <!-- 更多精选专题-->
    </div>
    <div>
      <!--标签-->
      <div class="text-center pb-5 mb-5">
        <router-link to="/cate">
          <img :src="$store.state.pcUrl+'O1CN011D59PNFiWMyyFRc_!!693060164.jpg'">
        </router-link>
      </div>
      <!-- 六宫格变色-->
      <div id="my_bg4" class="d-flex flex-wrap justify-content-around position-relative">
        <router-link v-for="item of Sixth" :key="item.id" to="/cate">
          <img :src="$store.state.pcUrl+item.img" class="yc_img">
        </router-link>
      </div>
      <div id="my_bg5" class="p-5 m-5 d-flex flex-wrap">
        <!-- 小图-->
        <router-link to="/cate" class="pl-5">
          <img :src="$store.state.pcUrl+'O1CN011D59PNHI4FrSHwv_!!693060164.jpg'">
        </router-link>
        <!-- 列表-->
        <div class="d-flex">
          <ul v-for="item of goryList" :key="item.id" class="list-unstyled ml-5 pr-2">
            <li v-for="i of item.list" :key="i.lid">
              <router-link to="/cate" class="org">{{i.title}}</router-link>
            </li>
          </ul>
        </div>
        <br>
      </div>
      <div class="my_bg6 text-center pt-5 justify-content-between">
        <a href="javascript:;" @click="goTop" class="mr-5">ALL PRODUCT</a>
        
        <a href="javascript:;" @click="goTop">BACK TO TOP</a>
      </div>
    </div>
    <!--返回顶部-->
    <div class="goTop">
      <a href="javascript:;" @click="goTop">
        <img :src="$store.state.pcUrl+'top.png'" title="top">
      </a>
    </div>
    <!-- 答疑列表-->
    <heilan-Mentoring :Mentoring="Mentoring"></heilan-Mentoring>
  </div>
</template>

<script>
import Mentoring from "../components/Mentoring";
export default {
  data() {
    return {
      imglist: [
        { id: 0, img: "carousel_01.jpg", cls: "active" },
        { id: 1, img: "carousel_02.jpg", cls: "" },
        { id: 2, img: "carousel_03.jpg", cls: "" },
        { id: 3, img: "carousel_04.jpg", cls: "" }
      ],
      heilist: [
        { id: 1, title: "7.1为你的商务减负" },
        { id: 2, title: "7.15猜不透的混搭智慧" },
        { id: 3, title: "8.6玩转秋季就要层次感" },
        { id: 5, title: "8.2音乐节的穿搭指南" },
        { id: 4, title: "9.30时尚先生的换季法则" },
        { id: 6, title: "9.20唤醒生活的律动感" }
      ],
      bglist: [
        { id: 1, img: "O1CN011D59PK3Zpdrr6sF_!!693060164.jpg" },
        { id: 2, img: "O1CN011D59PLVIXVRESYE_!!693060164.jpg" },
        { id: 3, img: "O1CN011D59PN9WzyNll7K_!!693060164.jpg" },
        { id: 4, img: "O1CN011D59PKojwclNe6O_!!693060164.jpg" },
        { id: 5, img: "O1CN011D59PMn2LCBDKxF_!!693060164.jpg" },
        { id: 6, img: "O1CN011D59PMn18Pkg1Yb_!!693060164.jpg" },
        { id: 7, img: "O1CN011D59PMFRgkoxzm3_!!693060164.jpg" }
      ],
      carousel: [
        { id: 0, img: "O1CN011D59QIFprNXRHjE_!!693060164.jpg" },
        { id: 1, img: "O1CN011D59QJtu9jCRRep_!!693060164.jpg" },
        { id: 2, img: "5bea2a3bNd48cc0f7.jpg" },
        { id: 3, img: "O1CN011D59PMMJeUg9JFx_!!693060164.jpg" }
      ],
      Sixth: [
        { id: 1, img: "O1CN011D59PMpfaAdLxTQ_!!693060164.jpg" },
        { id: 2, img: "O1CN011D59PNeNMfq3do5_!!693060164.jpg" },
        { id: 3, img: "O1CN011D59POLeXgzRo7I_!!693060164.jpg" },
        { id: 4, img: "O1CN011D59POUzmfWaxRU_!!693060164.jpg" },
        { id: 5, img: "O1CN011D59PLipMYZuv3E_!!693060164.jpg" },
        { id: 6, img: "O1CN011D59PNQtaRqZGGm_!!693060164.jpg" }
      ],
      goryList: [
        {
          id: 1,
          list: [
            { lid: 1, title: "STIRT" },
            { lid: 2, title: "T-STIRT" },
            { lid: 3, title: "HOODIE" }
          ]
        },
        {
          id: 2,
          list: [
            { lid: 1, title: "衬衫" },
            { lid: 2, title: "T-恤" },
            { lid: 3, title: "卫衣" }
          ]
        },
        {
          id: 3,
          list: [
            { lid: 1, title: "JACKET" },
            { lid: 2, title: "CASUAL PANTS" },
            { lid: 3, title: "JEANS" }
          ]
        },
        {
          id: 4,
          list: [
            { lid: 1, title: "夹克" },
            { lid: 2, title: "休闲裤" },
            { lid: 3, title: "牛仔裤" }
          ]
        }
      ],
      Mentoring: [
        { id: 1, img: "faq1.png", to: "/cate" },
        { id: 2, img: "faq2.png", to: "/cate" },
        { id: 3, img: "faq3.png", to: "/faq" },
        { id: 4, img: "faq4.png", to: "/cart" }
      ]
    };
  },
  components: {
    "heilan-Mentoring": Mentoring
  },
  methods: {
    goTop() {
      var timer = null;
      var oScroll = true;
      //滚动条事件,触发时清空定时器

      if (!oScroll) {
        clearInterval(timer);
      }
      oScroll = false;
      timer = setInterval(function() {
        //获取当前scrollTop的高度位置（兼容ie和chrom浏览器）
        var oTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        //设置速度由快到慢
        var ispeed = Math.floor(-oTop / 7);
        document.documentElement.scrollTop = document.body.scrollTop =
          oTop + ispeed;
        oScroll = true;
        if (oTop == 0) {
          clearInterval(timer);
        }
      }, 30);
    },
    isload() {
      function my$(id) {
        return document.getElementById(id);
      }
      var config = [
        {
          width: 400,
          top: 150,
          left: 550,
          opacity: 0,
          zIndex: 2
        }, //0
        {
          width: 600,
          top: 130,
          left: 0,
          opacity: 0.3,
          zIndex: 3
        }, //1
        {
          width: 800,
          top: 70,
          left: 400,
          opacity: 1,
          zIndex: 4
        }, //2
        {
          width: 600,
          top: 130,
          left: 1000,
          opacity: 0.3,
          zIndex: 3
        } //3
      ];
      //页面加载的事件
      window.onload = function() {
        var flag = true; //假设所有的动画执行完毕了——锁
        //1.图片散开
        var list = my$("slide").getElementsByTagName("li");
        function assign() {
          for (var i = 0; i < list.length; i++) {
            //设置每个li，都要把宽，层级，透明度，left，top到达指定的目标位置
            animate(list[i], config[i], function() {
              flag = true;
            });
          }
        }
        assign();

        //右边按钮
        my$("arrRight").onclick = function() {
          if (flag) {
            flag = false;
            //添加进数组的尾巴  把数组中第一个删除
            config.push(config.shift());
            assign(); //重新分配
          }
        };
        //左边按钮
        my$("arrLeft").onclick = function() {
          //把最后一个删除，返回成新值加入开头
          if (flag) {
            flag = false;
            config.unshift(config.pop());
            assign();
          }
        };

        //鼠标进入，左右焦点的div显示
        my$("slide").onmouseover = function() {
          animate(my$("arrow"), { opacity: 1 });
        };
        //鼠标离开，左右焦点的div隐藏
        my$("slide").onmouseout = function() {
          animate(my$("arrow"), { opacity: 0 });
        };
      };

      function getAttrValue(element, attr) {
        return element.currentStyle
          ? element.currentStyle[attr]
          : window.getComputedStyle(element, null)[attr] || 0;
      }
      function animate(element, json, fn) {
        clearInterval(element.timeId);
        element.timeId = setInterval(function() {
          var flag = true; //假设都达到了目标
          for (var attr in json) {
            if (attr == "opacity") {
              //判断属性是不是opacity
              var current = getAttrValue(element, attr) * 100;
              //每次移动多少步
              var target = json[attr] * 100; //直接赋值给一个变量,后面的代码都不用改
              var step = (target - current) / 10; //(目标-当前)/10
              step = step > 0 ? Math.ceil(step) : Math.floor(step);
              current = current + step;
              element.style[attr] = current / 100;
            } else if (attr == "zIndex") {
              //判断属性是不是zIndex
              element.style[attr] = json[attr];
            } else {
              //普通的属性
              //获取当前的位置----getAttrValue(element,attr)获取的是字符串类型
              var current = parseInt(getAttrValue(element, attr)) || 0;
              //每次移动多少步
              var target = json[attr]; //直接赋值给一个变量,后面的代码都不用改
              var step = (target - current) / 10; //(目标-当前)/10
              step = step > 0 ? Math.ceil(step) : Math.floor(step);
              current = current + step;
              element.style[attr] = current + "px";
            }
            if (current != target) {
              flag = false; //如果没到目标结果就为false
            }
          }
          if (flag) {
            //结果为true
            clearInterval(element.timeId);
            if (fn) {
              //如果用户传入了回调的函数
              fn(); //就直接的调用,
            }
          }
          //  console.log("target:"+target+"current:"+current+"step:"+step);
        }, 10);
      }

      $(function() {
        $(window).scroll(function() {
          if ($(window).scrollTop() >= 2000) {
            $(".goTop").fadeIn(2000);
            $(".faq").fadeIn(4000);
          } else {
            $(".goTop").fadeOut(1000);
            $(".faq").fadeOut(1000);
          }
        });
      });
    }
  },
  mounted() {
    this.isload();
  }
};
</script>

<style scoped>
.container {
  min-width: 100% !important;
}
#my_car .carousel-item {
  overflow: hidden !important;
}
.heilan-cars {
  margin-top: 320px;
}
.heilan-carousel {
  min-height: 700px;
}
.carousel-indicators {
  bottom: 39px;
  left: 228px;
}
.carousel-indicators > li:nth-child(1) {
  bottom: 39px;
  left: 200px;
}
.carousel-indicators > li:nth-child(2) {
  bottom: 39px;
  left: 240px;
}
.carousel-indicators > li:nth-child(3) {
  bottom: 39px;
  left: 280px;
}
.carousel-indicators > li:nth-child(4) {
  bottom: 39px;
  left: 320px;
}

#my_car .carousel-indicators li {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #ffde01;
  background-color: rgba(255, 255, 255, 0.1);
  margin: 6px;
}
#my_car .carousel-indicators li:hover {
  background: #ffde01;
}
.my_border {
  height: 500px;
  width: 1265px;
  border: 1px solid #ccc;
}
.my_border ul > a {
  color: #727272;
  font-weight: bold;
  font-size: 21px;
  padding-right: 72px;
  padding-left: 88px;
}
.my_bg1 {
  width: 1265px;
  position: relative;
  left: 90px;
}
#myScrollspy {
  background: url("http://yehuo-img.stor.sinaapp.com/img/pc/bg1.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: relative;
}
.my_bg2 {
  position: relative;
  background: #fff;
  top: 1000px;
}
.my_bg2 > a,
.my_bg3 > a {
  display: block;
  position: relative;
}
.my_bg2 > a:nth-child(1) {
  top: -109px;
  left: 295px;
}
.my_bg2 > a:nth-child(2) {
  top: -410px;
  left: 329px;
}
.my_bg2 > a:nth-child(3) {
  align-content: center;
  top: -330px;
  left: 294px;
}
.my_bg2 > a:nth-child(4) {
  align-content: center;
  top: -235px;
  left: 294px;
}
.my_bg2 > a:nth-child(5) {
  bottom: -630px;
  right: 695px;
}
.my_bg2 > a:nth-child(6) {
  top: -119px;
  left: 772px;
}
.my_bg2 > a:nth-child(7) {
  bottom: -338px;
  right: 217px;
}
.my_bg2 > a:nth-child(8) {
  bottom: -338px;
  right: 217px;
}
.my_bg3 {
  position: relative;
  background: #fff;
  height: 1000px;
}
.my_bg3 > img {
  position: relative;
  align-content: center;
  top: -2px;
  left: 640px;
}
.slide li {
  position: absolute;
  left: 200px;
  top: 0;
}
.slide li img {
  width: 100%;
}
.arrow {
  opacity: 0;
}
.prev,
.next {
  top: 320px;
  position: absolute;
  z-index: 99;
}
.arrow > a > img {
  width: 50px;
}
.prev {
  left: 34px;
}
.next {
  right: 36px;
}
#my_bg4 {
  height: 1000px;
  border-bottom: 1px solid #eee;
}
#my_bg4 > a {
  display: block;
  width: 400px;
  height: 374px;
  position: relative;
}
#my_bg4 > a:nth-child(1) {
  left: 106px;
}
#my_bg4 > a:nth-child(2) {
  left: 18px;
}
#my_bg4 > a:nth-child(3) {
  right: 83px;
}
#my_bg4 > a:nth-child(4) {
  left: 103px;
  bottom: 91px;
}
#my_bg4 > a:nth-child(5) {
  left: 19px;
  bottom: -68px;
}
#my_bg4 > a:nth-child(6) {
  left: -75px;
  bottom: 91px;
}
#my_bg4 img {
  -webkit-filter: grayscale(100%); /* Chrome, Safari, Opera */
  filter: grayscale(100%);
  transition: all 0.5s linear;
}
#my_bg4 img:hover {
  -webkit-filter: grayscale(0); /* Chrome, Safari, Opera */
  filter: grayscale(0);
}
#my_bg5 > div > ul > li > a {
  font-size: 16px;
  font-weight: bold;
  color: #666;
}
#my_bg5 > a {
  margin-left: 216px;
}
.my_bg6 {
  height: 200px;
}
.my_bg6 > a {
  font-size: 16px;
  margin: 0 auto;
}
.goTop {
  position: fixed;
  z-index: 99;
  right: 50px;
  bottom: 50px;
  display: none;
  opacity: 0.6;
}
.goTop a:link,
.faq a:link {
  outline: none;
}
.faq {
  position: fixed;
  z-index: 99;
  left: 20px;
  bottom: 200px;
  display: none;
}
.list-group-item-action:hover {
  background: #ccc;
  border: 0;
}
</style>

