import { Router } from "express";
import { assistEmployeeController, createEmployeeController, getTotalTipsController } from "../controllers/employee";
const router = Router();

router.post("/auth", createEmployeeController);
router.post("/assist", assistEmployeeController)
router.get("/tips/:cc", getTotalTipsController)

export default router;