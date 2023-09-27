import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

async function database(){
await mongoose.connect(process.env.MONGO).then(()=>{
     console.log("Connected to Mongo DB");

}).catch((err)=>{
    console.log(err);
    
})

}

const app=express();
database();
app.listen(3000, ()=>{
    console.log("Server running on port 3000 !!");

});