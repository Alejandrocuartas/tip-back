import mongoose from "mongoose";
import Employee from "../../entities/employee";
import { DayType } from "../../types"
import Day from "../../entities/day";

const deleteFromDay = async (date: string, ccAdmin: string, cc: string, isDay: boolean = false): Promise<DayType> => {
    //validate if the employee exists by cc
    const existEmployee = await Employee.findOne({ cc });
    if (!existEmployee) {
        throw new Error("Employee does not exist.")
    }
    const existAdmin = await Employee.findOne({ cc: ccAdmin });
    if (!existAdmin) {
        throw new Error("Admin does not exist.")
    }
    if (!existAdmin.isCashier) {
        throw new Error("Employee is not authorized.")
    }
    const existDate = await Day.findOne({ $and: [{ date }, { isDay }] }).populate("employees")
    if (!existDate) {
        throw new Error("Day does not exist")
    }
    const existInDay = existDate.employees.some(e => e._id.toString() === existEmployee._id.toString())
    if (!existInDay) {
        throw new Error("User is not registered in that day.")
    }
    //delete employee from day's employees list
    existDate.employees = existDate.employees.filter(e => e._id.toString() !== existEmployee._id.toString());
    await existDate.save();

    return existDate
};

export default deleteFromDay;