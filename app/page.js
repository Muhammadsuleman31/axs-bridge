'use client'

import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import InfiniteSlider from "./component/InfiniteSlider"
import Link from "next/link";
import Hero from "./component/hero/hero"
import Hero2 from './component/hero2/hero2'
import Heroslider from './component/heroslider/heroslider'
import { motion } from 'framer-motion';

function HomePage() {

  // Define the states for the H1 heading
const headingVariants = {
  hidden: { opacity: 0, y: 50 }, // Initial state: invisible, shifted down
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    } 
  },
};

// Define the states for the paragraph container (.desc)
// This will be used to trigger the staggered effect on its children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3, // Wait 0.3s before starting children
      staggerChildren: 0.2, // Apply 0.2s delay between each paragraph
    },
  },
};

// Define the states for the individual paragraphs (<p>)
const paragraphVariants = {
  hidden: { opacity: 0, x: 50 }, // Invisible, shifted 50px to the right
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.4 
    } 
  },
};

// ... (inside your component function, alongside other variants) ...

// Define the states for the entire Services section container
const servicesVariants = {
  hidden: { opacity: 0, y: 100 }, // Start invisible, shifted down
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8, // Slightly slower transition for a bigger section
      ease: "easeOut",
      delay: 0.2 // Wait a little bit before starting
    }
  },
};

  return (
    <>
    {/* <Heroslider/>
    <Hero2/> */}
    <Hero/>
  

<div className={styles.secondsection}>
    {/* ----------------- LEFT COLUMN (H1 HEADING) ----------------- */}
    <motion.div
        className={styles.heading}
        variants={headingVariants}
        initial="hidden"          // Start from 'hidden' state
        whileInView="visible"     // Animate to 'visible' when in view
        viewport={{ once: true, amount: 0.5 }} // Trigger once when 50% visible
    >
        <h1>We believe in growth beyond boundaries</h1>
    </motion.div>

    {/* ----------------- RIGHT COLUMN (PARAGRAPHS) ----------------- */}
    <motion.div
        className={styles.desc}
        variants={containerVariants} // Container for staggering
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
    >
        {/* Paragraph 1: Child of the container, uses paragraphVariants */}
        <motion.p variants={paragraphVariants}>
            AXS Bridge is a dynamic and forward-looking global network of professionals. We are on an ambitious journey of continued expansion and impact.
        </motion.p>
        
        {/* Paragraph 2 */}
        <motion.p variants={paragraphVariants}>
            Our members work seamlessly across geographies, combining specialized expertise, diverse perspectives, and deep local insight. We foster genuine, lasting relationships with our clients and with one another.
        </motion.p>
        
        {/* Paragraph 3 */}
        <motion.p className={styles.lastp} variants={paragraphVariants}>
            Together, we deliver a full spectrum of services to clients around the world, consistently maintaining the highest standards of quality and integrity, guided by our shared values.
        </motion.p>
        
        {/* Removed commented-out paragraph */}
    </motion.div>
</div>


  <motion.div 
    className={styles.servies}
    variants={servicesVariants} // Use the new variant
    initial="hidden"            // Start hidden
    whileInView="visible"       // Animate when it scrolls into view
    viewport={{ once: true, amount: 0.3 }} // Trigger once when 30% visible
>
    <div className={styles.servicesheading}>
        <div><h1 className="grad">Services & Solutions</h1></div>
        <div>
            {/* If Link is a Next.js component, make sure it's imported */}
           <a href="/services" className="button">
           More
         <span className="arrowicon">
          &rsaquo;
         </span>
        </a>
        </div>
    </div>
    {/* If InfiniteSlider is a component, make sure it's imported */}
    <InfiniteSlider/> 
</motion.div>
  </>
  );
}

export default HomePage;
