
const express = require( "express");
const { createManyDocuments,Addperson,findOneAndUpdate,chainsearch,findByName,findOneByName,removeManyPeople, Getpersons, Deleteperson, Editperson, createAndSavePerson } = require("../controllers/person");
const createPerson = require("../models/person").createAndSavePerson;
const personRoutes =express.Router();

personRoutes.post("/Add",Addperson);
personRoutes.get("/Get", Getpersons);

    personRoutes.delete("/delete/:id",Deleteperson);

        personRoutes.put("/edit/:id", Editperson);
//personRoutes.post("AddMany",createManyDocuments)
      // personRoutes.put("/findbyname/:name", Findbyname);


     personRoutes.post('/many',createManyDocuments )

     personRoutes.delete('/remove',removeManyPeople)
let name ="Mary"
     personRoutes.get('/findone',findOneByName)

     personRoutes.get('/findmany',findByName)
     personRoutes.put('/findoneandupdate',findOneAndUpdate)
     personRoutes.get('/chainsearch',chainsearch)

module.exports=personRoutes