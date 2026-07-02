//创建一个路由器并暴露出去

//第一步：引入createRouter
import {createRouter,createWebHashHistory} from 'vue-router'
//引入一个一个的路由组件
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'
import Detail from '@/pages/Detail.vue'

//路由的工作模式有两种：history模式与hash模式

//第二步：创建路由器
const router = createRouter({
  history:createWebHashHistory(),  //路由的工作模式
  routes:[
    { 
      name:'zhuye',
      path:'/home',     //配置对应组件页面的路径
      component:Home    //配置对应组件
    },
    {
      name:'xinwen',
      path:'/news',     //配置对应组件页面的路径
      component:News,    //配置对应组件
      children:[          //添加子组件
        {           //params参数传参时需要先配置好占位，才会去在路径中按规定的去取对应的值
          name:'xijie',
          path:'detail/:id/:title/:content?',
          component:Detail,
          
          //第一种：将路由收到的所有params参数作为props参数传给路由组件
          //props:true       //路由配置的props参数，设置为true，就可以直接传id，而不需要route.params.id
          
          //第二种：可以自己决定传什么作为props给路由组件
          //函数式写法，传入的参数就是route，里面有params参数啥的
          props(route){
            //返回什么就是决定传哪个数据出去，如果是params参数就直接第一种写法完事，query用这种会好很多，传出去的就是query里面的数据
            return route.params
          }

          //第三种：（用的少）对象写法：也可以自己决定传什么给路由组件，但是是写死的
          // props:{
          //   a:100,
          //   b:200
          // }
        }
      ]
    },
    {
      name:'guanyu',
      path:'/about',     //配置对应组件页面的路径
      component:About    //配置对应组件
    },
    {                   //重定向，让指定的路径重新定位到另一个路径
      path:'/',
      redirect:'/home'
    }
  ]
})


//第三步：暴露路由器出去给别人用
export default router