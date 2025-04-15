'use client';

import Link from 'next/link'
import { FlipWords } from "@/components/ui/flip-words";
import { useEffect, useState } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  const creativeBrandWords = [
    "Digital Presence",
    "Brand Identity",
    "Online Impact",
    "Visual Storytelling",
    "Market Position"
  ];

  return (
    <section id="home" className="relative py-32 md:py-40 overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
      {/* Animated Background Elements - Now Interactive with Mouse */}
      <div 
        className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"
        style={{ 
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      ></div>
      <div 
        className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" 
        style={{ 
          animationDelay: '1s',
          transform: `translate(${-mousePosition.x * 20}px, ${-mousePosition.y * 20}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      ></div>
      
      {/* Decorative icons */}
      <div className="absolute top-20 left-[15%] animate-bounce" style={{ animationDuration: '5s' }}>
        <div className="text-5xl rotate-12 opacity-20">🎨</div>
      </div>
      <div className="absolute bottom-20 right-[15%] animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
        <div className="text-5xl -rotate-12 opacity-20">💡</div>
      </div>
      <div className="absolute top-1/3 right-[10%] animate-bounce" style={{ animationDuration: '6s', animationDelay: '0.5s' }}>
        <div className="text-5xl rotate-6 opacity-20">✨</div>
      </div>
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center">
          <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 animate-pulse">Digital Agency</span>
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 leading-tight">
            Elevate Your Brand's <br />
            <span className="inline-block mt-2">
              <FlipWords 
                words={creativeBrandWords} 
                duration={2500} 
                className="text-primary font-bold drop-shadow-md" 
              />
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto text-center">
            Your brand deserves more than just content—it needs a strategy, a voice, and a presence that makes a real impact. That's where we come in.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#services" className="cta-button flex items-center gap-2 text-lg px-8 py-3 group relative overflow-hidden">
              <span className="relative z-10">Our Services</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
            </Link>
            <Link href="#contact" className="secondary-button flex items-center gap-2 text-lg px-8 py-3 overflow-hidden relative group">
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 bg-gradient-to-r from-primary/20 to-secondary/20"></div>
            </Link>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-gray-500 mb-2">Scroll Down</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
} 