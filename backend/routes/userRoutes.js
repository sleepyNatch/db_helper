/*******************************************************************************
 * This file is the path that will redirect to the functions in userCon.js
 ******************************************************************************/
import express from "express";
import { getData, register } from "../controllers/userCon.js";
const router = express.Router();

router.post("/register", register);
router.get("/getData", getData);
export default router;