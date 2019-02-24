<template>
  <div class="goods">
    <input type="button" id="btn" value="   (护眼模式预留)开/关">
    <div class="container">
      <!-- 商品列表，左大图 右边还买过列表-->
      <div class="row mt-5">
        <div class="col-10">
          <!-- 购买栏 左边大图，右边购买-->
          <div class="row">
            <!-- 大图-->
            <div class="col-5 p-0 position-relative">
              <div class="box lin-loupe" id="box">
                <div class="small lin-small-box">
                  <img :src="$store.state.pcUrl+'HNZWJ3E081A_21331_1--w_460_h_460.jpg'">
                  <!-- 遮挡层-->
                  <div class="lin-mark"></div>
                  <div class="lin-float-box"></div>
                </div>
                <!-- 大图：默认隐藏-->
                <div class="big lin-big-box">
                  <img :src="$store.state.pcUrl+'HNZWJ3E081A_21331_1.jpg'">
                </div>
              </div>
              <div class="d-flex position-relative mt-3 mb-5">
                <img :src="$store.state.pcUrl+'left.gif'">
                <div>
                  <img :src="$store.state.pcUrl+'HNZWJ3E081A_21331_1--w_74_h_74.jpg'">
                  <img :src="$store.state.pcUrl+'HNZWJ3E081A_21331_2--w_74_h_74.jpg'">
                  <img :src="$store.state.pcUrl+'HNZWJ3E081A_21331_3--w_74_h_74.jpg'">
                  <img :src="$store.state.pcUrl+'HNZWJ3E081A_21331_4--w_74_h_74.jpg'">
                  <img :src="$store.state.pcUrl+'HNZWJ3E081A_21331_5--w_74_h_74.jpg'">
                </div>
                <img :src="$store.state.pcUrl+'right.gif'" class="my_img1">
              </div>
            </div>
            <!-- 标题-->
            <div class="col-7 pt-0 pr-0">
              <h5>HLA海澜之家连帽镶拼卫衣2018秋季新品时尚休闲卫衣男HNZWJ3E081A</h5>
              <span class="my_must">商品编号：HNZWJ3E081A</span>
              <div class="price">
                &nbsp;&nbsp;
                <span>价格</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <b>¥ 198.00</b>
              </div>
              <table class="m-4">
                <tr>
                  <th>颜色</th>
                  <td>
                    <img
                      :src="$store.state.pcUrl+'HNZWJ3E081A_21331_1--w_34_h_34.jpg'"
                      class="addImg"
                    >
                  </td>
                </tr>
                <tr>
                  <th>尺码</th>
                  <td>
                    <div class="mb-5 mt-3">
                      <a
                        v-for="item of sizeList"
                        :key="item.id"
                        href="javascript:;"
                        class="my_chima m-1"
                      >
                        <span>{{item.num}}</span>
                        <p class="bg-secondary">{{item.size}}</p>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>数量</th>
                  <td class="d-flex">
                    <input type="text" disabled="disabled" value="1">
                    <div class="ml-2">
                      <a href="javascript:;">
                        <img :src="$store.state.pcUrl+'top.jpg'">
                      </a>
                      <br>
                      <a href="javascript:;">
                        <img :src="$store.state.pcUrl+'down.jpg'">
                      </a>
                    </div>
                    <p class="my_must ml-2 mt-2">件</p>
                    <router-link to="/login" class="ml-5 mt-2">
                      <img :src="$store.state.pcUrl+'wjx.png'" class="pb-1">收藏该商品
                    </router-link>
                  </td>
                </tr>
                <tr>
                  <th colspan="2">
                    <div class="m-5 text-center">
                      <button class="btn my_btn">立即购买</button>
                      <button class="btn btn-danger">
                        <img :src="$store.state.pcUrl+'shopcar.png'" class="pr-1 pb-1">加入购物车
                      </button>
                    </div>
                  </th>
                </tr>
                <tr>
                  <td colspan="2">
                    <span
                      class="my_must"
                    >服务承诺&nbsp;&nbsp;&nbsp;&nbsp; 退货保障&nbsp;&nbsp;&nbsp;&nbsp; 极速退款&nbsp;&nbsp;&nbsp;&nbsp; 七天退货</span>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <!-- 商品详情，左：服务热线，右：详情介绍-->
          <div class="row">
            <!-- 左：服务热线-->
            <div class="col-3 ml-0 pl-0 pr-4">
              <img :src="$store.state.pcUrl+'TB2AwmOnFXXXXXjXXXXXXXXXXXX_!!693060164.jpg'">
              <img :src="$store.state.pcUrl+'O1CN011D59P5b9XzbdFir_!!693060164.jpg'">
              <img :src="$store.state.pcUrl+'TB21oxlXjihSKJjy0FfXXbGzFXa_!!1657259311.jpg'">
              <!-- 导航列表-->
              <SideBar></SideBar>
              <!-- 热销排行-->
              <div class="bg-dark">
                <p class="text-white pl-3">
                  热销排行
                  <img :src="$store.state.pcUrl+'selling.jpg'">
                </p>
              </div>
              <div class="my_border text-center">
                <br>
                <CateList :CateList="CateList"></CateList>
                <br>
              </div>
            </div>
            <!-- 中间商品介绍-->
            <div class="col-9 pl-4 productDetail">
              <ul id="myTab" class="nav nav-tabs">
                <li class="active">
                  <a href="#coll-one" data-toggle="tab">商品详情</a>
                  <b>|</b>
                </li>
                <li class="dropdown">
                  <a href="#coll-two" data-toggle="tab">累计评价 (0)</a>
                  <b>|</b>
                </li>
                <li class="dropdown pt-1">
                  <a href="#coll-three" data-toggle="tab">疑难提问</a>
                </li>
              </ul>
              <div id="myTabContent" class="tab-content">
                <div id="coll-one" class="tab-pane fade in active">
                  <img v-for="item of content" :key="item.id" :src="$store.state.pcUrl+item.img">
                </div>
                <!-- 累计评价-->
                <div id="coll-three" class="tab-pane fade">
                  <p>温馨提示：为了您的个人信息安全，请勿在留言中透露联系方式。且每位咨询者购买情况、提问时间等不同，为此以下回复仅对提问者3天内有效，其他网友仅供参考！若由此给您带来不便请多多谅解，谢谢！</p>
                  <textarea class="form-control" rows="5"></textarea>
                  <p>
                    <button class="btn btn-danger mt-2">提交问题</button>
                  </p>
                </div>
                <!-- 疑难提问-->
                <div id="coll-two" class="tab-pane fade">
                  <h4>用户评价</h4>
                  <img :src="$store.state.pcUrl+'2018-11-10_004428.png'">
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 最右边：还买过-->
        <div class="col-2 text-center">
          <div>
            <span>-----还买过-----</span>
          </div>
          <CateList :CateList="CateList"></CateList>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CateList from "../components/CateList";
import SideBar from "../components/SideBar";
export default {
  data() {
    return {
      sizeList: [
        { id: 1, num: 54, size: "(185/100A)" },
        { id: 2, num: 50, size: "(175/92A)" },
        { id: 3, num: 52, size: "(180/96A)" },
        { id: 4, num: 48, size: "(170/88A)" },
        { id: 5, num: 46, size: "(165/84A)" },
        { id: 6, num: 56, size: "(190/104A)" }
      ],
      content: [
        { id: 1, img: "O1CN011D59QBOjThD682y_!!693060164.jpg" },
        { id: 2, img: "O1CN011D59Q95VygDsE99_!!693060164.jpg" },
        { id: 3, img: "5b534bacN4c758fc5.jpg" },
        { id: 4, img: "5b534badN1109998f.jpg" },
        { id: 5, img: "5b534baeN1d53b948.jpg" },
        { id: 6, img: "5b534bafNe83c35f3.png" },
        { id: 7, img: "5b534bb0N239f3c77.png" },
        { id: 8, img: "big1.jpg" },
        { id: 9, img: "big4.jpg" },
        { id: 10, img: "big5.jpg" },
        { id: 11, img: "big6.jpg" },
        { id: 12, img: "big7.jpg" },
        { id: 13, img: "big8.jpg" },
        { id: 14, img: "big9.jpg" },
        { id: 15, img: "big10.jpg" },
        { id: 16, img: "big11.jpg" },
        { id: 17, img: "big12.jpg" },
        { id: 18, img: "big13.jpg" },
        { id: 19, img: "big14.jpg" },
        { id: 20, img: "big15.jpg" },
        { id: 21, img: "big16.jpg" }
      ],
      CateList: [
        {
          id: 1,
          title: "HLA海澜之家撞色圆领长袖",
          img: "HNTAJ3V053A_13457_1--w_460_h_460.jpg",
          price: 98.0
        },
        {
          id: 2,
          title: "HLA海澜之家磨毛纯色长袖",
          img: "HNEAD3V666A_18563_1--w_460_h_460.jpg",
          price: 178.0
        },
        {
          id: 3,
          title: "HLA海澜之家经典套头",
          img: "HNZWJ3V043A_18153_1--w_460_h_460.jpg",
          price: 128.0
        },
        {
          id: 4,
          title: "HLA海澜之家时尚棒球夹克",
          img: "HWJAJ3V268A_15849_1--w_460_h_460.jpg",
          price: 298.0
        },
        {
          id: 5,
          title: "HLA海澜之家针织运动休闲裤",
          img: "HKCAD3V239A_19110_1--w_460_h_460.jpg",
          price: 198.0
        }
      ]
    };
  },
  methods: {
    isloading() {
      function my$(id) {
        return document.getElementById(id);
      }
      //护眼模式（预留）
      var bd = document.body;
      my$("btn").onclick = function() {
        bd.className = bd.className != "cls" ? "cls" : "";
      };

      //根据class获取页面元素 拿到的是数组对象
      function $Cls(cname) {
        return document.getElementsByClassName(cname);
      }
      window.onload = function() {
        var loupe = $Cls("lin-loupe")[0];
        var SmallBox = $Cls("lin-small-box")[0];
        var Mark = $Cls("lin-mark")[0];
        var FloatBox = $Cls("lin-float-box")[0];
        var BigBox = $Cls("lin-big-box")[0];
        var BigBoxImage = BigBox.getElementsByTagName("img")[0];

        Mark.onmouseover = function() {
          FloatBox.style.display = "block";
          BigBox.style.display = "block";
        };

        Mark.onmouseout = function() {
          FloatBox.style.display = "none";
          BigBox.style.display = "none";
        };

        Mark.onmousemove = function(ev) {
          var _event = ev || window.event; //兼容多个浏览器的event参数模式

          var left =
            _event.clientX -
            loupe.offsetLeft -
            SmallBox.offsetLeft -
            FloatBox.offsetWidth / 2;
          var top =
            _event.clientY -
            loupe.offsetTop -
            SmallBox.offsetTop -
            FloatBox.offsetHeight / 2;

          //设置边界处理，防止移出小图片
          if (left < 0) {
            left = 0;
          } else if (left > Mark.offsetWidth - FloatBox.offsetWidth) {
            left = Mark.offsetWidth - FloatBox.offsetWidth;
          }

          if (top < 0) {
            top = 0;
          } else if (top > Mark.offsetHeight - FloatBox.offsetHeight) {
            top = Mark.offsetHeight - FloatBox.offsetHeight;
          }

          FloatBox.style.left = left + "px"; //oSmall.offsetLeft的值是相对什么而言
          FloatBox.style.top = top + "px";

          //求其比值
          var percentX = left / (Mark.offsetWidth - FloatBox.offsetWidth);
          var percentY = top / (Mark.offsetHeight - FloatBox.offsetHeight);

          //方向相反，小图片鼠标移动方向与大图片相反，故而是负值
          BigBoxImage.style.left =
            -percentX * (BigBoxImage.offsetWidth - BigBox.offsetWidth) + "px";
          BigBoxImage.style.top =
            -percentY * (BigBoxImage.offsetHeight - BigBox.offsetHeight) + "px";
        };
      };
    }
  },
  mounted() {
    this.isloading();
  },
  components: {
    CateList,
    SideBar
  }
};
</script>

<style scoped>
#box > .small > img {
  width: 400px;
  height: 400px;
}
div.container .row .col-7 {
  padding: 20px;
}
div.col-7 h5 {
  color: #222;
}
.price {
  width: 100%;
  height: 70px;
  background-image: url("http://yehuo-img.stor.sinaapp.com/img/pc/detailimg6.jpg");
  line-height: 70px;
}

/* 放大镜 */
.lin-loupe {
  display: block;
  width: 400px;
  height: 400px;
  margin: 0px;
  position: relative;
  border: 1px solid #ccc;
}

.lin-small-box {
  position: relative;
  z-index: 1;
}
/* 遮挡层 */
.lin-float-box {
  display: none;
  width: 160px;
  height: 120px;
  position: absolute;
  background: #ffffcc;
  border: 1px solid #ccc;
  filter: alpha(opacity=50);
  opacity: 0.5;
}
/* 框架大小 */
.lin-mark {
  position: absolute;
  display: block;
  width: 400px;
  height: 400px;
  background-color: #fff;
  filter: alpha(opacity=0);
  top: 0px;
  opacity: 0;
  z-index: 10;
}
/* 大图层 */
.lin-big-box {
  display: none;
  position: absolute;
  top: 0;
  left: 200px;
  width: 400px;
  height: 400px;
  overflow: hidden;
  border: 1px solid #ccc;
  z-index: 1;
}
/* 大图片 */
.lin-big-box img {
  position: absolute;
  z-index: 5;
}

.price > b {
  font-size: 18px;
  color: #c40000;
}
div.row .col-7 span {
  color: #555;
}
div.col-2 > div > a > img {
  width: 150px;
  height: 150px;
}
.my_border img {
  width: 172px;
  height: 172px;
}
div.col-2 > div > a {
  color: #555;
}
div.col-2 > div > a span,
.my_border span {
  color: #ff5200 !important;
}
th {
  width: 50px;
  color: #aaaaaa;
}
.bg-secondary {
  background-color: #bbb !important;
}
.my_chima {
  width: 62px;
  height: 38px;
  border: 2px solid #ccc;
  float: left;
  text-align: center;
}
table td > input {
  width: 32px;
  height: 30px;
  text-align: center;
}
table tr td a.ml-5 {
  font-size: 14px;
  color: #222;
}
table th > div.text-center > button {
  width: 180px;
  height: 40px;
  font-size: 16px;
}
.my_btn {
  background: #ffeded;
  color: #cf5f5f;
  border: 1px solid #cf5f5f;
}
.my_btn2 {
  width: 10px;
  height: 10px;
}
.my_btn2 > img {
  width: 13px;
  height: 10px;
}
.container div.col-5 div.d-flex div > img {
  width: 50px;
  height: 50px;
  margin: 5px;
  border: 1px solid #ddd;
  padding: 2px;
}
.my_img1 {
  position: relative;
  left: 65px;
}
ul > li > a {
  font-weight: bold;
  font-size: 14px;
}
ul > li {
  margin: 10px;
  text-align: start;
}
.bg-dark {
  width: 188px;
  height: 40px;
}
.bg-dark > p {
  line-height: 40px;
}
.my_border {
  width: 188px;
  border: 1px solid #ccc;
}
#myTab > li > a {
  font-size: 16px;
}
.col-9 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 80%;
  flex: 0 0 80%;
  max-width: 80%;
}
.col-3 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 20%;
  flex: 0 0 20%;
  max-width: 20%;
}
#coll-two > img {
  width: 100%;
  padding-left: 10px;
}
.fade.in {
  opacity: 1;
}
.cls {
  background: #333;
  color: #fff;
}
.big {
  position: absolute;
  top: 0;
  left: 360px;
  border: 1px solid #ccc;
  overflow: hidden;
  z-index: 10;
  display: none;
}
.mask {
  width: 175px;
  height: 175px;
  background: rgba(255, 255, 0, 0.4);
  position: absolute;
  top: 0px;
  left: 0px;
  cursor: move;
  display: none;
}
</style>

