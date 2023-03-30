import { Types } from "mongoose";

export type EmployeeType = {
    name: string;
    cc: string;
    isCashier: boolean;
    totalTips: number;
}

export type DayType = {
    date: string;
    employees: Types.ObjectId[];
    tips: number;
}

