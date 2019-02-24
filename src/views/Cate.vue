<template>
  <div class="container heilan-cate">
    <!-- 商品详情，左：服务热线，右：详情介绍-->
    <div class="row">
      <!-- 左：服务热线-->
      <div class="col-1"></div>
      <div class="col-2 ml-0 pl-0 pr-4">
        <nav class="breadcrumb">
          <a href="#" class="breadcrumb-item">首页</a>
          <a href="#" class="breadcrumb-item my_must">登录</a>
        </nav>
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
        <div class="my_border text-center cate-img">
          <br>

          <CateList :CateList="catelist"></CateList>

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
              <li v-for="item of navlist" :key="item.id" class="nav-item ml-1 mr-1">
                <a href="javascript:;" class="bg-white border-right-0">
                  {{item.title}}
                  <img :src="$store.state.pcUrl+'icon_down.png'">
                </a>
              </li>
              <li class="mr-5">
                <select name="cars" id="#">
                  <option value="time">按上架时间排序</option>
                  <option value="remen">按最热排序</option>
                </select>
              </li>
            </ul>
          </div>
          <div class="card-body d-flex flex-wrap">
            <div v-for="item of catelist" :key="item.id">
              <router-link to="goods" class="text-center">
                <img :src="$store.state.pcUrl+item.img">
                <p>{{item.title}}</p>
                <p>
                  售价
                  <span>{{item.price | currency}}</span>
                </p>
              </router-link>
            </div>
          </div>
          <div class="card-footer p-0 position-relative d-flex justify-content-between">
            <a href="#" class="position-relative">▲返回顶部</a>
            <div class="block nav-get">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-size="8"
                layout="total, prev, pager, next"
                :total="685"
                background
              ></el-pagination>
            </div>
          </div>
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
      navlist: [
        { id: 1, title: "销量" },
        { id: 2, title: "价格" },
        { id: 3, title: "好评" },
        { id: 4, title: "人气" }
      ],
      catelist: [
        {
          id: 1,
          title: "HLA海澜之家牛津纺水洗休闲衬衫",
          img: "HNEAD1R002A_21816_1--w_460_h_460.jpg",
          price: 98.0
        },
        {
          id: 2,
          title: "HLA海澜之家长袖牛仔保暖衬衫",
          img: "HNEAD4E612A_21812_1--w_460_h_460.jpg",
          price: 328.0
        },
        {
          id: 3,
          title: "HLA海澜之家色织长袖衬衫2018",
          img: "HNEAD4E222A_21798_1--w_460_h_460.jpg",
          price: 298.0
        },
        {
          id: 4,
          title: "HLA海澜之家时尚条纹长袖衬衫",
          img: "HNEAD4E265A_21792_1--w_460_h_460.jpg",
          price: 298.0
        },
        {
          id: 5,
          title: "HLA海澜之家格纹提花长袖衬衫",
          img: "HNEAD4E222A_21798_1--w_460_h_460.jpg",
          price: 98.0
        },
        {
          id: 6,
          title: "HLA海澜之家牛津纺清新休闲衬衫",
          img: "HNEAD1R005A_10665_1--w_460_h_460.jpg",
          price: 328.0
        },
        {
          id: 7,
          title: "HLA海澜之家长袖提花保暖衬衫",
          img: "HNEAD4E245A_16978_1--w_460_h_460.jpg",
          price: 278.0
        },
        {
          id: 8,
          title: "HLA海澜之家几何花纹长袖衬衫",
          img: "HNEAD4E218A_21767_1--w_460_h_460.jpg",
          price: 278.0
        }
      ],
      currentPage: 1
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  components: {
    CateList,
    SideBar
  }
};
</script>

<style scoped>
.breadcrumb {
  background: #fff;
}
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
.heilan-cate .cate-img a img {
  width: 172px !important;
}
</style>

