import { Request, Response } from "express";
import { createEmployee, markAssist, getTotalTips } from "../use-cases";

const createEmployeeController = async(req: Request, res: Response) => {
    try {
        const name: string = req.body.name;
        const cc: string = req.body.cc;
        const employee = await createEmployee(name, cc);
        res.status(200).json({ employee });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

const assistEmployeeController = async(req: Request, res: Response) => {
    try {
        const date: string = req.body.date;
        const cc: string = req.body.cc;
        const isDay: boolean = req.body.isDay;
        const day = await markAssist(cc, date, isDay);
        res.status(200).json({ day });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

const getTotalTipsController = async(req: Request, res: Response) => {
    try {
        const cc: string = req.params.cc;
        const totalTips = await getTotalTips(cc);
        res.status(200).json({ totalTips });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export {
    createEmployeeController,
    assistEmployeeController,
    getTotalTipsController,
}