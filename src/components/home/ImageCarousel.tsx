
import React, { useState, useEffect } from 'react';

const images = [
  'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80',
];

const ImageCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-festblue-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Event Gallery</h2>
          <div className="w-20 h-1 bg-festblue-accent mx-auto mt-4"></div>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden rounded-xl h-[60vh]">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                  index === currentImage ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image}
                  alt={`Festival image ${index + 1}`}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            ))}
          </div>
          
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentImage ? 'bg-festblue-accent' : 'bg-white/50'
                }`}
                onClick={() => setCurrentImage(index)}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
          
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
            onClick={() => setCurrentImage(prev => (prev === 0 ? images.length - 1 : prev - 1))}
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
            onClick={() => setCurrentImage(prev => (prev === images.length - 1 ? 0 : prev + 1))}
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
