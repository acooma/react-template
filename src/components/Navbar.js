import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => (
  <div className="my-nav">
    <div className="links">
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
      <Link to="/contact">contact</Link>
    </div>
  </div>
);

export default NavBar;
