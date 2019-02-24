<template>
  <div id="footer">
    <footer>
      <div class="foot_bg1 pb-4">
        <div class="container">
          <div class="row border-bottom mb-4 pt-3 pb-3">
            <div v-for="(r,i) of rules" :key="i" class="col-sm-4 d-flex justify-content-center">
              <div>
                <img :src="$store.state.pcUrl+r.img">
              </div>
              <div class="p-1">
                <h5 class="text-white">{{r.title}}</h5>
                <span>{{r.content}}</span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-9 d-flex justify-content-around">
              <ul v-for="item of afterList" :key="item.id" class="list-unstyled">
                <li>
                  <h6 class="text-white mb-0">{{item.title}}</h6>
                </li>
                <li v-for="(c,i) of item.list" :key="i">
                  <a href="javascript:;">{{c.title}}</a>
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
          <div v-for="item of icbctitle" :key="item.id" class="text-center p-1">
            <span>{{item.title}}</span>
          </div>
          <div class="text-center">
            <img
              v-for="(item,i) of icbcimg"
              :key="i"
              :src="$store.state.pcUrl+item.url"
              :class="item.cls"
            >
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rules: [
        { title: "7天", content: "无条件退货", img: "footerimg1.jpg" },
        { title: "全场68包邮", content: "送货上门", img: "footerimg2.jpg" },
        {
          title: "全国所有城市",
          content: "快递上门服务",
          img: "footerimg3.jpg"
        }
      ],
      afterList: [
        {
          id: 1,
          title: "购物指南",
          list: [
            { title: "购物流程" },
            { title: "订单查询" },
            { title: "隐私声明" }
          ]
        },
        {
          id: 2,
          title: "配送方式",
          list: [
            { title: "商品验货" },
            { title: "商品签收" },
            { title: "配送城市与费用" }
          ]
        },
        {
          id: 3,
          title: "支付方式",
          list: [
            { title: "中国银联" },
            { title: "支付宝" },
            { title: "发票制度" }
          ]
        },
        {
          id: 4,
          title: "售后服务",
          list: [
            { title: "退换货政策" },
            { title: "退换货流程" },
            { title: "退款方式" }
          ]
        },
        {
          id: 5,
          title: "新手指南",
          list: [
            { title: "用户注册" },
            { title: "找回密码" },
            { title: "服务条款" }
          ]
        }
      ],
      icbcimg: [
        { url: "footerimg4.jpg", cls: "p-1" },
        { url: "footerimg5.jpg", cls: "p-1" },
        { url: "footerimg6.jpg", cls: "p-1" },
        { url: "ebsIcon.png", cls: "p-1 foot_gs" }
      ],
      icbctitle: [
        { id: 1, title: "工信部备案·深ICP备666131号" },
        { id: 2, title: "增值电信业务经营许可证·深B1-666666" },
        {
          id: 3,
          title:
            "©2014-2018 深圳电子商务有限公司 版权所有 HLA Inc. All Rights Reserved."
        }
      ]
    };
  },
  methods: {}
};
</script>


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
