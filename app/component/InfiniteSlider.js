"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./InfiniteSlider.module.css";

const slidesData = [
  { id: 1, title: "Assurance", link: "#", img: "services-icons/assurance-icon.svg" },
  { id: 2, title: "Tax", link: "#", img: "services-icons/tax-icon.svg" },
  { id: 3, title: "Advisory", link: "#", img: "services-icons/advisory-icon.svg" },
  { id: 4, title: "Business Solutions", link: "#", img: "services-icons/business-solutions-icon.svg" },
  { id: 5, title: "Corporate Finance", link: "#", img: "services-icons/corporate-finance-icon.svg" },
  { id: 6, title: "Private Capital Solutions", link: "#", img: "services-icons/pcsc.svg" },
  { id: 7, title: "Sustainability & ESG", link: "#", img: "services-icons/esg.svg" }
];

function FiniteSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [slideWidth, setSlideWidth] = useState(0);

  const sliderRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    function calculateDimensions() {
      if (sliderRef.current && trackRef.current) {
        const slideElement = trackRef.current.querySelector(`.${styles.slide}`);
        if (slideElement) {
          const style = getComputedStyle(slideElement);
          const totalWidth =
            slideElement.offsetWidth +
            parseFloat(style.marginLeft) +
            parseFloat(style.marginRight);

          setSlideWidth(totalWidth);

          const viewportWidth = sliderRef.current.offsetWidth;
          const visibleSlides = viewportWidth / totalWidth;
          setSlidesPerView(visibleSlides);
        }
      }
    }

    calculateDimensions();
    window.addEventListener("resize", calculateDimensions);
    return () => window.removeEventListener("resize", calculateDimensions);
  }, []);

  // Sync button navigation with scroll
  useEffect(() => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollTo({
      left: currentIndex * slideWidth,
      behavior: "smooth",
    });
  }, [currentIndex, slideWidth]);

  const slideNext = () => {
    const maxIndex = Math.ceil(slidesData.length - slidesPerView);
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const slidePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const maxIndex = Math.ceil(slidesData.length - slidesPerView);

  return (
    <div className={styles.sliderContainer}>
      <button className={styles.arrow} onClick={slidePrev} disabled={currentIndex === 0}>
        &#8249;
      </button>

      <div className={styles.sliderViewport} ref={sliderRef}>
        <div className={styles.sliderTrack} ref={trackRef}>
          {slidesData.map((slide) => (
            <div className={styles.slide} key={slide.id}>
              <img src={slide.img} alt={slide.title} />
              <a href={slide.link}>{slide.title}</a>
            </div>
          ))}
        </div>
      </div>

      <button className={styles.arrow} onClick={slideNext} disabled={currentIndex >= maxIndex}>
        &#8250;
      </button>
    </div>
  );
}

export default FiniteSlider;
