import React from 'react'
import { Coffee, MessageCircle, MapPin, Clock, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const whatsappNumber = '919876543210'
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi%20BrewLeaf%20Cafe,%20I'd%20like%20to%20connect!`

  return (
    <footer className="bg-[#261B14] text-[#F5EBDD] pt-16 pb-12 border-t border-[#3B2A20]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#3B2A20]/60">
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#3B2A20] flex items-center justify-center border border-[#E2A33B]/30">
                <Coffee className="w-5 h-5 text-[#E2A33B]" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#FAF6F0]">
                BrewLeaf Café
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#F5EBDD]/70 font-serif italic text-base">
              Fresh coffee. Slow mornings.
            </p>

            <p className="text-xs text-[#F5EBDD]/60 max-w-sm leading-relaxed">
              Your neighbourhood refuge for single-origin roasts, handmade artisanal bakes, and peaceful moments.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="font-serif font-bold text-sm text-[#FAF6F0] uppercase tracking-wider text-xs text-[#E2A33B]">
              Quick Navigation
            </h5>
            <ul className="space-y-2 text-xs text-[#F5EBDD]/70">
              <li>
                <a href="#about" className="hover:text-[#E2A33B] transition-colors">
                  About Our Space
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#E2A33B] transition-colors">
                  Daily Fresh Menu
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#E2A33B] transition-colors">
                  Photo Gallery
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#E2A33B] transition-colors">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#E2A33B] transition-colors">
                  Hours & Directions
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Visit & Timings */}
          <div className="md:col-span-4 space-y-3">
            <h5 className="font-serif font-bold text-sm text-[#FAF6F0] uppercase tracking-wider text-xs text-[#E2A33B]">
              Hours & Location
            </h5>
            <div className="space-y-2 text-xs text-[#F5EBDD]/70">
              <p className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#4F7A4B] flex-shrink-0 mt-0.5" />
                <span>Every day: 8:00 AM – 10:00 PM</span>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E2A33B] flex-shrink-0 mt-0.5" />
                <span>42, Serene Green Lane, Sector 15, Indiranagar, Bengaluru</span>
              </p>
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#4F7A4B] hover:bg-[#3D5E3A] text-[#FAF6F0] text-xs font-semibold transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp: +91 98765 43210</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F5EBDD]/50">
          <p>© {currentYear} BrewLeaf Café. Showcase Demo Project.</p>
          <p className="flex items-center gap-1">
            Crafted for showcase with <Heart className="w-3 h-3 text-red-400 fill-current" />
          </p>
        </div>
      </div>
    </footer>
  )
}
