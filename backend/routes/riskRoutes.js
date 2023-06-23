/*******************************************************************************
 * This file is the path that will redirect to the functions in userCon.js
 ******************************************************************************/
import express from "express";
import { saveRisk } from "../controllers/riskCon.js";
const router = express.Router();

router.post("/saveRisk", saveRisk);
export default router;
