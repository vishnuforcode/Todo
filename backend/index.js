let express = require('express')
let cors = require('cors')

const { config } = require('@fortawesome/fontawesome-svg-core')
let app = express()

app.use(cors)
require('dotenv').config()




app.get('/' , (req ,res)=>{
    res.send("hello backend")
})

app.get("/home" , (req,res)=>{
    res.send("this is from backend ")
})




app.listen(process.env.PORT | '4000' , ()=>{
    console.log("listening at 8000");
    
})