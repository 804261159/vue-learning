<template lang="">
  <div>
    新闻子组件
    <ul>
      <li>编号：{{id}}</li>
      <li>标题：{{title}}</li>
      <li>内容：{{content}}</li>
    </ul>
  </div>
</template>
<script setup lang="ts">
  //引入创建的专属的pinia仓库
  import { useDetailStore } from '@/store/detail'
  
  import{ref} from 'vue'
  
  let n = ref(0)

  defineProps(['id','title','content'])

  //获取到里面的数据
  const detailStore = useDetailStore()
  //拿到的detailStore数据是reactive格式的，里面的detail是ref格式的，包在reactive中的ref数据不用再.value取值
  console.log(detailStore.detail)

  function change(){
  //修改store中的数据
  //第一种：直接改，在vuex中不能直接改
  // detailStore.detail +=1
  
   //第二种：批量修改，一次执行，多个数据同时修改
  // detailStore.$patch({
  //   detail:9,
  //   text:9999
  // })
  
  //第三种：在pinia中的action中存放对数据的操作 ‘动作’，就是些操作数据的函数方法
  detailStore.add(n)


  //如果需要从pinia中解构赋值，和之前一样，需要转响应式，但是用toRefs会把全部都转，不值当，在pinia中引入storeToRefs
  //用storeToRefs将数据一包，就会只关注store中的数据

  }

</script>
<style scoped>
  
</style>