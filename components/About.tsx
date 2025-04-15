'use client';

import Link from 'next/link'
import Image from 'next/image'
import { FlipWords } from '@/components/ui/flip-words';
import { useState } from 'react';

const stats = [
  { value: '5+', label: 'Years of Experience' },
  { value: '100+', label: 'Clients Worldwide' },
  { value: '500+', label: 'Projects Completed' },
  { value: '25+', label: 'Industry Awards' }
]

export default function About() {
  const [activeStatIndex, setActiveStatIndex] = useState<number | null>(null);
  const brandDescriptions = [
    "passionate storytellers",
    "creative problem-solvers",
    "strategic thinkers",
    "digital innovators",
    "trend forecasters"
  ];

  return (
    <section id="about" className="py-24 bg-light relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 opacity-60 animate-text-gradient"></div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/5 rounded-full"></div>
      </div>
      
      {/* Decorative floating elements */}
      <div className="absolute top-40 left-[5%] animate-float" style={{ animationDelay: '0.5s' }}>
        <div className="h-16 w-16 bg-primary/10 rounded-full backdrop-blur-md"></div>
      </div>
      <div className="absolute bottom-40 right-[15%] animate-float-slow">
        <div className="h-20 w-20 bg-secondary/10 rounded-full backdrop-blur-md"></div>
      </div>
      <div className="absolute top-[30%] right-[20%] animate-float" style={{ animationDelay: '1s' }}>
        <div className="h-12 w-12 bg-accent/20 rounded-full backdrop-blur-md"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 order-2 md:order-1">
            <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 inline-block animate-pulse">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
            
            <p className="text-gray-600 mb-5">
              B Creative Media Services is a team of <FlipWords words={brandDescriptions} duration={3000} className="font-medium text-primary" /> dedicated to helping businesses thrive in the digital landscape.
            </p>
            <p className="text-gray-600 mb-8">
              We believe that every brand has a unique story to tell, and we're here to help you tell it in the most compelling way possible. Our approach combines creativity with data-driven strategies to deliver measurable results.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center card-3d p-4 rounded-lg border border-transparent transition-all duration-300"
                  style={{
                    borderColor: activeStatIndex === index ? 'rgba(255,107,107,0.3)' : 'transparent',
                    background: activeStatIndex === index ? 'rgba(255,255,255,0.8)' : 'transparent',
                  }}
                  onMouseEnter={() => setActiveStatIndex(index)}
                  onMouseLeave={() => setActiveStatIndex(null)}
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <Link href="#contact" className="cta-button inline-flex items-center relative overflow-hidden group">
              <span className="relative z-10">Work With Us</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2 relative z-10 group-hover:translate-x-1 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
              
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
            </Link>
          </div>
          
          <div className="flex-1 order-1 md:order-2 relative">
            <div className="card-3d rounded-xl overflow-hidden shadow-xl relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 z-10 mix-blend-overlay"></div>
              
              <Image
                src="/api/placeholder/600/400"
                alt="B Creative Team"
                width={600}
                height={400}
                className="w-full transition-transform duration-700 hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100 flex items-end z-20">
                <div className="p-6 text-white transform translate-y-4 hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold">Meet Our Team</h3>
                  <p>A diverse group of creative professionals</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements around the image */}
            <div className="absolute -top-4 -right-4 h-20 w-20 border-t-4 border-r-4 border-primary/30 rounded-tr-2xl"></div>
            <div className="absolute -bottom-4 -left-4 h-20 w-20 border-b-4 border-l-4 border-secondary/30 rounded-bl-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
} 