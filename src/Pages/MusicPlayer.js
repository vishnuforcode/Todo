import React, { useState } from 'react'
import axios from 'axios'


function MusicPlayer() {
  const [userInput , setUserInput] = useState("")
    const [aiRes , setaiRes]=useState("")
    const handelClick = async()=>{
        const res = await axios.post("http://localhost:8000/ai" ,
          {
            input : userInput
          } 
        )

        console.log(res)
         setaiRes(res.data)  
         console.log(aiRes) 
    }
  return (
    <>
    <div className="container-fluid">
      <div className="container">
        <div className="row text-center">
            <p className='h2' style={{color:'white'}} >This is palyer</p>
        </div>
        <div className="row row-cols-2">
          <div className="col">
                <input type="text" placeholder='ask Gemini' value={userInput}  onChange={(e)=>{setUserInput(e.target.value)}}/>
               <button className='btn btn-primary' onClick={handelClick}>Ask Ai</button>
          </div>
          <div className="col">
              <textarea name="" id="" placeholder='response will be here'  value={aiRes}/> 
          </div>
        </div>
      </div>
    </div>
{/*    

      
  
      {/* <p>{response}</p> */}

    </>
  )
}

export default MusicPlayer
