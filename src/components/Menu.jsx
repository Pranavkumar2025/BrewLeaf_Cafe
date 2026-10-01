import React, { useRef, useState, forwardRef } from 'react'
import HTMLFlipBook from 'react-pageflip'
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  List,
  MessageCircle,
  Coffee,
  Bookmark,
  Sparkles,
  MapPin,
  Clock,
  ExternalLink,
} from 'lucide-react'
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData'

// Authentic Madhubani Corner Motif
function MadhubaniCorner({ className = '' }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`w-14 h-14 sm:w-18 sm:h-18 pointer-events-none opacity-85 ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0 L100 0 L100 15 L15 15 L15 100 L0 100 Z" fill="#E2A33B" fillOpacity="0.18" />
      <path d="M5 5 L95 5 M5 5 L5 95 M12 12 L88 12 M12 12 L12 88" stroke="#E2A33B" strokeWidth="1.2" strokeDasharray="3 2" />
      
      <circle cx="20" cy="20" r="14" stroke="#4F7A4B" strokeWidth="1.2" fill="#FAF6F0" fillOpacity="0.4" />
      <circle cx="20" cy="20" r="8" stroke="#3B2A20" strokeWidth="1" />
      <circle cx="20" cy="20" r="3" fill="#E2A33B" />
      
      <path d="M20 6 Q25 12 20 18 Q15 12 20 6 Z" fill="#A84A2A" fillOpacity="0.6" stroke="#2B1E16" strokeWidth="0.8" />
      <path d="M20 22 Q25 28 20 34 Q15 28 20 22 Z" fill="#A84A2A" fillOpacity="0.6" stroke="#2B1E16" strokeWidth="0.8" />
      <path d="M6 20 Q12 25 18 20 Q12 15 6 20 Z" fill="#4F7A4B" fillOpacity="0.6" stroke="#2B1E16" strokeWidth="0.8" />
      <path d="M22 20 Q28 25 34 20 Q28 15 22 20 Z" fill="#4F7A4B" fillOpacity="0.6" stroke="#2B1E16" strokeWidth="0.8" />
      
      <path d="M35 15 Q55 8 75 14 Q65 24 45 20 Z" fill="#E2A33B" fillOpacity="0.4" stroke="#3B2A20" strokeWidth="1" />
      <path d="M48 13 L52 19 M56 12 L60 18 M64 12 L68 17" stroke="#3B2A20" strokeWidth="0.8" />
      
      <path d="M15 35 Q8 55 14 75 Q24 65 20 45 Z" fill="#E2A33B" fillOpacity="0.4" stroke="#3B2A20" strokeWidth="1" />
      <path d="M13 48 L19 52 M12 56 L18 60 M12 64 L17 68" stroke="#3B2A20" strokeWidth="0.8" />
    </svg>
  )
}

// Authentic Madhubani Floral & Fish Border Banner
function MadhubaniBorderStrip() {
  return (
    <div className="w-full h-8 sm:h-9 overflow-hidden flex items-center justify-between opacity-80 px-2 my-1 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 800 36" fill="none" preserveAspectRatio="none">
        <line x1="0" y1="3" x2="800" y2="3" stroke="#E2A33B" strokeWidth="1.5" />
        <line x1="0" y1="7" x2="800" y2="7" stroke="#3B2A20" strokeWidth="0.8" strokeDasharray="4 3" />
        <line x1="0" y1="29" x2="800" y2="29" stroke="#3B2A20" strokeWidth="0.8" strokeDasharray="4 3" />
        <line x1="0" y1="33" x2="800" y2="33" stroke="#E2A33B" strokeWidth="1.5" />

        {[0, 100, 200, 300, 400, 500, 600, 700].map((offset, i) => (
          <g key={i} transform={`translate(${offset}, 0)`}>
            <circle cx="25" cy="18" r="7" fill="#E2A33B" fillOpacity="0.3" stroke="#4F7A4B" strokeWidth="1" />
            <path d="M25 11 Q29 18 25 25 Q21 18 25 11 Z" fill="#A84A2A" fillOpacity="0.7" stroke="#3B2A20" strokeWidth="0.8" />
            <path d="M18 18 Q25 22 32 18 Q25 14 18 18 Z" fill="#4F7A4B" fillOpacity="0.7" stroke="#3B2A20" strokeWidth="0.8" />
            <circle cx="25" cy="18" r="2.5" fill="#FAF6F0" stroke="#3B2A20" strokeWidth="0.6" />

            <path d="M50 18 Q62 10 75 18 Q62 26 50 18 Z" fill="#FAF6F0" fillOpacity="0.6" stroke="#3B2A20" strokeWidth="1.2" />
            <circle cx="56" cy="17" r="1.5" fill="#3B2A20" />
            <path d="M60 14 L60 22 M65 13 L65 23 M70 15 L70 21" stroke="#4F7A4B" strokeWidth="0.8" />
            <path d="M75 18 L83 12 L80 18 L83 24 Z" fill="#E2A33B" stroke="#3B2A20" strokeWidth="0.8" />
          </g>
        ))}
      </svg>
    </div>
  )
}

// Page wrapper that forwards ref to HTMLFlipBook
const BookPage = forwardRef(({ children, className = '', number, isCover = false }, ref) => {
  return (
    <div
      ref={ref}
      className={`relative w-full h-full shadow-2xl select-none overflow-hidden ${
        isCover
          ? 'bg-[#261B14] text-[#F5EBDD]'
          : 'bg-[#FAF6F0] text-[#3B2A20] border-r border-[#3B2A20]/10'
      } ${className}`}
    >
      <div className="h-full flex flex-col justify-between p-7 sm:p-10 md:p-11 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/5 pointer-events-none" />

        {children}

        {number && (
          <div className="pt-4 border-t border-[#3B2A20]/10 flex items-center justify-between text-xs text-[#3B2A20]/50 font-serif relative z-10">
            <span>BrewLeaf Café • Daily Roastery</span>
            <span className="font-bold">Page {number}</span>
          </div>
        )}
      </div>
    </div>
  )
})

BookPage.displayName = 'BookPage'

export default function Menu() {
  const bookRef = useRef(null)
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPages, setTotalPages] = useState(8)
  const [viewMode, setViewMode] = useState('booklet') // 'booklet' | 'list'
  const [activeListCategory, setActiveListCategory] = useState('all')

  const whatsappNumber = '919876543210'

  const handleNext = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipNext()
    }
  }

  const handlePrev = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipPrev()
    }
  }

  const flipToPage = (pageNum) => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flip(pageNum)
    }
  }

  const onPage = (e) => {
    setCurrentPage(e.data)
  }

  const filteredListItems =
    activeListCategory === 'all'
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeListCategory)

  return (
    <section id="menu" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#4F7A4B] flex items-center gap-1.5">
            <BookOpen className="w-4 h-4" />
            <span>Traditional Heritage Table & Menu</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#3B2A20] tracking-tight">
            The Daily Menu Book
          </h2>
          <p className="text-xs sm:text-base text-[#3B2A20]/75 max-w-lg">
            Resting on a traditional handcrafted table with authentic page-turning features.
          </p>
        </div>

        {/* View Switcher: Booklet vs List */}
        <div className="inline-flex p-1 bg-[#F5EBDD] rounded-full border border-[#3B2A20]/15 self-start md:self-auto shadow-inner">
          <button
            onClick={() => setViewMode('booklet')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              viewMode === 'booklet'
                ? 'bg-[#3B2A20] text-[#FAF6F0] shadow-md'
                : 'text-[#3B2A20]/70 hover:text-[#3B2A20]'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Booklet Flip Mode</span>
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              viewMode === 'list'
                ? 'bg-[#3B2A20] text-[#FAF6F0] shadow-md'
                : 'text-[#3B2A20]/70 hover:text-[#3B2A20]'
            }`}
          >
            <List className="w-3.5 h-3.5" />
            <span>Standard List</span>
          </button>
        </div>
      </div>

      {viewMode === 'booklet' ? (
        <div className="space-y-8">
          {/* Bookmark Ribbon Quick-Jump Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => flipToPage(0)}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold bg-[#F5EBDD] text-[#3B2A20] hover:bg-[#EADBC8] border border-[#3B2A20]/10 transition-all cursor-pointer shadow-sm"
            >
              <Bookmark className="w-3.5 h-3.5 text-[#4F7A4B]" />
              <span>Cover & Origin</span>
            </button>
            <button
              onClick={() => flipToPage(2)}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold bg-[#F5EBDD] text-[#3B2A20] hover:bg-[#EADBC8] border border-[#3B2A20]/10 transition-all cursor-pointer shadow-sm"
            >
              <Bookmark className="w-3.5 h-3.5 text-[#E2A33B]" />
              <span>Hot Coffee & Cold Brews</span>
            </button>
            <button
              onClick={() => flipToPage(4)}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold bg-[#F5EBDD] text-[#3B2A20] hover:bg-[#EADBC8] border border-[#3B2A20]/10 transition-all cursor-pointer shadow-sm"
            >
              <Bookmark className="w-3.5 h-3.5 text-[#4F7A4B]" />
              <span>Toasties & Fresh Bakes</span>
            </button>
            <button
              onClick={() => flipToPage(6)}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold bg-[#F5EBDD] text-[#3B2A20] hover:bg-[#EADBC8] border border-[#3B2A20]/10 transition-all cursor-pointer shadow-sm"
            >
              <Bookmark className="w-3.5 h-3.5 text-[#E2A33B]" />
              <span>Add-Ons & Ordering</span>
            </button>
          </div>

          {/* Traditional Handcrafted Table Stage */}
          <div className="relative max-w-6xl mx-auto flex flex-col items-center justify-center py-4">
            {/* TRADITIONAL WOODEN TABLE SURFACE */}
            <div className="traditional-wood-table p-5 sm:p-8 md:p-11 rounded-[3rem] border-8 border-[#1C110A] relative w-full max-w-[1160px] shadow-[0_35px_90px_-20px_rgba(20,11,7,0.85)]">
              {/* Madhubani Corner Mandalas */}
              <MadhubaniCorner className="absolute top-3 left-3 rotate-0" />
              <MadhubaniCorner className="absolute top-3 right-3 rotate-90" />
              <MadhubaniCorner className="absolute bottom-3 right-3 rotate-180" />
              <MadhubaniCorner className="absolute bottom-3 left-3 -rotate-90" />

              {/* Vintage Brass Corner Stud Nails */}
              <div className="absolute top-4 left-4 w-3.5 h-3.5 rounded-full bg-gradient-to-br from-amber-300 via-amber-500 to-amber-900 border border-amber-950 shadow-md pointer-events-none z-10" />
              <div className="absolute top-4 right-4 w-3.5 h-3.5 rounded-full bg-gradient-to-br from-amber-300 via-amber-500 to-amber-900 border border-amber-950 shadow-md pointer-events-none z-10" />
              <div className="absolute bottom-4 left-4 w-3.5 h-3.5 rounded-full bg-gradient-to-br from-amber-300 via-amber-500 to-amber-900 border border-amber-950 shadow-md pointer-events-none z-10" />
              <div className="absolute bottom-4 right-4 w-3.5 h-3.5 rounded-full bg-gradient-to-br from-amber-300 via-amber-500 to-amber-900 border border-amber-950 shadow-md pointer-events-none z-10" />

              {/* Top Madhubani Art Border Band */}
              <div className="hidden sm:block mb-3 px-4">
                <MadhubaniBorderStrip />
              </div>

              {/* Traditional Handcrafted Rosewood Tarkashi Bed */}
              <div className="traditional-tarkashi-bed p-4 sm:p-6 md:p-7 rounded-[2.5rem] relative border border-[#E2A33B]/30 shadow-2xl">
                {/* Traditional Brass Wire Inlay (Tarkashi) Filigree Border */}
                <div className="absolute inset-2 sm:inset-3 border border-[#E2A33B]/40 rounded-[2rem] pointer-events-none" />
                <div className="absolute inset-3 sm:inset-4 border border-dashed border-[#E2A33B]/20 rounded-[1.8rem] pointer-events-none" />

                {/* Silk Bookmark Ribbon on Center Spine */}
                <div className="hidden lg:block absolute -top-5 left-1/2 -translate-x-1/2 w-8 h-18 bg-[#4F7A4B] shadow-2xl rounded-b-md border-b-4 border-b-[#3D5E3A] z-40" />

                {/* Realistic HTMLFlipBook Engine with Grand Dimensions */}
                <HTMLFlipBook
                  ref={bookRef}
                  width={500}
                  height={660}
                  size="stretch"
                  minWidth={320}
                  maxWidth={560}
                  minHeight={520}
                  maxHeight={740}
                  maxShadowOpacity={0.6}
                  showCover={true}
                  mobileScrollSupport={true}
                  onFlip={onPage}
                  className="shadow-2xl mx-auto rounded-2xl overflow-hidden"
                  style={{ margin: '0 auto' }}
                >
                  {/* 1. FRONT COVER */}
                  <BookPage isCover={true} className="border-r-4 border-[#1E140F]">
                    <div className="h-full flex flex-col justify-between items-center text-center py-10 px-6 relative z-10">
                      <div className="absolute inset-5 border-2 border-[#E2A33B]/40 rounded-3xl pointer-events-none" />

                      <div className="space-y-4 mt-6">
                        <div className="w-16 h-16 rounded-2xl bg-[#3B2A20] text-[#E2A33B] flex items-center justify-center mx-auto shadow-inner border border-[#E2A33B]/30">
                          <Coffee className="w-9 h-9" />
                        </div>
                        <span className="text-xs tracking-[0.3em] uppercase font-bold text-[#E2A33B] block">
                          Specialty Roastery & Bakes
                        </span>
                      </div>

                      <div className="space-y-3">
                        <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#FAF6F0]">
                          BrewLeaf Café
                        </h1>
                        <p className="font-serif italic text-lg sm:text-xl text-[#E2A33B]">
                          Fresh coffee. Slow mornings.
                        </p>
                      </div>

                      <div className="space-y-4 mb-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3B2A20] border border-[#E2A33B]/30 text-xs sm:text-sm text-[#F5EBDD]">
                          <Clock className="w-4 h-4 text-[#4F7A4B]" />
                          <span>Daily • 8:00 AM to 10:00 PM</span>
                        </div>
                        <p className="text-xs text-[#F5EBDD]/70 flex items-center justify-center gap-1.5 animate-pulse">
                          <span>Click page edge or drag to turn ➔</span>
                        </p>
                      </div>
                    </div>
                  </BookPage>

                  {/* 2. INSIDE LEFT: ROAST PHILOSOPHY */}
                  <BookPage number={1}>
                    <div className="space-y-5">
                      <div className="border-b border-[#3B2A20]/15 pb-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#4F7A4B]">
                          Heritage & Craft
                        </span>
                        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#3B2A20] mt-1">
                          Our Roast Philosophy
                        </h3>
                        <p className="font-serif italic text-xs sm:text-sm text-[#4F7A4B] mt-0.5">
                          Single-Origin Chikmagalur Arabica
                        </p>
                      </div>

                      <p className="text-xs sm:text-sm text-[#3B2A20]/85 leading-relaxed">
                        Every bean we pour is shade-grown under silver oak canopies at 1,200m elevation in Chikmagalur and Coorg. Roasted in small batches weekly to protect rich notes of dark cacao, toasted almonds, and sweet citrus zest.
                      </p>

                      <div className="space-y-2.5 bg-[#F5EBDD]/70 p-4 rounded-2xl border border-[#3B2A20]/10 text-xs sm:text-sm">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-[#3B2A20]/70">Estate Origin</span>
                          <span className="font-bold text-[#3B2A20]">Chikmagalur & Coorg</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-[#3B2A20]/70">Roast Profile</span>
                          <span className="font-bold text-[#3B2A20]">Medium-City Roast</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-[#3B2A20]/70">Extraction</span>
                          <span className="font-bold text-[#3B2A20]">9-Bar Temperature Stability</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-[#3B2A20]/70">Milk Options</span>
                          <span className="font-bold text-[#3B2A20]">Farm Whole, Oat, Almond</span>
                        </div>
                      </div>

                      <div className="p-3 bg-[#F0F5EF] rounded-xl border border-[#4F7A4B]/20 text-xs text-[#4F7A4B] flex items-center gap-2.5">
                        <Coffee className="w-5 h-5 flex-shrink-0" />
                        <span>Green indicator indicates Vegetarian • Plant-based vegan options marked clearly</span>
                      </div>
                    </div>
                  </BookPage>

                  {/* 3. HOT COFFEE & ARTISANAL CHAI */}
                  <BookPage number={2}>
                    <div className="space-y-4">
                      <div className="border-b border-[#3B2A20]/15 pb-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#4F7A4B]">
                          Specialty Counter
                        </span>
                        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#3B2A20] mt-1">
                          Coffee & Spiced Chai
                        </h3>
                      </div>

                      <div className="space-y-3">
                        <div className="pb-2.5 border-b border-[#3B2A20]/5">
                          <div className="flex justify-between items-baseline">
                            <span className="font-serif font-bold text-sm sm:text-base text-[#3B2A20]">Single Origin Espresso</span>
                            <span className="font-serif font-bold text-sm sm:text-base text-[#3B2A20]">₹120</span>
                          </div>
                          <p className="text-xs text-[#3B2A20]/70 mt-0.5">Double shot extracted with dense hazelnut crema.</p>
                        </div>

                        <div className="pb-2.5 border-b border-[#3B2A20]/5">
                          <div className="flex items-center gap-2">
                            <span className="font-serif font-bold text-sm sm:text-base text-[#3B2A20]">Artisan Cappuccino</span>
                            <span className="text-[10px] font-bold text-[#4F7A4B] bg-[#F0F5EF] px-2 py-0.5 rounded-full border border-[#4F7A4B]/20">Bestseller</span>
                          </div>
                          <span className="font-serif font-bold text-sm sm:text-base text-[#3B2A20]">₹160</span>
                        </div>
                        <p className="text-xs text-[#3B2A20]/70 mt-0.5">Micro-foamed whole milk with delicate barista rosette art.</p>

                        <div className="pb-2.5 border-b border-[#3B2A20]/5">
                          <span className="font-serif font-bold text-sm sm:text-base text-[#3B2A20]">Flat White</span>
                          <span className="font-serif font-bold text-sm sm:text-base text-[#3B2A20]">₹170</span>
                        </div>
                        <p className="text-xs text-[#3B2A20]/70 mt-0.5">Double ristretto with silky textured steamed milk.</p>

                        <div className="pb-2.5 border-b border-[#3B2A20]/5">
                          <span className="font-serif font-bold text-sm sm:text-base text-[#3B2A20]">Slow Pour-Over (V60)</span>
                          <span className="font-serif font-bold text-sm sm:text-base text-[#3B2A20]">₹190</span>
                        </div>
                        <p className="text-xs text-[#3B2A20]/70 mt-0.5">Hand-crafted filter brew with crisp floral and citrus clarity.</p>

                        <div className="pb-2.5 border-b border-[#3B2A20]/5">
                          <div className="flex items-center gap-2">
                            <span className="font-serif font-bold text-sm sm:text-base text-[#3B2A20]">Spiced Masala Chai</span>
                            <span className="text-[10px] font-bold text-[#4F7A4B] bg-[#F0F5EF] px-2 py-0.5 rounded-full border border-[#4F7A4B]/20">Favourite</span>
                          </div>
                          <span className="font-serif font-bold text-sm sm:text-base text-[#3B2A20]">₹80</span>
                        </div>
                        <p className="text-xs text-[#3B2A20]/70 mt-0.5">Simmered Assam tea with ginger, crushed cardamom, and cloves.</p>

                        <div>
                          <div className="flex justify-between items-baseline">
                            <span className="font-serif font-bold text-sm sm:text-base text-[#3B2A20]">Kashmiri Kahwa Green Tea</span>
                            <span className="font-serif font-bold text-sm sm:text-base text-[#3B2A20]">₹110</span>
                          </div>
                          <p className="text-xs text-[#3B2A20]/70 mt-0.5">Saffron green tea with crushed almonds & green cardamom.</p>
                        </div>
                      </div>
                    </div>
                  </BookPage>

                  {/* 4. COLD BREWS & ICED TONICS */}
                  <BookPage number={3}>
                    <div className="space-y-4">
                      <div className="border-b border-[#3B2A20]/15 pb-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#4F7A4B]">
                          Chilled Specialties
                        </span>
                        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#3B2A20] mt-1">
                          Cold Brews & Tonics
                        </h3>
                      </div>

                      <div className="space-y-3">
                        <div className="pb-2.5 border-b border-[#3B2A20]/5">
                          <div className="flex items-center gap-2">
                            <span className="font-serif font-bold text-sm sm:text-base text-[#3B2A20]">Classic Cold Coffee</span>
                            <span className="text-[10px] font-bold text-[#4F7A4B] bg-[#F0F5EF] px-2 py-0.5 rounded-full border border-[#4F7A4B]/20">Bestseller</span>
                          </div>
                          <span className="font-serif font-bold text-sm sm:text-base text-[#3B2A20]">₹180</span>
                        </div>
                        <p className="text-xs text-[#3B2A20]/70 mt-0.5">Thick chilled espresso shaken with vanilla cream & cocoa dust.</p>

                        <div className="pb-2.5 border-b border-[#3B2A20]/5">
                          <span className="font-serif font-bold text-sm sm:text-base text-[#3B2A20]">18-Hour Slow Steep Cold Brew</span>
                          <span className="font-serif font-bold text-sm sm:text-base text-[#3B2A20]">₹190</span>
                        </div>
                        <p className="text-xs text-[#3B2A20]/70 mt-0.5">Steeped for 18h with ultra-smooth profile and zero bitterness.</p>
                      </div>

                      <div className="pb-2.5 border-b border-[#3B2A20]/5">
                        <span className="font-serif font-bold text-sm sm:text-base text-[#3B2A20]">Iced Matcha Oat Latte</span>
                        <span className="font-serif font-bold text-sm sm:text-base text-[#3B2A20]">₹210</span>
                      </div>
                      <p className="text-xs text-[#3B2A20]/70 mt-0.5">Ceremonial Japanese Uji matcha whisked with barista oat milk.</p>

                      <div className="pb-2.5 border-b border-[#3B2A20]/5">
                        <span className="font-serif font-bold text-sm sm:text-base text-[#3B2A20]">Sparkling Espresso Tonic</span>
                        <span className="font-serif font-bold text-sm sm:text-base text-[#3B2A20]">₹170</span>
                      </div>
                      <p className="text-xs text-[#3B2A20]/70 mt-0.5">Bright double shot layered over crisp tonic water with orange peel.</p>

                      <div>
                        <div className="flex justify-between items-baseline">
                          <span className="font-serif font-bold text-sm sm:text-base text-[#3B2A20]">Affogato al Caffè</span>
                          <span className="font-serif font-bold text-sm sm:text-base text-[#3B2A20]">₹160</span>
                        </div>
                        <p className="text-xs text-[#3B2A20]/70 mt-0.5">Madagascar vanilla bean gelato drowned in piping hot espresso.</p>
                      </div>
                    </div>
                  </BookPage>

                  {/* 5. SOURDOUGH TOASTIES & ARTISAN SNACKS */}
                  <BookPage number={4}>
                    <div className="space-y-4">
                      <div className="border-b border-[#3B2A20]/15 pb-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#4F7A4B]">
                          Warm Kitchen
                        </span>
                        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#3B2A20] mt-1">
                          Toasties & Savouries
                        </h3>
                      </div>

                      <div className="space-y-3">
                        <div className="pb-2.5 border-b border-[#3B2A20]/5">
                          <div className="flex items-center gap-2">
                            <span className="font-serif font-bold text-sm sm:text-base text-[#3B2A20]">Classic Grilled Veg Sandwich</span>
                            <span className="text-[10px] font-bold text-[#4F7A4B] bg-[#F0F5EF] px-2 py-0.5 rounded-full border border-[#4F7A4B]/20">Comfort</span>
                          </div>
                          <span className="font-serif font-bold text-sm sm:text-base text-[#3B2A20]">₹140</span>
                        </div>
                        <p className="text-xs text-[#3B2A20]/70 mt-0.5">Garden veggies, mint chutney, and cheddar in toasted sourdough.</p>

                        <div className="pb-2.5 border-b border-[#3B2A20]/5">
                          <span className="font-serif font-bold text-sm sm:text-base text-[#3B2A20]">Smoked Paneer Herb Wrap</span>
                          <span className="font-serif font-bold text-sm sm:text-base text-[#3B2A20]">₹180</span>
                        </div>
                        <p className="text-xs text-[#3B2A20]/70 mt-0.5">Spiced cottage cheese, bell peppers, and house garlic yogurt spread.</p>

                        <div className="pb-2.5 border-b border-[#3B2A20]/5">
                          <span className="font-serif font-bold text-sm sm:text-base text-[#3B2A20]">Herb Garlic Sourdough Bread</span>
                          <span className="font-serif font-bold text-sm sm:text-base text-[#3B2A20]">₹120</span>
                        </div>
                        <p className="text-xs text-[#3B2A20]/70 mt-0.5">Toasted sourdough slices with roasted garlic compound butter.</p>

                        <div className="pb-2.5 border-b border-[#3B2A20]/5">
                          <span className="font-serif font-bold text-sm sm:text-base text-[#3B2A20]">Smashed Avocado & Feta Toast</span>
                          <span className="font-serif font-bold text-sm sm:text-base text-[#3B2A20]">₹210</span>
                        </div>
                        <p className="text-xs text-[#3B2A20]/70 mt-0.5">Seasoned ripe avocado, crumbled feta, and toasted sunflower seeds.</p>

                        <div>
                          <div className="flex justify-between items-baseline">
                            <span className="font-serif font-bold text-sm sm:text-base text-[#3B2A20]">Caramelized Onion Quiche</span>
                            <span className="font-serif font-bold text-sm sm:text-base text-[#3B2A20]">₹190</span>
                          </div>
                          <p className="text-xs text-[#3B2A20]/70 mt-0.5">Butter pastry filled with wild mushrooms & sharp cheddar custard.</p>
                        </div>
                      </div>
                    </div>
                  </BookPage>

                  {/* 6. FRESH BAKES & SWEET DELIGHTS */}
                  <BookPage number={5}>
                    <div className="space-y-4">
                      <div className="border-b border-[#3B2A20]/15 pb-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#4F7A4B]">
                          Morning Oven
                        </span>
                        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#3B2A20] mt-1">
                          Bakes & Desserts
                        </h3>
                      </div>

                      <div className="space-y-3">
                        <div className="pb-2.5 border-b border-[#3B2A20]/5">
                          <div className="flex items-center gap-2">
                            <span className="font-serif font-bold text-sm sm:text-base text-[#3B2A20]">Warm Belgian Fudge Brownie</span>
                            <span className="text-[10px] font-bold text-[#4F7A4B] bg-[#F0F5EF] px-2 py-0.5 rounded-full border border-[#4F7A4B]/20">Bestseller</span>
                          </div>
                          <span className="font-serif font-bold text-sm sm:text-base text-[#3B2A20]">₹130</span>
                        </div>
                        <p className="text-xs text-[#3B2A20]/70 mt-0.5">70% dark Belgian chocolate brownie served warm with salted caramel.</p>

                        <div className="pb-2.5 border-b border-[#3B2A20]/5">
                          <span className="font-serif font-bold text-sm sm:text-base text-[#3B2A20]">Basque Burnt Cheesecake Slice</span>
                          <span className="font-serif font-bold text-sm sm:text-base text-[#3B2A20]">₹200</span>
                        </div>
                        <p className="text-xs text-[#3B2A20]/70 mt-0.5">Caramelized top crust with an ultra-creamy custard center.</p>

                        <div className="pb-2.5 border-b border-[#3B2A20]/5">
                          <span className="font-serif font-bold text-sm sm:text-base text-[#3B2A20]">Wild Blueberry Crumble Muffin</span>
                          <span className="font-serif font-bold text-sm sm:text-base text-[#3B2A20]">₹140</span>
                        </div>
                        <p className="text-xs text-[#3B2A20]/70 mt-0.5">Soft bakery muffin packed with blueberries and cinnamon crunch.</p>

                        <div className="pb-2.5 border-b border-[#3B2A20]/5">
                          <span className="font-serif font-bold text-sm sm:text-base text-[#3B2A20]">Twice-Baked Almond Croissant</span>
                          <span className="font-serif font-bold text-sm sm:text-base text-[#3B2A20]">₹170</span>
                        </div>
                        <p className="text-xs text-[#3B2A20]/70 mt-0.5">French butter croissant filled with almond frangipane.</p>

                        <div>
                          <div className="flex justify-between items-baseline">
                            <span className="font-serif font-bold text-sm sm:text-base text-[#3B2A20]">Dark Chocolate Orange Tart</span>
                            <span className="font-serif font-bold text-sm sm:text-base text-[#3B2A20]">₹210</span>
                          </div>
                          <p className="text-xs text-[#3B2A20]/70 mt-0.5">Crisp cocoa crust with silky dark ganache and orange zest.</p>
                        </div>
                      </div>
                    </div>
                  </BookPage>

                  {/* 7. CUSTOM ADD-ONS & WHATSAPP ORDERING */}
                  <BookPage number={6}>
                    <div className="space-y-5">
                      <div className="border-b border-[#3B2A20]/15 pb-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#4F7A4B]">
                          Tailor Your Cup
                        </span>
                        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#3B2A20] mt-1">
                          Add-Ons & Beans
                        </h3>
                      </div>

                      <div className="space-y-2 text-xs sm:text-sm">
                        <div className="flex justify-between p-2.5 rounded-xl bg-[#F5EBDD]/60 border border-[#3B2A20]/10">
                          <span className="font-medium text-[#3B2A20]">Barista Oat / Almond Milk</span>
                          <span className="font-serif font-bold text-[#4F7A4B]">+ ₹40</span>
                        </div>
                        <div className="flex justify-between p-2.5 rounded-xl bg-[#F5EBDD]/60 border border-[#3B2A20]/10">
                          <span className="font-medium text-[#3B2A20]">Extra Ristretto / Espresso Shot</span>
                          <span className="font-serif font-bold text-[#4F7A4B]">+ ₹50</span>
                        </div>
                        <div className="flex justify-between p-2.5 rounded-xl bg-[#F5EBDD]/60 border border-[#3B2A20]/10">
                          <span className="font-medium text-[#3B2A20]">Madagascar Vanilla / Hazelnut Syrup</span>
                          <span className="font-serif font-bold text-[#4F7A4B]">+ ₹30</span>
                        </div>
                        <div className="flex justify-between p-2.5 rounded-xl bg-[#F5EBDD]/60 border border-[#3B2A20]/10">
                          <span className="font-medium text-[#3B2A20]">Takeaway Whole Beans Tin (250g)</span>
                          <span className="font-serif font-bold text-[#4F7A4B]">₹450</span>
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-[#3B2A20] text-[#F5EBDD] space-y-3 shadow-md">
                        <p className="text-xs text-[#F5EBDD]/80 leading-relaxed">
                          Ready to place an order from your table or takeaway?
                        </p>
                        <a
                          href={`https://wa.me/${whatsappNumber}?text=Hi%20BrewLeaf%20Cafe,%20I'd%20like%20to%20place%20an%20order%20from%20the%20booklet!`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#4F7A4B] hover:bg-[#3D5E3A] text-white text-xs font-semibold shadow-sm transition-colors"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>Order Directly on WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </BookPage>

                  {/* 8. BACK COVER */}
                  <BookPage isCover={true} className="border-l-4 border-[#1E140F]">
                    <div className="h-full flex flex-col justify-between items-center text-center py-10 px-6 relative z-10">
                      <div className="absolute inset-5 border-2 border-[#E2A33B]/40 rounded-3xl pointer-events-none" />

                      <div className="w-14 h-14 rounded-2xl bg-[#3B2A20] text-[#E2A33B] flex items-center justify-center mx-auto mt-6 border border-[#E2A33B]/30">
                        <Coffee className="w-7 h-7" />
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-serif text-3xl font-bold text-[#FAF6F0]">
                          BrewLeaf Café
                        </h4>
                        <p className="text-xs sm:text-sm text-[#F5EBDD]/70 max-w-[240px] mx-auto leading-relaxed">
                          42, Serene Green Lane, Sector 15, Indiranagar, Bengaluru
                        </p>
                      </div>

                      <div className="space-y-1 mb-6 text-xs text-[#E2A33B]">
                        <p className="font-medium">Every Day • 8:00 AM to 10:00 PM</p>
                        <p className="text-[11px] text-[#F5EBDD]/50">Showcase Demo Booklet</p>
                      </div>
                    </div>
                  </BookPage>
                </HTMLFlipBook>
              </div>

              {/* Bottom Madhubani Art Border Band */}
              <div className="hidden sm:block mt-3 px-4">
                <MadhubaniBorderStrip />
              </div>
            </div>

            {/* Bottom Flip Buttons & Page Counter */}
            <div className="mt-8 flex items-center justify-between gap-6 w-full max-w-2xl px-4">
              <button
                onClick={handlePrev}
                className="flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-[#3B2A20] text-[#F5EBDD] hover:bg-[#261B14] shadow-lg hover:shadow-xl transition-all active:scale-95 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Turn Back</span>
              </button>

              <div className="text-center">
                <span className="font-serif text-sm sm:text-base font-bold text-[#3B2A20] block">
                  Page {currentPage + 1} of {totalPages}
                </span>
                <span className="text-xs text-[#4F7A4B] font-semibold">
                  Click or drag page edges to flip
                </span>
              </div>

              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-[#3B2A20] text-[#F5EBDD] hover:bg-[#261B14] shadow-lg hover:shadow-xl transition-all active:scale-95 cursor-pointer"
              >
                <span>Turn Page</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Flat List View Mode */
        <div className="space-y-8 animate-fade-in">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {MENU_CATEGORIES.map((category) => {
              const isActive = activeListCategory === category.id
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveListCategory(category.id)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#3B2A20] text-[#FAF6F0] shadow-md'
                      : 'bg-[#F5EBDD] text-[#3B2A20]/80 hover:bg-[#EADBC8]'
                  }`}
                >
                  {category.name}
                </button>
              )
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredListItems.map((item) => (
              <div
                key={item.id}
                className="bg-[#FAF6F0] p-6 rounded-2xl border border-[#3B2A20]/10 hover:border-[#4F7A4B]/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-serif text-lg font-bold text-[#3B2A20]">
                        {item.name}
                      </h4>
                      {item.tags && item.tags.length > 0 && (
                        <div className="flex gap-1.5 mt-1">
                          {item.tags.map((t, i) => (
                            <span
                              key={i}
                              className="text-[10px] font-semibold text-[#4F7A4B] bg-[#F0F5EF] px-2 py-0.5 rounded-full"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <span className="font-serif text-lg font-bold text-[#3B2A20]">
                      ₹{item.price}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-[#3B2A20]/70">{item.description}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#3B2A20]/10 flex items-center justify-between text-xs">
                  <span className="text-[#3B2A20]/50 text-[11px]">Freshly made on order</span>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=Hi%20BrewLeaf%20Cafe,%20I'd%20like%20to%20order:%20${encodeURIComponent(item.name)}%20(Rs.%20${item.price})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-[#4F7A4B] hover:underline"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Order</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
