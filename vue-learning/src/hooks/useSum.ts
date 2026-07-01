  import { ref } from 'vue'
  
  
  export default function () {
    let sum = ref<number>(0)

  
    function add() {
      sum.value +=1
    }  
    return { sum, add }
  }
  