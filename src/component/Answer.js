import React from "react";
import classes from "../styles/answers.module.css";
import Checkbox from "./Checkbox";

const Answer = () => {
  return (
    <div className={classes.answers}>
      <Checkbox className={classes.answer} text="Test answer" />
    </div>
  );
};

export default Answer;
