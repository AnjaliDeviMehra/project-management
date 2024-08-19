import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import { Navigation } from "../Navigation/Navigation";

export const Login = ({ base_url, setShowLogIn }) => {
  const navigate = useNavigate();

  useEffect(() => {
    setShowLogIn(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    console.log(user);
    try {
      const response = await axios.post(`${base_url}/login`, user);
      sessionStorage.setItem("token", response.data.token);
      console.log(response);
      navigate("/dashboard");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Navigation />
      <div className="login">
        <form onSubmit={handleSubmit} className="login__form">
          <label htmlFor="email" className="login__label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            className="login__input"
          />
          <label htmlFor="password" className="login__label">
            Password
          </label>
          <input
            type="passowrd"
            id="password"
            name="password"
            className="login__input"
          />
          <button className="login__button">Log In</button>
        </form>
      </div>
    </>
  );
};
