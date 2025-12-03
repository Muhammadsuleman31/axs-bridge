import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import InfiniteSlider from "./component/InfiniteSlider"
import Link from "next/link";


function HomePage() {
  return (
    <>
    <section className={styles.homepage}>
      <div className={styles.text}>
        <h1>Welcome To Our <span className="gradient-text">World</span></h1>
        <p>
         We are a community of dynamic business advisors where belonging, growth, and action converge. Together, we unlock powerful opportunities for our clients, empower our people, and uplift the communities we serve.
        </p>
        {/* <button>Read more</button> */}
      </div>
      <div className={styles.image}>
        <div className={styles.circle}>
          <img src="tower.jpg"   alt="PKF Speaker" />
        </div>
      </div>
    </section>
  <div className={styles.secondsection}>
    <div className={styles.heading}><h1>We believe in growth beyond boundaries</h1></div>
    <div className={styles.desc}>
      <p>AxS Bridge is a dynamic and forward-looking global network of professionals. We are on an ambitious journey of continued expansion and impact.</p>
      <p>Our members work seamlessly across geographies, combining specialized expertise, diverse perspectives, and deep local insight. We foster genuine, lasting relationships with our clients and with one another.</p>
      <p className={styles.lastp}>Together, we deliver a full spectrum of services to clients around the world, consistently maintaining the highest standards of quality and integrity, guided by our shared values.</p>
      {/* <p><span className="buttoninverse">Join us</span> or <span className="buttoninverse">find a firm</span></p> */}
    </div>
  </div>
  <div className={styles.servies}>
    <div className={styles.servicesheading}>
      <div><h1>Services & Solutions</h1></div>
    <div>
  <Link href="/services">
    <button>More</button>
  </Link>
</div>
    </div>
    <InfiniteSlider/>
  </div>
  </>
  );
}

export default HomePage;
