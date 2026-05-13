import express from "express";
import {
	getContacts,
	createContact,
} from "../controllers/contactController.js";
import { protect, authorize } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", createContact);
router.get("/", protect, authorize("admin"), getContacts);

export default router;
