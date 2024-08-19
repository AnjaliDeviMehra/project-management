import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";
import "./Signup.scss";

export const Signup = ({ base_url, setShowLogIn }) => {
  const navigate = useNavigate();

  useEffect(() => {
    setShowLogIn(true);
  });
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
    <>
      <Navigation />
      <div className="signup">
        <form onSubmit={handleSubmit} className="signup__form">
          <label htmlFor="first_name" className="signup__label">
            First Name
          </label>
          <input
            type="text"
            placeholder="First Name"
            id="first_name"
            name="first_name"
            className="signup__input"
          />
          <label htmlFor="last_name" className="signup__label">
            Last Name
          </label>
          <input
            type="text"
            placeholder="Last Name"
            id="last_name"
            name="last_name"
            className="signup__input"
          />

          <label htmlFor="email" className="signup__label">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email address"
            id="email"
            name="email"
            className="signup__input"
          />
          <label htmlFor="paddword" className="signup__label">
            Password
          </label>
          <input
            type="passowrd"
            id="password"
            name="password"
            className="signup__input"
          />
          <button className="signup__button">Sign up</button>
        </form>
      </div>
    </>
  );
};
