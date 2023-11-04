import './App.css';
import Header from './Components/Header';
import Todos from './Components/Todos';
import Footer from './Components/Footer';
import React, {useState} from 'react';


function App() {

const onDelete = (todos)=>{
  console.log("I am Delete",todos);

  setTodos(todos.filter((e)=>{
    return e!=todos;
  }))
}

const [todos, setTodos] = useState([
  {
    sno:1,
    title:"First Todo",
    desc:"Complete Assignment"
  },
  {
    sno:2,
    title:"Second Todo",
    desc:"Pending Fee"
  },
  {
    sno:3,
    title:"Third Todo",
    desc:"Bonafied Certificate"
  }
]);

  return (
    <>
    <Header title ="My Todo List" loginRequired={false}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer />
    </>
  );
}

export default App;
