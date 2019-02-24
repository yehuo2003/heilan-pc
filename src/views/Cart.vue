<template>
  <div class="container">
    <!-- 导航-->
    <nav class="breadcrumb">
      <a href="javascript:;" class="breadcrumb-item">首页</a>
      <a href="javascript:;" class="breadcrumb-item my_must">购物车</a>
    </nav>
    <!-- 卡片-->
    <div class="card">
      <div class="card-header d-flex text-center p-0 justify-content-start">
        <div v-for="item of cartitle" :key="item.id">
          <span>{{item.title}}</span>
        </div>
      </div>
      <div class="card-body pt-0">
        <div
          v-for="item of cartList"
          :key="item.id"
          class="d-flex text-center border-bottom pb-3 mt-3"
        >
          <div class="d-flex text-left">
            <img :src="$store.state.pcUrl+item.img">
            <div class="pl-3 pr-2">
              <a href="javascript:;">
                <p>{{item.title}}</p>
                <p class="my_gray">编号：HNEAD1R002A</p>
                <p class="my_gray">尺码：175/96A(41)</p>
              </a>
            </div>
          </div>
          <div>
            <span class="my_line_height">有货</span>
          </div>

          <span class="my_line_height pl-5">{{item.price | currency}}</span>

          <div class="d-flex align-items-center pl-5 ml-5 pt-3">
            <button class="btn bg-white border-right-0 my_btn3">-</button>
            <span class="w-25 my_span">1</span>
            <button class="btn bg-white border-left-0 my_btn3">+</button>
          </div>
          <span class="my_line_height price d-block mr-5 pl-5">￥198.00</span>
          <div class="my_line_height">
            <button class="btn btn-danger pl-4 pr-4">
              <img :src="$store.state.pcUrl+'rabth.png'">
            </button>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <!-- 继续购物-->
        <div>
          <button class="btn btn-danger">
            <a href="goods.html" class="text-white">继续购物</a>
          </button>
          &nbsp;&nbsp;
          <a href="404.html">清空购物袋</a>
        </div>
        <div class="float-right">
          <h5 class="bg-secondary text-white p-2">总计</h5>
          <p>
            商品数量：
            <span id="priceNum">2</span>
          </p>
          <p>
            商品总额：
            <span class="text-danger" id="sum">￥526.00</span>
          </p>
          <p>
            <button class="btn btn-danger float-right">结算</button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartitle: [
        { id: 1, title: "商品名称" },
        { id: 2, title: "库存" },
        { id: 3, title: "价格" },
        { id: 4, title: "数量" },
        { id: 5, title: "小计" },
        { id: 6, title: "操作" }
      ],
      cartList: [
        {
          id: 1,
          title:
            "HLA海澜之家长袖牛仔保暖衬衫2018冬季新品加绒舒适长衬男HNEAD4E612A",
          price: 198.0,
          img: "HNEAD1R002A_21816_1--w_460_h_460.jpg"
        },
        {
          id: 2,
          title:
            "HLA海澜之家牛津纺水洗休闲衬衫2019春季新品舒适透气长袖衬衫男HNEAD1R002A",
          price: 328.0,
          img: "HNEAD4E612A_21812_1--w_460_h_460.jpg"
        }
      ]
    };
  }
};
</script>


<style scoped>
.card-header div {
  font-size: 16px;
  line-height: 40px;
  height: 40px;
  border-left: 1px solid #ddd;
}
.card-header > div:nth-child(1),
.card-body > div > div:nth-child(1) {
  width: 400px;
  border-left: 0px;
}
.card-header > div:nth-child(2),
.card-body > div > div:nth-child(2) {
  width: 100px;
}
.card-header > div:nth-child(3),
.card-header > div:nth-child(5),
.card-body > div > div:nth-child(3),
.card-body > div > div:nth-child(5) {
  width: 150px;
}
.card-header > div:nth-child(4),
.card-body > div > div:nth-child(4) {
  width: 200px;
}
.card-header > div:nth-child(6),
.card-body > div > div:nth-child(6) {
  width: 170px;
}
.card-body img {
  width: 100px;
  height: 100px;
}
.card-body > div {
  height: 110px;
}
.card-body p {
  width: 250px;
}
.my_btn3 {
  border: 1px solid #aaa;
  color: #aaa;
}
.card-body input {
  height: 29px;
}
.card-body > div .btn-danger > img {
  width: 20px;
  height: 20px;
}
.my_line_height {
  line-height: 110px;
  font-size: 16px;
}
.border-bottom {
  border-bottom: 1px dashed #dee2e6 !important;
}
.card-footer p,
.card-footer p > span {
  font-size: 16px;
}
.card-footer p button {
  font-size: 20px;
  width: 100px;
  height: 40px;
  text-align: center;
}
.my_span {
  line-height: 27px;
  background: #eee !important;
  border: 1px solid #aaa;
}
div.pl-3 a {
  color: #444;
  transition: all 0.3s linear;
}
div.pl-3 a:hover {
  color: #ff5200;
  text-decoration: none;
}
</style>

