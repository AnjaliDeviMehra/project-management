import React from "react";
import "./NavTop.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import search from "../../assets/search.svg";
import avatar from "../../assets/avatar.png";
import dropdown from "../../assets/dropdown.png";

export const NavTop = () => {
  const [options, setOptions] = useState(false);
  const displayOptions = () => {
    setOptions(!options);
  };
  return (
    <>
      <div className="navtop">
        <h1 className="navtop__heading">Task Board</h1>
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
            <p className="user__name">Anjali Mehra</p>
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
