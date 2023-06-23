/*******************************************************************************
 * This file is the path that will redirect to the functions in userCon.js
 ******************************************************************************/
import express from "express";
import { saveRisk } from "../controllers/riskCon.js";
import { getData, getUserDataByUsername } from "../controllers/userCon.js";
const router = express.Router();

router.post("/saveRisk", saveRisk);
router.get("/data/:username", getUserDataByUsername);
router.get("/test", getData);
export default router;
