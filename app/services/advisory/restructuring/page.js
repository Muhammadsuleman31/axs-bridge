"use client";
import React from "react";

export default function RestructuringPage() {
  const services = [
    "Business refinancing",
    "Turnaround planning and execution",
    "Operational and financial reorganization",
    "Insolvency advisory and support"
  ];

  return (
    <div className="servicescontainer">
      <main className="servicescontent">
        <h1 className="servicestitle">Restructuring and Recovery Advisory</h1>

        <p className="servicesparagraph">
          AXS Bridge provides strategic restructuring services to companies, shareholders, lenders, and creditors facing financial stress or operational disruption. 
          Our goal is to stabilize businesses, preserve value, and guide stakeholders toward the most viable outcomes.
        </p>

        <p className="servicesparagraph">
          Insolvency can be one of the most challenging experiences an organization may face. With deep experience in navigating distressed situations, our team focuses on identifying practical solutions and minimizing both financial and emotional impact.
        </p>

        <p className="servicesparagraph">
          Early intervention is key. By seeking timely advice and understanding available options, businesses can often avoid insolvency and protect their long-term interests.
        </p>

        <h2 className="servicessubtitle">Our Restructuring Services Include</h2>

        <ul className="servicesserviceList">
          {services.map((service, index) => (
            <li key={index} className="servicesserviceItem">
              {service}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
