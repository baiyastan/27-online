import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import like from "../../assets/svg/wishlist.svg";
import cart from "../../assets/svg/cart.svg";

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
          <li>
            <Link to="/register">Sign Up</Link>
          </li>
        </ul>
        <div>
          <input type="text" />
        </div>
        <div className="header-i">
          <Link to="/wishlist">
            <img src={like} alt="" />
          </Link>
          <Link to="/cart">
            <img src={cart} alt="" />
          </Link>
          <i className="bi bi-person"></i>
        </div>
      </div>
      <div className="header-ol"></div>
    </div>
  );
}

export default Header;
