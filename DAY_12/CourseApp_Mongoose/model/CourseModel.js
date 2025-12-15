const mongoose = require("mongoose") //importing mongoose library

const courseSchema=new mongoose.Schema({ //defining table structure
    title:{type:String,required:true},
    duration:{type:String,required:true}
});  
module.exports=mongoose.model("mycourse",courseSchema)



