import express from "express";
import * as projectControllers from "../controllers/projectController.js";

const router = express.Router();
router.route("/:id").get(projectControllers.getProjects);
router.route("/addnew").post(projectControllers.createProject);

export default router;
