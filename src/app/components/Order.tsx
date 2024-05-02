'use client';
import './Order.css';

const Order = () => {
  return (
    <div className='OrderSection'>
      <h1 className='OrderHeading'>Order</h1>
      <h2 className='indevelopment'>
        An ordering system is currently in development. Meanwhile, you can place orders by calling, texting, or WhatsApp at
        <a className='linkname' href="tel:+92346367743">  +92346367743</a>. 
        Or you can contact me through Instagram at 
        <a href="https://www.instagram.com/burhansensei/" className='linkname' target="_blank" rel="noopener noreferrer"> @burhansensei</a>,<a className='linkname' href="https://www.instagram.com/wizardrybrews/" target="_blank" rel="noopener noreferrer"> @wizardrybrews</a> 
      </h2>
    </div>
  );
};

export default Order;
