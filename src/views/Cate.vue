<template>
  <div class="container">
    <!-- 商品详情，左：服务热线，右：详情介绍-->
    <div class="row">
      <!-- 左：服务热线-->
      <div class="col-1"></div>
      <div class="col-2 ml-0 pl-0 pr-4">
        <nav class="breadcrumb">
          <a href="#" class="breadcrumb-item text-info">首页</a>
          <a href="#" class="breadcrumb-item my_must text-info">登录</a>
        </nav>
        <img :src="$store.state.pcUrl+'TB2AwmOnFXXXXXjXXXXXXXXXXXX_!!693060164.jpg'">
        <img :src="$store.state.pcUrl+'O1CN011D59P5b9XzbdFir_!!693060164.jpg'">
        <img :src="$store.state.pcUrl+'TB21oxlXjihSKJjy0FfXXbGzFXa_!!1657259311.jpg'">
        <!-- 导航列表-->
        <div>
          <a href="#" class="h4 font-weight-bold">2018秋季特卖</a>
          <ul class="list-unstyled ml-3 mb-5">
            <li>
              <a href="#">衬衫</a>
            </li>
            <li>
              <a href="#">大衣</a>
            </li>
            <li>
              <a href="#">型男外套</a>
            </li>
            <li>
              <a href="#">个性卫衣</a>
            </li>
            <li>
              <a href="#">长袖T恤</a>
            </li>
            <li>
              <a href="#">夹克</a>
            </li>
            <li>
              <a href="#">针织衫/毛衫</a>
            </li>
            <li>
              <a href="#">牛仔裤</a>
            </li>
            <li>
              <a href="#">休闲裤</a>
            </li>
            <li>
              <a href="#">西服</a>
            </li>
          </ul>
          <a href="#" class="h4 font-weight-bold">2018冬季新品</a>
          <ul class="list-unstyled ml-3">
            <li>
              <a href="#">羽绒服</a>
            </li>
            <li>
              <a href="#">保暖衬衫</a>
            </li>
            <li>
              <a href="#">型男外套</a>
            </li>
            <li>
              <a href="#">个性卫衣</a>
            </li>
            <li>
              <a href="#">大衣</a>
            </li>
            <li>
              <a href="#">夹克</a>
            </li>
            <li>
              <a href="#">针织衫/毛衫</a>
            </li>
            <li>
              <a href="#">牛仔裤</a>
            </li>
            <li>
              <a href="#">休闲裤</a>
            </li>
            <li>
              <a href="#">西服</a>
            </li>
          </ul>
        </div>
        <!-- 热销排行-->
        <div class="bg-dark">
          <p class="text-white pl-3">
            热销排行
            <img :src="$store.state.pcUrl+'selling.jpg'">
          </p>
        </div>
        <div class="my_border text-center">
          <br>
          <a href="goods.html">
            <img :src="$store.state.pcUrl+'HNTAJ3V053A_13457_1--w_460_h_460.jpg'">
            <p>HLA海澜之家撞色圆领长袖</p>
            <p>
              售价
              <span>￥98.00</span>
            </p>
          </a>
          <a href="#">
            <img :src="$store.state.pcUrl+'HNEAD3V666A_18563_1--w_460_h_460.jpg'">
            <p>HLA海澜之家磨毛纯色长袖</p>
            <p>
              售价
              <span>￥178.00</span>
            </p>
          </a>
          <a href="#">
            <img :src="$store.state.pcUrl+'HNZWJ3V043A_18153_1--w_460_h_460.jpg'">
            <p>HLA海澜之家经典套头</p>
            <p>
              售价
              <span>￥128.00</span>
            </p>
          </a>
          <a href="#">
            <img :src="$store.state.pcUrl+'HWJAJ3V268A_15849_1--w_460_h_460.jpg'">
            <p>HLA海澜之家时尚棒球夹克</p>
            <p>
              售价
              <span>￥298.00</span>
            </p>
          </a>
          <a href="#">
            <img :src="$store.state.pcUrl+'HKCAD3V239A_19110_1--w_460_h_460.jpg'">
            <p>HLA海澜之家针织运动休闲裤</p>
            <p>
              售价
              <span>￥198.00</span>
            </p>
          </a>
          <br>
        </div>
        <div class="bg-dark">
          <p class="text-white pl-3">浏览过的宝贝</p>
        </div>
        <div class="my_border text-center pb-4 mb-3"></div>
      </div>
      <!-- 中间商品介绍-->
      <div class="col-9 pl-4">
        <!-- 商品筛选-->
        <h5 class="p-3 mb-4 text-dark">商品筛选</h5>
        <div class="card border-0">
          <div class="card-header p-0">
            <!-- 排序标签-->
            <ul class="nav m-0">
              <li class="nav-item">排序</li>
              <li class="nav-item ml-1 mr-1">
                <a href="#" class="bg-white border-right-0">
                  销量
                  <img :src="$store.state.pcUrl+'icon_down.png'">
                </a>
              </li>
              <li class="nav-item ml-1 mr-1">
                <a href="#" class="bg-white border-right-0">
                  价格
                  <img :src="$store.state.pcUrl+'icon_down.png'">
                </a>
              </li>
              <li class="nav-item ml-1 mr-1">
                <a href="#" class="bg-white border-right-0">
                  好评
                  <img :src="$store.state.pcUrl+'icon_down.png'">
                </a>
              </li>
              <li class="nav-item ml-1 mr-1">
                <a href="#" class="bg-white border-right-0">
                  人气
                  <img :src="$store.state.pcUrl+'icon_down.png'">
                </a>
              </li>
              <li class="mr-5">
                <select name="cars" id="#">
                  <option value="time">按上架时间排序</option>
                  <option value="remen">按最热排序</option>
                </select>
              </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li class="nav-item ml-5">
                <span class="my_fz">当前40/221件商品</span>
              </li>
              <li class="nav-item ml-1 mr-1">
                <a href="#">1</a>
              </li>
              <li class="nav-item ml-1 mr-1">
                <a href="#" class="text-primary">2</a>
              </li>
              <li class="nav-item ml-1 mr-1">
                <a href="#" class="text-primary">3</a>
              </li>
              <li class="nav-item ml-0 mr-0">
                <a href="#" class="text-muted">上一页</a>
              </li>
              <li class="nav-item mr-0">
                <a href="#" class="text-primary">下一页</a>
              </li>
            </ul>
          </div>
          <div class="card-body d-flex flex-wrap">
            <div>
              <a href="goods.html" class="text-center">
                <img :src="$store.state.pcUrl+'HNEAD1R002A_21816_1--w_460_h_460.jpg'">
                <p>HLA海澜之家牛津纺水洗休闲衬衫</p>
                <p>
                  售价
                  <span>￥98.00</span>
                </p>
              </a>
            </div>
            <div>
              <a href="#" class="text-center">
                <img :src="$store.state.pcUrl+'HNEAD4E612A_21812_1--w_460_h_460.jpg'">
                <p>HLA海澜之家长袖牛仔保暖衬衫</p>
                <p>
                  售价
                  <span>￥328.00</span>
                </p>
              </a>
            </div>
            <div>
              <a href="#" class="text-center">
                <img :src="$store.state.pcUrl+'HNEAD4E222A_21798_1--w_460_h_460.jpg'">
                <p>HLA海澜之家色织长袖衬衫2018</p>
                <p>
                  售价
                  <span>￥298.00</span>
                </p>
              </a>
            </div>
            <div>
              <a href="#" class="text-center">
                <img :src="$store.state.pcUrl+'HNEAD4E265A_21792_1--w_460_h_460.jpg'">
                <p>HLA海澜之家时尚条纹长袖衬衫</p>
                <p>
                  售价
                  <span>￥298.00</span>
                </p>
              </a>
            </div>
            <div>
              <a href="#" class="text-center">
                <img :src="$store.state.pcUrl+'HNEAD4E222A_21798_1--w_460_h_460.jpg'">
                <p>HLA海澜之家格纹提花长袖衬衫</p>
                <p>
                  售价
                  <span>￥98.00</span>
                </p>
              </a>
            </div>
            <div>
              <a href="#" class="text-center">
                <img :src="$store.state.pcUrl+'HNEAD1R005A_10665_1--w_460_h_460.jpg'">
                <p>HLA海澜之家牛津纺清新休闲衬衫</p>
                <p>
                  售价
                  <span>￥328.00</span>
                </p>
              </a>
            </div>
            <div>
              <a href="#" class="text-center">
                <img :src="$store.state.pcUrl+'HNEAD4E245A_16978_1--w_460_h_460.jpg'">
                <p>HLA海澜之家长袖提花保暖衬衫</p>
                <p>
                  售价
                  <span>￥278.00</span>
                </p>
              </a>
            </div>
            <div>
              <a href="#" class="text-center">
                <img :src="$store.state.pcUrl+'HNEAD4E218A_21767_1--w_460_h_460.jpg'">
                <p>HLA海澜之家几何花纹长袖衬衫</p>
                <p>
                  售价
                  <span>￥278.00</span>
                </p>
              </a>
            </div>
          </div>
          <div class="card-footer p-0 position-relative">
            <a href="#" class="position-relative">▲返回顶部</a>
            <ul class="nav m-0 position-relative">
              <li class="nav-item ml-5">
                <span class="my_fz">当前40/221件商品</span>
              </li>
              <li class="nav-item ml-1 mr-1">
                <a href="#">1</a>
              </li>
              <li class="nav-item ml-1 mr-1">
                <a href="#" class="text-primary">2</a>
              </li>
              <li class="nav-item ml-1 mr-1">
                <a href="#" class="text-primary">3</a>
              </li>
              <li class="nav-item ml-0 mr-0">
                <a href="#" class="text-muted">上一页</a>
              </li>
              <li class="nav-item mr-0">
                <a href="#" class="text-primary">下一页</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
.my_border img {
  width: 172px;
  height: 172px;
}
.my_border span {
  color: #ff5200;
}
div ul > li > a {
  font-weight: bold;
  font-size: 14px;
  color: #444;
  transition: all 0.3s linear;
}
div ul > li > a:hover {
  color: #ff5200;
  text-decoration: none;
}
ul.mb-5 > li {
  margin: 10px;
  padding: 5px;
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
.card-header > a {
  font-size: 16px;
}
div.col-8 > h5 {
  border: 1px solid #eee;
  font-size: 16px;
  margin-top: 40px;
}
ul > li > a.bg-white {
  border: 1px solid #ddd;
  padding-left: 2px;
}
ul > li > span {
  font-size: 14px;
}
.card-body img {
  width: 185px;
}
.card-body span {
  color: #ff0000;
}
.card-body > div {
  width: 185px;
  margin: 5px;
}
.card-footer a {
  top: 7px;
  left: 10px;
}
.card-footer ul {
  left: 500px;
  bottom: 20px;
}
.card-footer {
  height: 35px;
}
</style>

