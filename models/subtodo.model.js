import mongoose from 'mongoose';

const subtodoschema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },

    complete: {
      type: Boolean,
      default: false,
    },

    createdby: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
  },
  { timeseries: true }
);

export const subtodo = mongoose.model('subtodo', subtodoschema);
