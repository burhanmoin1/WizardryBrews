'use client';
import HeroBackground from './HeroBackground';
import './HeroSection.css';
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const HeroSection = () => {
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
            <motion.h1 className='HeroHeading'>Coffee Brewed By An Enthusiast For Enthusiasts</motion.h1>
                <motion.p className='HeroParagraph'>I usually do magic when writing code but decided to share some through coffee.</motion.p>
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