'use client';
import './Footer.css';
import footerlogo from './FooterLogo.png';
import instagram from './whatsapp.gif';
import whatsapp from './instagram.gif';


const Footer = () => {
  return (
    <div className='FooterDiv'>
        <img src={footerlogo.src} alt='Footer Logo' className='footer-logo'/>
        <div className='socialicons'>
        <a href="https://wa.me/923463637743" target="_blank" rel="noopener noreferrer">
            <img src={instagram.src} alt="Instagram" className="icon" />
        </a>
        <a href="https://instagram.com/burhansensei" target="_blank" rel="noopener noreferrer">
            <img src={whatsapp.src} alt="WhatsApp" className="icon" />
        </a>
        </div>
        <p className='footertext'>Developed By Burhan &Wizardry Brews.<br></br> Copyright © 2024 All Rights Reserved</p>
    </div>
  );
}

export default Footer;