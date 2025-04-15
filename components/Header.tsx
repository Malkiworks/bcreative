'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container">
        <nav className="flex justify-between items-center py-5">
          <div className="text-2xl font-bold text-primary">
            B<span className="text-dark">Creative</span>
          </div>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <Link href="#home" className="text-dark font-medium hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="#services" className="text-dark font-medium hover:text-primary transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="#about" className="text-dark font-medium hover:text-primary transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="#portfolio" className="text-dark font-medium hover:text-primary transition-colors">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-dark font-medium hover:text-primary transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link href="#contact" className="cta-button">
                Get Started
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-dark"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 bg-white border-t">
            <ul className="flex flex-col items-center space-y-4 pb-4">
              <li>
                <Link href="#home" className="text-dark font-medium hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-dark font-medium hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-dark font-medium hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-dark font-medium hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-dark font-medium hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#contact" className="cta-button" onClick={() => setMobileMenuOpen(false)}>
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
} 