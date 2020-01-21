import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = props => {
  if (props.userName) {
    return (
      <div className="my-nav">
        <div className="links">
          {console.log(props)}
          <Link to="/">home</Link>
          <Link to="/newSuggestion">make a suggestion</Link>
          <Link to="/admin">{props.userName}</Link>
        </div>
      </div>
    )
  } else
    return (
      <div className="my-nav">
        <div className="links">
          {console.log(props)}
          <Link to="/">home</Link>
          <Link to="/admin">analysis</Link>
          <Link to="/login">{props.userName}</Link>
        </div>
      </div>
    )
};

export default NavBar;
