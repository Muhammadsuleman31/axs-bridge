"use client"

import React, { useEffect, useState, useRef } from "react";
import styles from './hero.module.css';
import Image from 'next/image';
import arrow from '../../../public/RM-arrow.svg'
import vector1 from '../../../public/hero/Vector1.svg'
import vector2 from '../../../public/hero/Vector2.svg'
import vector12 from '../../../public/hero/Vector1_2.svg'
import vector22 from '../../../public/hero/Vector2_2.svg'
import graph from '../../../public/hero/vector-services.svg'  
import layer from '../../../public/hero/Layer_1.svg'    
// Import your vector images and background image
// NOTE: Ensure these paths are correct relative to your component file.
import GraphVector from '../../../public/hero/vector-services.svg'; 
import SmallTopLeftVector from '../../../public/hero/Vector1.svg'; 
import SmallBottomRightVector from '../../../public/hero/Vector2.svg'; 

export default function hero() {

        const [activeSlide, setActiveSlide] = useState(1);
        const SLIDE_COUNT = 2; // Define the total number of slides
        const intervalRef = useRef(null);

    // Function to advance to the next slide
    const nextSlide = () => {
        // If activeSlide is 1, go to 2. If it's 2, loop back to 1.
        setActiveSlide(prevSlide => (prevSlide % SLIDE_COUNT) + 1);
    };

    const stopInterval = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };
    const startInterval = () => {
        stopInterval(); // Clear any existing interval first
        // Start a new interval and store its ID in the ref
        intervalRef.current = setInterval(nextSlide, 6000); 
    }

    const goToSlide = (slideNumber) => {
        if (activeSlide !== slideNumber) {
            setActiveSlide(slideNumber);
            // Crucial: Reset the timer immediately after the user interacts
            startInterval(); 
        }
    };





        const goToSlide1 = () => {
        if (activeSlide !== 1) {
            setActiveSlide(1);
        }       
    };


    // Function to switch to the second slide (text2)
    const goToSlide2 = () => {
        if (activeSlide !== 2) {
            setActiveSlide(2);
        }
    };


  useEffect(() => {
        // 1. Start the interval when the component mounts
        startInterval(); 

        // 2. Cleanup function: This runs when the component unmounts.
        // It uses the stopInterval helper to clear the timer.
        return () => stopInterval();

    // The empty dependency array [] ensures this effect runs only once on mount and cleanup on unmount.
    // The manual interaction handles the timer reset.
    }, []);


//     `${styles.text1} ${styles.tt}`;
    let text1Classes = styles.text1;
    let text2Classes = styles.text2;
    let graphClasses = styles.graph;
    let layerClasses = `${styles.layer} ${styles.graph}`;
    let vector1Class = styles.vector1;
    let vector2Class = styles.vector2;
    let vector12Class =styles.vector12;
    let vector21Class = styles.vector21;
    

    if (activeSlide === 1) {
        // Slide 1 is active (entering)
        // You want to add .texttoright11 to text1
        text1Classes += ` ${styles.texttoright11}`;
        // You want to replace with .texttoleft11 on text2 (assuming this is the exit animation)
        text2Classes += ` ${styles.texttoleft12}`; // Note: Using texttoleft11 to match your request
        layerClasses += ` ${styles.layernv}`
        graphClasses += ` ${styles.graphv}`
        vector21Class += ` ${styles.slideOutToRight}`
        vector12Class += ` ${styles.slideOutToLeft}`
        vector1Class += ` ${styles.slideInFromRight}`
        vector2Class += ` ${styles.slideInFromLeft}`

    } else {
        // Slide 2 is active (entering)
        // You want to replace text1 with .texttoright12 (assuming this is the exit animation)
        text1Classes += ` ${styles.texttoright12}`;
        // You want to add .texttoleft12 to text2
        text2Classes += ` ${styles.texttoleft11}`;
        layerClasses += ` ${styles.layerv}`
        graphClasses += ` ${styles.graphnv}`
        vector21Class += ` ${styles.slideInFromRight}`
        vector12Class += ` ${styles.slideInFromLeft}`
        vector1Class += ` ${styles.slideOutToRight}`
        vector2Class += ` ${styles.slideOutToLeft}`
    }

  return (
  <>
  <div className={styles.herosection}>
        <div className={layerClasses}>  
           <Image 
                   src={layer} 
                   alt="graph"   
                   layout="responsive"
                   objectFit="contain"
                      />
          </div>
  <div className={text1Classes}>
  <h1>
  <span className={styles.welcome}>WELCOME TO</span>
  <br/> <span className={styles.world}>OUR WORLD</span>
  </h1>
   <div className={styles.graph2}>
   <Image 
           src={graph} 
           alt="graph"   
           layout="responsive"
           objectFit="contain"
              />
  </div>
  <p>We are a community of dynamic business advisors where belonging, growth, and action converge. Together, we unlock powerful opportunities for our clients, empower our people, and uplift the communities we serve.</p>
  
  <div className={styles.cta}>
<a href="/about" className={styles.readmorebutton}>
          Read more
         <span className={styles.arrowicon}>
          &rsaquo;
         </span>
        </a>
</div>
  </div>
    <div className={text2Classes}>
    <h1>
    <span className={styles.welcome}><span className={styles.AI}>AI</span> & IT'S IMPACT</span>
    <br/><span className={styles.welcome}>ON</span> <span className={styles.world}>FINANCE</span>
    </h1>
    <div className={styles.graph2}>
     <Image 
             src={layer} 
             alt="graph"   
             layout="responsive"
             objectFit="contain"
                />
    </div>
    <p>From predictive analytics to intelligent automation, AI enables smarter decisions, stronger risk management, and faster growth. We help organizations harness data-driven intelligence to transform financial strategy, operations, and outcomes.</p>
    
    <div className={styles.cta}>
  <a href="#" className={styles.readmorebutton}>
            Read more
           <span className={styles.arrowicon}>
            &rsaquo;
           </span>
          </a>
  </div>
    </div>
  <div className={graphClasses}>
   <Image 
           src={graph} 
           alt="graph"   
           layout="responsive"
           objectFit="contain"
              />
  </div>
   <div className={vector1Class}>
   <Image 
           src={vector1} 
           alt="vector1"   
          
          
              />
  </div>
   <div className={vector2Class}>
   <Image 
           src={vector2} 
           alt="vector2"   
          
              />
  </div>
    <div className={vector12Class}>
   <Image 
           src={vector12} 
           alt="vector1"   
          
          
              />
  </div>
   <div className={vector21Class}>
   <Image 
           src={vector22} 
           alt="vector2"   
          
              />
  </div>
 <div className={styles.dotNavigation}>
                    <button 
                        className={`${styles.dot} ${activeSlide === 1 ? styles.activeDot : ''}`} 
                       onClick={() => goToSlide(1)}
                        aria-label="Show slide 1: Welcome to our World"
                    />
                    <button 
                        className={`${styles.dot} ${activeSlide === 2 ? styles.activeDot : ''}`} 
                        onClick={() => goToSlide(2)}
                        aria-label="Show slide 2: AI & IT's Impact"
                    />
                </div>
  </div>

  </>
  );
}
