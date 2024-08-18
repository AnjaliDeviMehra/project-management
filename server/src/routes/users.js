import express from "express";
const router = express.Router();
import * as userController from "../controllers/userController.js";

router.route("/register").post(userController.registerUser);
router.route("/login").post(userController.logUser);
router.route("/dashboard").get(userController.dashboard);
router.route("/users/:id").get(userController.userData);

export default router;
