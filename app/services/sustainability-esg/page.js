"use client";
import React from "react";

export default function SustainabilityPage() {
  const services = [
    {
      title: "Strategy Consulting",
      items: [
        "Tax strategy development",
        "Reporting framework design and implementation",
        "Management reporting optimization",
        "Selection and deployment of reporting frameworks",
        "Data governance planning and execution",
        "Carbon accounting setup and integration",
        "Technology advisory and implementation"
      ]
    },
    {
      title: "Risk Management and Compliance",
      items: [
        "Tax compliance advisory",
        "Life Cycle Assessment (LCA)",
        "Techno-Economic Analysis (TEA)",
        "Supply chain due diligence",
        "KPI identification and benchmarking",
        "Process and reporting effectiveness reviews",
        "Pre and post implementation assessments",
        "Integration of sustainability risks into enterprise risk frameworks"
      ]
    },
    {
      title: "Outsourced Sustainability Office",
      items: [
        "Preparation of annual sustainability reports",
        "Carbon accounting and emissions tracking",
        "Data management within sustainability frameworks for measurement and reporting"
      ]
    },
    {
      title: "Assurance Services",
      items: [
        "Verification of internal and external sustainability and financial reporting",
        "Diagnostic reviews to assess readiness for assurance and disclosure requirements"
      ]
    }
  ];

  return (
    <div className="servicescontainer">
      <main className="servicescontent">
        <h1 className="servicestitle">Sustainability & ESG</h1>

        <p className="servicesparagraph">
          AXS Bridge offers a comprehensive suite of consulting services across four core areas: Strategy, Risk and Compliance, Sustainability, and Assurance, designed to help organizations navigate complexity, improve performance, and meet evolving regulatory and stakeholder expectations.
        </p>

        {services.map((service, index) => (
          <div key={index} className="servicesserviceBlock">
            <h2 className="servicessubtitle">{service.title}</h2>
            <ul className="servicesserviceList">
              {service.items.map((item, idx) => (
                <li key={idx} className="servicesserviceItem">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </main>
    </div>
  );
}
