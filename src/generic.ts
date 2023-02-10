interface Todo{
    name:string
    completed:boolean
}
  function createTodo <T extends Todo>(todo:T){
    return todo

  }
  const newTodo=createTodo({name:'text',completed:true});
  console.log(newTodo);