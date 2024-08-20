import React, { useEffect } from "react";
import "./NavTop.scss";
import "../../styles/global.scss";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import avatar from "../../assets/icons/avatar.png";
import dropdown from "../../assets/icons/dropdown.png";

export const NavTop = ({ first_name, last_name }) => {
  const [options, setOptions] = useState(false);
  const [heading, setHeading] = useState("Dashboard");
  const [show, setshow] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (
      pathname == "/dashboard" ||
      pathname.startsWith("/projects/") ||
      pathname.endsWith("/tasks")
    ) {
      setshow(true);
    }

    const storage = localStorage.getItem("user");

    setUser(storage ? JSON.parse(storage) : null);
    console.log(user);

    if (!storage) {
      return navigate("/");
    }
    if (pathname == "/dashboard") {
      setHeading("Dashboard");
    } else if (pathname.startsWith("/projects/")) {
      setHeading("Projects");
    } else if (pathname.endsWith("/tasks")) {
      setHeading("Task Board");
    }
  }, [pathname]);

  return (
    <>
      {
        <div className={!show ? "nav--hide" : "navtop"}>
          <h1 className="navtop__heading">{heading}</h1>
          <section className="navtop__right">
            <section className="user">
              <img src={avatar} alt="user avatar" className="user__avatar" />
              <p className="user__name">
                {(user && user.first_name + " " + user.last_name) ||
                  (first_name && first_name + " " + last_name)}
              </p>
            </section>
          </section>
        </div>
      }
    </>
  );
};
