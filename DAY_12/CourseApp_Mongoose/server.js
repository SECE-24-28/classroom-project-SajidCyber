const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const app=express()
const PORT=4000

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/myCourse").then(()=>
{
    console.log("Database Connection Established Succesfully.......................");
}).catch((err)=>console.log(err))

app.listen(PORT,()=>console.log(`server  is running on port ${PORT}`))