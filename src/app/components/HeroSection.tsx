'use client';
import HeroBackground from './HeroBackground';
import './HeroSection.css';
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const HeroSection = () => {
    const { scrollY } = useScroll();
    useMotionValueEvent(scrollY, "change", (latest) => {
        console.log("Page scroll: ", latest)
    })
    
    
    return (
        <HeroBackground>
            <motion.h1 className='HeroHeading'>Coffee Brewed By An Enthusiast For Enthusiasts</motion.h1>
                <motion.p className='HeroParagraph'>I usually do magic when writing code but decided to share some through coffee.</motion.p>
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