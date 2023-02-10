// Metadata is used to decorate a class so that it can configure the
/// expected behavior of the class. 

type person={
    name:string,
    age:Number,
    location:string
}


type  personKeys =keyof person     // "name|age|location"

function  getpersonOwnsProperty(key:personKeys,person:person){
    return person[key]

}

//using it with Generic
//example T can be object of Todo{
    //name etc
//}
function getvalues<T, K extends keyof T>  (obj:T,key:K):T[K]{
return obj[key]
}
// const numbers: { [key: number]: string } = {
//     1: 'one',
//     2: 'two',
//     3: 'three',
//   };
  
//   const value = getvalues(numbers, 1);
//   console.log(value); // outputs: "one"


