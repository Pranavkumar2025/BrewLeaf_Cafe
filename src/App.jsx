import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#3B2A20] flex flex-col selection:bg-[#E2A33B]/30 selection:text-[#3B2A20]">
      {/* 1. Sticky / Frosted Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. About Section */}
        <About />

        {/* 4. Menu Section with Category Tabs */}
        <Menu />

        {/* 5. Gallery Section (6 Photo Grid & Lightbox) */}
        <Gallery />

        {/* 6. Customer Reviews (3 Sample Cards) */}
        <Reviews />

        {/* 7. Contact, Hours, Map & Form */}
        <Contact />
      </main>

      {/* 8. Footer */}
      <Footer />
    </div>
  )
}
