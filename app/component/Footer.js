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

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (footerRef.current && !footerRef.current.contains(e.target)) {
        setOpenSection(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
    <div className={styles.talkwrapper}>
      <a href="/contact">
        <div className={styles.talk}>
          <div className="grad"><h1>LET’S TALK</h1></div>
          <div className={styles.arrowContainer}>
            <div className={styles.arrowLink}>
              <FiArrowUpRight strokeWidth={0.6} className={styles.arrowIcon} />
            </div>
          </div>
        </div>
      </a>
</div>
      <section ref={footerRef}>
        <div className={styles.footer}>

          {/* Logo Section */}
          <div className={styles.section1}>
            <img src="invertedaxs.svg" alt="AXS Logo" className={styles.logo} />
            <div>AXS BRIDGE</div>
          </div>

          {/* SERVICES */}
          <div className={styles.section2}>
            <div
              className={styles.sectionheading}
              onClick={() => toggleSection("services")}
            >
              <h3>SERVICES</h3>
              <FiChevronDown
                className={`${styles.chevron} ${isOpen("services") ? styles.rotate : ""}`}
              />
            </div>

            <div className={`${styles.sectionlinks} ${isOpen("services") ? styles.open : ""}`}>
              <a href="/services/assurance">Assurance</a>
              <a href="/services/tax">Tax</a>
              <a href="/services/advisory">Advisory</a>
              <a href="/services/business-solutions">Business Solutions</a>
              <a href="/services/corporate-finance">Corporate Finance</a>
              <a href="/services/private-capital">Private Capital Solutions</a>
              <a href="/services/sustainability-esg">Sustainability & ESG</a>
              <a href="/services/hospitality-consulting">Specialist Hospitality Consulting</a>
            </div>
          </div>

          {/* ABOUT */}
          <div className={styles.section3}>
            <div
              className={styles.sectionheading}
              onClick={() => toggleSection("about")}
            >
              <h3>ABOUT US</h3>
              <FiChevronDown
                className={`${styles.chevron} ${isOpen("about") ? styles.rotate : ""}`}
              />
            </div>

            <div className={`${styles.sectionlinks} ${isOpen("about") ? styles.open : ""}`}>
              <a href="/about">About</a>
              <a href="/cookie-policy">Cookie Policy</a>
              <a href="/privacy-policy">Privacy Policy</a>
            </div>
          </div>

          {/* SOCIAL */}
          <div className={styles.section4}>
            <div className={styles.sectionheading}>
              <h3>FOLLOW US</h3>
            </div>

            <div className={`${styles.socialIcons} ${styles.open}`}>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={24} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
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
