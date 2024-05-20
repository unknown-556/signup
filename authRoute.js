import express from "express";
import imageRouter from './imageController.js'
const router = express.Router()

router.post("/register",imageRouter)

export default router;