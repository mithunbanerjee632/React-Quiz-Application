import React from "react";
import { Link } from "react-router-dom";
import classes from "../styles/video.module.css";

const Video = ({ title, id, noq }) => {
  return (
    <Link to={`/quiz/${id}`}>
      <div className={classes.video}>
        <img
          src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`}
          alt={title}
        />
        <p>{title}</p>
        <div className={classes.qmeta}>
          <p>{noq} Questions</p>
          <p>Total Points : {noq * 5}</p>
        </div>
      </div>
    </Link>
  );
};

export default Video;
