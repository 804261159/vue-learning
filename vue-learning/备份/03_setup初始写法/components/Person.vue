<script>
  export default {
    name:'Person',
  }
  let name = '张三'
  let age = 18
  let tel = '13800138000'
  
  function changeName() {
    name = '李四'
  }

  //需要return一个对象，里面包含的属性和方法才能在模板中使用
  return {
    name,
    age,
    tel,
    changeName
  }
  

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