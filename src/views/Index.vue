<template>
  <div class="container p-0">
    <!--轮播图-->
    <div id="my_car" class="carousel slide" data-ride="carousel">
      <!--指示图-->
      <ul class="carousel-indicators">
        <li data-target="#my_car" data-slide-to="0" class="active"></li>
        <li data-target="#my_car" data-slide-to="1"></li>
        <li data-target="#my_car" data-slide-to="2"></li>
        <li data-target="#my_car" data-slide-to="3"></li>
      </ul>
      <!-- 轮播的图片-->
      <div class="carousel-item active">
        <a href="#">
          <img :src="$store.state.pcUrl+'carousel_01.jpg'">
        </a>
      </div>
      <div class="carousel-item">
        <a href="#">
          <img :src="$store.state.pcUrl+'carousel_02.jpg'">
        </a>
      </div>
      <div class="carousel-item">
        <a href="#">
          <img :src="$store.state.pcUrl+'carousel_03.jpg'">
        </a>
      </div>
      <div class="carousel-item">
        <a href="#">
          <img :src="$store.state.pcUrl+'carousel_04.jpg'">
        </a>
      </div>
    </div>
    <!-- 小图：世界由你来更新-->
    <div class="text-center p-5 m-5">
      <a href="cate.html">
        <img :src="$store.state.pcUrl+'O1CN011D59Q2lYLCvCGpI_!!693060164.jpg'">
      </a>
    </div>
    <!-- 品类精选-->
    <div class="text-center p-5 m-5">
      <a href="#">
        <img :src="$store.state.pcUrl+'O1CN011D59PK2iSNq2xBj_!!693060164.jpg'">
      </a>
    </div>
    <!-- 每两周精选：上图片，下列表-->
    <div class="text-center p-5 m-5 my_bg1 pr-3">
      <!-- 两张轮播小图-->
      <div class="carousel slide my_border" data-ride="carousel">
        <div class="carousel-item active">
          <a href="#">
            <img :src="$store.state.pcUrl+'5b7fb2cdNd346b688.jpg'">
          </a>
        </div>
        <div class="carousel-item">
          <a href="#">
            <img :src="$store.state.pcUrl+'5b7fb2cdNdd1f69eb.jpg'">
          </a>
        </div>
        <!-- 列表-->
        <ul class="list-unstyled d-flex flex-wrap p-5 justify-content-between">
          <a href="#" class="m-3">7.1为你的商务减负</a>
          <a href="#" class="m-3">7.15猜不透的混搭智慧</a>
          <a href="#" class="m-3">8.6玩转秋季就要层次感</a>
          <a href="#" class="m-3">8.20时尚先生的换季法则</a>
          <a href="#" class="m-3 pl-5">9.3音乐节的穿搭指南</a>
          <a href="#" class="m-3">9.20唤醒生活的律动感</a>
        </ul>
      </div>
    </div>
    <!-- 背景图-->
    <div id="myScrollspy" style="background: url('http:127.0.0.1:3000/img/pc/bg1.jpg')">
      <div class="my_bg2 d-flex flex-wrap">
        <a href="#">
          <img :src="$store.state.pcUrl+'O1CN011D59PK3Zpdrr6sF_!!693060164.jpg'">
        </a>
        <a href="#">
          <img :src="$store.state.pcUrl+'O1CN011D59PLVIXVRESYE_!!693060164.jpg'">
        </a>
        <a href="#">
          <img :src="$store.state.pcUrl+'O1CN011D59PN9WzyNll7K_!!693060164.jpg'">
        </a>
        <a href="#">
          <img :src="$store.state.pcUrl+'O1CN011D59PKojwclNe6O_!!693060164.jpg'">
        </a>
        <a href="#">
          <img :src="$store.state.pcUrl+'O1CN011D59PMn2LCBDKxF_!!693060164.jpg'">
        </a>
        <a href="#">
          <img :src="$store.state.pcUrl+'O1CN011D59PMn18Pkg1Yb_!!693060164.jpg'">
        </a>
        <a href="#">
          <img :src="$store.state.pcUrl+'O1CN011D59PMFRgkoxzm3_!!693060164.jpg'">
        </a>
      </div>
      <div class="my_bg3">
        <!-- 精选专题-->
        <img :src="$store.state.pcUrl+'O1CN011D59PGriaJuapBW_!!693060164.png'">
        <!-- 四张轮播-->
        <div id="slide" class="slide position-relative">
          <!-- 轮播的图片-->
          <ul class="list-unstyled">
            <li>
              <a href="#">
                <img :src="$store.state.pcUrl+'O1CN011D59QIFprNXRHjE_!!693060164.jpg'" alt="0">
              </a>
            </li>
            <li>
              <a href="#">
                <img :src="$store.state.pcUrl+'O1CN011D59QJtu9jCRRep_!!693060164.jpg'" alt="1">
              </a>
            </li>
            <li>
              <a href="#">
                <img :src="$store.state.pcUrl+'5bea2a3bNd48cc0f7.jpg'" alt="2">
              </a>
            </li>
            <li>
              <a href="#">
                <img :src="$store.state.pcUrl+'O1CN011D59PMMJeUg9JFx_!!693060164.jpg'" alt="3">
              </a>
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
        <a href="#">
          <img :src="$store.state.pcUrl+'O1CN011D59PNFiWMyyFRc_!!693060164.jpg'">
        </a>
      </div>
      <!-- 六宫格变色-->
      <div id="my_bg4" class="d-flex flex-wrap justify-content-around position-relative">
        <a href="#">
          <img :src="$store.state.pcUrl+'O1CN011D59PMpfaAdLxTQ_!!693060164.jpg'" class="yc_img">
        </a>
        <a href="#">
          <img :src="$store.state.pcUrl+'O1CN011D59PNeNMfq3do5_!!693060164.jpg'" class="yc_img">
        </a>
        <a href="#">
          <img :src="$store.state.pcUrl+'O1CN011D59POLeXgzRo7I_!!693060164.jpg'" class="yc_img">
        </a>
        <a href="#">
          <img :src="$store.state.pcUrl+'O1CN011D59POUzmfWaxRU_!!693060164.jpg'" class="yc_img">
        </a>
        <a href="#">
          <img :src="$store.state.pcUrl+'O1CN011D59PLipMYZuv3E_!!693060164.jpg'" class="yc_img">
        </a>
        <a href="#">
          <img :src="$store.state.pcUrl+'O1CN011D59PNQtaRqZGGm_!!693060164.jpg'" class="yc_img">
        </a>
      </div>
      <div id="my_bg5" class="p-5 m-5 d-flex flex-wrap">
        <!-- 小图-->
        <a href="#" class="pl-5">
          <img :src="$store.state.pcUrl+'O1CN011D59PNHI4FrSHwv_!!693060164.jpg'">
        </a>
        <!-- 列表-->
        <div class="d-flex">
          <ul class="list-unstyled ml-5 mr-3">
            <li>
              <a href="#">STIRT</a>
            </li>
            <li>
              <a href="#">T-STIRT</a>
            </li>
            <li>
              <a href="#">HOODIE</a>
            </li>
          </ul>
          <ul class="list-unstyled ml-5 mr-3">
            <li>
              <a href="#">衬衫</a>
            </li>
            <li>
              <a href="#">T-恤</a>
            </li>
            <li>
              <a href="#">卫衣</a>
            </li>
          </ul>
          <ul class="list-unstyled ml-5 mr-3">
            <li>
              <a href="#">JACKET</a>
            </li>
            <li>
              <a href="#">CASUAL PANTS</a>
            </li>
            <li>
              <a href="#">JEANS</a>
            </li>
          </ul>
          <ul class="list-unstyled ml-5 pr-5 mr-2">
            <li>
              <a href="#">夹克</a>
            </li>
            <li>
              <a href="#">休闲裤</a>
            </li>
            <li>
              <a href="#">牛仔裤</a>
            </li>
          </ul>
        </div>
        <br>
      </div>
      <div class="my_bg6 text-center pt-5 justify-content-between">
        <a href="#">ALL PRODUCT</a>
        
        <a href="#">BACK TO TOP</a>
      </div>
    </div>
    <!--返回顶部-->
    <div class="goTop">
      <a href="#">
        <img :src="$store.state.pcUrl+'top.png'" title="top">
      </a>
    </div>
    <!-- 答疑列表-->
    <ul class="list-group faq">
      <a href="cate.html" class="list-group-item list-group-item-action">
        <img :src="$store.state.pcUrl+'faq1.png'">
      </a>
      <a href="cate.html" class="list-group-item list-group-item-action">
        <img :src="$store.state.pcUrl+'faq3.png'">
      </a>
      <a href="faq.html" class="list-group-item list-group-item-action">
        <img :src="$store.state.pcUrl+'faq2.png'">
      </a>
      <a href="cart.html" class="list-group-item list-group-item-action">
        <img :src="$store.state.pcUrl+'faq4.png'">
      </a>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
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
.carousel {
  height: 700px;
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
  background: url("http:127.0.0.1:3000/img/pc/bg1.jpg");
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

