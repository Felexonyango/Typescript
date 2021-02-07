//string
var mystring :string;
mystring="hello".slice(0, 3)
console.log(mystring)

var astrr:string[];
astrr=["hello", "word"]
const city:string="kenya"

//number
var myNum: number;
myNum=22+34
const cashprize:number=100000


//array
var nuArray:number[];
 const list: Array<number> = [1, 2, 3];
console.log(list)
nuArray=[12345]
var food:string[];
food=['ugali','sukuma']
food.push('cabage')

//objects
const person:{
    name :string;
    age:number;
}={
    name:'Felix',
    age:23

}
console.log(person.name +' '+ person.age)
//unknown type
var userInput:unknown;
var username :string;

userInput =5
userInput= "maxi"
if(typeof userInput==='string'){
    username=userInput
}

//tuple

let x: [string, number];
x = ["hello", 10]; 
// Enum

enum UserResponse {
    No = 0,
    Yes = 1,
  }
  
  function respond(recipient: string, message: UserResponse) {
    
  }
  
  respond("Princess Caroline", UserResponse.No);

//union types
var uniontype : string | number
uniontype =1;
uniontype ='hello string'
function addwithunion(arg1:string |number, arg2:string|number): string|number{
    return arg1.toString() + arg2.toString


}
//  Type Allias
type StringorNumber = string |number
function addwithAllias(arg1:StringorNumber, arg2:StringorNumber){
    return arg1.toString() +arg2.toString()
}

//enums 
enum colors {
    Blue ='blue',
    Red ='red'
}
function showcolor(color:colors){
    console.log(color)
}
showcolor(colors.Blue)



//union types 

interface Dog{
    kind:"Dog",
    barking: string
}
interface Cat {
    kind:"cat"
    meowing:string

}
type Animals =Dog |Cat

function AnimalSound(animal :Animals):string{
    switch(animal.kind){
        case 'cat':
            return  ` the cat  is ${animal.meowing}`
            case 'Dog':
                return  ` the  dog  is ${animal.barking}`
        }
    }

 console.log( AnimalSound({kind:'cat', meowing:'meawing'}))


