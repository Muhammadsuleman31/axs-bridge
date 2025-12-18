"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./InfiniteSlider.module.css";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const slidesData = [
  { id: 1, title: "Assurance", link: "/services/assurance", img: "/services-icons/assurance-icon.svg" },
  { id: 2, title: "Tax", link: "/services/tax", img: "/services-icons/tax-icon.svg" },
  { id: 3, title: "Advisory", link: "/services/advisory", img: "/services-icons/advisory-icon.svg" },
  { id: 4, title: "Business Solutions", link: "/services/business-solutions", img: "/services-icons/business-solutions-icon.svg" },
  { id: 5, title: "Corporate Finance", link: "/services/corporate-finance", img: "/services-icons/corporate-finance-icon.svg" },
  { id: 6, title: "Private Capital Solutions", link: "/services/private-capital", img: "/services-icons/pcsc.svg" },
  { id: 7, title: "Sustainability & ESG", link: "/services/sustainability-esg", img: "/services-icons/esg.svg" },
  { id: 8, title: "Hospitality Consulting", link: "/services/hospitality-consulting", img: "/services-icons/hospitality-consulting.svg" }
];

function FiniteSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [slideWidth, setSlideWidth] = useState(0);
  
  // Real-time drag state
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const sliderRef = useRef(null);
  const trackRef = useRef(null);
  const startX = useRef(0);
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
          setSlidesPerView(viewportWidth / totalWidth);
        }
      }
    }

    calculateDimensions();
    window.addEventListener("resize", calculateDimensions);
    return () => window.removeEventListener("resize", calculateDimensions);
  }, []);

  const maxIndex = Math.max(0, Math.ceil(slidesData.length - slidesPerView));

  // --------------------- HELPERS ---------------------
  const getSafeIndex = (index) => Math.max(0, Math.min(index, maxIndex));

  // --------------------- EVENT HANDLERS ---------------------
  const handleDragStart = (e) => {
    setIsDragging(true);
    startX.current = e.type === "mousedown" ? e.clientX : e.touches[0].clientX;
    clickBlocked.current = false;
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;

    const currentX = e.type === "mousemove" ? e.clientX : e.touches[0].clientX;
    const diff = currentX - startX.current;

    // Apply a "resistance" if dragging past boundaries
    let movement = diff;
    if ((currentIndex === 0 && diff > 0) || (currentIndex >= maxIndex && diff < 0)) {
        movement = diff * 0.3; // Rubber-band effect
    }

    setDragOffset(movement);

    if (Math.abs(diff) > 10) {
      clickBlocked.current = true;
    }
  };

  const handleDragEnd = () => {
    if (!isDragging) return;

    // Calculate how many slides were moved based on drag distance
    const movedSlides = Math.round(dragOffset / slideWidth);
    const nextIndex = getSafeIndex(currentIndex - movedSlides);

    setIsDragging(false);
    setDragOffset(0);
    setCurrentIndex(nextIndex);
  };

  return (
    <div className={styles.sliderContainer}>
      <button 
        className={`${styles.leftarrow} ${styles.arrow}`} 
        onClick={() => setCurrentIndex(prev => getSafeIndex(prev - 1))} 
        disabled={currentIndex === 0}
      >
        <FiChevronLeft size={60} />
      </button>

      <div
        className={styles.sliderViewport}
        ref={sliderRef}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        <div
          className={styles.sliderTrack}
          ref={trackRef}
          style={{
            // Disable transition ONLY while dragging for instant response
            transition: isDragging ? "none" : "transform 0.5s ease-out",
            transform: `translateX(${-currentIndex * slideWidth + dragOffset}px)`
          }}
        >
          {slidesData.map((slide) => (
            <div className={styles.slide} key={slide.id}>
              <a
                href={slide.link}
                className={styles.slideLink}
                onClick={(e) => {
                  if (clickBlocked.current) e.preventDefault();
                }}
              >
                <img src={slide.img} alt={slide.title} draggable="false" style={{ 
    aspectRatio: "1 / 1", // Makes the image a perfect square
        // Ensures it fills the slide width
  }} />
                <span className={styles.slideTitle}>{slide.title}</span>
              </a>
            </div>
          ))}
        </div>
      </div>

      <button
        className={`${styles.rightarrow} ${styles.arrow}`}
        onClick={() => setCurrentIndex(prev => getSafeIndex(prev + 1))}
        disabled={currentIndex >= maxIndex}
      >
        <FiChevronRight size={60} />
      </button>
    </div>
  );
}

export default FiniteSlider;