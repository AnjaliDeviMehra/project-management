import initknex from "knex";
import configuration from "./knexfile.js";
import express from "express";
import "dotenv/config";
import userRouter from "./src/routes/users.js";
import projectRouter from "./src/routes/projects.js";
import taskRouter from "./src/routes/tasks.js";
import cors from "cors";

const knex = initknex(configuration);
const app = express();
const PORT = process.env.PORT || 5050|| 5237;
app.use(express.json());
app.use(cors());

app.use("/", userRouter);
app.use("/projects", projectRouter);
app.use("/tasks", taskRouter);
app.listen(PORT, () => {
  console.log("Server is running on", PORT);
});
