import mongoose from 'mongoose';

const hospitalschema = new mongoose.Schema(
  {
    address: {
      required: true,
      type: String,
    },
    pincode: {
      type: String,
    },

    specializedin: {
      type: String,
    },
  },
  { timestamps: true }
);

export const hospital = mongoose.model('hospital', hospitalschema);
