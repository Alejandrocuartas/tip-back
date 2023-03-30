import { Request, Response } from "express";
import { createEmployee, markAssist } from "../use-cases";

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
        const day = await markAssist(cc, date);
        res.status(200).json({ day });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export {
    createEmployeeController,
    assistEmployeeController,
}