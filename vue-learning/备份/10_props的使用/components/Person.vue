
<script setup lang="ts" name="Person">
  import { type Persons , type PersonType } from '@/type'
  
  //只接收父组件传来的props数据，props是一个对象，里面包含了父组件传来的所有props数据
  //如果父组件没传list，那么props.list就是undefined
  // defineProps(['a','list'])

  //接受父组件传来的props数据，同时将数据保存起来
  // let props = defineProps(['a','list'])

  //接受传来的数据+限制传来的数据类型
  // defineProps<{list: PersonType}>()

  //接受传来的数据+限制传来的数据类型+设置默认值
  const {list = [{id:'0',name:'未知',age:0}]} = defineProps<{list: PersonType}>()
</script> 

<template>
  <div class="person">
    <ul>
      <li v-for="p in list" :key="p.id" >
        姓名：{{ p.name }}，年龄：{{ p.age }}
      </li>
    </ul>
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