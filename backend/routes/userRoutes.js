/*******************************************************************************
 * This file is the path that will redirect to the functions in userCon.js
 ******************************************************************************/
import express from "express"
import {
  getUserDataByUsername,
  register,
  scan,
} from "../controllers/userCon.js"
import multer from "multer"

const upload = multer({ dest: "uploads/" })

const router = express.Router()

router.post("/register", register)
router.get("/data/:username", getUserDataByUsername)
router.get("/scan", upload.single("scan"), scan)

export default router
