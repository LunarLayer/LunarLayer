import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <nav className="nav-links">
      <NavLink className="navlink" to="/">Hub</NavLink>
      <NavLink className="navlink" to="/sandbox">Sandbox</NavLink>
      <NavLink className="navlink" to="/resume">Resume</NavLink>
    </nav>
  );
};

export default NavLinks;
