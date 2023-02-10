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

