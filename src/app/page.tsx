import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import Menu from "./components/Menu";
import wizardicon from '/wizardicon.png';
import Order from "./components/Order";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Mulish:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet"/>
      <link rel="icon" href="./favicon.ico"/>
      <Header />
      <HeroSection />
      <Menu />
      <Order/>
      <Gallery />
      <About />
      <Footer/>
    </main>
  );
}
