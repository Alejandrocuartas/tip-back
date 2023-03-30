import { Router } from "express";
import { assistEmployeeController, createEmployeeController } from "../controllers/employee";
const router = Router();

router.post("/auth", createEmployeeController);
router.post("/assist", assistEmployeeController)

export default router;