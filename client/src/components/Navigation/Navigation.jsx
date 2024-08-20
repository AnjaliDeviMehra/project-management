import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";
import { Link } from "react-router-dom";

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
      <Link to="/login" className="navigation__link">
        Log In
      </Link>
    </div>
  );
};
