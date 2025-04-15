'use client';

import { useRef, useState } from 'react';
import { FlipWords } from '@/components/ui/flip-words';
import ColourfulText from '@/components/ui/colourful-text';

const services = [
  {
    icon: '📊',
    title: 'Brand Strategy',
    description: 'We develop comprehensive brand strategies that align with your business goals and resonate with your target audience.',
    keywords: ['Brand DNA', 'Market Analysis', 'Positioning', 'Voice & Tone']
  },
  {
    icon: '📱',
    title: 'Social Media Management',
    description: 'Let us handle your social presence with expert content planning, community engagement, and performance analytics.',
    keywords: ['Content Calendar', 'Community Building', 'Analytics', 'Growth Tactics']
  },
  {
    icon: '📝',
    title: 'Content Creation',
    description: 'From eye-catching visuals to compelling copy, we create content that stops the scroll and drives engagement.',
    keywords: ['Visuals', 'Copywriting', 'Video', 'Stories']
  },
  {
    icon: '🎨',
    title: 'Graphic Design',
    description: 'Stand out with custom graphics, illustrations, and visual elements that strengthen your brand identity.',
    keywords: ['Brand Identity', 'Digital Assets', 'Print Media', 'UI Design']
  },
  {
    icon: '👥',
    title: 'Lead Management',
    description: 'We implement efficient systems to capture, nurture, and convert leads into loyal customers.',
    keywords: ['CRM Setup', 'Lead Nurturing', 'Conversion Strategies', 'Retention']
  },
  {
    icon: '📢',
    title: 'Meta Ads',
    description: 'Maximize your ROI with strategic ad campaigns across Facebook, Instagram, and other Meta platforms.',
    keywords: ['Ad Strategy', 'Audience Targeting', 'Performance Analysis', 'Optimization']
  },
]

export default function Services() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const serviceQualities = ["innovative", "strategic", "data-driven", "creative", "impactful"];

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute -top-10 -left-10 w-80 h-80 bg-primary/5 rounded-full"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-secondary/5 rounded-full transform -translate-y-1/2"></div>
      </div>
      
      <div className="container relative z-10" ref={containerRef}>
        <div className="text-center mb-16">
          <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 inline-block">Our Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="inline-block">Our </span>
            <FlipWords words={serviceQualities} duration={2000} className="text-primary" />
            <span className="inline-block"> Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            We create scroll-stopping content and bold, on-brand designs that demand attention. Our lead management and Meta ads don't just generate clicks—they drive real results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="card-3d card-shine bg-white rounded-xl p-8 shadow-lg border border-gray-100 overflow-hidden group cursor-pointer"
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
              style={{
                transform: activeCard === index 
                  ? 'translateY(-15px) rotateX(5deg)' 
                  : 'translateY(0) rotateX(0)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                boxShadow: activeCard === index 
                  ? '0 25px 50px -12px rgba(0, 0, 0, 0.15)' 
                  : '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
              }}
            >
              {/* Color accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                {activeCard === index ? (
                  <ColourfulText text={service.title} />
                ) : service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              {/* Keywords display - only visible on hover */}
              <div className="mt-4 flex flex-wrap gap-2 transition-all duration-300 overflow-hidden" style={{ 
                maxHeight: activeCard === index ? '200px' : '0',
                opacity: activeCard === index ? 1 : 0,
              }}>
                {service.keywords.map((keyword, keyIndex) => (
                  <span 
                    key={keyIndex} 
                    className="inline-block px-3 py-1 bg-gray-100 text-xs font-medium text-gray-600 rounded-full"
                    style={{ 
                      animationDelay: `${keyIndex * 0.1}s`,
                      animation: activeCard === index ? 'float 2s ease-in-out infinite' : 'none',
                    }}
                  >
                    {keyword}
                  </span>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-100">
                <a href="#contact" className="flex items-center text-primary font-medium group-hover:text-secondary transition-colors">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Creative floating elements */}
        <div className="absolute top-20 left-10 animate-float-slow opacity-10">
          <div className="text-8xl rotate-12">💡</div>
        </div>
        <div className="absolute bottom-20 right-10 animate-float opacity-10">
          <div className="text-8xl -rotate-12">🚀</div>
        </div>
      </div>
    </section>
  )
} 