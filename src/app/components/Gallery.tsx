'use client';
import './Gallery.css';
import firstpic from './Capforgallery.jpg';
import secondpic from './AnotheCap.jpg';
import thirdpic from './Morecaps.jpg';
import fifthpic from './Coffeeinside.jpg';
import sixthpic from './Coffeepacks.jpg';

const Gallery = () => {
  return (
    <div className='GallerySection'>
        <h1 className='OrderHeading'>Gallery</h1>
        <div className='GallerySet'>
        <img src={firstpic.src} className='imagesforgallery' alt='Wizardry Brews Burhan'/>
        <img src={secondpic.src} className='imagesforgallery' alt='Wizardry Brews Capuccino'/>
        <img src={thirdpic.src} className='imagesforgallery' alt='Wizardry Brews Capuccino'/>
        <img src={fifthpic.src} className='imagesforgallery' alt='Wizardry Brews Capuccino'/>
        <img src={sixthpic.src} className='imagesforgallery' alt='Wizardry Brews Capuccino'/>
        </div>
    </div>
  );
};

export default Gallery;
