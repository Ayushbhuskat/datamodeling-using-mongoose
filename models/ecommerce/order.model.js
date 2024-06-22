import mongoose from 'mongoose'

const orderitemschema  = new mongoose.Schema({
  productid : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'product',
   
  },
   quantity : {
     type : number,
     required : true
   }
})

const orderschema = new mongoose.Schema({
  order : {
    required : true,
    type : Number
  },

  customer : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'user',
  },

  orderitmes : {
    type : [orderitemschema]
  },
  address : {
    type : String,
    required : true,
  },
  status : {
    type : String,
    enum : ["PENDING", "CANCELLED","DELIVERD"],
    default : "pending"
  }
},{timestamps: true})

export const order = mongoose.model('order',orderschema)