import Day from "../../entities/day";
import { DayType } from "../../types"

const createDay = async (date: string): Promise<DayType> => {
    //validate day exist by date
    const dayExist = await Day.findOne({ date });
    if (dayExist) {
        return dayExist;
    }
    const day = new Day({
        date,
        tips: 0,
        employees: [],
    });
    const savedDay = await day.save()
    return savedDay;
};

export default createDay;