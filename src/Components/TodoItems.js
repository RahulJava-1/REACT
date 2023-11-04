import React from 'react'

export default function TodoItems({todos, onDelete}) {
  return (
    <div>
        <h4>{todos.title}</h4>
        <p>{todos.desc}</p>
        <button className='btn btn-danger btn-sm' onClick={()=>onDelete(todos)}>Delete</button>
    </div>
  )
}
