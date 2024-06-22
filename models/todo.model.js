import mongoose from 'mongoose'

const todoschema = new mongoose.Schema({
  content :{
    required : true,
    type : String
  },

  complete : {
    type : Boolean,
    default : false
  },

  createdby : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "user",
  },

  subtodos :[ {
    type : mongoose.Schema.Types.ObjectId,
    ref : "subtodo"
  }
]
},{timestamps : true})


export const todo = mongoose.model('todo',todoschema)