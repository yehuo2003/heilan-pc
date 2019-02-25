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
            <span>{{item.cls}}</span>
          </div>
          <div class="text-center">
            <img
              v-for="(item,i) of icbcimg"
              :key="i"
              :src="$store.state.pcUrl+item.img"
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
      // 基本信息表
      rules: [],
      // 购物指南
      afterList: [],
      // 工商标识
      icbcimg: [],
      // 工商备案号
      icbctitle: []
    };
  },
  methods: {
    // 基本信息表
    getrules() {
      var url = this.$store.state.apiUrl + "rules";
      this.$axios
        .get(url)
        .then(({ data }) => {
          this.rules = data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 工商标识
    geticbcimg() {
      var url = this.$store.state.apiUrl + "icbcimg";
      this.$axios
        .get(url)
        .then(({ data }) => {
          this.icbcimg = data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 购物指南
    getafterList() {
      var url = this.$store.state.apiUrl + "after";
      this.$axios
        .get(url)
        .then(({ data }) => {
          this.afterList = data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 工商备案号
    geticbctitle() {
      var url = this.$store.state.apiUrl + "icbctitle";
      this.$axios
        .get(url)
        .then(({ data }) => {
          this.icbctitle = data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.getrules();
    this.geticbcimg();
    this.getafterList();
    this.geticbctitle();
  }
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
