"use client";
import React from "react";
import styles from './private.module.css' // Import the new module CSS

export default function PrivateCapitalPage() {
  const coreAdvisory = [
    "Audit and assurance",
    "Tax structuring, planning, and compliance",
    "Independent valuations",
    "Transaction advisory and due diligence",
  ];

  const specializedSupport = [
    "Mergers and acquisitions advisory",
    "Investor and ESG reporting",
    "Governance, risk, and compliance frameworks",
    "Vendor oversight and management",
    "Technology advisory and implementation",
    "Outsourcing and staffing solutions",
    "Cybersecurity, privacy, and data protection",
  ];

  return (
    <div className="servicescontainer">
      {/* Content Wrapper to constrain max width and center content */}
      <main className={styles.contentWrapper}> 
        <h1 className="servicestitle">Private Capital Solutions</h1>

        <p className="servicesparagraph">
          AXS Bridge offers tailored advisory services to clients operating across the private capital landscape. Our team brings deep industry experience and global insight, delivering practical solutions that support investment performance and operational excellence.
        </p>

        <p className="servicesparagraph">
          We work with a wide range of stakeholders including private equity and venture capital firms, credit and real estate funds, hedge funds, infrastructure investors, family offices, pension plans, endowments, private foundations, and institutional allocators.
        </p>

        <p className="servicesparagraph">
          Our approach combines international reach with personalized, cost-effective service—ensuring that each engagement is led by professionals with the right expertise and sector knowledge.
        </p>

        {/* Who We Serve Section */}
        <h2 className="servicessubtitle">Who We Serve</h2>
        {/* Use the new styles.clientGrid for a clean, multi-column layout */}
        <ul className={styles.clientGrid}> 
          <li className={styles.clientItem}>
            Private equity and venture capital
          </li>
          <li className={styles.clientItem}>
            Private credit and real estate funds
          </li>
          <li className={styles.clientItem}>
            Hedge funds and long-short strategies
          </li>
          <li className={styles.clientItem}>
            Infrastructure and fund of funds
          </li>
          <li className={styles.clientItem}>
            Family offices and high net worth investors
          </li>
          <li className={styles.clientItem}>
            Pension plans, endowments, and foundations
          </li>
          <li className={styles.clientItem}>
            Insurance companies and capital market participants
          </li>
        </ul>

        {/* Services Section */}
        <h2 className="servicessubtitle">Our Services</h2>

        <div className={styles.servicesContainer}>
          <div className={styles.serviceColumn}>
            <h3 className={styles.serviceTitle}>Core Advisory</h3>
            <ul className={styles.moduleList}>
              {coreAdvisory.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.serviceColumn}>
            <h3 className={styles.serviceTitle}>Specialized Support</h3>
            <ul className={styles.moduleList}>
              {specializedSupport.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Approach and Results Section */}
        <h2 className="servicessubtitle">Our Approach and Results</h2>

        <p className="servicesparagraph">
          At AXS Bridge, we begin by deeply understanding each client’s unique challenges and objectives. By leveraging our global network and multidisciplinary expertise, we deliver practical, tailored solutions that align with their strategic goals.
        </p>

        <p className="servicesparagraph">
          Over time, we have become a trusted advisor—providing ongoing support across a range of critical areas, including:
        </p>

        <ul className={styles.resultsList}>
          <li>
            Development and implementation of transfer pricing policies and procedures
          </li>

          <li>
            Tax structuring and compliance, including:
            <ul className={styles.resultsNestedList}>
              <li>Preparation of entity-level tax returns</li>
              <li>Establishing tax nexus for foreign principals</li>
              <li>State and local tax advisory</li>
            </ul>
          </li>

          <li>
            Outsourced CFO and bookkeeping services, including:
            <ul className={styles.resultsNestedList}>
              <li>Preparation of monthly financial statements</li>
              <li>Bill payment and payroll processing</li>
              <li>Strategic financial oversight</li>
            </ul>
          </li>

          <li>On-demand consulting for emerging needs and special projects</li>
        </ul>
      </main>
    </div>
  );
}