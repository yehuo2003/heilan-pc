<template>
  <div class="container text-center">
    <br>
    <br>
    <br>
    <a href="#">
      <img :src="$store.state.pcUrl+'404.jpg'">
    </a>
    <h1>
      <router-link to="/" class="text-dark">糟了，页面找不到了...</router-link>
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

