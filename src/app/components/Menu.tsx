'use client';
import './Menu.css';
import transcap from './transcap.png';
import {motion} from 'framer-motion';


const Menu = () => {



return (
    <div className='MenuSection'>
        <h1 className='MenuHeading'>Menu</h1>
        <img src={transcap.src} alt='Wizardry Brew Cup' className='transcup'/>
        <motion.div className='espresso'>
            <h1 className='espressoheading'>Espresso</h1>
            <h2 className='espressodrink'>Cappuccino - Rs.500/</h2>
            <p className='espressodesc1'>Espresso freshly pulled at 40 bar pressure, with a thick layer of foam.</p>
            <h2 className='espressodrink'>Latte - Rs.500/</h2>
            <p className='espressodesc'>Carefully keeping foam in check for the latte lovers.</p>
            <h2 className='espressodrink'>Macchiato - Rs.550/</h2>
            <p className='espressodesc'>For the people who love sweetened espresso.</p>
            <h2 className='espressodrink'>Mocha - Rs.550/</h2>
            <p className='espressodesc'>Cap with melted chocolate, yumm.</p>
        </motion.div>
        <motion.div className='iced-latte'>
            <h1 className='espressoheading'>Iced Latte</h1>
            <h2 className='espressodrink'>Iced Vanilla Latte - Rs.700/</h2>
            <p className='lattedesc'>Classic vanilla flavour with espresso and milk.</p>
            <h2 className='espressodrink'>Iced caramel latte - Rs.700/</h2>
            <p className='lattedesc'>Caramel and coffee 💥 something magical!</p>
            <h2 className='mochalatte'>Mocha - Rs.750/</h2>
            <p className='lattedesc'>For the chocolate lovers ice, milk, coffee & chocolate, woahh 🤤.</p>
        </motion.div>
    </div>
);
};

export default Menu;