"use client";
import React , { useState, useEffect } from 'react';
import './Header.css';
import { motion, AnimatePresence } from 'framer-motion';
import wizardrybrewlogo from './wbrew.jpg';
import carticon from './icons8-fast-cart-100.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          if (menuOpen && window.scrollY > 0.01) {
            setMenuOpen(false);
          }
        };

        if (menuOpen) {
          window.addEventListener('scroll', handleScroll);
        }
 
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [menuOpen]);


      const handleMenuButtonClick = () => {
        let scrollAmount = 1000;
        if (window.innerWidth <= 767.98) {
          scrollAmount = 910;
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

      const handleOrderButtonClick = () => {
        let scrollAmount = 1600;
        if (window.innerWidth <= 767.98) {
          scrollAmount = 2210;
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

      const handleGalleryButtonClick = () => {
        let scrollAmount = 2600;
        if (window.innerWidth <= 767.98) {
          scrollAmount = 2900;
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

      const handleAboutButtonClick = () => {
        let scrollAmount = 3600;
        if (window.innerWidth <= 767.98) {
          scrollAmount = 5000;
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
      
    const navContainer = {
        visible: {
          x: 0,
          transition: {
            delay: 0.1,
            type: 'tween'
          }
        },
        hidden: {
          x: 600,
          transition: {
            delay: 0.1,
            duration: 0.2,
            type: 'tween'
          }
        }
      };

    return ( 
        <motion.div className="main-header">
            <motion.img src={wizardrybrewlogo.src}
                className='WizardryBrewLogo'/> 
            <motion.button  className={`menu-button ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
                <motion.div className="menu-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </motion.div>
            </motion.button>
            
            <AnimatePresence>
            {menuOpen && (
                <motion.div
                    className="menu-overlay"
                    initial="hidden"
                    animate={menuOpen ? "visible" : "hidden"}
                    exit="hidden"
                    variants={navContainer}
                >
                    <div className="menu-items">
                        <motion.div onClick={handleMenuButtonClick} initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 0.1}} >Menu</motion.div>
                        <motion.div onClick={handleOrderButtonClick} initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 0.18}}>Order</motion.div>
                        <motion.div onClick={handleGalleryButtonClick} initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 0.26}}>Gallery</motion.div>
                        <motion.div onClick={handleAboutButtonClick} initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 0.32}}>About</motion.div>
                        <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 0.38}} className='menuoverlaytext'>Developed By Burhan &Wizardry Brews.<br></br> Copyright © 2024 All Rights Reserved</motion.p>
                    </div>
                </motion.div>
            )}
            </AnimatePresence>
        </motion.div>
        );
    }

export default Header;