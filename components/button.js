// ReusableButton.js
import React from "react";

const Button = ({ target, text, link }) => {
  return (
    <a target={target} href={link} rel="noopener noreferrer">
      <button className="main-button">{text}</button>
    </a>
  );
};

export default Button;
