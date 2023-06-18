/*******************************************************************************
 * This file is the path that will redirect to the functions in userCon.js
 ******************************************************************************/
import express from "express";
import { getData, register,deleteData } from "../controllers/userCon.js";
const router = express.Router();

router.post("/register", register);
router.get("/getData", getData);
router.delete("/deleteData",deleteData);
export default router;