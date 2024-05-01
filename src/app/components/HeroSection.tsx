'use client';
import HeroBackground from './HeroBackground';
import './HeroSection.css';
import {motion} from 'framer-motion';

const HeroSection = () => {
    
    return (
        <HeroBackground>
        <h1 className='HeroHeading'>Coffee Brewed By An Enthusiast For Enthusiasts</h1>
        <p className='HeroParagraph'>I usually do magic when writing code but decided to share some through coffee.</p>
        <motion.button
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