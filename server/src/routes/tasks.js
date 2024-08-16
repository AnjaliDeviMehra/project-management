import express from "express";
import * as taskController from "../controllers/taskController.js";

const router = express.Router();
router.route("/addnew").post(taskController.createTask);
router.route("/:id").put(taskController.updateTask);
router.route("/:project_id").get(taskController.getTask);
router.route("/update/:id").patch(taskController.updateStatus);
export default router;
