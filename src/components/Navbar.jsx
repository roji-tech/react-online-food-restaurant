import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// HOOKS
import useClickOutside from "../Hooks/useClickOutside";

// CSS
import "../css/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [stickyNavbar, setStickyNavbar] = useState("static");
  const navBarRef = useRef();

  const openCloseNav = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setStickyNavbar("fixed");
      } else {
        setStickyNavbar("static");
      }
    });
  }, []);

  useClickOutside(navBarRef, openCloseNav, isOpen);

  return (
    <div className="Navbar" style={{ position: stickyNavbar }}>
      <Link to={"/"}>
        <span className="nav-logo  custom-3D-title">Tasty</span>
      </Link>
      <div className={`nav-items ${isOpen && "open"}`} ref={navBarRef}>
        <Link to="/" className="link" onClick={openCloseNav}>
          HOME
        </Link>
        <Link to="/about" className="link" onClick={openCloseNav}>
          ABOUT
        </Link>
        <Link to="/products" className="link" onClick={openCloseNav}>
          PRODUCTS
        </Link>
        <Link to="/contact" className="link" onClick={openCloseNav}>
          CONTACT
        </Link>
      </div>
      <div className={`nav-toggle ${isOpen && "open"}`} onClick={openCloseNav}>
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
