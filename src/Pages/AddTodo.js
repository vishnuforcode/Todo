import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../store/slices/TodoSlice'
import { useNavigate } from 'react-router-dom'

function AddTodo() {
    const navigate = useNavigate()

    const [input , setInput]=  useState('')
    console.log(input)

    const dispatch = useDispatch()
    const addNewTodo=(e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
        navigate('/home');
    }

  return (
    <>
    
    <div className="container-fluid">
        <div className="container d-flex justify-content-center ">
          <div className="row">
            <div className="col">
            <form 
            onSubmit={addNewTodo}
            
            className='form   '>
            <input 
            className='input p-2 '
            style={{borderRadius:'5px' , border:'none'}}
            value={input}
            type="text" 
            placeholder='type task'
            onChange={(e)=> setInput(e.target.value)} />

            
            </form>

            </div>
            <div className="col">
              {
   input?  <button type="submit" className='btn btn-primary ' enabled >Submit</button> : <button type="submit" className='btn btn-primary ' disabled >Submit</button> 
}
            </div>

            </div>
        </div>
    </div>
    </>
  )
}

export default AddTodo
