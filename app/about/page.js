import styles from "./about.module.css";

function About() {
  return (
    <>
      <div className={styles.about}>
        
        <h1 className={`${styles.gradientText} ${styles.fadeInUp}`}>About Us</h1>

        <p className={styles.fadeInUp}>
          AxS Bridge is part of a globally connected network of professionals
          united by a shared commitment to quality, consistency, and
          client-focused service. Our brand reflects a common understanding of
          how we work, what we value, and the standards we uphold across borders.
        </p>

        <p className={styles.fadeInUp}>
          We specialize in audit, accounting, tax, and advisory services for
          organizations navigating complex regulatory environments and strategic
          challenges. Our approach combines technical excellence with practical
          insight to deliver solutions that are both timely and relevant.
        </p>

        <p className={styles.fadeInUp}>
          Wherever you operate, our network collaborates seamlessly to meet your
          business needs with professionalism and precision.
        </p>

        <h2 className={`${styles.gradientText} ${styles.sectionTitle} ${styles.fadeInUp}`}>
          Why AXS Bridge
        </h2>

        <p className={styles.fadeInUp}>
          We offer the strength of a global brand with the agility of local
          expertise. While each firm within our network maintains its
          independence, we benefit from shared resources, international reach,
          and a unified approach to service delivery.
        </p>

        <p className={styles.fadeInUp}>
          Our professionals are deeply committed to quality. They bring
          hands-on experience, sector-specific knowledge, and a collaborative
          mindset to every engagement. We believe in real conversations,
          transparent advice, and building lasting relationships.
        </p>

        <p className={styles.fadeInUp}>
          At AxS Bridge, we focus on understanding your ambitions and delivering
          solutions that help you move forward with clarity and confidence.
        </p>
      </div>
    </>
  );
}

export default About;
