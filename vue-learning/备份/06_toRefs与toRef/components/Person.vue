
<script setup lang="ts" name="Person">
  import { ref,reactive,toRefs,toRef } from 'vue'
  

  let person = reactive({
    name: '张三',
    age: 18,
  })
  
  //解构赋值person,拿出来的name与age是普通的变量，不是响应式的，所以修改name和age不会触发视图更新
  //但是可以使用toRefs()方法将响应式对象的属性转换为响应式的引用类型数据，这样就可以触发视图更新了
  //这样name与age都会变成ref响应式数据
  //toRefs()是将对象中的全改为ref响应式数据，返回的就是一个对象，值类型数据存储在value属性中
  let { name, age } = toRefs(person)
  //toRef()方法则是将对象中的某一个属性变为ref响应式数据，返回的就是一个对象，值类型数据存储在value属性中
  //按需修改
  let name1 = toRef(person, 'name')
  let age1 = toRef(person, 'age')
  function changeName() {
    name.value += '~'
  }
  function changeAge() {
    age.value += 1
  }

</script> 



<template>
  <div class="person">
    <h1>{{ name }}</h1>
    <p>年龄: {{ age }}</p>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">年龄+1</button>
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