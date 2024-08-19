import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";

export const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink to="" className="navigation__link">
        Home
      </NavLink>
      <NavLink to="" className="navigation__link">
        About
      </NavLink>
      <NavLink to="" className="navigation__link">
        Contact Us
      </NavLink>
      <NavLink to="/" className="navigation__link">
        Sign Up
      </NavLink>
      <NavLink to="/Login" className="navigation__link">
        Log In
      </NavLink>
    </div>
  );
};
