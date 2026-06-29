//ref将值类型数据变为响应式，需要变响应式的数据就用ref包裹起来，ref返回的是一个对象，值类型数据存储在value属性中
//需要使用就用xxx.value的方式访问
<script setup lang="ts" name="Person">
  import { ref,reactive } from 'vue'
  //ref可以定义值类型数据和引用类型数据，reactive只能定义引用类型数据
  //ref将对象类型数据转变为响应式的，是请reactive将对象数据变为响应式，再在外面用ref包裹起来，reactive将对象数据变为响应式，再在外面用ref包裹起来，返回的就是一个对象，值类型数据存储在value属性中
  //reactive的变响应式是深层次的

  let name = ref('张三')
  let age = ref(18)

  // let car = reactive({
  //   brand:'宝马',
  //   price:100,
  // })
  let car = ref({
    brand:'宝马',
    price:100,
  })

  // let games = reactive([
  //   {id:'1',name:'王者荣耀'},
  //   {id:'2',name:'和平精英'},
  //   {id:'3',name:'英雄联盟'},
  // ])
  let games = ref([
    {id:'1',name:'王者荣耀'},
    {id:'2',name:'和平精英'},
    {id:'3',name:'英雄联盟'},
  ])
  function changeName() {
    name.value = '李四'
  }
  function changeCarPrice() {
    car.value.price += 10;
  }
  function changeFirstGame() {
    games.value[0].name = '原神'
  }

</script> 



<template>
  <div class="person">
    <h1>{{ name }}</h1>
    <p>年龄: {{ age }}</p>
    <button @click="changeName">更换姓名</button>
    <br>
    <h1>{{ car.brand }}</h1>
    <p>价格: {{ car.price }}</p>
    <button @click="changeCarPrice">更换价格</button>
    <br>
    <h1>游戏列表</h1>
    <ul>
      <li v-for="game in games" :key="game.id">{{ game.name }}</li>
    </ul>
    <button @click="changeFirstGame">更换第一个游戏</button>
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