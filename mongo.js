const mongoose=require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/login-registration-system")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})

 

const newSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    dob:{
        type:Date,
        required:true
    }
})

const collection = mongoose.model("collection",newSchema)

module.exports=collection