import express from "express";
const router = express.Router();
import * as userController from "../controllers/Usercontrollers.js";

router.route("/register").post(userController.registerUser);

export default router;
