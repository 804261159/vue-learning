
<script setup lang="ts" name="Person">
  import { ref, computed } from 'vue'
  
  let firstname = ref('张')
  let lastname = ref('三')


  //计算属性只有当依赖的响应式数据发生变化时才会重新计算, 计算属性是有缓存的，而普通的函数每次调用都会重新计算
  //这样定义的计算属性是只可读的，简写形式
  // let fullName = computed(() => {
  //   return `${firstname.value} ${lastname.value}`
  // })
  //这样定义的计算属性是可读可写的，完整形式
  let fullName = computed({
    //getter是计算属性的默认方法，返回值就是计算属性的值
    get() {
      return `${firstname.value} ${lastname.value}`
    },
    //setter是计算属性的可选方法，接收一个参数newValue，表示新的值
    set(val) {
      const [n1,n2] = val.split('')
      firstname.value = n1
      lastname.value = n2
    }
  })
</script> 



<template>
  <div class="person">
    姓:<input type="text" v-model="firstname" /><br>
    名:<input type="text" v-model="lastname" />
    全名: <span>{{fullName}}</span>
    <button @click="fullName = '李四'">修改全名</button>
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