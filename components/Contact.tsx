'use client'

import Link from 'next/link'
import { useState, FormEvent } from 'react'

export default function Contact() {
  const [formStatus, setFormStatus] = useState('idle')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('submitting')
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success')
    }, 1500)
  }

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-primary/5 rounded-full"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/5 rounded-full"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 inline-block">Contact Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to learn more about our services? We'd love to hear from you!
          </p>
        </div>
        
        <div className="flex flex-col-reverse md:flex-row gap-12 items-start">
          <div className="flex-1 card-3d bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="w-10 h-10 rounded-full bg-primary/10 text-primary flex-center mr-3 text-xl">📌</span>
              Contact Information
            </h3>
            
            <p className="text-gray-600 mb-8 pl-13">
              Fill out the form or reach out directly using the information below.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center transform hover:translate-x-2 transition-transform">
                <div className="contact-icon">📍</div>
                <p>123 Creative St, Digital City</p>
              </div>
              <div className="flex items-center transform hover:translate-x-2 transition-transform">
                <div className="contact-icon">📧</div>
                <a href="mailto:hello@bcreative.com" className="text-primary hover:underline">hello@bcreative.com</a>
              </div>
              <div className="flex items-center transform hover:translate-x-2 transition-transform">
                <div className="contact-icon">📞</div>
                <a href="tel:+15551234567" className="text-primary hover:underline">+1 (555) 123-4567</a>
              </div>
            </div>
            
            <h4 className="font-bold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <Link href="#" className="w-10 h-10 bg-primary text-white rounded-full flex-center hover:bg-secondary transition-colors" aria-label="Facebook">
                FB
              </Link>
              <Link href="#" className="w-10 h-10 bg-primary text-white rounded-full flex-center hover:bg-secondary transition-colors" aria-label="Instagram">
                IG
              </Link>
              <Link href="#" className="w-10 h-10 bg-primary text-white rounded-full flex-center hover:bg-secondary transition-colors" aria-label="Twitter">
                TW
              </Link>
              <Link href="#" className="w-10 h-10 bg-primary text-white rounded-full flex-center hover:bg-secondary transition-colors" aria-label="LinkedIn">
                LI
              </Link>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="card-3d card-shine bg-white rounded-xl p-8 shadow-lg">
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-dark mb-2 font-medium">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    disabled={formStatus !== 'idle'}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-dark mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    disabled={formStatus !== 'idle'}
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-dark mb-2 font-medium">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    disabled={formStatus !== 'idle'}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-dark mb-2 font-medium">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-vertical"
                    disabled={formStatus !== 'idle'}
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="cta-button w-full flex items-center justify-center py-3"
                  disabled={formStatus !== 'idle'}
                >
                  {formStatus === 'idle' && 'Send Message'}
                  {formStatus === 'submitting' && 'Sending...'}
                  {formStatus === 'success' && 'Message Sent!'}
                  
                  {formStatus === 'idle' && (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                  )}
                  
                  {formStatus === 'success' && (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </button>
                
                {formStatus === 'success' && (
                  <p className="text-green-600 text-center font-medium">Thank you for your message! We'll get back to you soon.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 