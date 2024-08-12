import express from "express";
const router = express.Router();
import * as userController from "../controllers/userController.js";

router.route("/register").post(userController.registerUser);
router.route("/login").post(userController.logUser);
router.route("/dashboard").get(userController.dashboard);

export default router;
