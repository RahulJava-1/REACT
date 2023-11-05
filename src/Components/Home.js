import React,{useState, useEffect} from 'react'
import Todos from './Todos'
import { AddTodo } from './AddTodo'


export default function Home() {

    let initTodo;
    if(localStorage.getItem("todos")===null){
      initTodo = [];
    }
    else{
      initTodo = JSON.parse(localStorage.getItem("todos"))
    }
  
  //Add item into Todo
  const addTodo=(title, desc)=>{
    console.log("Added", title, desc);
    let sno;
    if(todos.length===0){
      sno = 0;
    }
    else{
    sno = todos[todos.length-1].sno + 1;
    }
    const myTodo ={
      sno : sno,
      title : title,
      desc : desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo)
    
  }
  
  
  const onDelete = (todo)=>{
    console.log("I am Delete",todo);
  
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos",JSON.stringify(todos));
  }
  
  const [todos, setTodos] = useState(initTodo);
  
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])
  
  //{
  //  sno: 1,
  //  title:"First Todo",
  //  desc:"Complete Assignment"
  //},
  
  //{
  //  sno: 2,
  //  title:"Second Todo",
  //  desc:"Pending Fee"
  //},
  
  //{
  //  sno: 3,
  //  title:"Third Todo",
  //  desc:"Bonafied Certificate"
  //},


  return (

    <div>
          <Todos todos={todos} onDelete={onDelete}/>
          <AddTodo addTodo={addTodo}/>
    </div>
  )
}
