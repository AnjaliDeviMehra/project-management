import express from "express";
import * as taskController from "../controllers/taskController.js";

const router = express.Router();
router.route("/addnew").post(taskController.createTask);
router
  .route("/:id")
  .get(taskController.getSingleTask)
  .put(taskController.updateTask)
  .delete(taskController.deletetask);
router.route("/project/:project_id").get(taskController.getTaskList);
router
  .route("/tasks/:id")
  .patch(taskController.updateStatus)
  .get(taskController.getTaskData);

export default router;
