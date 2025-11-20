"use client";
import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function AssurancePage() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <div className="servicescontainer">
      <main className="servicescontent">
        <h1 className="servicestitle">Assurance</h1>
        <p className="servicesparagraph">
          How can we help you? Assurance services are at the heart of what AxS Bridge do.
          As a global service provider, we ensure that all your assurance needs are met
          wherever you are located.
        </p>

        {/* Audit Section */}
        <div className="servicesdropdown">
          <div
            className="servicesdropdownHeader"
            onClick={() => toggleSection("audit")}
          >
            <span>Audit</span>
            {openSection === "audit" ? <FiChevronUp /> : <FiChevronDown />}
          </div>
          {openSection === "audit" && (
            <div className="servicesdropdownContent">
              <h4 className="servicessubtitle">External/Statutory</h4>
              <p className="servicesparagraph">
                AxS Bridge methodology uses data analysis and technology to provide
                assurance on your results and assist with regulatory requirements
                efficiently.
              </p>
              <h4 className="servicessubtitle">Internal</h4>
              <p className="servicesparagraph">
                AXS BRIDGE supports organizations in developing systematic and disciplined
                approaches to improve governance and control processes.
              </p>
              <h4 className="servicessubtitle">Information Technology</h4>
              <p className="servicesparagraph">
                AXS BRIDGE provides IT risk assurance services to help entities identify risks
                and improve systems.
              </p>
            </div>
          )}
        </div>

        {/* Other Assurance Services */}
        <div className="servicesdropdown">
          <div
            className="servicesdropdownHeader"
            onClick={() => toggleSection("other")}
          >
            <span>Other Assurance Services</span>
            {openSection === "other" ? <FiChevronUp /> : <FiChevronDown />}
          </div>
          {openSection === "other" && (
            <div className="servicesdropdownContent">
              <h4 className="servicessubtitle">Reviews</h4>
              <p className="servicesparagraph">
                AXS Bridge has the expertise necessary to deliver responsive services providing
                stakeholders with required levels of assurance over your results.
              </p>
              <h4 className="servicessubtitle">Compilations</h4>
              <p className="servicesparagraph">
                AXS Bridge provides assistance with the preparation and presentation of your financial
                information in compliance with complex financial requirements both locally and worldwide.
              </p>
              <h4 className="servicessubtitle">Sarbanes–Oxley Compliance</h4>
              <p className="servicesparagraph">
                AXS Bridge experienced professionals have helped numerous companies work through the complexities
                of SOX compliance. We can help establish, document, maintain and monitor internal control
                over financial reporting for publicly held companies.
              </p>
              <h4 className="servicessubtitle">Service Organisation Reports</h4>
              <p className="servicesparagraph">
                Our international team of experts can deliver an independent examination report depending on the specific needs
                of the service organisation. Reports can be pursuant to AICPA and/or IAASB auditing standards.
              </p>
            </div>
          )}
        </div>

        <h2 className="servicestitle">Why AxS Bridge?</h2>
        <p className="servicesparagraph">
          In today’s fast-paced environment, decision-makers need timely, reliable insights from trusted advisors.
          You need confidence in your systems, controls, and financial records and the ability to inspire that same trust in your stakeholders.
        </p>

        <h2 className="servicestitle">What Sets AxS Bridge Apart</h2>
        <ul className="servicesserviceList">
          <li className="servicesserviceItem">
            <strong>Clear, Confident Communication.</strong> We combine innovation with a tech-enabled, risk-based assurance approach delivering results that are transparent, actionable, and trustworthy.
          </li>
          <li className="servicesserviceItem">
            <strong>People. Passion. Performance.</strong> Our team is deeply committed to your success, offering efficient, end-to-end solutions with direct partner involvement and long-term relationships.
          </li>
          <li className="servicesserviceItem">
            <strong>Global Perspective, Focused Delivery.</strong> AxS Bridge brings international expertise and a globally informed approach to every engagement. We collaborate across borders, leverage deep technical insight, and deliver assurance solutions that meet global standards no matter where you're based.
          </li>
          <li className="servicesserviceItem">
            <strong>Tailored for You.</strong> From startups and nonprofits to listed companies and government bodies, AxS Bridge brings the right expertise to meet your unique needs.
          </li>
        </ul>
      </main>
    </div>
  );
}
