import React from "react";
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo2.jpg";
import "./SideNav.scss";

export const SideNav = ({ currentUser }) => {
  const [show, setshow] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (
      pathname == "/dashboard" ||
      pathname == "/projects" ||
      pathname == "/taskboard"
    ) {
      setshow(true);
    }
  }, [pathname]);
  return (
    <div className={!show ? "nav--hide" : "sidenav"}>
      <img src={logo} alt="logo" className="sidenav__logo" />
      <ul className="sidenav__list">
        <li className="sidenav__item">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "sidenav__link--active" : "sidenav__link"
            }
          >
            Dashboard
          </NavLink>
        </li>

        <li className="sidenav__item">
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "sidenav__link--active" : "sidenav__link"
            }
          >
            Projects
          </NavLink>
        </li>
        <li className="sidenav__item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "sidenav__link--active" : "sidenav__link"
            }
          >
            Task Board
          </NavLink>
        </li>
        <li className="sidenav__item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "sidenav__link--active" : "sidenav__link"
            }
          >
            Report
          </NavLink>
        </li>
        <li className="sidenav__item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "sidenav__link--active" : "sidenav__link"
            }
          >
            Profile Settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
