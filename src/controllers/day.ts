import { Request, Response } from "express";
import { createDay } from "../use-cases";

const createDayController = async(req: Request, res: Response) => {
    try {
        const date: string = req.body.date;
        const day = await createDay(date);
        res.status(200).json({ day });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export {
    createDayController
}