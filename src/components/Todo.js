import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo , updateTodo } from '../store/slices/TodoSlice'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'



function Todo(props) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // console.log(props.id);

  const incomingTask = (props.text)
  
  
  
  
  const deleteTodo=(id)=>{
    dispatch(
      (removeTodo(id))
    )
  }

  
 
  return (
   <>
   <div className="container-fluid my-2 " style={{backgroundColor:'#948979' , borderRadius:'6px'}}>
    <div className="row justify-content-between  align-items-center">
        <div className="  col-sm-5 col-md-5 col-lg-7 ">
       <p className='h5 mt-2' style={{textTransform:'capitalize'}}>{incomingTask}</p>
        </div>
        <div className="col-sm-3 col-md-4 col-lg-5 d-flex justify-content-md-end justify-content-sm-center ">
            <button onClick={()=> {navigate(`/updateTodo/${props.id}`)}} className='btn  mx-2 my-2' style={{backgroundColor:'#FBEF76'}}> <FontAwesomeIcon icon={faPen}/> Edit</button>
            <button onClick={()=> {deleteTodo(props.id)}} className='btn mx-2 my-2' style={{backgroundColor:'#FA5C5C'}}> <FontAwesomeIcon icon={faTrash} /> Delete</button>

        </div>
    </div>
   </div>
   </>
  )
}

export default Todo
