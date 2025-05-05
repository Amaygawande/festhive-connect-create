
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/lovable-uploads/d8ec7a8e-acb5-411f-8e0a-bf9b75d7b8c6.png)' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-festblue/80 to-festblue/70"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-white mb-4"
        >
          <span className="block">Welcome to</span>
          <span className="block text-festblue-accent">IES UNIVERSITY BHOPAL</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
        >
          Celebrate, Connect, Create – Your College Fest, Simplified!
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
        >
          <Button 
            asChild 
            size="lg"
            className="bg-festblue-accent hover:bg-festblue-accent/80 text-lg px-8"
          >
            <Link to="/events">Explore Events</Link>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white/10 text-lg px-8"
          >
            <a href="#contact">Contact Us</a>
          </Button>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
        >
          <Button 
            asChild 
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-lg px-8"
          >
            <Link to="/signin?role=student">Student Login</Link>
          </Button>
          <Button 
            asChild 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-lg px-8"
          >
            <Link to="/signin?role=admin">Admin Login</Link>
          </Button>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16"
        >
          <a 
            href="#about" 
            className="inline-flex items-center text-white hover:text-festblue-accent transition-colors"
          >
            <span className="mr-2">Scroll Down</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="w-5 h-5 animate-bounce"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
