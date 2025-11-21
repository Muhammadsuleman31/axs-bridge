"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import styles from "./layout.module.css";

const services = [
  { name: "Assurance", path: "/services/assurance" },
  {
    name: "Tax",
    path: "/services/tax",
    subservices: [
      { name: "Local Tax", path: "/services/tax/local-tax" },
      { name: "Corporate Tax Compliance", path: "/services/tax/corporate-tax-compliance" },
      { name: "VAT GST Customs and Excise", path: "/services/tax/vat-gst-custom&excise" },
      { name: "Tax Structuring", path: "/services/tax/structuring" },
      { name: "Transfer Pricing Services", path: "/services/tax/transfer-pricing" },
      { name: "International Tax Advisory", path: "/services/tax/international-tax" },
    ],
  },
  {
    name: "Advisory",
    path: "/services/advisory",
    subservices: [
      { name: "Financial Planning", path: "/services/advisory/financial-planning" },
      { name: "Insolvency", path: "/services/advisory/insolvency" },
      { name: "IT Consulting", path: "/services/advisory/it-consulting" },
      { name: "Management Consulting", path: "/services/advisory/management-consulting" },
      { name: "Restructuring", path: "/services/advisory/restructuring" },
    ],
  },
  { name: "Business Solutions", path: "/services/business-solutions" },
  { name: "Corporate Finance", path: "/services/corporate-finance" },
  { name: "Private Capital Solutions", path: "/services/private-capital" },
  { name: "Sustainability & ESG", path: "/services/sustainability-esg" },
  { name: "Specialist Hospitality Consulting", path: "/services/hospitality-consulting" },
];

export default function ServicesLayout({ children }) {
  const pathname = usePathname();

  const [drawerX, setDrawerX] = useState(0);
  const dragStartX = useRef(null);
  const dragging = useRef(false);

  const handleDragStart = (e) => {
    dragging.current = true;
    dragStartX.current = e.clientX;
  };

  const handleDragMove = (e) => {
    if (!dragging.current) return;
    const delta = e.clientX - dragStartX.current;
    const newPos = Math.min(260, Math.max(0, delta));
    setDrawerX(newPos);
  };

  const handleDragEnd = () => {
    dragging.current = false;
    setDrawerX(drawerX > 120 ? 260 : 0);
  };

  const touchStart = (e) => handleDragStart(e.touches[0]);
  const touchMove = (e) => handleDragMove(e.touches[0]);
  const touchEnd = () => handleDragEnd();

  return (
    <div
      className={styles.container}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchMove={touchMove}
      onTouchEnd={touchEnd}
    >
      {/* Animated Bookmark Tab */}
      <div
        className={styles.bookmarkTab}
        style={{ transform: `translateX(${drawerX}px)` }}
        onMouseDown={handleDragStart}
        onTouchStart={touchStart}
      >
        <div className={styles.arrow}></div>
      </div>

      {/* Sidebar */}
      <aside className={styles.sidebar} style={{ transform: `translateX(${drawerX}px)` }}>
        {services.map((service) => (
          <div key={service.path}>
            <Link
              href={service.path}
              className={
                pathname.startsWith(service.path)
                  ? `${styles.link} ${styles.active}`
                  : styles.link
              }
              onClick={() => setDrawerX(0)}
            >
              {service.name}
            </Link>

            {service.subservices && pathname.startsWith(service.path) && (
              <div className={styles.subservices}>
                {service.subservices.map((sub) => (
                  <Link
                    key={sub.path}
                    href={sub.path}
                    className={
                      pathname === sub.path
                        ? `${styles.subLink} ${styles.active}`
                        : styles.subLink
                    }
                    onClick={() => setDrawerX(0)}
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </aside>

      <main className={styles.content}>{children}</main>
    </div>
  );
}
