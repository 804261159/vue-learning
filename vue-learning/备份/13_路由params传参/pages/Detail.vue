<template lang="">
  <div>
    新闻子组件
    <ul>
      <li>编号：{{route.params.id}}</li>
      <li>标题：{{route.params.title}}</li>
      <li>内容：{{route.params.content}}</li>
    </ul>
  </div>
</template>
<script setup lang="ts">
  //从路由依赖中引入给route使用的hooks
  import {useRoute} from 'vue-router'
  import {toRefs} from 'vue'
  //调用useRoute并赋值给一个变量，这里面有很多有用信息，其中就有传来的参数
  let route = useRoute()

  //这里是从响应式对象中解构赋值，需要使用toRefs包一下
  // let {params} = toRefs(route)

</script>
<style scoped>
  
</style>