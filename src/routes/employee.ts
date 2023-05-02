import { Router } from "express";
import { assistEmployeeController, createEmployeeController, getTotalTipsController, getEmployeesTipsController, deleteFromDayController } from "../controllers/employee";
const router = Router();

router.post("/auth", createEmployeeController);
router.post("/assist", assistEmployeeController)
router.get("/tips/:cc", getTotalTipsController)
router.delete("/delete", deleteFromDayController)
router.get("/tips/total/:ccAdmin", getEmployeesTipsController)

export default router;