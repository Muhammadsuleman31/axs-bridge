"use client"
import React from 'react';
import styles from './hero2.module.css';
import Image from 'next/image';
import arrow from '../../../public/RM-arrow.svg'
import vector12 from '../../../public/hero/Vector1_2.svg'
import vector22 from '../../../public/hero/Vector2_2.svg'
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
  
  

   <div className={styles.graph}>
   <Image 
           src={layer} 
           alt="graph"   
           layout="responsive"
           objectFit="contain"
              />
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
  
   <div className={styles.vector12}>
   <Image 
           src={vector12} 
           alt="vector1"   
           layout="responsive"
           objectFit="contain"
              />
  </div>
   <div className={styles.vector21}>
   <Image 
           src={vector22} 
           alt="vector2"   
           layout="responsive"
           objectFit="contain"
              />
  </div>
  </div>

  </>
  );
}
