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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll',
