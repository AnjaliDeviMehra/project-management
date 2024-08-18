import React from "react";
import "./Theme.scss";
import { useState } from "react";

export const Theme = ({ setTheme, theme }) => {
  const handleChange = (event) => {
    setTheme(event.target.value);
  };
  return (
    <div>
      <div className="theme-buttons">
        <label
          className={`theme-buttons__option ${
            theme === "1" ? "theme-buttons__option--selected" : ""
          }`}
        >
          <input
            type="radio"
            name="option"
            value="1"
            checked={theme === "1"}
            onChange={handleChange}
          />
          <img
            src="../../public/bg1.jpg"
            alt="Option 1"
            className="theme-buttons__image"
          />
        </label>
        <label
          className={`theme-buttons__option ${
            theme === "2" ? "theme-buttons__option--selected" : ""
          }`}
        >
          <input
            type="radio"
            name="option"
            value="2"
            checked={theme === "2"}
            onChange={handleChange}
          />
          <img
            src="../../public/bg2.jpg"
            alt="Option 2"
            className="theme-buttons__image"
          />
        </label>
        <label
          className={`theme-buttons__option ${
            theme === "3" ? "theme-buttons__option--selected" : ""
          }`}
        >
          <input
            type="radio"
            name="option"
            value="3"
            checked={theme === "3"}
            onChange={handleChange}
          />
          <img
            src="../../public/bg3.jpg"
            alt="Option 3"
            className="theme-buttons__image"
          />
        </label>
        <label
          className={`theme-buttons__option ${
            theme === "4" ? "theme-buttons__option--selected" : ""
          }`}
        >
          <input
            type="radio"
            name="option"
            value="4"
            checked={theme === "4"}
            onChange={handleChange}
          />
          <img
            src="../../public/bg4.jpg"
            alt="Option 4"
            className="theme-buttons__image"
          />
        </label>
        <label
          className={`theme-buttons__option ${
            theme === "5" ? "theme-buttons__option--selected" : ""
          }`}
        >
          <input
            type="radio"
            name="option"
            value="5"
            checked={theme === "2"}
            onChange={handleChange}
          />
          <img
            src="../../public/bg5.jpg"
            alt="Option 5"
            className="theme-buttons__image"
          />
        </label>
      </div>
    </div>
  );
};
