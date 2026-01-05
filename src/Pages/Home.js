import React from 'react'
import Navbar from '../components/Navbar'
import Todo from '../components/Todo'
import {  useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import AddTodo from './AddTodo'


function Home() {

    const todosArray = useSelector((state)=> state.todo.todos)
    console.log(todosArray)

  return (
  <>
  <Navbar/>

  <div className="container text-center my-3">
    <AddTodo/>
  </div>

  <div className="container-fluid my-1 " >
    <div className="container" style={{border:'1px solid'}}>
        <div className="todo">
          {
            todosArray.map((todoi)=> (
                <Todo key={todoi.id} id={todoi.id} text={todoi.text} />
            ))
          }
        </div>
    </div>
  </div>
    
  
  </>
  )
}

export default Home
