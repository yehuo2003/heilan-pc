<template>
  <ul class="list-group faq">
    <router-link
      v-for="item of Mentoring"
      :key="item.id"
      :to="item.to"
      class="list-group-item list-group-item-action"
    >
      <img :src="$store.state.pcUrl+item.img">
    </router-link>
  </ul>
</template>

<script>
export default {
  props: ["Mentoring"]
};
</script>


