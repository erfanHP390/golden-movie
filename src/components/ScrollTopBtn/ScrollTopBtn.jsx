import React, { useState, useEffect } from 'react';
import { FiChevronsUp } from "react-icons/fi";

export default function ScrollTopBtn() {
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
      const toggleVisibility = () => {
        if (window.pageYOffset > 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
    
      window.addEventListener('scroll', toggleVisibility);
      return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);
    
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
    
    return (
      <button
        className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
        onClick={scrollToTop}
      >
        <FiChevronsUp />
      </button>
    );
}


