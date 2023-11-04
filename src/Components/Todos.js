import React from 'react'
import TodoItems from './TodoItems'

export default function Todos(props) {
  return (
    <div>
      <div className='container'>
        <h3 className='my-3'>Todo List</h3>

        {props.todos.length===0?"No Todos to Display":

        props.todos.map((todos)=>{
        return <TodoItems todos={todos} onDelete={props.onDelete}/>
      })}

      </div>
    </div>
  )
}
