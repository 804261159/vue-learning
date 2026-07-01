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
  let car = reactive({
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
    car.price += 10;
  }
  function changeFirstGame() {
    games.value[0].name = '原神'
  }
  //当使用ref包裹对象类型数据时，改变对象的属性值是响应式的，但是改变对象的引用地址不是响应式的

  //当使用reactive包裹对象类型数据时，你想去直接替换对象是不行的，因为把原始数据更改了，即使你赋值一个reactive的对象也不会改变原始数据的引用地址，所以不会触发响应式更新
  //但是如果你想去改变对象的属性值是可以的，因为reactive是深层次的响应式，所以改变对象的属性值是响应式的
  //如果你就是想重新赋值一个对象，那么你可以使用Object.assign()方法去改变原始数据的属性值，这样就不会改变原始数据的引用地址，所以会触发响应式更新
  //Object.assign方法是属于浅拷贝而不是深拷贝
  function changeCar() {
    Object.assign(car, {
      brand:'奔驰',
      price:200,
    })
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