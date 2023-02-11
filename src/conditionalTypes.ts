// import { type } from "os"

// interface Animall{
//     live():void
// }

//  interface  Cat extends Animall{
//     death():void
//  }


// type Example2   = Cat  extends  Animall ? number:string

// interface IdLable{
//     text:string
// }
// interface  userA{
// age:number
// }
//  type checkvalid<T extends number|string>=T extends number ? userA :IdLable

//  function testInput<T extends number|string> (todo:T):T{
//     throw 'error'

//  }
//  let result1 = testInput('ddw')
//  let result2 =testInput(3)


//  interface User{
//     name:string
//  }
//  type Some<T>={
//     kind:'test'
//  }
//  type None={
//     value:'None Option'
//  }

//  type Options<T>= Some<T>| None

//  function findUserById(id:string):Options<User>{
//  return id
//  }




type paypalInfo={
    name:string,

}
type creditcardInfo={
    text:string
}

type payment={
    amount:number,
    cash:boolean
    paymentInfo:paymentInfo
      
}

type paymentInfo= paypalInfo| creditcardInfo

const result:payment={
    amount:24,
    cash:true,
    paymentInfo:{
        text:'trr'
        
    }
    
    
    
}
console.log(result)