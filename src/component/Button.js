import React from "react";
import classes from "../styles/button.module.css";

const Button = ({ className, children }) => {
  return (
    <button className={`${classes.button} ${className}`}>{children}</button>
  );
};

export default Button;
