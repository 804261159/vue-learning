<script  lang="ts">
  import Person from './components/Person.vue';
  
  export default {
    //组件名称
    name: 'App',
    //注册组件
    components: {
      Person,
    },
  }
</script>

<template>
  <Person />
</template>

<style scoped></style>
