import mongoose from 'mongoose';

const daySchema = new mongoose.Schema({
  date: { type: String, required: true },
  employees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'employee' }],
  tips: { type: Number, default: 0 },
  isDay: { type: Boolean, default: false, required: true },
});

const Day = mongoose.model('day', daySchema);

export default Day;
