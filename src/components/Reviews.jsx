import React from 'react'
import { REVIEWS_DATA } from '../data/reviewsData'
import { Star, Quote, Coffee } from 'lucide-react'

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
        <span className="text-xs font-bold uppercase tracking-wider text-[#4F7A4B]">
          Community Love
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#3B2A20] tracking-tight">
          Words From Our Neighbours
        </h2>
        <p className="text-sm sm:text-base text-[#3B2A20]/75">
          Real warmth from mornings spent around our brew bar.
        </p>
      </div>

      {/* 3 Reviews Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {REVIEWS_DATA.map((review) => (
          <div
            key={review.id}
            className="bg-[#FAF6F0] p-7 rounded-3xl border border-[#3B2A20]/10 hover:border-[#4F7A4B]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
          >
            {/* Top row: Stars & Badge */}
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-1 text-[#E2A33B]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                {/* Clearly labeled as requested */}
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#4F7A4B] bg-[#F0F5EF] px-2.5 py-1 rounded-full border border-[#4F7A4B]/20">
                  {review.date}
                </span>
              </div>

              {/* Quote text */}
              <p className="text-sm text-[#3B2A20]/85 italic leading-relaxed mb-6 font-normal">
                "{review.comment}"
              </p>
            </div>

            {/* Reviewer info */}
            <div className="pt-4 border-t border-[#3B2A20]/10 flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-base text-[#3B2A20]">
                    {review.name}
                  </h4>
                  <p className="text-xs text-[#3B2A20]/60">{review.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-[11px] text-[#4F7A4B] font-medium mt-1">
                <Coffee className="w-3 h-3 text-[#E2A33B]" />
                <span>Loves: {review.favouriteItem}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trust metric banner */}
      <div className="mt-12 bg-[#3B2A20] text-[#F5EBDD] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left space-y-1">
          <p className="font-serif text-xl sm:text-2xl font-bold text-[#FAF6F0]">
            Rated 4.9 / 5.0 by coffee lovers in the area
          </p>
          <p className="text-xs sm:text-sm text-[#F5EBDD]/70">
            Freshly ground beans, comforting atmosphere, and thoughtful service.
          </p>
        </div>
        <a
          href="#contact"
          className="px-6 py-3 rounded-full bg-[#E2A33B] hover:bg-[#C98B26] text-[#3B2A20] font-bold text-xs sm:text-sm transition-colors shadow-md whitespace-nowrap"
        >
          Come Say Hello
        </a>
      </div>
    </section>
  )
}
