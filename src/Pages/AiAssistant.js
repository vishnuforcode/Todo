import React, { useState } from 'react'
import axios from 'axios'


function AiAssistant() {
  const [userInput , setUserInput] = useState("")
  const [loading , setLoading] = useState(false)
    const [aiRes , setaiRes]=useState("")
    const handelClick = async(e)=>{
      setLoading(true)
      e.preventDefault()
      try{
        const res = await axios.post("http://localhost:8000/ai" ,
          {
            input : userInput
          } 
        )

        
         setaiRes(res.data.response) 
         setLoading(false) 
         setUserInput("")
         console.log(res.data.response) 
      }catch(err){
        setLoading(false)
        console.log(err)
      }
    }
  return (
    <>
    <div className="container-fluid">
      <div className="container">
        <div className="row text-center mt-2">
            <p className='h2' style={{color:'white'}} >This is Gemini assistant to achieve your goals </p>
        </div>
        <hr className='p-0' style={{color:'white'}}/>
        <div className="row ">
          <div className="col justify-content-center ">
            <form action="" className='form ' onSubmit={handelClick}>

            
                <input type="text" className='form-control p-2' placeholder='ask Gemini' value={userInput}  onChange={(e)=>{setUserInput(e.target.value)}}/>
               <button className='btn  mt-2 glass bg-gradient ' style={{width:'100%', border:'1px solid gray', color:'white' , opacity:'60%', backgroundColor:'blue'}}  type='submit' >Ask Ai</button>
               </form>
          </div>
          </div>

          <div className='row mt-5'>
          <div className="col-12">
              <textarea className='p-2' name="" id="" style={{width:'100%', height:'400%' , borderRadius:'6px'}} placeholder='response will be here'  value={loading ? ("thinking..."): (aiRes)}/> 
          </div>
        </div>
      </div>
    </div>
{/*    

      
  
      {/* <p>{response}</p> */}

    </>
  )
}

export default AiAssistant
