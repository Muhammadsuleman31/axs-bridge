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

  // Fix flags
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragDelta = useRef(0);
  const clickBlocked = useRef(false);

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

  // --------------------- MOUSE EVENTS ---------------------
  const handleMouseDown = (e) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
    dragDelta.current = 0;
    clickBlocked.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;

    dragDelta.current = e.clientX - dragStartX.current;

    // Start drag only if movement > 5px
    if (Math.abs(dragDelta.current) > 5) {
      clickBlocked.current = true;
    }
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;

    // Only slide if movement > 40px
    if (Math.abs(dragDelta.current) > 40) {
      if (dragDelta.current < 0) slideNext();
      else slidePrev();
    }
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  // --------------------- TOUCH EVENTS ---------------------
  const touchStart = useRef(0);

  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
    dragDelta.current = 0;
    clickBlocked.current = false;
  };

  const handleTouchMove = (e) => {
    const delta = e.touches[0].clientX - touchStart.current;
    dragDelta.current = delta;

    if (Math.abs(delta) > 5) {
      clickBlocked.current = true;
      e.preventDefault();
    }
  };

  const handleTouchEnd = () => {
    if (Math.abs(dragDelta.current) > 40) {
      if (dragDelta.current < 0) slideNext();
      else slidePrev();
    }
  };

  return (
    <div className={styles.sliderContainer}>
      <button className={styles.arrow} onClick={slidePrev} disabled={currentIndex === 0}>
        &#8249;
      </button>

      <div
        className={styles.sliderViewport}
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={styles.sliderTrack}
          ref={trackRef}
          style={{
            transform: `translateX(-${currentIndex * slideWidth}px)`
          }}
        >
          {slidesData.map((slide) => (
            <div
              className={styles.slide}
              key={slide.id}
              onClick={(e) => {
                if (clickBlocked.current) {
                  e.preventDefault();
                  return;
                }
                window.location.href = slide.link;
              }}
            >
              <img src={slide.img} alt={slide.title} />
              <a
                href={slide.link}
                onClick={(e) => {
                  if (clickBlocked.current) e.preventDefault();
                }}
              >
                {slide.title}
              </a>
            </div>
          ))}
        </div>
      </div>

      <button
        className={styles.arrow}
        onClick={slideNext}
        disabled={currentIndex >= Math.ceil(slidesData.length - slidesPerView)}
      >
        &#8250;
      </button>
    </div>
  );
}

export default FiniteSlider;
