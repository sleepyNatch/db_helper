/*******************************************************************************
 * This file is the path that will redirect to the functions in userCon.js
 ******************************************************************************/
import express from "express";
import { saveRisk, getRiskResult } from "../controllers/riskCon.js";
const router = express.Router();

router.post("/saveRisk", saveRisk);
router.get("/result/:username", getRiskResult);
export default router;
