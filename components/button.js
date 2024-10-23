"use client";
import { useState } from "react";

const Button = ({ target, text, link, disabled }) => {
  const [isDisabled, setIsDisabled] = useState(disabled);
  return (
    <a target={target} href={link} rel="noopener noreferrer">
      <button className="main-button">{text}</button>
    </a>
  );
};

export default Button;
