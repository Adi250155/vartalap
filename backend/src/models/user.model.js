import mongoose from "mongoose";


/*
userId,profile,full name,
clerId:password/authentication is managed by clerk

*/


const userSchema= new mongoose.Schema(
    {
      clerkId:{
          type:String,
          required:true,
          unique:true,
      },
       email:{
          type:String,
          required:true,
          unique:true,
      },
      fullName:{
          type:String,
          required:true,
      },
      profilePic: {
      type: String,
      default: "",
    },



},{timestamps: true},
);

const User =mongoose.model("User",userSchema);

export default User;