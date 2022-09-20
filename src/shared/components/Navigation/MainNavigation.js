import React from "react";

import MainNavbar from "./MainNavbar/MainNavbar";
import NavLinks from "./MainNavbar/NavLinks";

import "./MainNavigation.css";

const MainNavigation = (props) => {
  return (
    <MainNavbar>
      <NavLinks />
    </MainNavbar>
  );
};

export default MainNavigation;
