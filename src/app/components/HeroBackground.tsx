'use client';
import './HeroSection.css';
import backgroundimg from './coffeecup.png';

interface HeroBackgroundProps {
    children?: React.ReactNode;
  }

const HeroBackground: React.FC<HeroBackgroundProps> = ({ children }) => {
    
    return (
        <div className='HeroBackground'>
            <img className='imgcheck' src={backgroundimg.src} alt='WizardryBrewImg'/>
             {children}
        </div>
    );
};

export default HeroBackground;