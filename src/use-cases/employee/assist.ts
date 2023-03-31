import mongoose from "mongoose";
import Day from "../../entities/day";
import Employee from "../../entities/employee";

const assist = async(cc: string, date: string, isDay: boolean = false) => {
    const employee = await Employee.findOne({ cc })
    const day = await Day.findOne({ $and: [{date}, {isDay}] });
    //validate employee is not null
    if (employee == null) {
        throw new Error("Employee not found");
    }
    if(day == null) {
        throw new Error("Day not found");
    }
    const alreadyMarked = day.employees.includes(employee._id)
    if(!alreadyMarked){
        day.employees.push(employee._id)
        await day.save()
    }
    return day
}

export default assist;