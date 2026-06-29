
//有时候是会有两个script标签的，vue3中是可以的，vue2中不行，一个是给组件配置的，一个是setup中写的逻辑代码
//但是也可以安装一个依赖vite-plugin-vue-setup-extend，安装后就可以在setup中写组件的配置了，就不需要两个script标签了
//这个依赖是开发依赖，所以安装的时候加上 -D，说明是开发依赖，安装后在vite.config.ts中配置一下
//在vite.config.ts中配置文件中先 import vueSetupExtend from 'vite-plugin-vue-setup-extend'，然后在plugins中添加vueSetupExtend()，就可以了
//这两个script标签的lang属性可以是ts，也可以是js，vue3中是支持ts的，vue2中不支持ts，但是两个都得一样
<!-- <script lang="ts">
  export default {
    name:'Person',
  }
</script>

<script setup lang="ts">
  let name = '张三'
  let age = 18
  let tel = '13800138000'
  
  function changeName() {
    name = '李四'
  }
</script> -->


//安装依赖完成后，就直接在setup中写组件的配置了，就不需要两个script标签了
<script setup lang="ts" name="Person">
  let name = '张三'
  let age = 18
  let tel = '13800138000'
  
  function changeName() {
    name = '李四'
  }
</script> 



<template>
  <div class="person">
    <h1>{{ name }}</h1>
    <p>年龄: {{ age }}</p>
    <p>电话: {{ tel }}</p>
    <button @click="changeName">更换姓名</button>
  </div>
</template>

<style scoped>
  .person {
    width: 100%;
    height: 100%;
    background-color: #7bb8df;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
</style>