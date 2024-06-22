import mongoose from 'mongoose';

const patientschema = new mongoose.Schema({
  name : {
    required : true,
    type : String, 
},
age : {
  required : true,
  type : Number
},
address : {
  required : true,
  type : String
},
daignosedwith : {
  required : true,
  type : string
},
bloodgroup : {
  required : true,
  type : String
},
Hospital :{
  type : mongoose.Schema.Types.ObjectId,
  ref : 'Hospital'
}
}, { timestamps: true });

export const patient = mongoose.model('patient', patientschema);
