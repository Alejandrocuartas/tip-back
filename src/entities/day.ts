import mongoose from 'mongoose';

const daySchema = new mongoose.Schema({
  date: { type: String, required: true, unique: true },
  employees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'employee' }],
  tips: { type: Number, default: 0 },
});

const Day = mongoose.model('day', daySchema);

export default Day;
