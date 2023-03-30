import { Router } from "express";
import { createDayController } from "../controllers/day";
const router = Router();

router.post("/create", createDayController);

export default router;