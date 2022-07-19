const mongoose=require("mongoose")
const personSchema=new mongoose.Schema(
    {
        
        name:{type:String,require:true},
        age:Number,
        favouritefood:[String],
    }
);

const Person = mongoose.model('Person',personSchema)

module.exports = Person


