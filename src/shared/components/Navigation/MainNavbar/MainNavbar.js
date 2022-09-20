import React from "react";

import './MainNavbar.css'

const MainNavbar = (props) => {
  return <header className="main-navbar">{props.children}</header>;
};

export default MainNavbar;
