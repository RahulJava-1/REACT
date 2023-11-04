import './App.css';
import Header from './Components/Header';
import Todos from './Components/Todos';
import Footer from './Components/Footer';
import React, {useState} from 'react';
import AddTodo from './Components/AddTodo';


function App() {

const addTodo=(title, desc)=>{
  console.log("Added", title, desc);
}


const onDelete = (todo)=>{
  console.log("I am Delete",todo);

  setTodos(todos.filter((e)=>{
    return e!==todo;
  }));
}

const [todos, setTodos] = useState([
  {
    sno: 1,
    title:"First Todo",
    desc:"Complete Assignment"
  },
  
  {
    sno: 2,
    title:"Second Todo",
    desc:"Pending Fee"
  },
  
  {
    sno: 3,
    title:"Third Todo",
    desc:"Bonafied Certificate"
  },

]);

  return (
    <>
    <Header title ="My Todo List" loginRequired={false}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <AddTodo AddTodo={addTodo}/>
    <Footer />
    </>
  );
}

export default App;
