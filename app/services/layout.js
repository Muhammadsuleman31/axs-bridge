"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./layout.module.css";

const services = [
  { name: "Assurance", path: "/services/assurance" },
  {
    name: "Tax",
    path: "/services/tax",
    subservices: [
      { name: "Local Tax", path: "/services/tax/local-tax" },
      { name: "Corporate Tax", path: "/services/tax/corporate-tax" },
      { name: "Compliance", path: "/services/tax/compliance" },
      { name: "VAT", path: "/services/tax/vat" },
      { name: "GST", path: "/services/tax/gst" },
      { name: "Custom and Excise", path: "/services/tax/custom-excise" },
      { name: "Structuring", path: "/services/tax/structuring" },
      { name: "Transfer Pricing", path: "/services/tax/transfer-pricing" },
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
];

export default function ServicesLayout({ children }) {
  const pathname = usePathname();

  // Build breadcrumb array
  const pathSegments = pathname.split("/").filter(Boolean); // remove empty
  const breadcrumbs = [{ name: "Home", path: "/" }];

  if (pathSegments[0] === "services") {
    breadcrumbs.push({ name: "Services", path: "/services" });

    if (pathSegments[1]) {
      const mainService = services.find((s) => s.path.endsWith(pathSegments[1]));
      if (mainService) breadcrumbs.push({ name: mainService.name, path: mainService.path });

      if (pathSegments[2] && mainService?.subservices) {
        const subService = mainService.subservices.find((s) =>
          s.path.endsWith(pathSegments[2])
        );
        if (subService) breadcrumbs.push({ name: subService.name, path: subService.path });
      }
    }
  }

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        {services.map((service) => (
          <div key={service.path}>
            <Link
              href={service.path}
              className={
                pathname.startsWith(service.path) ? `${styles.link} ${styles.active}` : styles.link
              }
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
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </aside>

      <main className={styles.content}>
        {/* Breadcrumb */}
        <nav className={styles.breadcrumb}>
          {breadcrumbs.map((crumb, index) => (
            <span key={crumb.path}>
              <Link href={crumb.path} className={styles.breadcrumbLink}>
                {crumb.name}
              </Link>
              {index < breadcrumbs.length - 1 && " / "}
            </span>
          ))}
        </nav>

        {/* Page content */}
        {children}
      </main>
    </div>
  );
}
