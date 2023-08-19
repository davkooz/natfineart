import Image from 'next/image'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Carousel from './components/carousel';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Link from 'next/link';
import ContactUs from './components/contactus';

export default function Home() {
  return (
    <main className="bg-white min-h-screen min-w-screen flex flex-col">
      <Navbar/>
      <Carousel/>
      <ContactUs/>
      <Footer/>
    </main>
  )
}
