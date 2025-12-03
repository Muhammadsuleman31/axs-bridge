"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./InfiniteSlider.module.css";

const slidesData = [
  { id: 1, title: "Assurance", link: "/services/assurance", img: "services-icons/assurance-icon.svg" },
  { id: 2, title: "Tax", link: "/services/tax", img: "services-icons/tax-icon.svg" },
  { id: 3, title: "Advisory", link: "/services/advisory", img: "services-icons/advisory-icon.svg" },
  { id: 4, title: "Business Solutions", link: "/services/business-solutions", img: "services-icons/business-solutions-icon.svg" },
  { id: 5, title: "Corporate Finance", link: "/services/corporate-finance", img: "services-icons/corporate-finance-icon.svg" },
  { id: 6, title: "Private Capital Solutions", link: "/services/private-capital", img: "services-icons/pcsc.svg" },
  { id: 7, title: "Sustainability & ESG", link: "/services/sustainability-esg", img: "services-icons/esg.svg" }
];

function FiniteSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [slideWidth, setSlideWidth] = useState(0);

  const sliderRef = useRef(null);
  const trackRef = useRef(null);

  // --------------------- TOUCH SWIPE ---------------------
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > 40) {
      if (diff > 0) slideNext(); 
      else slidePrev();
    }
  };

  // --------------------- MOUSE DRAG ---------------------
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragEndX = useRef(0);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    dragEndX.current = e.clientX;
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;

    const diff = dragStartX.current - dragEndX.current;

    if (Math.abs(diff) > 40) {
      if (diff > 0) slideNext();
      else slidePrev();
    }
  };

  const handleMouseLeave = () => {
    if (isDragging.current) {
      isDragging.current = false;
    }
  };

  // --------------------- DIMENSIONS ---------------------
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
    window.addEventListener("load", calculateDimensions);

    return () => {
      window.removeEventListener("resize", calculateDimensions);
      window.removeEventListener("load", calculateDimensions);
    };
  }, []);

  // --------------------- SLIDE CONTROL ---------------------
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
      <button
        className={styles.arrow}
        onClick={slidePrev}
        disabled={currentIndex === 0}
      >
        &#8249;
      </button>

      <div
        className={styles.sliderViewport}
        ref={sliderRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={styles.sliderTrack}
          ref={trackRef}
          style={{
            transform: `translateX(-${currentIndex * slideWidth}px)`
          }}
        >
          {slidesData.map((slide) => (
            <div className={styles.slide} key={slide.id}>
              <img src={slide.img} alt={slide.title} />
              <a href={slide.link}>{slide.title}</a>
            </div>
          ))}
        </div>
      </div>

      <button
        className={styles.arrow}
        onClick={slideNext}
        disabled={currentIndex >= maxIndex}
      >
        &#8250;
      </button>
    </div>
  );
}

export default FiniteSlider;
