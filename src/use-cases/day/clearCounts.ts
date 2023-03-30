import Day from "../../entities/day";
import Employee from "../../entities/employee";

const clearCounts = async (ccAdmin: string) => {
    const employee = await Employee.findOne({ cc: ccAdmin });
    if(!employee?.isCashier){
        throw new Error("invalid cc")
    }
    await Day.updateMany({}, {
        tips: 0
    })
    return true
}

export default clearCounts;