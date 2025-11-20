"use client";
import React from "react";

export default function ITConsultingPage() {
  const services = [
    "Business process design",
    "Disaster recovery and continuity planning",
    "eCommerce strategy and implementation",
    "Transition to paperless operations",
    "Team collaboration and workflow optimization",
    "IT budgeting and cost control",
    "IT training and capability building",
    "Internet and intranet technology utilization",
    "IT infrastructure management",
    "Help desk and support frameworks",
    "Project management aligned with business needs",
    "Software selection and implementation",
    "IT security assessments and website reviews",
    "Risk assessment and mitigation planning",
    "Crisis response planning"
  ];

  return (
    <div className="servicescontainer">
      <main className="servicescontent">
        <h1 className="servicestitle">IT Consulting</h1>

        <p className="servicesparagraph">
          Technology alone does not drive success. It must be applied strategically and effectively to deliver real business value. 
          At AxS Bridge, we help you align technology with your goals, ensuring that your IT investments are practical, cost-effective, 
          and tailored to your specific needs.
        </p>

        <p className="servicesparagraph">
          We offer a range of IT consulting services designed to support both short and long-term objectives, helping you improve 
          efficiency, resilience, and decision-making across your organization.
        </p>

        <h2 className="servicessubtitle">Our Areas of Expertise Include</h2>

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
