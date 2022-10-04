import React from 'react'

export const TodoItem = ({todo, onDelete/*, edit*/}) => {
  return (
    <><div className="border border-dark rounded-2 p-3 bg-secondary text-white">
      <input type='checkbox'/><label><p><b>{todo.title}</b></p></label>
      <div>
      <button className="btn btn-danger m-1" onClick={()=>{onDelete(todo)}}>Delete</button>
{/* 
      <input type='text' id={todo.sno}/> */}
      {/* <button className='btn btn-danger' onClick={()=>{edit(todo)}}>Edit</button> */}
      </div>
    </div>
    <br/>
    </>
  )
}
