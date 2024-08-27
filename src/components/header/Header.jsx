import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <div>
      <div className="header">
        <div>
          <h4>Exclusive</h4>
        </div>
        <ul className="header-ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div>
          <input type="text" />
        </div>
        <div className="header-i">
          <i className="bi bi-heart"></i>
          <i className="bi bi-archive"></i>
          <i className="bi bi-person"></i>
        </div>
      </div>
      <div className="header-ol"></div>
    </div>
  );
}

export default Header;
