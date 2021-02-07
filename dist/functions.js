"use strict";
/*
function getsum(num1:number,num2:number) : number{
 return num1+num2;
}
//console.log(getsum(1,4));
var mysum =function(num1:any, num2:any):number{
 if(typeof num1=="string"){

    num1=parseInt(num1)
 }
 if(typeof num2=="string"){

    num2=parseInt(num2)
 }
    return num1+num2
}
//console.log(mysum("7",6))
 function getname(firstname:string,lastname:string):string{
     return firstname +"  "+ lastname


 }
 console.log(getname("Felex","onyango"))
 */
function addnum(n1, n2, showResult) {
    if (showResult) {
        console.log(n1 + n2);
    }
    else {
        return n1 + n2;
    }
}
const number1 = 5;
const number2 = 6;
const printresult = true;
addnum(number1, number2, printresult);
//
function telljoke() {
    return "hello";
}
console.log(telljoke());
