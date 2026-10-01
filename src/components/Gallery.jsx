import React, { useState } from 'react'
import { GALLERY_ITEMS } from '../data/galleryData'
import { X, ZoomIn } from 'lucide-react'

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  return (
    <section id="gallery" className="py-20 sm:py-24 bg-[#F5EBDD]/40 border-y border-[#3B2A20]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#4F7A4B]">
            Moments & Moods
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#3B2A20] tracking-tight">
            Life at BrewLeaf
          </h2>
          <p className="text-sm sm:text-base text-[#3B2A20]/75">
            A glimpse into our quiet mornings, bean craft, and neighbourhood gatherings.
          </p>
        </div>

        {/* 6 Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 border-2 border-[#FAF6F0]"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3B2A20]/80 via-[#3B2A20]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#E2A33B]">
                  {item.category}
                </span>
                <h4 className="font-serif text-lg font-bold text-[#FAF6F0] flex items-center justify-between">
                  <span>{item.title}</span>
                  <ZoomIn className="w-4 h-4 text-[#FAF6F0]/80" />
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-[#3B2A20]/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#FAF6F0] rounded-3xl overflow-hidden shadow-2xl border border-[#3B2A20]/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#3B2A20]/80 hover:bg-[#3B2A20] text-[#FAF6F0] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close photo preview"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedPhoto.image}
              alt={selectedPhoto.alt}
              className="w-full max-h-[70vh] object-cover"
            />
            <div className="p-6 bg-[#FAF6F0] flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#4F7A4B]">
                  {selectedPhoto.category}
                </span>
                <h3 className="font-serif text-xl font-bold text-[#3B2A20]">
                  {selectedPhoto.title}
                </h3>
              </div>
              <span className="text-xs text-[#3B2A20]/60">
                BrewLeaf Café Showcase
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
