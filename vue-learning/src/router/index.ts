//创建一个路由器并暴露出去

//第一步：引入createRouter
import {createRouter,createWebHashHistory} from 'vue-router'
//引入一个一个的路由组件
import Home from '@/components/Home.vue'
import News from '@/components/News.vue'
import About from '@/components/About.vue'



//第二步：创建路由器
const router = createRouter({
  history:createWebHashHistory(),  //路由的工作模式
  routes:[
    {
      path:'/home',     //配置对应组件页面的路径
      component:Home    //配置对应组件
    },
    {
      path:'/news',     //配置对应组件页面的路径
      component:News    //配置对应组件
    },
    {
      path:'/about',     //配置对应组件页面的路径
      component:About    //配置对应组件
    }
  ]
})


//第三步：暴露路由器出去给别人用
export default router