
<script setup lang="ts" name="Person">
  import { ref,reactive ,watch } from 'vue'
  
  let sum = ref(0)
  function changeSum() {
    sum.value += 1
  }
  //watch监视函数，（要监视谁，数据改变时执行的回调函数），监视ref类型的响应式数据，是不需要监视.value的
  //watch监视函数的返回值是返回一个停止监视的函数，调用这个函数就可以停止监视
  //情况一：watch监视【ref】的【基本类型】数据
  // const stopWatch = watch(sum, (newValue, oldValue) => {
  //   console.log(`sum从${oldValue}变为${newValue}`)
  //   if (newValue >= 5) {
  //     stopWatch() //当sum大于等于5时，停止监视
  //   }
  // })

  //情况二：watch监视【ref】的【对象类型】数据
  // let person = ref({
  //   name: '张三',
  //   age: 18
  // })

  // function changeAge() {
  //   person.value.age += 1
  // }
  // function changeName() {
  //   person.value.name += '~'
  // }
  // function changePerson() {
  //   person.value = {
  //     name: '李四',
  //     age: 20
  //   }
  // }
  //watch监视函数的第三个参数是一个对象，可以设置深度监视，默认是浅度监视
  //watch监视对象类型数据时，如果不设置深度监视，只会监视对象的引用地址是否改变，而不会监视对象内部属性的改变
  //只有当你开启深度监视时，watch才会监视对象内部属性的改变，还可以设置immediate为true，表示立即执行一次回调函数
  //有时候watch返回监视的新值和旧值是一样的，这是因为watch监视的是对象的引用地址，而不是对象内部属性的改变，所以当对象内部属性改变时，watch返回的新值和旧值是一样的
  //只有当对象整个的引用地址改变时，watch才会返回不同的新的值和旧值
  //watch的配置对象除了有deep和immediate，还有多个其他的配置项
  // watch(person, (newValue, oldValue) => {
  //   console.log(`person从${JSON.stringify(oldValue)}变为${JSON.stringify(newValue)}`)
  // },{deep: true,immediate: true}) //深度监视对象类型数据

  //情况三：watch监视【reactive】的【对象类型】数据，会默认开启深度监视，且无法关闭
  //而且由于reactive类型的数据，根本就没有创建新的对象，所以watch监视reactive类型的数据时，返回的新值和旧值永远都是一样的
  let person = reactive({
    name: '张三',
    age: 18,
    car:{
      name:'奔驰',
      price:1000000
    }
  })

  function changeAge() {
    person.age += 1
  }
  function changeName() {
    person.name += '~'
  }
  function changePerson() {
    //reactive类型的数据是不能直接赋值的，只能改变它的属性值，需要修改用Object.assign()方法来改变整个对象的属性值
    //但是其实真正在堆中的对象还是那个对象，只不过把里面的值换了一遍
    Object.assign(person, {
      name: '李四',
      age: 20
    })
  }
//情况四：监视响应式对象中的某个属性，且该属性是对象类型的，可以直接监视该属性，也可以在外面包一层函数，需要监视对象细枝末节时，开启深度监视辅助即可
//如果是监视响应式对象中的基本类型数据，要写成函数式
//结论：监视的要是对象中的属性，那么最好写函数式，注意点：如果监视的是对象，则监视对象的地址值，如果需要关注细枝末节，需要手动开启深度监视
//就遇到直接函数式一把梭
  watch(() => person.car, (newValue, oldValue) => {
    console.log(`person.car从${oldValue}变为${newValue}`)
  },{deep: true}) //深度监视对象类型数据


  //情况五：监视上述多个数据，比如把上述数据都放到一个数组中，进行监视
  //其中的新值与旧值就是一个数组，数组中的每一项就是对应的监视数据的新值与旧值
  watch([() => person.name, () => person.age, () => person.car], ([newName, newAge, newCar], [oldName, oldAge, oldCar]) => {
    console.log(`person.name从${oldName}变为${newName}`)
    console.log(`person.age从${oldAge}变为${newAge}`)
    console.log(`person.car从${oldCar}变为${newCar}`)
  })


  //总结：情况一与情况四用的会比较多

</script> 



<template>
  <div class="person">
    <!-- <h1>情况一：watch监视【ref】的【基本类型】数据</h1>
    <h2>当前求和为：{{sum}}</h2>
    <button @click="changeSum"></button> -->

    <!-- <h1>情况二：watch监视【ref】的【对象类型】数据</h1>
    <h2>当前姓名为：{{person.name}}</h2>
    <h2>当前年龄为：{{person.age}}</h2>
    <button @click=changeAge>年龄+1</button>
    <button @click=changeName>姓名改变</button>
    <button @click=changePerson>改变整个对象</button> -->

    <h1>情况三：watch监视【reactive】的【对象类型】数据</h1>
    <h2>当前姓名为：{{person.name}}</h2>
    <h2>当前年龄为：{{person.age}}</h2>
    <button @click=changeAge>年龄+1</button>
    <button @click=changeName>姓名改变</button>
    <button @click=changePerson>改变整个对象</button>

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