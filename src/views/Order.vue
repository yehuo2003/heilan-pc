<template>
  <div class="container">
    <!--指南导航-->
    <div class="row">
      <div class="col-sm-12">
        <nav class="breadcrumb">
          <span class="breadcrumb-item">首页</span>
          <span class="breadcrumb-item my_must">我的家人</span>
          <span class="breadcrumb-item my_must">全部订单</span>
        </nav>
        <hr>
      </div>
    </div>
    <!-- 订单，左边列表，右边详情-->
    <div id="order" class="row">
      <!-- 我的家人-->
      <div class="col-2 text-center mb-5">
        <div class="mb-3">我的家人</div>
        <!-- 列表-->
        <div>
          <div class="card">
            <div class="card-header">
              <h5>我的订单</h5>
            </div>
            <ul class="card-body list-group p-0">
              <li class="list-group-item list-group-item-light">
                <a href="#coll-1" data-toggle="collapse">待付款订单</a>
              </li>
              <li class="list-group-item list-group-item-light">
                <a href="#coll-1" data-toggle="collapse">备货中订单</a>
              </li>
              <li class="list-group-item list-group-item-light">
                <a href="#coll-1" data-toggle="collapse">配送中订单</a>
              </li>
              <li class="list-group-item list-group-item-light">
                <a href="#coll-1" data-toggle="collapse">已完成订单</a>
              </li>
              <li class="list-group-item list-group-item-light border-bottom-0">
                <a href="#coll-1" data-toggle="collapse">已取消订单</a>
              </li>
            </ul>
            <div class="card-header">
              <h5>账户管理</h5>
            </div>
            <ul class="card-body list-group p-0">
              <li class="list-group-item list-group-item-light">
                <a href="#coll-2" data-toggle="collapse">管理个人信息</a>
              </li>
              <li class="list-group-item list-group-item-light">
                <router-link to="cart">我的购物车</router-link>
              </li>
              <li class="list-group-item list-group-item-light">
                <router-link to="login">我的评价</router-link>
              </li>
              <li class="list-group-item list-group-item-light border-bottom-0">
                <router-link to="cate">挑选更多</router-link>
              </li>
            </ul>
            <div class="card-header">
              <h5>联系方式</h5>
            </div>
            <div class="card-body p-0 text-left pl-3">
              <!-- 热线邮箱-->
              <h6 class="mb-0 border-bottom-0">热线：13666990716</h6>
              <h6>邮箱：9208608@qq.com</h6>
            </div>
          </div>
        </div>
      </div>
      <div class="col-10 mb-5">
        <div id="coll">
          <!-- 我的订单-->
          <div id="coll-1" class="collapse show" data-parent="#order">
            <div class="bq">
              <span>我的订单</span>
            </div>
            <div class="mt-3">
              <table class="table table-light text-center">
                <thead>
                  <tr class="table-secondary">
                    <th>订单号</th>
                    <th>收货人</th>
                    <th>金额</th>
                    <th>下单时间</th>
                    <th>支付方式</th>
                    <th>状态</th>
                    <th>操作</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
          <!-- 管理个人信息-->
          <div id="coll-2" class="collapse" data-parent="#order">
            <div class="bq">
              <span>管理个人信息</span>
            </div>
            <div class="mt-3 pl-5 form-group">
              <p>
                用户名
                <span>81F8E105F5960612038FF42150584621</span>
              </p>
              <p class="d-flex">
                姓名
                <input type="text" class="form-control w-25">
                <span></span>
              </p>
              <p class="d-flex">
                邮箱
                <input type="text" class="form-control w-25">
                <span></span>
              </p>
              <p>
                性别
                <input type="radio" name="age">男
                <input type="radio" name="age">女
              </p>
              <h5>收货地址</h5>
              <p class="d-flex">
                *收货人
                <input type="text" class="form-control w-25">
                <span></span>
              </p>
              <p class="d-flex">
                *地址
                <input type="text" class="form-control w-25">
                <span></span>
              </p>
              <p class="d-flex">
                *手机
                <input type="text" class="form-control w-25">
                <span></span>
              </p>
              <p>
                设为收货地址
                <input type="radio" name="add" checked>是
                <input type="radio" name="add">否
              </p>
              <p>
                <button class="btn btn-danger p-2 mt-2">确认修改</button>
              </p>
            </div>
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
.col-2 > div {
  border: 1px solid #ccc;
  font-size: 15px;
  line-height: 30px;
}
.card-header {
  background: #969696;
  height: 34px;
  line-height: 30px;
  color: #fff;
}
.card-header h5 {
  color: #fff;
}
.card-body li {
  height: 34px;
  border-left: 0px !important;
  border-right: 0px !important;
  border: 1px dashed #bbb;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 0px;
}
.card-body > li > a {
  display: block;
  margin: -7px auto;
}
.card-body > li > a:hover {
  color: darkred;
}
.card-body > h6 {
  line-height: 30px;
  color: #aaa;
}
.bq {
  height: 30px;
  border-bottom: 1px solid #bbb;
}
#coll .bq > span {
  line-height: 30px;
  font-size: 16px;
  border-bottom: 3px solid #ec6c00;
  padding-left: 2px;
  padding-right: 2px;
}
table th {
  font-size: 14px;
}
#coll-2 p {
  margin: 15px;
  font-size: 14px;
}
#coll-2 p > button {
  margin-left: 90px;
  font-size: 16px;
}
</style>

