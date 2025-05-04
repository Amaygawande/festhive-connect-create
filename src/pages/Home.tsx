
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Features from '@/components/home/Features';
import ImageCarousel from '@/components/home/ImageCarousel';
import ContactForm from '@/components/home/ContactForm';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-festblue">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <ImageCarousel />
        <Features />
        <ContactForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
