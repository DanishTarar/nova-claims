import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CeoProfile from './components/CeoProfile';
import InfoCards from './components/InfoCards';
import ConsultationForm from './components/ConsultationForm';
import ContactStrip from './components/ContactStrip';
import WhatsAppFloat from './components/WhatsAppFloat';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';



function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });

    // Navbar scroll effect
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CeoProfile />
      <InfoCards />
      <ConsultationForm />
      <ContactStrip />
      <WhatsAppFloat />
    </div>
  );
}

export default App;