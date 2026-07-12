import express from "express";
import {
  getAllContacts,
  getAllChats,
  getMessageByUserId,
  sendMessage,
} from "../controllers/messages.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";
import { arcjetProtection } from "../middlewares/arcjet.middleware.js";
import {
  sendMessageValidation,
  validate,
} from "../validators/message.validator.js";

const router = express.Router();

router.use(protectRoute, arcjetProtection);

router.get("/contacts", getAllContacts);
router.get("/chats", getAllChats);
router.get("/:id", getMessageByUserId);

router.post("/send/:id", sendMessageValidation, validate, sendMessage);

export default router;
