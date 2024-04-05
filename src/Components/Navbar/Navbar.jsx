import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);
  const handleLoginButtonClick = () => {
    window.location.href = "/register";
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img alt="" className="logo" />
      <ul>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            <strong>Home</strong>
          </Link>
        </li>
        <li>
          <Link to="abouts" smooth={true} offset={0} duration={500}>
            <strong>About</strong>
          </Link>
        </li>
        <li>
          <Link to="footer" smooth={true} offset={0} duration={500}>
            <strong>Contact Us</strong>
          </Link>
        </li>
        <li>
          <button className="btn" onClick={handleLoginButtonClick}>
            <strong>Login</strong>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
