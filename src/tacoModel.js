const mongoose=require("mongoose");

const tacoSchema={
    name:String,
    description:String,
    history:String,
    region:String,
    tags:[],
    images:[]
}

//const Taco=mongoose.model("Taco",tacoSchema);

//exports.model=Taco;
module.exports=mongoose.model("Taco",tacoSchema)