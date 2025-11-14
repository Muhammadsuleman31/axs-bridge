"use client";
import React, { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import { FaBars, FaTimes, FaChevronRight, FaChevronLeft, FaChevronDown } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [servicesHover, setServicesHover] = useState(false);

  const toggleMenu = () => {
    if (menuOpen) {
      setMenuOpen(false);
      setSubMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) document.body.classList.add("menu-open");
    else document.body.classList.remove("menu-open");
  }, [menuOpen]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <img src="logo.png" alt="PKF Logo" />
      </div>

      {/* Desktop links */}
      <div className={styles.navbarLinks}>
        <a href="#">Home</a>

        <div
          className={styles.dropdown}
          onMouseEnter={() => setServicesHover(true)}
          onMouseLeave={() => setServicesHover(false)}
        >
          <a href="#" className={styles.servicesLink}>
            Services
            <FaChevronDown
              className={`${styles.chevron} ${
                servicesHover ? styles.rotate : ""
              }`}
            />
          </a>

          {/* Dropdown menu */}
          {servicesHover && (
            <div className={styles.dropdownMenu}>
              <a href="#">Assurance</a>
              <a href="#">Tax</a>
              <a href="#">Advisory</a>
              <a href="#">Business Solutions</a>
              <a href="#">Corporate Finance</a>
              <a href="#">Private Capital Solutions</a>
              <a href="#">Sustainability & ESG</a>
            </div>
          )}
        </div>

        <a href="#">About Us</a>
      </div>

      {/* Hamburger / Cross toggle */}
      <div
        className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
        onClick={toggleMenu}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile slide menu */}
      <div className={`${styles.slideMenu} ${menuOpen ? styles.open : ""}`}>
        <div className={styles.panelHeader}>
          <img src="inverted.png" alt="PKF Logo" />
        </div>

        <div className={styles.slideMenuContent}>
          <a href="#">Home<FaChevronRight /></a>
          <a onClick={() => setSubMenuOpen(true)}>Services <FaChevronRight /></a>
          <a href="#">About Us<FaChevronRight /></a>
        </div>

        {/* Submenu */}
        <div className={`${styles.subMenu} ${subMenuOpen ? styles.open : ""}`}>
          <div className={styles.subMenuHeader} onClick={() => setSubMenuOpen(false)}>
            <FaChevronLeft  />
            <span>Services</span>
          </div>
          <div className={styles.subMenuContent}>
            <div><a>Assurance</a></div>
            <div><a>Tax</a></div>
            <div><a>Advisory</a></div>
            <div><a>Business Solutions</a></div>
            <div><a>Corporate Finance</a></div>
            <div><a>Private Capital Solutions</a></div>
            <div><a>Sustainability & ESG</a></div>
          </div>
        </div>
        
      </div>
    </nav>
  );
}

export default Navbar;
