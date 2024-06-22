import mongoose from 'mongoose'

const userschema = new mongoose.Schema({
  username : {
    type : String,
    required : true,
  },
  email : {
    type : String,
    required : true,
  },
  password : {
    type : String,
    required : true,
    unique : true,
    lowercase : true

  }
},{timeseries : true})

export const user = mongoose.model("user",userschema)