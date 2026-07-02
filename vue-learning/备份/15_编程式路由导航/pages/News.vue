<template lang="">
  <div>
    新闻
    <ul>
      <li v-for="n in news" :key = 'n.id'>
        <!-- 第一种写法：params参数直接在路径里写，但是这样写需要在路由配置中配置好占位 -->
        <!-- <RouterLink :to='`/news/detail/${n.id}/${n.title}/${n.content}`'>{{n.title}}</RouterLink> -->
        <!-- 第二种写法：对象式写法 -->
        <RouterLink 
        :to="{
          //尤其有坑，就是这里不写路径，写路由的别名
          name:'xijie',
          params:{
            id:n.id,
            title:n.title,
            content:n.content
          }
        }">
          {{n.title}}
        </RouterLink>
      </li>
    </ul>
  </div>
  <RouterView></RouterView>
</template>
<script setup lang="ts">
  import { reactive } from 'vue';
  import { RouterView,RouterLink,useRouter } from 'vue-router';

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
  let router = useRouter()
     
  //可以进行编程式导航，就是将导航在逻辑中写入，使用router.push或者是replace（这里面就是to怎么写，就怎么写，什么传参，哪个路由什么的）

  //1.达成某个条件就跳转
  //2.鼠标滑过就跳转
 
  function showDetail(n:any){
    router.push({      //尤其有坑，就是这里不写路径，写路由的别名
          name:'xijie',
          params:{
            id:n.id,
            title:n.title,
            content:n.content
          }
        })
  }

  
</script>
<style scoped>
  
</style>