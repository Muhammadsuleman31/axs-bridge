"use client"
import React from 'react';
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

  return (
  <>
  <div className={styles.herosection}>
        <div className={`${styles.graph} ${styles.layer}`}>  
           <Image 
                   src={layer} 
                   alt="graph"   
                   layout="responsive"
                   objectFit="contain"
                      />
          </div>
  <div className={styles.text1}>
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
    <div className={styles.text2}>
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
  <div className={styles.graph}>
   <Image 
           src={graph} 
           alt="graph"   
           layout="responsive"
           objectFit="contain"
              />
  </div>
   <div className={styles.vector1}>
   <Image 
           src={vector1} 
           alt="vector1"   
          
          
              />
  </div>
   <div className={styles.vector2}>
   <Image 
           src={vector2} 
           alt="vector2"   
          
              />
  </div>
    <div className={styles.vector12}>
   <Image 
           src={vector12} 
           alt="vector1"   
          
          
              />
  </div>
   <div className={styles.vector21}>
   <Image 
           src={vector22} 
           alt="vector2"   
          
              />
  </div>
 
  </div>

  </>
  );
}
