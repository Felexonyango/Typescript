"use strict";
function showTodo(todo) {
    console.log(todo.title + ':' + todo.text);
}
var myTodo = { title: 'shopify', text: 'hello' };
showTodo(myTodo);
function printLabel(labeledObj) {
    console.log(labeledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
