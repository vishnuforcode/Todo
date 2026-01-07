import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate ,useParams } from 'react-router-dom'
import { updateTodo } from '../store/slices/TodoSlice'

function UpdateTodo(props) {
  const navigate = useNavigate()
  
  const param = useParams()
  const dispatch = useDispatch()
    const [input , setInput] = useState("")


    const editTodo =(e)=>{
        e.preventDefault()
            dispatch(
                updateTodo({id: param.id , text: input})
            )
            navigate('/')
        
        
        
    }
    // console.log(param.id);
    
  return (
    <>
    <div className="container-fluid">
        <div className="container">

            <div className="row justify-content-center">
                <form action="" onSubmit={editTodo}  className='form '>
                    <label htmlFor="" className='form-label'>Update Text</label>
                    <input type="text" className='form-control' value={input} onChange={(e)=>{setInput(e.target.value)}} />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default UpdateTodo
