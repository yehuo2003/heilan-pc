<template>
  <div>
    <router-link v-for="item of CateList" :key="item.id" to="/goods" class="cate-img">
      <img :src="$store.state.pcUrl+item.img" class="cimg">
      <p>{{item.title}}</p>
      <p>
        售价
        <span>{{item.price | currency}}</span>
      </p>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["CateList"]
};
</script>

<style>
.heilan-cate .cate-img img,
.cimg {
  width: 172px !important;
}
.cate-img span {
  color: #ff5200;
}
</style>


