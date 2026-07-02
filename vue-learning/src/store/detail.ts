//引入定义pinia仓库
import {defineStore} from 'pinia'
                                    //别名
const useDetailStore = defineStore('detail',{
  actions:{
    add(value:number){
      console.log("add方法被调用了，" ,value)
      if(this.detail<10){
        this.detail +=1
      }
    }
  },
  //真正存储数据的地方
  state(){
    return {
      detail:6,
      text:8888
    }
  },

  //如果对数据不满意，需要对数据加工，可以用getter
  getters:{
    BigDetial(state){
      return state.detail*10
    }
  }
})

export {useDetailStore}