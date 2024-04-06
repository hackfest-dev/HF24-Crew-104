import React, { useState } from "react";
import "./NavbarCustomer.css";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const NavbarCustomer = ({ setSearchQuery }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchInput(query);
    setSearchQuery(query);
  };

  const location = useLocation();

  return (
    <div>
      <nav className="customer-navbar">
        <div className="navbar-left">
          <button className="icons-menu" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        {(location.pathname === "/customer-home" ||
          location.pathname === "/customer-orders") && (
          <div className="navbar-center">
            <input
              type="text"
              placeholder="Search..."
              className="search-bar"
              value={searchInput}
              onChange={handleSearch}
            />
          </div>
        )}
        <div className="navbar-right">
          <Link to="/cart">
            <button className="icons-menu">
              <FontAwesomeIcon icon={faShoppingCart} />
            </button>
          </Link>
        </div>
      </nav>

      <div
        className={`user-menu ${isMenuOpen ? "open" : ""}`}
        style={{ zIndex: 10 }}
      >
        <ul>
          <li>
            <Link to="/customer-home">Home</Link>
          </li>
          <li>
            <Link to="/customer-profile">Profile</Link>
          </li>
          <li>
            <Link to="/customer-orders">My Orders</Link>
          </li>
          <li>
            <Link to="/login">Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarCustomer;
