import initknex from "knex";
import configuration from "../knexfile.js";
import crypto from "crypto";
import bcrypt from "bcryptjs";

const knex = initknex(configuration);

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

    res.status(201).json({ message: "successfull" });
  } catch (e) {
    res.status(500).json({ message: "Unable to register user" });
  }
};

export { registerUser };
