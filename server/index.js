import initknex from "knex";
import configuration from "./knexfile.js";
import express from "express";
import "dotenv/config";
import userRouter from "./routes/users.js";
import cors from "cors";

const knex = initknex(configuration);
const app = express();
const PORT = process.env.PORT || 5050;
app.use(express.json());
app.use(cors());

app.use("/", userRouter);
app.listen(PORT, () => {
  console.log("Server is running on", PORT);
});
