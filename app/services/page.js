"use client";
import React from "react";
import styles from "./services.module.css";
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
        { title: "Local Tax", url: "/services/tax/local" },
        { title: "Corporate Tax", url: "/services/tax/corporate" },
        { title: "Compliance", url: "/services/tax/compliance" },
        { title: "VAT", url: "/services/tax/vat" },
        { title: "GST", url: "/services/tax/gst" },
        { title: "Custom and Excise", url: "/services/tax/custom-excise" },
        { title: "Structuring", url: "/services/tax/structuring" },
        { title: "Transfer Pricing", url: "/services/tax/transfer-pricing" },
        { title: "International Tax Advisory", url: "/services/tax/international" },
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
    {
      title: "Business Solutions",
      url: "/services/business-solutions",
    },
    {
      title: "Corporate Finance",
      url: "/services/corporate-finance",
    },
    {
      title: "Private Capital Solutions",
      url: "/services/private-capital-solutions",
    },
    {
      title: "Sustainability & ESG",
      url: "/services/sustainability-esg",
    },
    {
      title: "Specialist Hospitality Consulting",
      url: "/services/hospitality-consulting",
    },
  ];

  return (
    <div className={styles.container}>
      <main className={styles.content}>
        <h1 className={styles.title}>Our Services</h1>
        <p className={styles.paragraph}>
          Welcome to our Services section. Explore our wide range of services including Assurance, Tax, Advisory, Business Solutions, Corporate Finance, Private Capital Solutions, and Sustainability & ESG.
        </p>

        <ul className={styles.serviceList}>
          {services.map((service, idx) => (
            <li key={idx} className={styles.serviceItem}>
              <Link href={service.url} className={styles.serviceLink}>
                {service.title}
              </Link>

              {service.subservices && (
                <ul className={styles.subServiceList}>
                  {service.subservices.map((sub, subIdx) => (
                    <li key={subIdx} className={styles.subServiceItem}>
                      <Link href={sub.url} className={styles.serviceLink}>
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
