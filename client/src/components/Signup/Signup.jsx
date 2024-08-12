import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signup = ({ base_url }) => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    console.log(newUser);
    try {
      const response = await axios.post(`${base_url}/register`, newUser);
      console.log(response);
    } catch (e) {
      console.log(e);
    }

    navigate("/login");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="first_name">First Name</label>
        <input
          type="text"
          placeholder="First Name"
          id="first_name"
          name="first_name"
        />
        <label htmlFor="last_name">Last Name</label>
        <input
          type="text"
          placeholder="Last Name"
          id="last_name"
          name="last_name"
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Enter your email address"
          id="email"
          name="email"
        />
        <label htmlFor="paddword">Password</label>
        <input type="passowrd" id="password" name="password" />
        <button>Submit</button>
      </form>
    </div>
  );
};
