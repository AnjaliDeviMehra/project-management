import React from "react";
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo/logo2.jpg";
import projects from "../../assets/images/projects.png";
import dashboard from "../../assets/images/dashboard.png";
import logout from "../../assets/images/logout.png";
import reports from "../../assets/images/reports.png";
import taskboard from "../../assets/images/taskboard.png";
import settings from "../../assets/images/settings.png";
import "./SideNav.scss";

export const SideNav = ({ currentUser }) => {
  const [show, setshow] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;
  const [user, setUser] = useState({});

  useEffect(() => {
    if (currentUser == undefined) {
      const data = localStorage.getItem("user");
      setUser(JSON.parse(data));
    }
    if (
      pathname == "/dashboard" ||
      pathname.startsWith("/projects/") ||
      pathname.endsWith("/tasks")
    ) {
      setshow(true);
    }
  }, [pathname]);

  return (
    <>
      {show && (
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
                <img
                  src={dashboard}
                  alt="dashboard logo"
                  className="sidenav__icon"
                />
                <p className="sidenav__option"> Dashboard</p>
              </NavLink>
            </li>

            <li className="sidenav__item">
              <NavLink
                to={`/projects/${currentUser?.id || user.id}`}
                className={({ isActive }) =>
                  isActive ? "sidenav__link--active" : "sidenav__link"
                }
              >
                <img
                  src={projects}
                  alt="project logo"
                  className="sidenav__icon"
                />
                <p className="sidenav__option"> Projects</p>
              </NavLink>
            </li>
            <li className="sidenav__item">
              <NavLink
                to={`/${currentUser?.id || user.id}/2/tasks`}
                className={({ isActive }) =>
                  isActive ? "sidenav__link--active" : "sidenav__link"
                }
              >
                <img
                  src={taskboard}
                  alt="taskboard logo"
                  className="sidenav__icon"
                />
                <p className="sidenav__option"> Task Board</p>
              </NavLink>
            </li>
            <li className="sidenav__item">
              <NavLink
                to=""
                className={({ isActive }) =>
                  isActive ? "sidenav__link--active" : "sidenav__link"
                }
              >
                <img
                  src={reports}
                  alt="report logo"
                  className="sidenav__icon"
                />
                <p className="sidenav__option"> Report</p>
              </NavLink>
            </li>
            <li className="sidenav__item">
              <NavLink
                to=""
                className={({ isActive }) =>
                  isActive ? "sidenav__link--active" : "sidenav__link"
                }
              >
                <img
                  src={settings}
                  alt="settings logo"
                  className="sidenav__icon"
                />
                <p className="sidenav__option">Settings</p>
              </NavLink>
            </li>
            <li className="sidenav__item">
              <NavLink
                to="/logout"
                className={({ isActive }) =>
                  isActive ? "sidenav__link--active" : "sidenav__link"
                }
              >
                <img src={logout} alt="logout logo" className="sidenav__icon" />
                <p className="sidenav__option">Log Out</p>
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
