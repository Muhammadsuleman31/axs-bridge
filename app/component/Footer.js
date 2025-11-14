"use client";
import { useState, useRef, useEffect } from "react";
import styles from "./Footer.module.css";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiArrowUpRight, FiChevronDown } from "react-icons/fi";

function Footer() {
  const [openSection, setOpenSection] = useState(null);
  const footerRef = useRef(null);

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  const isOpen = (section) => openSection === section;

  // -------------------------
  // AUTO CLOSE WHEN CLICKING OUTSIDE
  // -------------------------
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (footerRef.current && !footerRef.current.contains(e.target)) {
        setOpenSection(null); // close all sections
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <a>
        <div className={styles.talk}>
          <div className="gradient-text"><h1>LET'S TALK</h1></div>
          <div className={styles.arrowContainer}>
            <div className={styles.arrowLink}>
              <FiArrowUpRight className={styles.arrowIcon} />
            </div>
          </div>
        </div>
      </a>

      <section ref={footerRef}>
        <div className={styles.footer}>

          {/* Logo Section */}
          <div className={styles.section1}>
            <img src="inverted.png" alt="PKF Logo" className={styles.logo} />
          </div>

          {/* SERVICES */}
          <div className={styles.section2}>
            <div
              className={styles.sectionheading}
              onClick={() => toggleSection("services")}
            >
              <h3>Services</h3>
              <FiChevronDown
                className={`${styles.chevron} ${
                  isOpen("services") ? styles.rotate : ""
                }`}
              />
            </div>

            <div
              className={`${styles.sectionlinks} ${
                isOpen("services") ? styles.open : ""
              }`}
            >
              <a>Assurance</a>
              <a>Tax</a>
              <a>Advisory</a>
              <a>Business Solutions</a>
              <a>Corporate Finance</a>
              <a>Private Capital Solutions</a>
              <a>Sustainability & ESG</a>
            </div>
          </div>

          {/* ABOUT */}
          <div className={styles.section3}>
            <div
              className={styles.sectionheading}
              onClick={() => toggleSection("about")}
            >
              <h3>About Us</h3>
              <FiChevronDown
                className={`${styles.chevron} ${
                  isOpen("about") ? styles.rotate : ""
                }`}
              />
            </div>

            <div
              className={`${styles.sectionlinks} ${
                isOpen("about") ? styles.open : ""
              }`}
            >
              <a>About</a>
              <a>Cookie policy</a>
              <a>Privacy Policy</a>
            </div>
          </div>

          {/* SOCIAL */}
          <div className={styles.section4}>
            <div
              className={styles.sectionheading}
              onClick={() => toggleSection("social")}
            >
              <h3>Follow Us</h3>
              {/* <FiChevronDown
                className={`${styles.chevron} ${
                  isOpen("social") ? styles.rotate : ""
                }`}
              /> */}
            </div>

            <div
              className={`${styles.socialIcons} ${
                isOpen("social") ? styles.open : styles.open
              }`}
            >
              <a href="https://twitter.com" target="_blank">
                <FaTwitter size={24} />
              </a>
              <a href="https://facebook.com" target="_blank">
                <FaFacebookF size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank">
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Footer;
