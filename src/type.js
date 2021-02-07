"use strict";
//string
var mystring;
mystring = "hello".slice(0, 3);
console.log(mystring);
var astrr;
astrr = ["hello", "word"];
const city = "kenya";
//number
var myNum;
myNum = 22 + 34;
const cashprize = 100000;
//array
var nuArray;
const list = [1, 2, 3];
console.log(list);
nuArray = [12345];
var food;
food = ['ugali', 'sukuma'];
food.push('cabage');
//objects
const person = {
    name: 'Felix',
    age: 23
};
console.log(person.name + ' ' + person.age);
//unknown type
var userInput;
var username;
userInput = 5;
userInput = "maxi";
if (typeof userInput === 'string') {
    username = userInput;
}
//tuple
let x;
x = ["hello", 10];
// Enum
var UserResponse;
(function (UserResponse) {
    UserResponse[UserResponse["No"] = 0] = "No";
    UserResponse[UserResponse["Yes"] = 1] = "Yes";
})(UserResponse || (UserResponse = {}));
function respond(recipient, message) {
}
respond("Princess Caroline", UserResponse.No);
//union types
var uniontype;
uniontype = 1;
uniontype = 'hello string';
function addwithunion(arg1, arg2) {
    return arg1.toString() + arg2.toString;
}
function addwithAllias(arg1, arg2) {
    return arg1.toString() + arg2.toString();
}
//enums 
var colors;
(function (colors) {
    colors["Blue"] = "blue";
    colors["Red"] = "red";
})(colors || (colors = {}));
function showcolor(color) {
    console.log(color);
}
showcolor(colors.Blue);
