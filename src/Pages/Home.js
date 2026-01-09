import React, { useEffect, useState } from 'react'
import Todo from '../components/Todo'
import {  useSelector } from 'react-redux'

import AddTodo from './AddTodo'


function Home() {

  //  const [task , settask ] = useState(false)
    const todosArray = useSelector((state)=>state.todo.todos )
    const count = todosArray.length
    // const [todosArray , settodosArray] = useState(()=>{
    //   const todoFromLocal = localStorage.getItem("todo")
    //   if(todoFromLocal){
    //       return  JSON.parse(todoFromLocal)
    //   }
    //   else{
    //     return [] ;
    //   }
         
    // }
    
      
    // )


    // console.log(todosArray)
// useEffect(()=>{
//   settask(true)
// } ,[])
  return (
  <>

  <div className="container text-center my-3">
    <AddTodo/>

  </div>
  
<hr style={{color:'gray'}} />
<div className="container">  
  <div className="row d-flex justify-content-between">
    <div className="col ms-2 ">
      <p className="h6" style={{color:'#74a2c3c6'}}>Total : {count}</p>
    </div>
    <div className="col text-end me-2 ">
      <p className="h6" style={{color:'#74a2c3c6'}}>Completed : {count}</p>
    </div>
    
   
  </div>
  </div>
  
  <div className="container-fluid my-1 " >
    <div className="container" style={{}}>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
        <div className="todo">
          {
             todosArray.length>0  && (todosArray.map((todoi)=> (
             
              
                <Todo key={todoi.id} id={todoi.id} text={todoi.text} total= {count} />
            )))

             
          }
          {
            todosArray.length===0 &&(
               <div className="container ">
                <div className="row ">
                  <div className="col text-center" style={{color:'gray'}}>
                    Start with your Day !! 
                  </div>
                </div>
               </div>)
          }

                
            
            
            
           

          
        </div>
        </div>
        </div>
    </div>
  </div>
    
  
  </>
  )
}

export default Home
