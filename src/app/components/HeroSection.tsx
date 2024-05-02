'use client';
import React, {useEffect, useState} from 'react';
import HeroBackground from './HeroBackground';
import './HeroSection.css';
import { motion, useScroll, useTransform, useMotionValueEvent, delay } from "framer-motion";



const HeroSection = () => {

  const threshold = 767.98;

  const [innerWidth, setInnerWidth] = useState(0);

  useEffect(() => {
    // Update the innerWidth once the component is mounted
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };

    // Initialize innerWidth and set up a resize event listener
    handleResize();
    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Determine initial Y value based on the window width
  const initialY = innerWidth <= threshold ? -180 : -130;
  const animateY = innerWidth <= threshold ? -190: -150;


    const handleButtonClick = () => {
        let scrollAmount = 1000;
        if (window.innerWidth <= 767.98) {
          scrollAmount = 850;
        }
        
        const currentScroll = window.scrollY;
        const targetScroll = currentScroll + scrollAmount;
        const scrollDuration = 500;
        
        const startTime = performance.now();
        
        const animateScroll = (currentTime: DOMHighResTimeStamp) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / scrollDuration, 1);
          
          const easing = 1 - Math.pow(1 - progress, 3); // Ease-out cubic
          const scrollPosition = currentScroll + (scrollAmount * easing);
          
          window.scrollTo(0, scrollPosition);
          
          if (progress < 1) {
            requestAnimationFrame(animateScroll);
          }
        };
      
        requestAnimationFrame(animateScroll);
      };
      
    return (
        <HeroBackground>
            <h1 className='HeroHeading'>Coffee Brewed By An Enthusiast For Enthusiasts</h1>
                <motion.p initial={{y:initialY, opacity: 0}} animate={{opacity: 1, y: animateY, transition:{type: 'tween',delay: .1}}} className='HeroParagraph'>I usually do magic when writing code but decided to share some through coffee.</motion.p>
                    <motion.button
                    onClick={handleButtonClick}
                    whileHover={{ scale: 1.4, transition: { delay: 0.01 } }}
                    animate={{
                    y: [0, 40, 0],
                    transition: { repeat: Infinity, duration: 2, delay: 0.4, type: "tween" },
                    }}
                    className="arrow-button"
                    >
                        &#8595;
                    </motion.button>
        </HeroBackground>
    );
};

export default HeroSection;