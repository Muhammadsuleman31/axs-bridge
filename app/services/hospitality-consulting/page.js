"use client";
import React from "react";

export default function HospitalityPage() {
  const services = [
    "Asset management and hotel valuations",
    "Feasibility studies and project development",
    "Operator search and transaction support",
    "Destination strategy and investment advisory",
    "Market research and benchmarking",
    "Brand development and positioning",
    "Marketing and quality assurance",
    "Strategic and operational reviews",
    "Competitor analysis and market appraisals",
    "Funding solutions and financial structuring",
    "Industry networking and knowledge sharing"
  ];

  return (
    <div className="servicescontainer">
      <main className="servicescontent">
        <h1 className="servicestitle">Specialist Hospitality Consulting</h1>

        <p className="servicesparagraph">
          AXS Bridge offers specialized consulting services to the global hotel and hospitality sector. Recognized for our commitment to quality and strategic insight, we support clients across the full spectrum of the industry from boutique operators to multinational investors and public institutions.
        </p>

        <p className="servicesparagraph">
          Our clients include hotel operators, owner-investors, financial institutions, government bodies, property developers, and professional service providers. Each engagement is tailored to the unique needs of the client, backed by deep sector knowledge and a focus on delivering measurable value.
        </p>

        <h2 className="servicessubtitle">Our Hospitality Services Include</h2>

        <ul className="servicesserviceList">
          {services.map((item, idx) => (
            <li key={idx} className="servicesserviceItem">{item}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}
