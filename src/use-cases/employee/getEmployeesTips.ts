import Day from "../../entities/day";
import Employee from "../../entities/employee";

const getEmployeesTips = async (ccAdmin: string) => {
    const employee = await Employee.findOne({ cc: ccAdmin })
    if (!employee?.isCashier) {
        throw new Error("user unauthorized.");
    }
    const totalEmployees = await Employee.find()
    for (let i = 0; i < totalEmployees.length; i++) {
        const days = await Day.find({ employees: totalEmployees[i]._id })
        days.forEach(day => {
            const dayTips = Number(day.tips / day.employees.length)
            totalEmployees[i].totalTips += dayTips
        })
    }
    return totalEmployees;
}

export default getEmployeesTips;