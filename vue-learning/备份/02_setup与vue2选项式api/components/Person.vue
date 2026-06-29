<script>
  export default {
    name:'Person',
  }
  let name = '张三'
  let age = 18
  let tel = '13800138000'
  //可以在vue3中写vue2的语法，也可以正常用，并且vue2中可以用this.x来去访问到vue3中setup中定义的变量
  //但是vue3的setup中是不能用this.x来访问vue2中data中定义的变量的，也不能直接访问到，就是访问不到
  //且setup中的this是undefined的，setup中没有this的概念
  

</script>

<template>
  <div class="person">
    <h1>我是Person组件</h1>
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