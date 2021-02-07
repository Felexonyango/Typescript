/*
function showTodo(todo:{title:string, text:string}){
console.log(todo.title+':'  + todo.text)

}
var myTodo ={title: "shopify", text: "hello"}
showTodo(myTodo)
*/
interface  Todo{
    title:string,
    text:string
}
function showTodo(todo:Todo){

    console.log(todo.title+':'+todo.text)
}
var  myTodo ={title: 'shopify', text: 'hello'}
showTodo(myTodo)


// simple label interface
/*
function printLabel(labeledObj: { label: string }) {
    console.log(labeledObj.label);
  }
  
  let myObj = { size: 10, label: "Size 10 Object" };
  printLabel(myObj);

  */
  //using interface 
  interface LabeledValue {
    label: string;
  }
  
  function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
  }
  
  var  myObj = { size: 10, label: "Size 10 Object" };
  printLabel(myObj);