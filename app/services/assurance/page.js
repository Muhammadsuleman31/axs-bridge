"use client";
import React, { useState } from "react";
import styles from "./assurance.module.css";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function AssurancePage() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <div className={styles.container}>
      <main className={styles.content}>
        <h1 className={styles.title}>Assurance</h1>
        <p className={styles.paragraph}>
          How can we help you? Assurance services are at the heart of what AxS Bridge do.
          As a global service provider, we ensure that all your assurance needs are met
          wherever you are located.
        </p>

        {/* Audit Dropdown */}
        <div className={styles.dropdown}>
          <div
            className={styles.dropdownHeader}
            onClick={() => toggleSection("audit")}
          >
            <span>Audit</span>
            {openSection === "audit" ? <FiChevronUp /> : <FiChevronDown />}
          </div>
          {openSection === "audit" && (
            <div className={styles.dropdownContent}>
              <h4 className={styles.subTitle}>External/Statutory</h4>
              <p className={styles.paragraph}>
                AxS Bridge methodology uses data analysis and technology to provide
                assurance on your results and assist with regulatory requirements
                efficiently.
              </p>
              <h4 className={styles.subTitle}>Internal</h4>
              <p className={styles.paragraph}>
                AXS BRIDGE supports organizations in developing systematic and disciplined
                approaches to improve governance and control processes.
              </p>
              <h4 className={styles.subTitle}>Information Technology</h4>
              <p className={styles.paragraph}>
                AXS BRIDGE provides IT risk assurance services to help entities identify risks
                and improve systems.
              </p>
            </div>
          )}
        </div>

        {/* Other Assurance Services Dropdown */}
        <div className={styles.dropdown}>
          <div
            className={styles.dropdownHeader}
            onClick={() => toggleSection("other")}
          >
            <span>Other Assurance Services</span>
            {openSection === "other" ? <FiChevronUp /> : <FiChevronDown />}
          </div>
          {openSection === "other" && (
            <div className={styles.dropdownContent}>
              <h4 className={styles.subTitle}>Reviews</h4>
              <p className={styles.paragraph}>
                AXS Bridge has the expertise necessary to deliver responsive services providing
                stakeholders with required levels of assurance over your results.
              </p>
              <h4 className={styles.subTitle}>Compilations</h4>
              <p className={styles.paragraph}>
                AXS Bridge provides assistance with the preparation and presentation of your financial
                information in compliance with complex financial requirements both locally and worldwide.
              </p>
              <h4 className={styles.subTitle}>Sarbanes–Oxley Compliance</h4>
              <p className={styles.paragraph}>
                AXS Bridge experienced professionals have helped numerous companies work through the complexities
                of SOX compliance. We can help establish, document, maintain and monitor internal control
                over financial reporting for publicly held companies.
              </p>
              <h4 className={styles.subTitle}>Service Organisation Reports</h4>
              <p className={styles.paragraph}>
                Our international team of experts can deliver an independent examination report depending on the specific needs
                of the service organisation. Reports can be pursuant to AICPA and/or IAASB auditing standards.
              </p>
            </div>
          )}
        </div>

        <h2 className={styles.title}>Why AxS Bridge?</h2>
        <p className={styles.paragraph}>
          In today’s fast-paced environment, decision-makers need timely, reliable insights from trusted advisors.
          You need confidence in your systems, controls, and financial records and the ability to inspire that same trust in your stakeholders.
        </p>

        <h2 className={styles.title}>What Sets AxS Bridge Apart</h2>
        <ul className={styles.list}>
          <li>
            <strong>Clear, Confident Communication.</strong> We combine innovation with a tech-enabled, risk-based assurance approach delivering results that are transparent, actionable, and trustworthy.
          </li>
          <li>
            <strong>People. Passion. Performance.</strong> Our team is deeply committed to your success, offering efficient, end-to-end solutions with direct partner involvement and long-term relationships.
          </li>
          <li>
            <strong>Global Perspective, Focused Delivery.</strong> AxS Bridge brings international expertise and a globally informed approach to every engagement. We collaborate across borders, leverage deep technical insight, and deliver assurance solutions that meet global standards no matter where you're based.
          </li>
          <li>
            <strong>Tailored for You.</strong> From startups and nonprofits to listed companies and government bodies, AxS Bridge brings the right expertise to meet your unique needs.
          </li>
        </ul>
      </main>
    </div>
  );
}
