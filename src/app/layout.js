'use client';

import './globals.css';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Krimai - AI Assistant',
  description: 'Your AI assistant for the modern workplace',
};

export default function RootLayout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
  }, []);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen flex flex-col">
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/80 backdrop-blur-md py-3' : 'bg-transparent py-5'}`}>
          <div className="container mx-auto px-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Krimai
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/about" className="text-gray-300 hover:text-white transition">
                About
              </Link>
              <Link href="/features" className="text-gray-300 hover:text-white transition">
                Features
              </Link>
              <Link href="/pricing" className="text-gray-300 hover:text-white transition">
                Pricing
              </Link>
              <Link href="/blog" className="text-gray-300 hover:text-white transition">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition">
                Contact
              </Link>
            </nav>
            
            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/login" className="text-gray-300 hover:text-white transition px-4 py-2">
                Log in
              </Link>
              <Link href="/signup" className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-full hover:opacity-90 transition">
                Sign up
              </Link>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-300 focus:outline-none" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
          
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-gray-900 shadow-xl">
              <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                <Link href="/about" className="text-gray-300 hover:text-white transition py-2">
                  About
                </Link>
                <Link href="/features" className="text-gray-300 hover:text-white transition py-2">
                  Features
                </Link>
                <Link href="/pricing" className="text-gray-300 hover:text-white transition py-2">
                  Pricing
                </Link>
                <Link href="/blog" className="text-gray-300 hover:text-white transition py-2">
                  Blog
                </Link>
                <Link href="/contact" className="text-gray-300 hover:text-white transition py-2">
                  Contact
                </Link>
                <div className="flex flex-col space-y-2 pt-4 border-t border-gray-800">
                  <Link href="/login" className="text-gray-300 hover:text-white transition py-2">
                    Log in
                  </Link>
                  <Link href="/signup" className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-full hover:opacity-90 transition text-center">
                    Sign up
                  </Link>
                </div>
              </div>
            </div>
          )}
        </header>
        
        <main className="flex-grow pt-24">
          {children}
        </main>
        
        <footer className="bg-gray-900 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Krimai</h3>
                <p className="text-gray-400">Your AI assistant for the modern workplace</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Product</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/features" className="hover:text-white transition">Features</Link></li>
                  <li><Link href="/pricing" className="hover:text-white transition">Pricing</Link></li>
                  <li><Link href="/integrations" className="hover:text-white transition">Integrations</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                  <li><Link href="/careers" className="hover:text-white transition">Careers</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="hover:text-white transition">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8 text-gray-400 text-sm">
              <p>© {new Date().getFullYear()} Krimai. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
