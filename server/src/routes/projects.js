import express from "express";
import * as projectControllers from "../controllers/projectController.js";

const router = express.Router();
router.route("/:user_id").get(projectControllers.getProjects);

router
  .route("/project/:project_id")
  .get(projectControllers.getSingleProject)
  .put(projectControllers.updateProject)
  .delete(projectControllers.deleteProject);
router.route("/addnew").post(projectControllers.createProject);

export default router;
