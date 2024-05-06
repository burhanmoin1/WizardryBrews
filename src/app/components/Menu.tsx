'use client';
import './Menu.css';
import transcap from './transparentcup.png';
import {motion} from 'framer-motion';


const Menu = () => {

return (
    <section id='menu'>
    <div className='MenuSection'>
        <h1 className='MenuHeading'>Menu</h1>
        <img src={transcap.src} alt='Wizardry Brew Cup' className='transcup'/>
        <div className='espressonlatte'>
            
        <motion.div whileHover={{rotate: -1}} className='espresso'>
        <h1 className='espressoheading'>Espresso</h1>
            <motion.h2 initial={{opacity: 0}} whileInView={{opacity:1, transition: {duration: .2, delay: .2}}} className='espressodrink'>Cappuccino - Rs.500/</motion.h2>
            <motion.p initial={{opacity: 0}} whileInView={{opacity:1, transition: {duration: .2, delay: .3}}} className='espressodesc'>Espresso freshly pulled at 40 bar pressure, with a thick layer of foam.</motion.p>
            <motion.h2 initial={{opacity: 0}} whileInView={{opacity:1, transition: {duration: .2, delay: .4}}} className='espressodrink'>Latte - Rs.500/</motion.h2>
            <motion.p initial={{opacity: 0}} whileInView={{opacity:1, transition: {duration: .2, delay: .5}}} className='espressodesc'>Carefully keeping foam in check for the latte lovers.</motion.p>
            <motion.h2 initial={{opacity: 0}} whileInView={{opacity:1, transition: {duration: .2, delay:.6}}} className='espressodrink'>Macchiato - Rs.550/</motion.h2>
            <motion.p initial={{opacity: 0}} whileInView={{opacity:1, transition: {duration: .2, delay: .7}}} className='espressodesc'>For the people who love sweetened espresso.</motion.p>
            <motion.h2 initial={{opacity: 0}} whileInView={{opacity:1, transition: {duration: .2, delay: .8}}} className='espressodrink'>Mocha - Rs.550/</motion.h2>
            <motion.p initial={{opacity: 0}} whileInView={{opacity:1, transition: {duration: .2, delay: .9}}}className='espressodesc'>Cap with melted chocolate, yumm.</motion.p>
        </motion.div>        <motion.div whileHover={{rotate: 1}} className='iced-latte'>
            <h1 className='espressoheading'>Iced Latte</h1>
            <motion.h2 initial={{opacity: 0}} whileInView={{opacity:1, transition: {duration: .2, delay: .2}}}  className='espressodrink'>Iced Vanilla Latte - Rs.700/</motion.h2>
            <motion.p initial={{opacity: 0}} whileInView={{opacity:1, transition: {duration: .2, delay: .3}}}  className='espressodesc'>Classic vanilla flavour with espresso and milk.</motion.p>
            <motion.h2 initial={{opacity: 0}} whileInView={{opacity:1, transition: {duration: .2, delay: .4}}}  className='espressodrink'>Iced caramel latte - Rs.700/</motion.h2>
            <motion.p initial={{opacity: 0}} whileInView={{opacity:1, transition: {duration: .2, delay: .5}}}  className='espressodesc'>Caramel and coffee 💥 something magical!</motion.p>
            <motion.h2 initial={{opacity: 0}} whileInView={{opacity:1, transition: {duration: .2, delay: .6}}}  className='espressodrink'>Mocha - Rs.750/</motion.h2>
            <motion.p initial={{opacity: 0}} whileInView={{opacity:1, transition: {duration: .2, delay: .7}}}  className='espressodesc'>For the chocolate lovers ice, milk, coffee & chocolate, woahh 🤤.</motion.p>
        </motion.div>
        </div>
    </div>
    </section>
);
};

export default Menu;