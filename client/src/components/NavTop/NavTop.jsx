import React, { useEffect } from "react";
import "./NavTop.scss";
import "../../styles/global.scss";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import search from "../../assets/search.svg";
import avatar from "../../assets/avatar.png";
import dropdown from "../../assets/dropdown.png";

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
  const displayOptions = () => {
    setOptions(!options);
  };
  return (
    <>
      <div className={!show ? "nav--hide" : "navtop"}>
        <h1 className="navtop__heading">{heading}</h1>
        <section className="navtop__right">
          {/* <form className="navtop__form">
            <input
              type="search"
              placeholder="Search...."
              className="navtop__search"
            />
            <img
              src={search}
              alt="search icon"
              className="navtop__search-icon"
            />
          </form> */}
          <section className="user">
            <img src={avatar} alt="user avatar" className="user__avatar" />
            <p className="user__name">{first_name + " " + last_name}</p>
            <div className="user__dropdown">
              <button
                onClick={displayOptions}
                className="user__display-options"
              >
                <img
                  src={dropdown}
                  alt="drop down arrow"
                  className="user__arrow"
                />
              </button>
            </div>
          </section>
        </section>
      </div>
      <div className={options ? "user__options" : "user__options--notvissible"}>
        <Link to="/logout" className="user__option">
          Log Out
        </Link>
        <br />
        <Link to="/logout" className="user__option">
          Settings
        </Link>
      </div>
    </>
  );
};
