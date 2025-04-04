import express from "express";
import { getMedicalLeaveApplications, updateLeaveStatus, viewLeaveDetails } from "../controllers/adminController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import {getHealthRecordsadmin} from "../controllers/healthRecordController.js";

const router = express.Router();

// Admin routes
router.get("/", authMiddleware(["admin"]), getMedicalLeaveApplications); // Fetch all leave applications
router.patch("/:id/status", authMiddleware(["admin"]), updateLeaveStatus); // Approve or reject leave
router.get("/:id/details", authMiddleware(["admin"]), viewLeaveDetails); // View leave details
router.get("/healthrecord", authMiddleware(["admin"]), getHealthRecordsadmin);

export default router;
