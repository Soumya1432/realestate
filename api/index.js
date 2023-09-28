import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter  from './routes/user.route.js';
import authRouter from "./routes/auth.route.js";
dotenv.config();

//async function database(){
mongoose.connect(process.env.MONGO).then(()=>{
     console.log("Connected to Mongo DB");

}).catch((err)=>{
    console.log(err);
    
})



const app=express();
app.use(express.json());

//database();
app.listen(3000, ()=>{
    console.log("Server running on port 3000 !!");

});


//api route

// app.get('/test',(req,res)=>{
//     res.json({
//         message:"Hello world",
//     });
// });

app.use("/api/user",userRouter);
app.use("/api/auth",authRouter);


//user internal server error
app.use((err,req,res,next) =>{
    const statusCode=err.statusCode || 500;
    const message=err.message || 'Internal server error';
    return res.status(statusCode).json({
       success:false,
       statusCode,
       message,   
    });
})