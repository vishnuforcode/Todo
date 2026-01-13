import React, { useState } from 'react'
import { model } from '../Ai/Gemini_helper'

function MusicPlayer() {
        // const [response , setresponse] = useState("")
        const payload ={
            "contents": [{
                "parts":[{"test":"explain how api works"}]

            }]
        }
    const testAi = async ()=>{
        // const result = await model.generateContent(
        //     "Generate greeting response for first api request "
        // )
        //     setresponse(result.response.text())
        // console.log(result.response.text());
        
        let res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.REACT_APP_GEMINI_API_KEY}` ,{
            method:"POST",
            body: JSON.stringify(payload)
        })

        const response = await res.json()
        console.log(response);
        
    }
    
    const handelClick=()=>{
        testAi()
    }
  return (
    <>
    this is music player
      <button onClick={handelClick}>Click for response</button>
      {/* <p>{response}</p> */}

    </>
  )
}

export default MusicPlayer
