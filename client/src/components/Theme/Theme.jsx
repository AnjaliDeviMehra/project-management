import React from "react";
import "./Theme.scss";
import bg1 from "../../../public/bg1.jpg";
import bg2 from "../../../public/bg2.jpeg";
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
          <img src={bg1} alt="Option 1" className="theme-buttons__image" />
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
          <img src={bg2} alt="Option 2" className="theme-buttons__image" />
        </label>
        {/* <label
          className={`image-option ${selectedValue === "3" ? "selected" : ""}`}
        >
          <input
            type="radio"
            name="option"
            value="3"
            checked={selectedValue === "3"}
            onChange={handleChange}
          /> */}
        {/* <img src="image3.jpg" alt="Option 3" />
        </label> */}
      </div>
    </div>
  );
};
