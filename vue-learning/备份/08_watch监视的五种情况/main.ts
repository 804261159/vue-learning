//从vue包中引入createApp函数，用于创建应用
import { createApp } from 'vue'
//引入App根组件
import App from './App.vue'
//createApp函数的作用是创建一个应用实例对象，调用该对象的mount方法可以将App这个根组件渲染到指定的容器中
//挂载在index.html这个项目的入口文件中id为app的div容器上
//加载了index.html这个入口文件后，vite会解析<script type="module" src="/src/main.ts"></script>所指向的js文件
createApp(App).mount('#app')
