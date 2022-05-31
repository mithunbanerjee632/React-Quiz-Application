import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Logo10.png";
import classes from "../styles/nav.module.css";
import Account from "./Account";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/" className={classes.brand}>
            <img src={logo} alt="Mithun banerjee Logo" />
            <h3>Mithun Banerjee</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
};

export default Nav;
