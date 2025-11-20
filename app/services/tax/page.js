"use client";
import React from "react";
import Link from "next/link";

export default function TaxPage() {
  const taxServices = [
    { name: "Local Tax", url: "/services/tax/local-tax" },
    { name: "Corporate Tax Compliance", url: "/services/tax/corporate-tax-compliance" },
    { name: "VAT GST Customs and Excise", url: "/services/tax/vat-gst-customs-excise" },
    { name: "Tax Structuring", url: "/services/tax/tax-structuring" },
    { name: "Transfer Pricing Services", url: "/services/tax/transfer-pricing" },
    { name: "International Tax", url: "/services/tax/international-tax" }
  ];

  return (
    <div className="servicescontainer">
      <main className="servicescontent">
        <h1 className="servicestitle">Tax</h1>
        <p className="servicesparagraph">
          Tax law, regulation, and efficiency are complex, but at AxS Bridge, we simplify the journey. 
          By staying ahead of evolving rules and developments, we provide clear, practical guidance that 
          empowers you to make confident, informed decisions. With global expertise, we can answer your 
          questions, explain your obligations, and help you plan effectively, whatever the size and needs 
          of your business.
        </p>

        <h2 className="servicessubtitle">Our Tax Services</h2>
        <ul className="servicesserviceList">
          {taxServices.map((service, index) => (
            <li key={index} className="servicesserviceItem">
              <Link href={service.url}>{service.name}</Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
