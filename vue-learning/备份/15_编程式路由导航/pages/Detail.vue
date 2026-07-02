<template lang="">
  <div>
    新闻子组件
    <ul>
      <li>编号：{{id}}</li>
      <li>标题：{{title}}</li>
      <li>内容：{{content}}</li>
    </ul>
  </div>
</template>
<script setup lang="ts">
  defineProps(['id','title','content'])
</script>
<style scoped>
  
</style>