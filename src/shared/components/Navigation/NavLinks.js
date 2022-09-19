import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <div className="nav-links">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/sandbox">Sandbox</NavLink>
      <NavLink to="/resume">Resume</NavLink>
    </div>
  );
};

export default NavLinks;
