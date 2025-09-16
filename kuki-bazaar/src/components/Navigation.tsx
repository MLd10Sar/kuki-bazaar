'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-warm-white/95 backdrop-blur-sm border-b border-saffron/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-serif font-bold text-gradient">
              Kuki Bazaar
            </div>
            <div className="flex space-x-1">
              <span className="w-2 h-2 bg-saffron rounded-full sparkle"></span>
              <span className="w-2 h-2 bg-turquoise rounded-full sparkle"></span>
              <span className="w-2 h-2 bg-pomegranate rounded-full sparkle"></span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-charcoal hover:text-saffron transition-colors font-medium">
              Home
            </Link>
            <Link href="/shop" className="text-charcoal hover:text-saffron transition-colors font-medium">
              Shop
            </Link>
            <Link href="/about" className="text-charcoal hover:text-saffron transition-colors font-medium">
              About
            </Link>
            <Link href="/contact" className="text-charcoal hover:text-saffron transition-colors font-medium">
              Contact
            </Link>
            <Link href="/image-test" className="text-xs bg-turquoise/20 text-turquoise px-3 py-1 rounded-full hover:bg-turquoise hover:text-white transition-colors">
              📸 Images
            </Link>
            <button className="p-2 text-charcoal hover:text-saffron transition-colors">
              <ShoppingCart size={24} />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-charcoal hover:text-saffron transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-warm-white border-t border-saffron/20">
              <Link 
                href="/" 
                className="block px-3 py-2 text-charcoal hover:text-saffron transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/shop" 
                className="block px-3 py-2 text-charcoal hover:text-saffron transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link 
                href="/about" 
                className="block px-3 py-2 text-charcoal hover:text-saffron transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="block px-3 py-2 text-charcoal hover:text-saffron transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href="/image-test" 
                className="block px-3 py-2 text-turquoise hover:text-saffron transition-colors font-medium bg-turquoise/10 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                📸 Image Test
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}