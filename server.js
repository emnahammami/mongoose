const express=require('express');
const connectDB = require('./config/connectDB');
const personRoutes = require('./routes/person');
const { createManyDocuments } = require("./controllers/person");

var router = express.Router();
require('dotenv').config()
console.log(process.env) // remove this after you've confirmed it working
  
const port =3000
const app=express();
app.use(express.json())
   connectDB();
   app.use("/api/persons",personRoutes);
app.listen(process.env.port, function() {
    console.log("Server is listening at port:"+port );
}); 
  