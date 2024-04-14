
const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const app = express()

const mongoose =require('mongoose')
const UserModel = require('./Users')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())



app.get("/",cors(),(req,res)=>{

})

mongoose.connect("mongodb://0.0.0.0:27017/login-registration-system")
app.get("/getUsers",(req,res)=>{
    UserModel.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.post("/",async(req,res)=>{
    const{name,email,password,dob}=req.body

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})



//app.post("/signup",async(req,res)=>{
    app.post("/regisration",async(req,res)=>{
    const{name,email,password,dob}=req.body

    const data={
        name:name,
        email:email,
        password:password,
        dob:dob
    }

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})

app.listen(8000,()=>{
    console.log("port connected");
})

