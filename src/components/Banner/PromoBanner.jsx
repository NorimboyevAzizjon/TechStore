import React, { useState, useEffect } from 'react';
import styles from './PromoBanner.module.css';
import Heroimg from '../../assets/img/div.swiper-container.png';
import Heroimg2 from '../../assets/img/div.inline-wrapper.png';
import Heroimg3 from '../../assets/img/Link.png';

const PromoBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [Heroimg, Heroimg2, Heroimg3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className={styles.promoBanner}>
      <div className={styles.carouselContainer}>
        <div className={styles.carousel}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`${styles.slide} ${
                index === currentSlide ? styles.active : ''
              }`}
            >
              <img 
                src={image} 
                alt={`Promo banner ${index + 1}`} 
                className={styles.carouselImage}
              />
            </div>
          ))}
        </div>

        <button className={styles.prevButton} onClick={prevSlide}>
          &#10094;
        </button>
        <button className={styles.nextButton} onClick={nextSlide}>
          &#10095;
        </button>

        <div className={styles.indicators}>
          {images.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${
                index === currentSlide ? styles.active : ''
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;