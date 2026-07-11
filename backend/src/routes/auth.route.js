import express from "express";
import { signup, login, logout } from "../controllers/auth.controller.js";
import {
	signupValidation,
	loginValidation,
	validate,
} from "../validators/auth.validator.js";

const router = express.Router();

router.post("/signup", signupValidation, validate, signup);
router.post("/login", loginValidation, validate, login);
router.post("/logout", logout);

export default router;
