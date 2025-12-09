"use client";
import React from "react";

export default function ManagementConsultingPage() {
  const services = [
    "Strategic planning and implementation",
    "Risk assessment, crisis management, and resilience planning",
    "Organizational readiness and change management",
    "Vision development and strategic alignment",
    "Competitive strategy and sustainability planning",
    "Performance indicator design and tracking",
    "Process costing and financial analysis",
    "Business process reviews for control, efficiency, and effectiveness",
    "Management structure evaluation and competency assessments"
  ];

  return (
    <div className="servicescontainer">
      <main className="servicescontent">
        <h1 className="servicestitle">Management Consulting</h1>

        <p className="servicesparagraph">
          AXS Bridge helps organizations improve performance through focused, actionable consulting. 
          Our approach enables you to assess where you stand, define where you want to go, and build a clear path to get there. 
          We work closely with leadership teams to enhance efficiency, reduce risk, and unlock long-term value.
        </p>

        <h2 className="servicessubtitle">Why AXS Bridge</h2>
        <p className="servicesparagraph">
          We bring experience across sectors including finance, energy, agriculture, healthcare, hospitality, transport, and public services. 
          Our solutions are practical, realistic, and tailored to your specific context—grounded in technical expertise and informed by local and global insight.
        </p>

        <h2 className="servicessubtitle">Our Services Include</h2>

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
