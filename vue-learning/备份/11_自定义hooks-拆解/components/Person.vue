
<script setup lang="ts" name="Person">
  //从hooks中导入自定义的组合式函数，这样当多个数据与逻辑组在一起时，可以分别用不同的hooks来管理，避免代码臃肿
  //在hook中按需引入需要的，再导出需要的，避免不必要的代码引入
  //后续维护时，若需要修改某个逻辑，只需要修改对应的hook即可，避免了在组件中修改逻辑的麻烦
  import useDog from '@/hooks/useDog'
  import useSum from '@/hooks/useSum'
  //本质暴露出来的还是函数，从中解构赋值获得对应的属性和方法
  const { dogImgList, getNewDogImg } = useDog()
  const { sum, add } = useSum()
</script> 

<template>
  <div class="person">
   <h2>当前值为:{{ sum }}</h2>
   <button @click="add">点我sum+1</button>
   <hr>
   <img v-for="(dog,index) in dogImgList" :key="index" :src="dog" alt="Dog Images">
   <br>
   <button @click="getNewDogImg">获取新的狗狗图片</button>
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
  .person img {
    height: 100px;
    margin-right: 10px;
  }
</style>