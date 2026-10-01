import React from 'react'
import { Coffee, Heart, Users, Sparkles } from 'lucide-react'

export default function About() {
  const values = [
    {
      title: 'Artisanal Roasting',
      description: 'Single-origin beans ethically sourced from shade-grown estates in Chikmagalur and Coorg.',
    },
    {
      title: 'Fresh Daily Bakes',
      description: 'Hand-laminated croissants, sourdough loaves, and rustic desserts baked in small batches daily.',
    },
    {
      title: 'Open Neighbourhood Sanctuary',
      description: 'Whether you are finishing a book, working remotely, or enjoying a slow talk, you are always at home.',
    },
  ]

  return (
    <section id="about" className="py-20 sm:py-24 bg-[#F5EBDD]/60 border-y border-[#3B2A20]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-[#FAF6F0]">
                <img
                  src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1000&auto=format&fit=crop"
                  alt="Barista carefully preparing a pour-over coffee at BrewLeaf Cafe"
                  className="w-full h-[400px] object-cover"
                />
              </div>

              {/* Stat card */}
              <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-[#3B2A20] text-[#F5EBDD] p-5 rounded-2xl shadow-xl max-w-[200px]">
                <p className="font-serif text-3xl font-bold text-[#E2A33B]">100%</p>
                <p className="text-xs text-[#F5EBDD]/80 mt-1 font-medium leading-snug">
                  Shade-grown Arabica & freshly baked delights
                </p>
              </div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4F7A4B]">
                About Our Café
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#3B2A20] tracking-tight">
                Slow Crafted Coffee for Thoughtful Days
              </h2>
            </div>

            {/* Core 2 to 3 lines requested about who they are, what makes the coffee special, who they welcome */}
            <div className="space-y-4 text-base sm:text-lg text-[#3B2A20]/85 leading-relaxed">
              <p>
                BrewLeaf Café is an intimate neighbourhood refuge created for people who cherish the calm of unhurried mornings.
              </p>
              <p>
                We roast ethically sourced single-origin beans in small batches, extracting every cup with balance, depth, and genuine craft.
              </p>
              <p>
                Whether you are diving into a novel, sketching ideas, or catching up with old friends, our door and coffee pots are always open for you.
              </p>
            </div>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#3B2A20]/15">
              {values.map((val, idx) => (
                <div key={idx} className="space-y-1.5">
                  <h4 className="font-serif font-bold text-sm text-[#3B2A20]">
                    {val.title}
                  </h4>
                  <p className="text-xs text-[#3B2A20]/75 leading-normal">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
