import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../store/slices/TodoSlice'
// import { useNavigate } from 'react-router-dom'

function AddTodo() {
    // const navigate = useNavigate()

   
  
    const [input , setInput]=  useState('')
    // console.log(input)

    const dispatch = useDispatch()
    const addNewTodo=(e)=>{
        e.preventDefault()
        dispatch(addTodo({text: input , from: Fromdate , to:toDate}))
        setInput('')
        // navigate('/home');
    }

   

  //   const d = new Date()
  //   const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  //   const formattedDate = `${days[d.getDay()]}-${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`
  // console.log(formattedDate);



   //date fields -----
   const [Fromdate ,setFromDate] = useState()
   const [toDate ,setToDate] = useState()
  
      
   const handleFromDate =(e)=>{
      setFromDate(e.target.value)
     
   }
   const handleToDate=(e)=>{
    setToDate(e.target.value)
   }
  return (
    <>
    
    <div className="container-fluid">
        <div className="container  ">
          <div className="row mb-3 d-flex">
            <div className="col-8"  >
            <form 
            
            onSubmit={addNewTodo}
            
            className='form  '>
            <input 
            className='input p-2 '
            style={{borderRadius:'5px' , border:'none' , width:'200px'}}
            value={input}
            type="text" 
            placeholder='Task'
            onChange={(e)=> setInput(e.target.value)} />

              {
   input?  <button type="submit" className='btn btn-primary ms-2 ' enabled   >Submit</button> : <button type="submit" className='btn btn-primary ms-2  ' disabled  >Submit</button> 
              }
            
            {
              input? (
                <div className='mt-3'>
                <label htmlFor="" className='form-label' style={{color:'gray'}}>Form:</label>
                <input type="date" className='form-control mb-2' style={{width:'200px'}} value={Fromdate} onChange={handleFromDate}/>

                <label htmlFor="" className='form-label' style={{color:'gray'}}>To:</label>
                <input type="date" className='form-control mb-2' style={{width:'200px'}} value={toDate} onChange={handleToDate}/>
                </div>
              ):(
               null 
              )
            }
            </form>

             

            </div>
           

            </div>

          
            
        </div>
    </div>
    </>
  )
}

export default AddTodo
