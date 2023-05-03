import Day from "../../entities/day";
import Employee from "../../entities/employee";

const getTotalTips = async (cc: string) => {
    const employee = await Employee.findOne({ cc })
    if (!employee) {
        throw new Error("cc invalid");
    }
    const days = await Day.find({ employees: employee._id })
    let totalTips: number = 0;
    days.forEach(day => {
        const dayTips = Number(day.tips / day.employees.length)
        totalTips += dayTips

    })
    return totalTips;
}

export default getTotalTips;