<template>
  <div class="container">
    <!--注册导航-->
    <div class="row">
      <div class="col-sm-12">
        <nav class="breadcrumb">
          <a href="index.html" class="breadcrumb-item">首页</a>
          <a href="javascript:;" class="breadcrumb-item my_must">免费注册</a>
        </nav>
        <hr>
      </div>
      <div class="col-sm-12">
        <p class="btn my_btn3 p-3 m-0 border-bottom-0">使用手机号码注册</p>
        <table class="mb-3">
          <tr>
            <th>手机号：</th>
            <td>
              <input type="tel" class="form-control">
            </td>
          </tr>
          <tr>
            <th>电子邮箱：</th>
            <td>
              <input type="email" class="form-control">
            </td>
          </tr>
          <tr>
            <th>设定密码：</th>
            <td>
              <input type="password" class="form-control">
            </td>
          </tr>
          <tr>
            <th>确认密码：</th>
            <td>
              <input type="password" class="form-control">
            </td>
          </tr>
          <tr>
            <th>验证码：</th>
            <td>
              <input type="text">
              <a href="javascript">&nbsp;&nbsp;看不清换一张</a>
            </td>
          </tr>
          <tr class="tr1">
            <td colspan="2">
              <p>
                <input type="checkbox" checked="checked">我已经阅读并接受《
                <router-link to="/faq" class="my_must">海澜之家服务条款</router-link>》
              </p>
            </td>
          </tr>
          <tr>
            <th colspan="2" class="pt-0 mt-0">
              <p>
                <input type="button" value="提交" class="btn btn-danger my_btn1 mr-5">
                <router-link to="/login">返回登录</router-link>
              </p>
            </th>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    ischeck() {
      $("input:checkbox").click(function() {
        var $chb = $(this);
        $(".my_btn1").prop(
          "disabled",
          !$chb.prop("checked") //启用
        );
      });
    }
  },
  mounted() {
    this.ischeck();
  }
};
</script>

<style scoped>
table {
  width: 1000px;
  height: 500px;
  border: 1px solid #cccccc;
}
.my_btn3 {
  color: #444;
  border: 1px solid #cccccc;
  top: 1px;
  position: relative;
  background: #fff !important;
  z-index: 2;
}
.form-control {
  width: 300px;
}
th {
  text-align: center;
}
table p {
  margin-left: 200px;
}
.my_btn1 {
  width: 100px;
  height: 40px;
  background: #d9534f;
  display: inline-block;
}
.my_btn2 {
  width: 160px;
  background: #d9534f;
}
table th p {
  margin-left: -428px;
}
</style>

