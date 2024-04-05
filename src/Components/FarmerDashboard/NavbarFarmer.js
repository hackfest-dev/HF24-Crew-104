import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavbarFarmer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const NavbarFarmer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar saira-extra-condensed-regular">
      <div className="navbar-toggle" onClick={toggleNavbar}>
        <i className="fa-solid fa-bars"></i>
      </div>
      <ul className={`navbar-menu ${isOpen ? "active" : ""}`}>
        <li>
          <Link to="/farmer-profile" onClick={toggleNavbar}>
            MY PROFILE
          </Link>
        </li>
        <li>
          <Link to="/myproducts" onClick={toggleNavbar}>
            MY PRODUCTS
          </Link>
        </li>
        <li>
          <Link to="/orders-received" onClick={toggleNavbar}>
            ORDER RECEIVED
          </Link>
        </li>
        <li>
          <Link to="/schemes" onClick={toggleNavbar}>
            SCHEMES & DETAILS
          </Link>
        </li>
        <li>
          <Link to="/login" onClick={toggleNavbar}>
            LOGOUT
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarFarmer;
