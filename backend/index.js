let express = require('express')

let app = express()

app.get('/' , (req ,res)=>{
    res.send("hello backend")
})

app.get("/home" , (req,res)=>{
    res.send("this is from backend ")
})




app.listen( '8000'  ,()=>{
    console.log("server connected ");
    
})