//const express =require("express");
import express from "express";
import "dotenv/config"
import { connectDB } from "./lib/db.js";
const app=express();
const PORT=process.env.PORT;


app.get("/health",(req,res)=>{
    res.status(200).json({ok:true});
})


app.listen(3000,()=>{
 connectDB();
 console.log("Server is up and running on PORT: ",PORT);
});