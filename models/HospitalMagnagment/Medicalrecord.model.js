import mongoose from 'mongoose'

const medicalrecordschema = new mongoose.Schema({},{timestamps : true})

export const medicalrecord = mongoose.model('medicalrecord',medicalrecordschema)