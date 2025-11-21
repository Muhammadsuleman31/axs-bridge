"use client";
import React from "react";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "Assurance",
      url: "/services/assurance",
    },
    {
      title: "Tax",
      subservices: [
        { title: "Local Tax", url: "/services/tax/local-tax" },
        { title: "Corporate Tax Compliance", url: "/services/tax/corporate-tax-compliance" },
        { title: "VAT GST Custom and Excise", url: "/services/tax/vat-gst-custom&excise" },
        { title: "Tax Structuring", url: "/services/tax/structuring" },
        { title: "Transfer Pricing Services", url: "/services/tax/transfer-pricing" },
        { title: "International Tax Advisory", url: "/services/tax/international-tax" },
      ],
      url: "/services/tax",
    },
    {
      title: "Advisory",
      subservices: [
        { title: "Financial Planning", url: "/services/advisory/financial-planning" },
        { title: "Insolvency", url: "/services/advisory/insolvency" },
        { title: "IT Consulting", url: "/services/advisory/it-consulting" },
        { title: "Management Consulting", url: "/services/advisory/management-consulting" },
        { title: "Restructuring", url: "/services/advisory/restructuring" },
      ],
      url: "/services/advisory",
    },
    { title: "Business Solutions", url: "/services/business-solutions" },
    { title: "Corporate Finance", url: "/services/corporate-finance" },
    { title: "Private Capital Solutions", url: "/services/private-capital-solutions" },
    { title: "Sustainability & ESG", url: "/services/sustainability-esg" },
    { title: "Specialist Hospitality Consulting", url: "/services/hospitality-consulting" },
  ];

  return (
    <div className="servicescontainer">
      <main>
        <h1 className="servicestitle">Our Services</h1>
        <p className="servicesparagraph">
          Welcome to our Services section. Explore our wide range of services including Assurance, Tax, Advisory, Business Solutions, Corporate Finance, Private Capital Solutions, and Sustainability & ESG.
        </p>

        <ul className="servicesserviceList">
          {services.map((service, idx) => (
            <li key={idx} className="servicesserviceItem">
              <Link href={service.url}>
                {service.title}
              </Link>

              {service.subservices && (
                <ul className="servicesNestedList">
                  {service.subservices.map((sub, subIdx) => (
                    <li key={subIdx} className="servicesNestedList">
                      <Link href={sub.url}>
                        {sub.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
