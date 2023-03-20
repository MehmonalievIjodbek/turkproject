import React from "react";
import { Link } from "react-router-dom";
import OpenModal from "../Component/OpenModal";

const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="header-navbar">
          <div className="header-img">
            <img src="/img/logo.png" alt="" />
          </div>
        </div>
        <div className="header-nav">
          <Link to="/">
            <span>Home</span>
          </Link>
          <Link to="/about">
            <span> About</span>
          </Link>
          <Link to="/products">
            <span> Products</span>
          </Link>
        </div>
        <div className="header-contact">
          <Link to="/contact">
            <span>Contact</span>
          </Link>
        </div>
        <OpenModal />
      </div>
    </div>
  );
};

export default Header;
