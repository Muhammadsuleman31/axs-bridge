"use client";
import React from "react";

export default function FinancialPlanningPage() {
  const services = [
    "Retirement planning",
    "Savings and investment strategies",
    "Medical and life insurance",
    "Business assurance",
    "Property acquisition"
  ];

  return (
    <div className="servicescontainer">
      <main className="servicescontent">
        <h1 className="servicestitle">Financial Planning</h1>

        <p className="servicesparagraph">
          You work hard for your money — it should work just as hard for you. At AXS Bridge, financial planning 
          is about aligning your wealth strategy with your lifestyle, long-term goals, and risk profile. 
          We take the time to understand your unique circumstances and deliver advice that helps you make 
          the most of your financial potential.
        </p>

        <p className="servicesparagraph">
          Working in collaboration with tax specialists, we offer tax-efficient planning that includes offshore 
          and international opportunities where appropriate. Our approach is grounded in technical expertise 
          and a deep understanding of global financial environments.
        </p>

        <p className="servicesparagraph">
          We begin with a comprehensive review of your financial position and use this insight to craft a tailored 
          wealth development strategy, from short-term growth opportunities to long-term security. Our independent 
          advice covers a wide range of areas, including:
        </p>

        <h2 className="servicessubtitle">Our Financial Planning Services</h2>

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
