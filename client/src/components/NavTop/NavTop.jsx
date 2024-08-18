import React, { useEffect } from "react";
import "./NavTop.scss";
import "../../styles/global.scss";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

import avatar from "../../assets/icons/avatar.png";
import dropdown from "../../assets/icons/dropdown.png";

export const NavTop = ({ first_name, last_name }) => {
  const [options, setOptions] = useState(false);
  const [heading, setHeading] = useState("Dashboard");
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

    if (pathname == "/dashboard") {
      setHeading("Dashboard");
    } else if (pathname == "/projects") {
      setHeading("Projects");
    } else if (pathname == "/taskboard") {
      setHeading("Task Board");
    }
  }, [pathname]);

  return (
    <>
      <div className={!show ? "nav--hide" : "navtop"}>
        <h1 className="navtop__heading">{heading}</h1>
        <section className="navtop__right">
          <section className="user">
            <img src={avatar} alt="user avatar" className="user__avatar" />
            <p className="user__name">{first_name + " " + last_name}</p>
          </section>
        </section>
      </div>
    </>
  );
};
