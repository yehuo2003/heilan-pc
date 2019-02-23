<template>
  <div class="main">
    <heilan-header></heilan-header>
    <div>
      <router-view></router-view>
    </div>
    <heilan-footer></heilan-footer>
  </div>
</template>

<script scoped>
import Header from "../components/Header";
import Footer from "../components/Footer";
export default {
  data() {
    return {};
  },
  components: {
    "heilan-header": Header,
    "heilan-footer": Footer
  }
};
</script>


