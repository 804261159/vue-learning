//定义一个接口，用于限制person的具体属性

interface Persons {
    id: string,
    name: string,
    age: number    
    x?: number //可选属性 ，加上问号表示这个属性是可选的，可以不传
 }

 //定义一个自定义类型，用于限制person的具体属性
type PersonType = Array<Persons> //表示一个数组，数组中的元素是Person类型的对象

 //将这两个暴露出去，需要加上type关键字，因为这是一个类型，而不是一个值
export type { Persons, PersonType };