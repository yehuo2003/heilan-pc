<template>
  <div>
    <div v-for="item of navbar" :key="item.id">
      <a href="#" class="h4 font-weight-bold">{{item.title}}</a>
      <ul class="list-unstyled ml-3 mb-5">
        <li v-for="i of item.list" :key="i.tid" class="m-3">
          <a href="javascript:;" class="navfz org">{{i.title}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navbar: [
        {
          id: 1,
          title: "2019春季特卖",
          list: [
            { tid: 1, title: "衬衫" },
            { tid: 2, title: "大衣" },
            { tid: 3, title: "型男外套" },
            { tid: 4, title: "长袖T恤" },
            { tid: 5, title: "个性卫衣" },
            { tid: 6, title: "夹克" },
            { tid: 7, title: "针织衫/毛衫" },
            { tid: 8, title: "牛仔裤" },
            { tid: 9, title: "休闲裤" },
            { tid: 10, title: "西服" }
          ]
        },
        {
          id: 2,
          title: "2018冬季新品",
          list: [
            { tid: 1, title: "羽绒服" },
            { tid: 2, title: "保暖衬衫" },
            { tid: 3, title: "型男外套" },
            { tid: 4, title: "个性卫衣" },
            { tid: 5, title: "大衣" },
            { tid: 6, title: "夹克" },
            { tid: 7, title: "针织衫/毛衫" },
            { tid: 8, title: "牛仔裤" },
            { tid: 9, title: "休闲裤" },
            { tid: 10, title: "西服" }
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
.h4 {
  color: #222;
}
.navfz {
  font-weight: bold;
  font-size: 14px;
  color: #444;
  transition: all 0.3s linear;
}
</style>

