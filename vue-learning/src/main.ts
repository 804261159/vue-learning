//从vue包中引入createApp函数，用于创建应用
import { createApp } from 'vue'
//引入App根组件
import App from './App.vue'
//需要引入路由器
import router from './router'

//创建一个应用
const app = createApp(App)
//使用路由器
app.use(router)
//将应用挂载到app容器中
app.mount('#app')