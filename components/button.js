// ReusableButton.js
import React from "react";

const Button = ({ text, link }) => {
  return (
    <a href={link} rel="noopener noreferrer">
      <button className="main-button">{text}</button>
    </a>
  );
};

export default Button;
