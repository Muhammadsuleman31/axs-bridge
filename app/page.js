import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import InfiniteSlider from "./component/InfiniteSlider"
import Link from "next/link";
import Hero from "./component/hero/hero"
import Hero2 from './component/hero2/hero2'
import Heroslider from './component/heroslider/heroslider'

function HomePage() {
  return (
    <>
    {/* <Heroslider/>
    <Hero2/> */}
    <Hero/>
  
  <div className={styles.secondsection}>
    <div className={styles.heading}><h1>We believe in growth beyond boundaries</h1></div>
    <div className={styles.desc}>
      <p>AXS Bridge is a dynamic and forward-looking global network of professionals. We are on an ambitious journey of continued expansion and impact.</p>
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
