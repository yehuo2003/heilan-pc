<template>
  <div class="container text-center">
    <br>
    <br>
    <br>
    <router-link @click="$router.go(-1)">
      <img :src="$store.state.pcUrl+'404.jpg'">
    </router-link>
    <h1>
      <router-link @click="$router.go(-1)" class="text-dark">糟了，页面找不到了...</router-link>
    </h1>
    <!-- <span>{{time}}秒钟后自动关闭</span> -->
    <br>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: 5
    };
  }
};
</script>

