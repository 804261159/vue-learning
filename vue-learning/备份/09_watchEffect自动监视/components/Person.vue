
<script setup lang="ts" name="Person">
  import { ref,reactive ,watchEffect } from 'vue'
  
  //使用watchEffect监视响应式数据的变化，watchEffect会立即执行一次回调函数，并且会在响应式数据发生变化时再次执行回调函数
  //就是在回调函数中用到了哪些响应式数据，watchEffect就会监视哪些响应式数据的变化，自动的监视
  let sum = ref(0)
  
  function changeSum() {
    sum.value += 1
  }

  watchEffect(() => {
    console.log(`sum的值为${sum.value}`)
  })
</script> 



<template>
  <div class="person">
    <h2>watchEffect监视响应式数据的变化</h2>
      <p>sum的值为：{{ sum }}</p>
      <button @click="changeSum">sum+1</button>
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