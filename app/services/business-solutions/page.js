"use client";
import React from "react";

export default function BusinessSolutionsPage() {
  const services = [
    "Business advisory and process improvement",
    "Cost optimization and expansion planning",
    "Software selection and implementation",
    "Business process outsourcing",
    "Family office and fiduciary services",
    "Business planning and financial modelling",
    "Bookkeeping and accounting training",
    "Financial and management accounting",
    "Corporate and company secretarial services",
    "Director mandates and HR consulting",
    "Compliance, recruitment, and staff secondment",
    "Work permits and internationally mobile employee support",
    "Business formation and liquidation",
    "Procurement and tax accounting",
    "Payroll and payroll tax management",
    "Management consultancy and administrative support"
  ];

  return (
    <div className="servicescontainer">
      <main className="servicescontent">
        <h1 className="servicestitle">Business Solutions</h1>
        <p className="servicesparagraph">
          AXS Bridge offers flexible, scalable business support designed to help you manage operations more efficiently and make informed decisions with confidence. 
          Whether you need targeted assistance in areas like payroll or broader support with financial reporting and forecasting, we deliver practical solutions tailored to your needs.
        </p>
        <p className="servicesparagraph">
          We understand that not every organization has the internal capacity to handle all business and accounting functions. 
          Our outsourced services include bookkeeping, management reporting, payroll processing, budgeting, forecasting, and on-site support where needed.
        </p>
        <p className="servicesparagraph">
          Accurate record keeping and timely management information are essential for maintaining control, managing cash flow, and guiding strategic decisions. 
          We help you stay informed and in control by aligning performance insights with your business goals.
        </p>

        <h2 className="servicessubtitle">Our Outsourcing and Advisory Capabilities Include</h2>
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
