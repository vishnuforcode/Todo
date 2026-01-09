import React, { useState } from 'react'
import Todo from '../components/Todo'
import {  useSelector } from 'react-redux'

import AddTodo from './AddTodo'


function Home() {

    const todosArray = useSelector((state)=> state.todo.todos)
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


    console.log(todosArray)

  return (
  <>

  <div className="container text-center my-3">
    <AddTodo/>
  </div>

  <div className="container-fluid my-1 " >
    <div className="container" style={{}}>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
        <div className="todo">
          {
            
            todosArray.map((todoi)=> (
             
              
                <Todo key={todoi.id} id={todoi.id} text={todoi.text} />
            ))

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
