"use client";
import React, { useEffect, useState } from "react";
import Hero from "../hero/hero";      // first slide
import Hero2 from "../hero2/hero2";    // second slide
import styles from "./heroslider.module.css"; // already combined CSS

export default function HeroSlider() {
  const slides = [<Hero key={0} />, <Hero2 key={1} />];
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.slider}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${
              index === activeIndex ? styles.active : ""
            }`}
          >
            {slide}
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className={styles.dots}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === activeIndex ? styles.dotActive : ""
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
