import mongoose from 'mongoose'
const categoryschema = new mongoose.Schema({
  name : {
    required : true,
    type : String
  }
},{timestamps : true});

export const categories = mongoose.model('categories',categoryschema)