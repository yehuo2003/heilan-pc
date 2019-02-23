<template>
  <div id="footer">
    <footer>
      <div class="foot_bg1 pb-4">
        <div class="container">
          <div class="row border-bottom mb-4 pt-3 pb-3">
            <div class="col-sm-4 d-flex justify-content-center">
              <div>
                <img :src="$store.state.pcUrl+'footerimg1.jpg'">
              </div>
              <div>
                <h5 class="text-white">7天</h5>
                <span>无条件退货</span>
              </div>
            </div>
            <div class="col-sm-4 d-flex justify-content-center">
              <div>
                <img :src="$store.state.pcUrl+'footerimg2.jpg'">
              </div>
              <div>
                <h5 class="text-white">全场68包邮</h5>
              </div>
            </div>
            <div class="col-sm-4 d-flex justify-content-center">
              <div>
                <img :src="$store.state.pcUrl+'footerimg3.jpg'">
              </div>
              <div>
                <h5 class="text-white">全国所有城市</h5>
                <span>快递上门服务</span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-9 d-flex justify-content-around">
              <ul class="list-unstyled">
                <li>
                  <h6 class="text-white mb-0">购物指南</h6>
                </li>
                <li>
                  <a href="#">购物流程</a>
                </li>
                <li>
                  <a href="#">订单查询</a>
                </li>
                <li>
                  <a href="#">隐私声明</a>
                </li>
              </ul>
              <ul class="list-unstyled">
                <li>
                  <h6 class="text-white mb-0">配送方式</h6>
                </li>
                <li>
                  <a href="#">商品验货</a>
                </li>
                <li>
                  <a href="#">商品签收</a>
                </li>
                <li>
                  <a href="#">配送城市与费用</a>
                </li>
              </ul>
              <ul class="list-unstyled">
                <li>
                  <h6 class="text-white mb-0">支付方式</h6>
                </li>
                <li>
                  <a href="#">中国银联</a>
                </li>
                <li>
                  <a href="#">支付宝</a>
                </li>
                <li>
                  <a href="#">发票制度</a>
                </li>
              </ul>
              <ul class="list-unstyled">
                <li>
                  <h6 class="text-white mb-0">售后服务</h6>
                </li>
                <li>
                  <a href="#">退换货政策</a>
                </li>
                <li>
                  <a href="#">退换货流程</a>
                </li>
                <li>
                  <a href="#">退款方式</a>
                </li>
              </ul>
              <ul class="list-unstyled">
                <li>
                  <h6 class="text-white mb-0">新手指南</h6>
                </li>
                <li>
                  <a href="#">用户注册</a>
                </li>
                <li>
                  <a href="#">找回密码</a>
                </li>
                <li>
                  <a href="#">服务条款</a>
                </li>
              </ul>
            </div>
            <div class="col-3 pl-5">
              <p>
                客户服务热线
                <span>(仅收市话费)</span>
              </p>
              <h5>400-888-8888</h5>
              <span>地址：深圳市龙华区xx服装工业城</span>
              <br>
              <span>电话：0591-888888</span>
            </div>
          </div>
        </div>
      </div>
      <div class="foot_bg2">
        <div class="container">
          <div class="text-center pt-3 pb-2">
            <span>工信部备案·深ICP备666131号</span>
            <br>
            <span>增值电信业务经营许可证·深B1-666666</span>
            <br>
            <span>©2014-2018 深圳电子商务有限公司 版权所有 HLA Inc. All Rights Reserved.</span>
            <br>
          </div>
          <div class="text-center">
            <img :src="$store.state.pcUrl+'footerimg4.jpg'">
            <img :src="$store.state.pcUrl+'footerimg5.jpg'">
            <img :src="$store.state.pcUrl+'footerimg6.jpg'">
            <img :src="$store.state.pcUrl+'ebsIcon.png'" class="foot_gs">
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
footer .container {
  min-width: 80% !important;
}
.foot_bg1 {
  background: #343434;
  width: 100%;
}
.foot_bg2 {
  background-color: #666;
  border-top: 3px solid #818181;
  width: 100%;
  height: 12rem;
}
#footer span {
  color: #bababa;
  font-size: 14px;
}
.border-bottom {
  border-bottom: 1px dashed #dee2e6 !important;
}
ul > li {
  margin: 5px;
}
ul > li > a,
div a {
  color: #888;
}
.foot_bg2 span,
.foot_bg1 div > span {
  color: #ccc;
  font-size: 12px;
}
.col-3 span,
ul > li > a,
div a {
  font-size: 12px;
  transition: all 0.2s linear;
}
.foot_bg1 > .container ul > li > a:hover {
  color: #bbb;
}
.col-3 > p,
h5,
.col-3 span {
  color: #dddddd;
}
#footer .col-3 {
  border-left: 1px solid #dee2e6 !important;
}
.foot_gs {
  width: 35px;
}
</style>
