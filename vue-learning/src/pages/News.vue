<template lang="">
  <div>
    新闻
    <RouterLink to='/news/detail'> 新闻子组件 </RouterLink>
  </div>
  <RouterView></RouterView>
</template>
<script setup lang="ts">
  import { RouterView,RouterLink } from 'vue-router';
</script>
<style scoped>
  
</style>