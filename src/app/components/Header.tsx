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
                      <a href='#menu'>
                        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 0.1}} >Menu</motion.div></a>
                        <a href='#order'>
                        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 0.18}}>Order</motion.div></a>
                        <a href='#gallery'>
                        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 0.26}}>Gallery</motion.div></a>
                        <a href='about'>
                        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 0.32}}>About</motion.div></a>
                    </div>
                </motion.div>
            )}
            </AnimatePresence>
        </motion.div>
        );
    }

export default Header;