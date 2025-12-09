"use client";
import React from "react";

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
      <main className="servicescontent">
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

        <h2 className="servicessubtitle">Who We Serve</h2>
        <ul className="serviceslist">
          <li>Private equity and venture capital</li>
          <li>Private credit and real estate funds</li>
          <li>Hedge funds and long-short strategies</li>
          <li>Infrastructure and fund of funds</li>
          <li>Family offices and high net worth investors</li>
          <li>Pension plans, endowments, and foundations</li>
          <li>Insurance companies and capital market participants</li>
        </ul>

        <h2 className="servicessubtitle">Our Services</h2>

        <div className="servicesservicesContainer">
          <div className="servicesserviceColumn">
            <h3 className="servicesserviceTitle">Core Advisory</h3>
            <ul className="serviceslist">
              {coreAdvisory.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="servicesserviceColumn">
            <h3 className="servicesserviceTitle">Specialized Support</h3>
            <ul className="serviceslist">
              {specializedSupport.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <h2 className="servicessubtitle">Our Approach and Results</h2>

        <p className="servicesparagraph">
          At AXS Bridge, we begin by deeply understanding each client’s unique challenges and objectives. By leveraging our global network and multidisciplinary expertise, we deliver practical, tailored solutions that align with their strategic goals.
        </p>

        <p className="servicesparagraph">
          Over time, we have become a trusted advisor—providing ongoing support across a range of critical areas, including:
        </p>

        <ul className="serviceslist">
          <li>
            Development and implementation of transfer pricing policies and procedures
          </li>

          <li>
            Tax structuring and compliance, including:
            <ul>
              <li>Preparation of entity-level tax returns</li>
              <li>Establishing tax nexus for foreign principals</li>
              <li>State and local tax advisory</li>
            </ul>
          </li>

          <li>
            Outsourced CFO and bookkeeping services, including:
            <ul>
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
