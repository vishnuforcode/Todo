let express = require('express')
let cors = require('cors')

let app = express()
require('dotenv').config()
const generateText = require('./GEmini_helper')

app.use(cors({
  origin: '*'
}))

app.use(express.json())




app.get('/' , (req ,res)=>{
    res.send("hello backend")
})

app.get("/home" , (req,res)=>{
    res.send("this is from backend ")
})


app.post("/ai", async (req, res) => {
  try {
    const { input } = req.body
    console.log(input);
    

    if (!input) {

      return res.status(400).json({ error: "input is required" })
    }

    const response = await generateText(input)
    
    res.json({ response})
  } catch (error) {
    console.error(error)
    res.status(400).json({ error: "AI failed" })
  }
})




app.listen(process.env.PORT, ()=>{
    console.log(`listening at ${process.env.PORT}`);
    
})