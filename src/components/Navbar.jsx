import React, { useState, useEffect } from 'react'
import { Coffee, Menu as MenuIcon, X, Clock, MessageCircle, MapPin } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Visit & Hours', href: '#contact' },
  ]

  const whatsappNumber = '919876543210'
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi%20BrewLeaf%20Cafe,%20I'd%20like%20to%20know%20more%20about%20your%20menu%20and%20tables!`

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF6F0]/90 backdrop-blur-md shadow-sm border-b border-[#3B2A20]/10 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-[#3B2A20] text-[#F5EBDD] flex items-center justify-center shadow-md group-hover:bg-[#4F7A4B] transition-colors duration-300">
            <Coffee className="w-5 h-5 text-[#E2A33B]" />
          </div>
          <div>
            <span className="font-serif text-2xl font-bold tracking-tight text-[#3B2A20] block leading-none">
              BrewLeaf
            </span>
            <span className="text-[10px] tracking-widest uppercase font-medium text-[#4F7A4B] block mt-0.5">
              Café & Roastery
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#3B2A20]/80 hover:text-[#3B2A20] relative py-1 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#4F7A4B] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button & Contact */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-xs text-[#3B2A20]/70 border-r border-[#3B2A20]/15 pr-4">
            <Clock className="w-3.5 h-3.5 text-[#4F7A4B]" />
            <span>8 AM – 10 PM</span>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-[#4F7A4B] text-[#FAF6F0] hover:bg-[#3D5E3A] transition-all shadow-sm active:scale-95"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#3B2A20] hover:bg-[#F5EBDD] transition-colors"
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#FAF6F0] border-b border-[#3B2A20]/10 px-6 py-5 space-y-4 shadow-xl">
          <div className="space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-[#3B2A20] hover:text-[#4F7A4B] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-[#3B2A20]/10 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs text-[#3B2A20]/70">
              <Clock className="w-4 h-4 text-[#4F7A4B]" />
              <span>Open every day • 8:00 AM to 10:00 PM</span>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-[#4F7A4B] text-[#FAF6F0] shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Message on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
