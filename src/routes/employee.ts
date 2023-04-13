import { Router } from "express";
import { assistEmployeeController, createEmployeeController, getTotalTipsController, deleteFromDayController } from "../controllers/employee";
const router = Router();

router.post("/auth", createEmployeeController);
router.post("/assist", assistEmployeeController)
router.get("/tips/:cc", getTotalTipsController)
router.delete("/delete", deleteFromDayController)

export default router;