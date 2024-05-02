'use client';
import './About.css';
import AusPic from './Auspic.jpg';

const About = () => {
  return (
    <div className='AboutSection'>
      <h1 className='OrderHeading'>About</h1>
      <img src={AusPic.src} alt='Wizardry Brews Founder' className='FounderPic' />
      <div className='StorySection'>
        <h2 className='MissionHeading'>Story</h2>
        <p className='StoryDesc'>
          My journey into the world of coffee began during a visit to Australia. It was there, amid the bustling cafés of Sydney, that I discovered the art and culture of coffee brewing. I was captivated by the precision of the baristas, the warmth of the community, and the intricate flavors of each cup. I learned everything I could—how to pull a perfect shot of espresso, the art of milk frothing, and the secrets of latte art.
        </p>
        <p className='StoryDesc'>
          Returning home, I brought more than just skills; I carried a dream—to create a space where coffee wasnt just a drink but an experience. I converted my kitchen into a mini coffee shop, complete with a professional espresso machine, a grinder, and all the tools of the trade. It wasnt long before the rich aroma of freshly ground coffee beans filled my home, where I experience coffee like in Australia.
        </p>
        <h2 className='MissionHeading'>Future</h2>
        <p className='StoryDesc'>
          If youve scrolled this far down on the website, then kudos to you. I will be focusing on customer satisfaction and safety. As demand grows, I plan to expand my coffee delivery services, ensuring that every order is handled with the utmost care and precaution.
        </p>
        <p className='StoryDesc'>
          Contactless delivery, rigorous sanitation practices, and eco-friendly packaging will be at the core of my operations.<br></br><br></br> Additionally, Ill keep my website updated with the latest offerings, seasonal blends, and behind-the-scenes stories, turning it into a vibrant showcase of my work as a developer. Through continuous improvement and a commitment to exceptional coffee, Wizardry Brew Coffee aims to become a local favorite, delivering magic in every cup.
        </p>
      </div>
    </div>
  );
};

export default About;
