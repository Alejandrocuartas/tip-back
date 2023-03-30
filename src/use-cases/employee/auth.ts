import mongoose from "mongoose";
import Employee from "../../entities/employee";
import {EmployeeType} from "../../types"

const createEmployee = async (name: string, cc: string): Promise<EmployeeType> => {
    //validate if the employee exists by cc
    const existEmployee = await Employee.findOne({ cc });
    if (existEmployee) {
        return existEmployee
    }
    const employee = new Employee({
        name,
        cc,
    });
    const savedEmployee = await employee.save()
    return savedEmployee
};

export default createEmployee;