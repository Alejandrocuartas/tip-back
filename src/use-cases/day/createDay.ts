import Day from "../../entities/day";
import { DayType } from "../../types"

const createDay = async (date: string, isDay: boolean = false): Promise<DayType> => {
    //validate day exist by date
    const dayExist = await Day.findOne({ $and: [{date}, {isDay}]}).populate("employees")
    if (dayExist) {
        return dayExist;
    }
    const day = new Day({
        date,
        tips: 0,
        employees: [],
        isDay
    });
    const savedDay = await day.save()
    return savedDay;
};

export default createDay;