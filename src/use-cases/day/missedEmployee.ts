import Day from "../../entities/day";
import Employee from "../../entities/employee";

const enterMissedE = async(date: string, ccAdmin: string, cc: string) => {
    //validate employee exists 
    const employeeAdmin = await Employee.findOne({ cc: ccAdmin });
    if (!employeeAdmin?.isCashier) {
        throw new Error("Employee not valid");
    }
    const employee = await Employee.findOne({ cc });
    if(!employee){
        throw new Error("Employee does not exist");
    }
    //validate day exist by date
    const dayExist = await Day.findOne({ date });
    if (!dayExist) {
        throw new Error("day not found")
    }
    const alreadyInDay = dayExist.employees.includes(employee._id)
    if(alreadyInDay){
        throw new Error("Employee already in that day");
    }
    dayExist.employees.push(employee._id)
    await dayExist.save();
    return true;
}

export default enterMissedE;