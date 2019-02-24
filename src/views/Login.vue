<template>
  <div class="container">
    <!--登录导航-->
    <div class="row">
      <div class="col-sm-12">
        <nav class="breadcrumb">
          <router-link to="/" class="breadcrumb-item">首页</router-link>
          <span class="breadcrumb-item my_must">登录</span>
        </nav>
        <hr>
      </div>
    </div>
    <!-- 登录列表-->
    <div class="row mb-3">
      <!-- 左边：已注册用户-->
      <div class="col-6">
        <div class="card">
          <div class="card-header">
            <span>已注册用户</span>
          </div>
          <div class="card-body position-relative">
            <div class="d-flex">
              用户名：
              <input type="text" placeholder="请输入Email/手机号码登录" class="form-control w-50">
            </div>
            <div class="d-flex">
              密 &nbsp;&nbsp;&nbsp;码：
              <input type="password" class="form-control w-50">
            </div>
            <div>
              验证码：
              <input type="password">
              <a href="#">看不清换一张</a>
            </div>
            <p>
              <input type="checkbox" class="mt-4">记住密码
              <a href="#">忘记密码?</a>
            </p>
            <div>
              <input type="button" value="登录" class="btn btn-danger">
            </div>
          </div>
          <div class="card-footer text-center">
            <p class="text-left">使用其他合作网站账号登录</p>
            <p>
              <img :src="$store.state.pcUrl+'logoimg1.jpg'">
              <img :src="$store.state.pcUrl+'logoimg2.jpg'">
              <img :src="$store.state.pcUrl+'logoimg3.jpg'">
            </p>
          </div>
        </div>
      </div>
      <!-- 右边：未注册用户-->
      <div class="col-6">
        <div class="card">
          <div class="card-header">未注册用户</div>
          <div class="card-body">
            <div class="p1">
              现在免费注册成为海澜之家用户，便能立刻享受便宜又
              放心的购物乐趣。
            </div>
            <div class="my_must p-0">
              <span>
                &nbsp;&nbsp;&nbsp;
                <img :src="$store.state.pcUrl+'logoimg4.jpg'">简单快捷 1分钟即可完成注册
              </span>
              <br>
              <span>
                &nbsp;&nbsp;&nbsp;
                <img :src="$store.state.pcUrl+'logoimg4.jpg'">注册用户可方便的收藏商品
              </span>
              <br>
              <span>
                &nbsp;&nbsp;&nbsp;
                <img :src="$store.state.pcUrl+'logoimg4.jpg'">注册用户可方便的管理查询自己的订单
              </span>
            </div>
            <div>
              <button class="btn btn-dark">
                <router-link to="/reg" class="text-white">免费注册</router-link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
div.card-body div {
  padding: 10px;
  position: relative;
  left: 74px;
  line-height: 30px;
}
div.card-body p,
div.card-body p > a {
  position: relative;
  left: 130px;
  color: #999;
  line-height: 30px;
}
div.card-body p > a {
  left: 80px;
}
div.card-body p > input {
  top: 2px;
  position: relative;
}
.btn-danger {
  width: 80px;
  height: 30px;
  background: #d9534f;
  position: relative;
  left: 100px;
}
.p1 {
  width: 320px;
}
</style>

