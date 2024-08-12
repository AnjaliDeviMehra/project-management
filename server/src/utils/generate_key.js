import { randomBytes } from "crypto";

const generate_key = () => {
  console.log(randomBytes(128).toString("hex"));
};

generate_key();
