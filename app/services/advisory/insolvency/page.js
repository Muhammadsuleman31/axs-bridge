"use client";
import React from "react";

export default function InsolvencyPage() {
  const services = [
    "Corporate restructuring",
    "Creditor negotiations",
    "Receivership and liquidation support",
    "Alternatives to formal insolvency",
    "Advisory for individuals, sole proprietors, and partnerships in financial difficulty"
  ];

  return (
    <div className="servicescontainer">
      <main className="servicescontent">
        <h1 className="servicestitle">Insolvency</h1>

        <p className="servicesparagraph">
          In challenging economic conditions, expert guidance is essential. Financial distress can affect businesses and individuals alike, often with serious consequences. 
          AxS Bridge provides calm, strategic support to help you navigate this difficult time, minimize impact, and pursue recovery while protecting the interests of creditors and stakeholders.
        </p>

        <h2 className="servicessubtitle">Why AxS Bridge</h2>
        <p className="servicesparagraph">
          Insolvency laws vary widely across jurisdictions from minimal regulation to highly complex frameworks. 
          Our team brings deep technical knowledge and practical experience to help you interpret and respond to these challenges effectively. 
          Whether you're facing immediate pressure or planning ahead, we offer tailored solutions grounded in global insight and local relevance.
        </p>

        <h2 className="servicessubtitle">Early Intervention Matters</h2>
        <p className="servicesparagraph">
          Engaging AxS Bridge early allows us to identify risks, stabilize operations, and explore turnaround options. 
          Where recovery is not feasible, we guide you through the most appropriate path whether informal restructuring or formal insolvency proceedings. 
          Our goal is to restore viability wherever possible and avoid insolvency altogether.
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
