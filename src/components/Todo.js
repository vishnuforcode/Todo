import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo , updateTodo } from '../store/slices/TodoSlice'
import { useNavigate } from 'react-router-dom'



function Todo(props) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  console.log(props.id);
  
  const deleteTodo=(id)=>{
    dispatch(
      (removeTodo(id))
    )
  }

  
 
  return (
   <>
   <div className="container-fluid my-2 " style={{backgroundColor:'#E5BA41'}}>
    <div className="row justify-content-between  align-items-center">
        <div className="col-lg-7 col-12">
       <p className='h4'>{props.text}</p>
        </div>
        <div className="col-lg-3">
            <button onClick={()=> {navigate(`/updateTodo/${props.id}`)}} className='btn btn-primar mx-2 my-2' style={{backgroundColor:'#94A378'}}>Edit</button>
            <button onClick={()=> {deleteTodo(props.id)}} className='btn btn-dangr mx-2 my-2' style={{backgroundColor:'#D1855C'}}> <i className="fa-thin fa-trash-can"></i>Delete</button>

        </div>
    </div>
   </div>
   </>
  )
}

export default Todo
