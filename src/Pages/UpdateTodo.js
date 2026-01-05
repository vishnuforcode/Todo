import React, { useState } from 'react'

function UpdateTodo(props) {

  const [text, settext]= useState("")


  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
      <form action="" className='form ' >
        <label htmlFor="" className='form-label'> Edit task:</label>
        <input type="text" className='form-control' />

      </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateTodo
