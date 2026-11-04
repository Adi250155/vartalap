import mongoose from "mongoose";


/*
userId,profile,full name,

*/


const userSchema= new mongoose.Schema(
    {
      clerkId:{

      } 


},{timestamps: true},
);

const user =mongoose.model("user",userSchema);

export default user;