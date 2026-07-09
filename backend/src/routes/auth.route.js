import express from "express";
import { signup } from "../controllers/auth.controller.js";
import { signupValidation, validate } from "../validators/auth.validator.js";

const router = express.Router();

router.post("/signup", signupValidation, validate, signup);

export default router;
