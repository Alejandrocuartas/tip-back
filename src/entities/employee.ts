import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    cc: { type: String, required: true, unique: true },
    isCashier: { type: Boolean, default: false },
    totalTips: { type: Number, default: 0 }
});

const Employee = mongoose.model('employee', employeeSchema);

export default Employee;
