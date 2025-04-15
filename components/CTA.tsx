'use client';

import Link from 'next/link'
import { FlipWords } from '@/components/ui/flip-words';
import ColourfulText from '@/components/ui/colourful-text';
import { useState, useEffect } from 'react';

export default function CTA() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  const transformWords = ["Transform", "Elevate", "Revolutionize", "Amplify", "Reimagine"];
  const actionWords = ["Take Action", "Get Started", "Join Us", "Connect Now", "Elevate Today"];

  return (
    <section className="py-28 relative overflow-hidden">
      {/* Interactive Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"
        style={{
          backgroundPosition: `${mousePosition.x * 100}% ${mousePosition.y * 100}%`,
          transition: 'background-position 0.3s ease-out',
        }}
      ></div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="absolute rounded-full bg-white/10 animate-float"
            style={{
              width: `${Math.random() * 80 + 20}px`,
              height: `${Math.random() * 80 + 20}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5,
            }}
          />
        ))}
      </div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full mix-blend-overlay transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white rounded-full mix-blend-overlay transform translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to <FlipWords words={transformWords} duration={2000} className="underline decoration-accent decoration-4 underline-offset-4" /> Your{" "}
            <span className="block mt-2">
              <ColourfulText text="Digital Presence" />
            </span>
          </h2>
          
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            The digital world moves fast. Don't get left behind. Let's create a strategy that keeps your brand ahead of the curve.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              href="#contact" 
              className="relative overflow-hidden group rounded-full"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <div className="absolute inset-0 bg-white transition-all duration-500 rounded-full"></div>
              <div className="relative px-10 py-4 flex items-center gap-2 font-medium text-lg z-10 text-primary">
                <span>
                  <FlipWords words={actionWords} duration={2000} />
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6.8 3.11 2.19 4.024C6.07 17.792 8.57 18 12 18s5.93-.208 7.935-1.216c1.39-.913 2.19-2.424 2.19-4.024V7.74c0-1.6-.8-3.11-2.19-4.024C17.93 2.708 15.43 2.5 12 2.5s-5.93.208-7.935 1.216C2.674 4.63 1.875 6.14 1.875 7.74v6.02z" />
                </svg>
              </div>
              <div 
                className="absolute inset-0 bg-white/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-all duration-700"
                style={{
                  transform: hovered 
                    ? `translate(${(mousePosition.x - 0.5) * 50}px, ${(mousePosition.y - 0.5) * 50}px) scale(1.5)` 
                    : 'scale(0)',
                }}
              ></div>
            </Link>
            
            <Link href="#portfolio" className="border-2 border-white text-white hover:bg-white hover:text-primary transition-all px-10 py-4 rounded-full font-medium text-lg group relative overflow-hidden">
              <span className="relative z-10">View Our Work</span>
              <div className="absolute inset-0 bg-white/10 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>
            </Link>
          </div>
          
          <div className="mt-16 flex flex-wrap justify-center gap-10 pt-8 border-t border-white/20">
            <div className="text-center relative group">
              <div className="text-3xl font-bold group-hover:scale-110 transition-transform">100+</div>
              <div className="text-sm opacity-80">Happy Clients</div>
              <div className="absolute -bottom-2 left-1/2 w-0 h-1 bg-accent group-hover:w-full transition-all duration-300 -translate-x-1/2"></div>
            </div>
            <div className="text-center relative group">
              <div className="text-3xl font-bold group-hover:scale-110 transition-transform">500+</div>
              <div className="text-sm opacity-80">Projects Completed</div>
              <div className="absolute -bottom-2 left-1/2 w-0 h-1 bg-accent group-hover:w-full transition-all duration-300 -translate-x-1/2"></div>
            </div>
            <div className="text-center relative group">
              <div className="text-3xl font-bold group-hover:scale-110 transition-transform">5★</div>
              <div className="text-sm opacity-80">Client Rating</div>
              <div className="absolute -bottom-2 left-1/2 w-0 h-1 bg-accent group-hover:w-full transition-all duration-300 -translate-x-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 