const mongoose=require("mongoose");
const connectDB=async()=>{
try{

    await mongoose.connect(process.env.MONGOURL);
    console.log("db is connected")
}

catch(error){

console.log("db is not connected")
}



} ;
module.exports=connectDB;