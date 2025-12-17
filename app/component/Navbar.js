"use client";
import React, { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import { FaBars, FaTimes, FaChevronRight, FaChevronLeft, FaChevronDown } from "react-icons/fa";
import Image from 'next/image';
import logofull from '../../public/logofull.svg'
import invertedaxs from '../../public/invertedaxs.svg'
import logocross from '../../public/logocross.svg'


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [servicesHover, setServicesHover] = useState(false);

  // NOTE: Removed 'let Mobilelogo = styles.logologo;'
  // We will now compute the class name directly within the return function.

  const toggleMenu = () => {
    // When menuOpen is TRUE (meaning the menu is currently OPEN):
    if (menuOpen) {
      setMenuOpen(false); // Close the main menu
      setSubMenuOpen(false); // Close any open sub-menu
      
      // The 'logotoright' class will automatically be applied 
      // in the JSX on the next render since menuOpen will be false.

    } else {
      // When menuOpen is FALSE (meaning the menu is currently CLOSED):
      setMenuOpen(true); // Open the main menu
      
      // The 'logotoright' class will automatically be removed 
      // in the JSX on the next render since menuOpen will be true.
    }
  };

  // --- Dynamic Class Calculation ---
  // This calculates the correct class name for the mobile logo container on every render.
  // When menuOpen is true (menu is visible), we want the base class only.
  // When menuOpen is false (menu is hidden/closing), we want the base class PLUS logotoright.
 // Correct Logic: 'logotoright' is added when menuOpen is TRUE (open)
const mobileLogoClasses = `${styles.logologo} ${menuOpen ? styles.logotoright : ''}`;
const mobileTextClasses = `${styles.logotext} ${menuOpen ? styles.texttoleft : ''}`;

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) document.body.classList.add("menu-open");
    else document.body.classList.remove("menu-open");
  }, [menuOpen]);

  return (
    <>
      <div className={styles.navparent}>
        <nav className={styles.navbar}>
          
          {/* --- Desktop Logo Part --- */}
         <a href="/" style={{ 
    textDecoration: 'none', 
    color: 'inherit', 
    cursor: 'pointer', 
    border: 'none', 
    padding: 0, 
    margin: 0, 
    background: 'none' 
  }}>
          <div className={styles.logopart}>
            <div className={styles.logologo}>
              <Image 
                src={logofull} 
                alt="graph"   
                layout="responsive"
                objectFit="contain"
                className={styles.navlogo1}
                onContextMenu={(e) => e.preventDefault()} 
                 draggable={false}
              />
            </div>
            <div className={styles.logotext}><h1>AXS BRIDGE</h1></div>
          </div>
          </a>
          {/* --- Desktop Links --- */}
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

            <a href="/news">News</a>
            <a href="/about">About Us</a>
          </div>

          {/* --- Hamburger / Cross toggle --- */}
          <div
            className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
            onClick={toggleMenu}
          >
            {menuOpen ? <Image 
                src={logocross} 
                alt="graph"   
                layout="responsive"
                objectFit="contain"
                className={styles.cross}
                 onContextMenu={(e) => e.preventDefault()} 
        draggable={false} 
              /> : <FaBars />}
          </div>

          {/* --- Mobile slide menu --- */}
          <div className={`${styles.slideMenu} ${menuOpen ? styles.open : ""}`}>
            <div className={styles.panelHeader}>
              <div className={styles.logopart}>
                {/* APPLIED FIX HERE: 
                  Using the dynamic 'mobileLogoClasses' variable 
                  to correctly add/remove logotoright based on menuOpen state.
                */}
                <div className={mobileLogoClasses}> 
                  <Image 
                    src={invertedaxs} 
                    alt="graph"   
                    layout="responsive"
                    objectFit="contain"
                    className={styles.navlogo1}
                   onContextMenu={(e) => e.preventDefault()} 
        draggable={false} 
                 />
                </div>
                <div className={mobileTextClasses}><h1>AXS BRIDGE</h1></div>
              </div>
            </div>

            <div className={styles.slideMenuContent}>
              <a href="/">Home<FaChevronRight /></a>
              <a onClick={() => setSubMenuOpen(true)}>Services <FaChevronRight /></a>
              <a href="/about">About Us<FaChevronRight /></a>
              <a href="/news">News<FaChevronRight /></a>
            </div>

            {/* Submenu */}
            <div className={`${styles.subMenu} ${subMenuOpen ? styles.open : ""}`}>
              <div className={styles.subMenuHeader} onClick={() => setSubMenuOpen(false)}>
                <FaChevronLeft  />
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