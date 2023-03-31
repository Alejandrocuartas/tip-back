import Day from "../../entities/day";
import Employee from "../../entities/employee";
import { DayType } from "../../types"

const enterTips = async (date: string, tips: number, cc: string, isDay: boolean = false): Promise<DayType> => {
    //validate employee exists 
    const employee = await Employee.findOne({ cc });
    if (!employee?.isCashier) {
        throw new Error("Employee not valid");
    }
    //validate day exist by date
    const dayExist = await Day.findOne({ $and: [{ date}, {isDay}]});
    if (!dayExist) {
        throw new Error("day not found")
    }
    dayExist.tips = tips
    const savedDay = await dayExist.save()
    return savedDay;
};

export default enterTips;