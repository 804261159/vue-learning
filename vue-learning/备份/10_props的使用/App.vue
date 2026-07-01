<script setup lang="ts" name="App">
  import Person from './components/Person.vue';
  //setup语法糖中，组件的props和emit是自动导入的，不需要手动导入
  import { reactive } from 'vue'
  //要导入接口，必须要告诉是类型导入，前面需要加上type
  import { type Persons , type PersonType } from '@/type'

  let personList = reactive<PersonType>([
    {id: '1', name: '张三', age: 18},
    {id: '2', name: '李四', age: 20},
    {id: '3', name: '王五', age: 22}
  ])


</script>

<template>
  <Person a="哈哈" :list="personList"/>
</template>

<style scoped></style>
