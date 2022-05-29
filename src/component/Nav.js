import React from "react";
import logo from "../assets/images/Logo10.png";
import classes from "../styles/nav.module.css";
import Account from "./Account";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="index.html" className={classes.brand}>
            <img src={logo} alt="Mithun banerjee Logo" />
            <h3>Mithun Banerjee</h3>
          </a>
        </li>
      </ul>
      <Account />
    </nav>
  );
};

export default Nav;
