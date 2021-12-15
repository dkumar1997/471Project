import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import logo from "../images/canada.png";
function NavBar() {
  return (
    <div className="topnav" id="myTopnav">
      <div>
        <Link to="/profile">
          <div>Profile</div>
        </Link>
        <Link to="/stats">
          <div>Stats</div>
        </Link>
        <Link to="/vote">
          <div>Vote</div>
        </Link>
        <Link to="/platform">
          <div>Platforms</div>
        </Link>
      </div>
      <div>
        <img src={logo} style={{ height: "40px", marginTop: "5px" }} />
      </div>
    </div>
  );
}
export default NavBar;
