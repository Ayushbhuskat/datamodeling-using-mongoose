import mongoose from 'mongoose';

const hospitalhour = new mongoose.Schema({
  type: Number,
  required: true,
});
const doctorschema = new mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
    },

    salary: {
      required: true,
      type: Number,
    },
    Qualification: {
      type: string,
      required: true,
    },
    ExpreiencedinYear: {
      required: true,
      default: 0,
      type: Number,
    },
    worksinhospital: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hospital',
    },
    worktimeinhour: {
      type: [hospitalhour],
    },
  },
  { timestamps: true }
);

export const doctor = mongoose.model('doctor', doctorschema);
