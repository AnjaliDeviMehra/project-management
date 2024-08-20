import express from "express";
import * as taskController from "../controllers/taskController.js";

const router = express.Router();
router.route("/addnew").post(taskController.createTask);
router
  .route("/:id")
  .put(taskController.updateTask)
  .delete(taskController.deletetask);
router.route("/:project_id").get(taskController.getTask);
router.route("/update/:id").patch(taskController.updateStatus);
router.route("/").get(taskController.getTaskData);

export default router;
