import { reactive} from 'vue'
import axios from 'axios'

//https://dog.ceo/api/breeds/image/random  
//api返回的数据格式为：
// {
//   "message": "https://images.dog.ceo/breeds/african-wild/n02116738_7537.jpg",
//   "status": "success"
// }

//hook函数的作用是封装与狗模块相关的数据与方法，供外部使用
export default function (){
  let dogImgList = reactive<string[]>([
    "https://images.dog.ceo/breeds/african-wild/n02116738_7537.jpg"
  ])


  // function getNewDogImg() {
  //   axios.get('https://dog.ceo/api/breeds/image/random')
  //     .then((res) => {
  //       dogImgList.push(res.data.message)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }
  //还可以使用async/await的方式来获取新的狗狗图片
  async function getNewDogImg() {
    try {
      let res = await axios.get('https://dog.ceo/api/breeds/image/random')
      dogImgList.push(res.data.message)
    } catch (err) {
      console.log(err)
    }
  }
  //向外部提供与狗模块相关的数据与方法
  return { dogImgList, getNewDogImg }
}