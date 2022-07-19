


const Person= require("../models/person");









/**add one person */

exports.Addperson=async (req, res) =>{
    try
    {const newperson= new Person(req.body);
       await newperson.save();
    res.status(200).send({msg:"person added",newperson})
    
    
    }
    catch (error) {
        res.status(200).send("person cannot be added")
    
    }}
    /**afficher toutes les persones */
    exports.Getpersons=async(req, res) =>{
        try
        {const persons= await Person.find()
           
        res.status(200).send({msg:"list of persons",persons})
        
        
        }
        catch (error) {
            res.status(200).send("couldnt get persons")
        
        }}
        /**supprimer une persone a partir de son id */
        exports.Deleteperson= async(req, res) =>{
            try
            {const deleted= await Person.findByIdAndDelete(req.params.id)
               
            res.status(200).send({msg:"person deleted",deleted})
            
           
            }
            catch (error) {
                res.status(200).send("couldnt delete person")
            
            }}
            /**modifier une personne a partir de son id */
            exports.Editperson=async(req, res) =>{
                try
                {const updated= await Person.findByIdAndUpdate(req.params.id,{$set:req.body,},{new:true});
                    
                   
                res.status(200).send({msg:"person updated",updated})
                
                
                }
                catch (error) {
                    res.status(200).send("couldnt update person")
                
                }}
               


                   /**ajouter plusieurs personnes */
        exports.createManyDocuments = async () => {
            try {
          
              let persons = await Person.create(
                [
                  {
                    name: "Garry",
                    age: 35,
                    favouritefood: ["fried chicken", "chicken wings", "chicken nuggets"]
                  },
                  { name: "Hannah", age: 24, favouritefood: ["watermelon", "mango"] },
                  { name: "Igor", age: 52, favouritefood: ["vegetable soup"] }
                ]
              )
              return persons
            }
            catch (error) {
              throw error
            }
          }
          /**supprimer toutes les personnes ayant comme prenom mary */
        /*   exports.removeManyPeople = function() {
            var nameToRemove = "Mary";
            Person.deleteMany({name: nameToRemove});
          };   


*/

          exports.removeManyPeople = async(req, res) =>{
            try
            { var nameToRemove = "Mary";
              const deleted=await Person.deleteMany({name: nameToRemove});
               
            res.status(200).send({msg:"person deleted",deleted})
            
           
            }
            catch (error) {
                res.status(500).send("couldnt delete person")
            }}
            /** trouver plusieurs personnes a partir de son prenom */
          exports.findByName = async(req, res) =>{
            try
            {const found= await Person.find({name: 'Mary'});
               
            res.status(200).send({msg:"person found",found})
            
           
            }
            catch (error) {
                res.status(500).send("couldntfind person")
            }}











/** trouver une seule personne a partir de son prenom */
          exports.findOneByName = async(req, res) =>{
            try
            {const found= await Person.findOne({name: 'Mary'});
               
            res.status(200).send({msg:"person found",found})
            
           
            }
            catch (error) {
                res.status(500).send("couldntfind person")
            }}
            /** trouver plusieurs personnes a partir de son prenom */
          exports.findByName = async(req, res) =>{
            try
            {const found= await Person.find({name: 'Mary'});
               
            res.status(200).send({msg:"person found",found})
            
           
            }
            catch (error) {
                res.status(500).send("couldntfind person")
            }}


/**trouver une seule personne ayant le nom mary et modifier son age a 20 ans */

            exports.findOneAndUpdate = async(req, res) =>{
              try
              {
                
                const filter = { name: 'Mary' };
const update = { age: 20 };
                
let doc = await Person.findOneAndUpdate(filter, update);
                 
              res.status(200).send({msg:"person updated",doc})
              
             
              }
              catch (error) {
                  res.status(500).send("couldntupdate person")
              }}



/*Chain Search Query Helpers to Narrow Search Results*/

    exports.chainsearch =  function() {
      var foodToSearch = "mango";
      
      Person.find({favouritefood : {$all: [foodToSearch]}})
        .sort({name: 'asc'})
        .limit(2)
        .select('-age')
        .exec((error, filteredResults) => {
        if(error){
          console.log(error)
        }else{
         console.log( filteredResults)
        }
      })
      
    };