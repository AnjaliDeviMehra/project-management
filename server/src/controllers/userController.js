import initknex from "knex";
import configuration from "../../knexfile.js";
import crypto from "crypto";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../utils/secret_key.js";

const knex = initknex(configuration);

const userList = async () => {
  const list = await knex.select("*").from("users");
  return list;
};

const registerUser = async (req, res) => {
  const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  if (
    !req.body.first_name ||
    !req.body.last_name ||
    !req.body.email ||
    !req.body.password
  ) {
    return res
      .status(400)
      .json({ message: "Please make sure to provide all the required fields" });
  }

  const userid = crypto.randomBytes(3).toString("hex");
  const { first_name, last_name, email, password } = req.body;
  const hashedpassword = bcrypt.hashSync(password);
  // const emails = await knex.select("email").from("users");
  // console.log(emails);
  // res.json(emails);

  try {
    const result = await knex("users").insert({
      id: userid,
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: hashedpassword,
    });
    console.log("success");
    res.status(201).json({ message: "successfull" });
  } catch (e) {
    res.status(500).json({ message: "Unable to register user" });
  }
};

const logUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(404).send("Please enter all the required fields");
  }
  const user = await knex("users").where({ email: email }).first();
  if (!user) {
    return res.status(400).send("Invalid email");
  }
  console.log(user);
  const isPasswordCorrect = bcrypt.compareSync(password, user.password);

  console.log(isPasswordCorrect);
  console.log(user.password);

  if (!isPasswordCorrect) {
    return res.status(400).send("Invalid Password");
  }
  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    SECRET_KEY,
    {
      expiresIn: "24hr",
    }
  );
  res.send({ token });
};

const dashboard = async (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send("Please login");
  }
  const authHeader = req.headers.authorization;
  const authToken = authHeader.split(" ")[1];
  console.log(authToken);

  try {
    const decoded = jwt.verify(authToken, SECRET_KEY);
    console.log(decoded);
    console.log(decoded.email);

    const decodedEmail = decoded.email;
    const user = await knex
      .select("*")
      .from("users")
      .where({ email: decodedEmail })
      .first();
    console.log(user);
    const sanitized_user = {
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
    };
    res.send(sanitized_user);
  } catch (error) {
    console.log(error);
    res.status(401).send("Invalid auth token");
  }
};

const userData = async (req, res) => {
  // const { id } = req.params;
  // console.log(id);
  // try {
  //   console.log("trying");
  //   const firstResult = await knex("tasks").where({ assigned_to: id }).count();
  //   // const secondResult = await knex("users_projects")
  //   //   .where({ user_id: id })
  //   //   .count();
  //   // const thirdResult = await knex("tasks").select("*").where({ user_id: id });
  //   console.log(firstResult, secondResult, thirdResult);
  //   // if (firstResult.length == 0) {
  //   //   firstResult = [];
  //   // }
  //   // if (!secondResult) {
  //   //   res.send("SecondData");
  //   // }
  //   // if (!thirdResult) {
  //   //   res.send("thirdData");
  //   // }
  //   res.status(200).json({
  //     firstResult: firstResult,
  //     // secondResult: secondResult,
  //     // thirdResult: thirdResult,
  //   });
  // } catch (e) {
  //   res.status(500).send("unable to retrieve data");
  // }
};
export { registerUser, logUser, dashboard, userData };
