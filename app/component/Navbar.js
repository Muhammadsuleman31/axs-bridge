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
    <>
    <div className={styles.navparent}>
    <nav className={styles.navbar}>
      <div className={styles.navbarLeft}>
        <img src="AXS-LOGO.svg" alt="PKF Logo" />
      </div>

      {/* Desktop links */}
      <div className={styles.navbarLinks}>
        <a href="/">Home</a>

        <div
          className={styles.dropdown}
          onMouseEnter={() => setServicesHover(true)}
          onMouseLeave={() => setServicesHover(false)}
        >
          <a href="/services" className={styles.servicesLink}>
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
              <a href="/services/assurance">Assurance</a>
              <a href="/services/tax">Tax</a>
              <a href="/services/advisory">Advisory</a>
              <a href="/services/business-solutions">Business Solutions</a>
              <a href="/services/corporate-finance">Corporate Finance</a>
              <a href="/services/private-capital">Private Capital Solutions</a>
              <a href="/services/sustainability-esg">Sustainability & ESG</a>
              <a href="/services/hospitality-consulting">Specialist Hospitality Consulting</a>
            </div>
          )}
        </div>

        <a href="/about">About Us</a>
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
        <div className={styles.navbarLeft}>
        <img src="logo.png" alt="PKF Logo" />
      </div>
        </div>

        <div className={styles.slideMenuContent}>
          <a href="/">Home<FaChevronRight /></a>
          <a onClick={() => setSubMenuOpen(true)}>Services <FaChevronRight /></a>
          <a href="/about">About Us<FaChevronRight /></a>
        </div>

        {/* Submenu */}
        <div className={`${styles.subMenu} ${subMenuOpen ? styles.open : ""}`}>
          <div className={styles.subMenuHeader} onClick={() => setSubMenuOpen(false)}>
            <FaChevronLeft  />
            <span>Services</span>
          </div>
          <div className={styles.subMenuContent}>
            <div><a href="/services/assurance">Assurance</a></div>
            <div><a href="/services/tax">Tax</a></div>
            <div><a href="/services/advisory">Advisory</a></div>
            <div><a href="/services/business-solutions">Business Solutions</a></div>
            <div><a href="/services/corporate-finance">Corporate Finance</a></div>
            <div><a href="/services/private-capital">Private Capital Solutions</a></div>
            <div><a href="/services/sustainability-esg">Sustainability & ESG</a></div>
            <div><a href="/services/hospitality-consulting">Specialist Hospitality Consulting</a></div>
          </div>
        </div>
        
      </div>
    </nav>
    </div>
 </>
  );

}

export default Navbar;
