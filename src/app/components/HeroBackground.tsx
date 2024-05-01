'use client';
import './HeroSection.css';
import backgroundimg from './coffeecup.png';
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

interface HeroBackgroundProps {
    children?: React.ReactNode;
  }

const HeroBackground: React.FC<HeroBackgroundProps> = ({ children }) => {
    const { scrollY } = useScroll();
    useMotionValueEvent(scrollY, "change", (latest) => {
        console.log("Page scroll: ", latest)
    })
    const y1 = useTransform(scrollY, [0, 300], [0, 200]);
    
    return (
        <div className='HeroBackground'>
            <motion.img className='imgcheck' src={backgroundimg.src} alt='WizardryBrewImg'/>
             {children}
        </div>
    );
};

export default HeroBackground;