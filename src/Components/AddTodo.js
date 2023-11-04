import React, { useState } from "react";

export default function AddTodo({addTodo}) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();

    if(!title || !desc){
        alert("Title or Description must be required")
    }

    addTodo(title, desc);
  }

  return (
    <div>
      <div className="container my-5">
        <h3>Add a Todo</h3>
        <form onSubmit={submit}>
          
          <div className="mb-3">
          
            <label for="title" className="form-label">
              Title
            </label>
          
            <input
              type="text"
              value={title}
              onChange={(e)=>{setTitle(e.target.value)}}
              className="form-control"
              id="title"
            />
          
          </div>
          
          <div className="mb-3">
            
            <label for="desc" className="form-label">
              Description
            </label>
            
            <input
              type="text"
              value={desc}
              onChange={(e)=>{setDesc(e.target.value)}}
              className="form-control"
              id="desc"
            />

          </div>
          
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        
        </form>
      </div>
    </div>
  );
}