import React from "react";
import classes from "../styles/question.module.css";
import Answer from "./Answer";

const Question = () => {
  return (
    <div className={classes.question}>
      <div className={classes.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        Here goes the question from Learn with Mithun?
      </div>
      <Answer />
    </div>
  );
};

export default Question;