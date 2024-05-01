'use client';
import './Menu.css';
import transcap from './transcap.png';
import {motion} from 'framer-motion';


const Menu = () => {



return (
    <div className='MenuSection'>
        <h1 className='MenuHeading'>Menu</h1>
        <img src={transcap.src} alt='Wizardry Brew Cup' className='transcup'/>
        <motion.div initial={{rotate: -2}} className='espresso'>
            <h1 className='espressoheading'>Espresso</h1>
            <h2 className='espressodrink'>Cappuccino - Rs.500/</h2>
            <p className='espressodesc'>Espresso freshly pulled at 40 bar pressure, with a thick layer of foam.</p>
            <h2 className='espressodrink'>Latte - Rs.500/</h2>
            <p className='espressodesc'>Carefully keeping foam in check for the latte lovers.</p>
            <h2 className='espressodrink'>Macchiato - Rs.550/</h2>
            <p className='espressodesc'>For the people who love sweetened espresso.</p>
            <h2 className='espressodrink'>Mocha - Rs.550/</h2>
            <p className='espressodesc'>Cap with melted chocolate, yumm.</p>
        </motion.div>
    </div>
);
};

export default Menu;