<template lang="">
  <div>
    新闻
    <ul>
      <li v-for="n in news" :key = 'n.id'>
        <!-- 在to参数后面加上？即可传query参数 -->
         <!-- 第一种写法，直接写 -->
        <!-- <RouterLink :to='`/news/detail?id=${n.id}&title=${n.title}&content=${n.content}`'>{{n.title}}</RouterLink> -->
        <!-- 第二种写法：对象式写法 -->
        <RouterLink 
        :to='{
          // 这里也可以不写路径，写路由器配置中的别名即name
          path:"/news/detail",
          query:{
            id:n.id,
            title:n.title,
            content:n.content
          }
        }'>
          {{n.title}}
        </RouterLink>
      </li>
    </ul>
  </div>
  <RouterView></RouterView>
</template>
<script setup lang="ts">
  import { reactive } from 'vue';
  import { RouterView,RouterLink } from 'vue-router';

  let news = reactive([
    {
      id:'01',title:'细节1',content:'内容1'
    },
    {
      id:'02',title:'细节2',content:'内容2'
    },
    {
      id:'03',title:'细节3',content:'内容3'
    }
  ])

</script>
<style scoped>
  
</style>