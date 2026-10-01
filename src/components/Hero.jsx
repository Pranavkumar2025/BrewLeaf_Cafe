import React from 'react'
import { ArrowDown, Clock, MapPin, Coffee, Utensils } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#E2A33B]/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#4F7A4B]/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Text Content */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          {/* Tag / Category Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5EBDD] border border-[#3B2A20]/10 text-xs font-semibold text-[#3B2A20] tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#4F7A4B] inline-block" />
            Neighbourhood Coffee, Artisanal Snacks & Desserts
          </div>

          {/* Heading with Brand & Tagline */}
          <div className="space-y-3">
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#3B2A20] tracking-tight leading-[1.08]">
              BrewLeaf Café
            </h1>
            <p className="font-serif italic text-2xl sm:text-3xl text-[#4F7A4B] font-medium">
              Fresh coffee. Slow mornings.
            </p>
          </div>

          {/* Intro Description */}
          <p className="text-base sm:text-lg text-[#3B2A20]/80 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
            A welcoming space designed for quiet sips, warm conversations, and unhurried hours. Handcrafted single-origin roasts, comforting herbal brews, and fresh bakes made from scratch every morning.
          </p>

          {/* Key Quick Info Pills */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
            <div className="flex items-center gap-2 text-xs font-medium text-[#3B2A20]/90 bg-[#F5EBDD]/80 px-3.5 py-2 rounded-lg border border-[#3B2A20]/10">
              <Clock className="w-4 h-4 text-[#4F7A4B]" />
              <span>Open Daily: 8:00 AM – 10:00 PM</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-[#3B2A20]/90 bg-[#F5EBDD]/80 px-3.5 py-2 rounded-lg border border-[#3B2A20]/10">
              <MapPin className="w-4 h-4 text-[#E2A33B]" />
              <span>Indiranagar, Sector 15</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a
              href="#menu"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#3B2A20] hover:bg-[#261B14] text-[#F5EBDD] font-medium text-sm transition-all duration-200 shadow-md hover:shadow-lg text-center active:scale-95"
            >
              Explore Our Menu
            </a>
            <a
              href="#about"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#F5EBDD] hover:bg-[#EADBC8] text-[#3B2A20] font-medium text-sm transition-all duration-200 border border-[#3B2A20]/15 text-center active:scale-95"
            >
              Our Story & Space
            </a>
          </div>
        </div>

        {/* Hero Visual Block */}
        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* Main Cafe/Coffee Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#F5EBDD]">
              <img
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200&auto=format&fit=crop"
                alt="BrewLeaf Cafe warm interior with coffee table"
                className="w-full h-[420px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3B2A20]/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-[#FAF6F0]">
                <p className="text-xs uppercase tracking-wider font-semibold text-[#E2A33B]">
                  Handcrafted With Care
                </p>
                <p className="font-serif text-xl font-bold mt-0.5">
                  Single-Origin Arabica & Fresh Pastries
                </p>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-[#FAF6F0] p-4 rounded-2xl shadow-xl border border-[#3B2A20]/10 flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#4F7A4B]/15 text-[#4F7A4B] flex items-center justify-center flex-shrink-0">
                <Coffee className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider font-bold text-[#4F7A4B]">
                  Signature Roasts
                </span>
                <span className="text-xs font-semibold text-[#3B2A20]">
                  Freshly ground every cup
                </span>
              </div>
            </div>

            {/* Floating Hours Badge */}
            <div className="hidden sm:flex absolute -top-4 -right-4 bg-[#FAF6F0] px-4 py-2.5 rounded-2xl shadow-lg border border-[#3B2A20]/10 items-center gap-2">
              <Utensils className="w-4 h-4 text-[#E2A33B]" />
              <span className="text-xs font-bold text-[#3B2A20]">
                All-Day Kitchen & Bakes
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
