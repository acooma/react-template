import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = props => {
  if (props.userInfo.user) {
    return (
      <div className="my-nav">
        <div className="links">
          {console.log(props)}
          <Link to="/">home</Link>
          <Link to="/new-suggestion">make a suggestion</Link>
          <Link to="/admin">{props.userInfo.user}</Link>
        </div>
      </div>
    )
  } else
    return (
      <div className="my-nav">
        <div className="links">
          {console.log(props)}
          <Link to="/">home</Link>
          <Link to="/new-suggestion">make a suggestion</Link>
        </div>
      </div>
    )
};

export default NavBar;
