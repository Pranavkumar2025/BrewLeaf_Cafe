import React, { useState } from 'react'
import { MapPin, Clock, Phone, MessageCircle, Send, CheckCircle, ExternalLink } from 'lucide-react'

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    emailOrPhone: '',
    purpose: 'Table Inquiry',
    message: '',
  })

  const whatsappNumber = '919876543210'
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi%20BrewLeaf%20Cafe,%20I'd%20like%20to%20connect%20with%20you!`

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 sm:py-24 bg-[#F5EBDD]/50 border-t border-[#3B2A20]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#4F7A4B]">
            Find & Connect
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#3B2A20] tracking-tight">
            Drop By For A Cup
          </h2>
          <p className="text-sm sm:text-base text-[#3B2A20]/75">
            We are nestled on a peaceful, tree-shaded lane with cozy indoor seating and pet-friendly outdoor tables.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact Cards & Hours */}
          <div className="lg:col-span-6 space-y-6">
            {/* Essential Info Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Hours Card */}
              <div className="bg-[#FAF6F0] p-5 rounded-2xl border border-[#3B2A20]/10 shadow-sm space-y-2">
                <div className="w-9 h-9 rounded-xl bg-[#4F7A4B]/15 text-[#4F7A4B] flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-[#3B2A20]">Opening Hours</h4>
                  <p className="text-xs text-[#4F7A4B] font-semibold mt-0.5">Every single day</p>
                  <p className="text-sm text-[#3B2A20]/80 font-medium mt-1">8:00 AM – 10:00 PM</p>
                </div>
              </div>

              {/* Address Card */}
              <div className="bg-[#FAF6F0] p-5 rounded-2xl border border-[#3B2A20]/10 shadow-sm space-y-2">
                <div className="w-9 h-9 rounded-xl bg-[#E2A33B]/20 text-[#3B2A20] flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#C98B26]" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-[#3B2A20]">Our Address</h4>
                  <p className="text-xs text-[#3B2A20]/70 mt-1 leading-snug">
                    42, Serene Green Lane, Sector 15, Indiranagar, Bengaluru - 560038
                  </p>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="bg-[#FAF6F0] p-5 rounded-2xl border border-[#3B2A20]/10 shadow-sm space-y-2">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-[#3B2A20]">WhatsApp Chat</h4>
                  <p className="text-xs text-[#3B2A20]/70 mt-0.5">Instant responses for queries</p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#4F7A4B] hover:underline mt-1"
                  >
                    <span>+91 98765 43210</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-[#FAF6F0] p-5 rounded-2xl border border-[#3B2A20]/10 shadow-sm space-y-2">
                <div className="w-9 h-9 rounded-xl bg-[#3B2A20]/10 text-[#3B2A20] flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-[#3B2A20]">Phone Line</h4>
                  <p className="text-xs text-[#3B2A20]/70 mt-0.5">Call our barista counter</p>
                  <a
                    href="tel:+919876543210"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#3B2A20] hover:text-[#4F7A4B] mt-1"
                  >
                    <span>+91 98765 43210</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Stylized Map View Frame */}
            <div className="bg-[#FAF6F0] p-4 rounded-2xl border border-[#3B2A20]/10 shadow-sm space-y-3">
              <div className="flex items-center justify-between text-xs text-[#3B2A20]">
                <span className="font-bold flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#4F7A4B]" />
                  Neighbourhood Location Preview
                </span>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#4F7A4B] hover:underline inline-flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden border border-[#3B2A20]/10 bg-[#EADBC8]">
                {/* Visual Map graphic representation */}
                <iframe
                  title="BrewLeaf Cafe Map Location"
                  className="w-full h-full border-0 grayscale-[30%] opacity-90 hover:opacity-100 transition-opacity"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.583359560416!2d77.6366567!3d12.9783692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a7bb4324f9%3A0x6b8f1c4df1996ab4!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Column: Short Inquiry & Reservation Form */}
          <div className="lg:col-span-6 bg-[#FAF6F0] p-8 sm:p-10 rounded-3xl border border-[#3B2A20]/10 shadow-lg">
            <div className="space-y-2 mb-6">
              <h3 className="font-serif text-2xl font-bold text-[#3B2A20]">
                Send a Message or Table Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-[#3B2A20]/70">
                Planning a small book club meetup, work session, or having dietary queries? Let us know.
              </p>
            </div>

            {formSubmitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-14 h-14 bg-[#4F7A4B]/20 text-[#4F7A4B] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-xl font-bold text-[#3B2A20]">
                  Thank you! We received your message.
                </h4>
                <p className="text-xs sm:text-sm text-[#3B2A20]/75 max-w-sm mx-auto">
                  Our café team will get back to you shortly. You can also message us directly on WhatsApp for instant confirmation.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false)
                    setFormData({ name: '', emailOrPhone: '', purpose: 'Table Inquiry', message: '' })
                  }}
                  className="mt-4 text-xs font-semibold text-[#4F7A4B] underline cursor-pointer"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#3B2A20] mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#3B2A20]/20 bg-[#FAF6F0] focus:border-[#4F7A4B] focus:ring-1 focus:ring-[#4F7A4B] text-sm text-[#3B2A20] placeholder-[#3B2A20]/40 outline-none transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#3B2A20] mb-1.5">
                      Phone or Email
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 98765 43210"
                      value={formData.emailOrPhone}
                      onChange={(e) => setFormData({ ...formData, emailOrPhone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#3B2A20]/20 bg-[#FAF6F0] focus:border-[#4F7A4B] focus:ring-1 focus:ring-[#4F7A4B] text-sm text-[#3B2A20] placeholder-[#3B2A20]/40 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#3B2A20] mb-1.5">
                      Inquiry Type
                    </label>
                    <select
                      value={formData.purpose}
                      onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#3B2A20]/20 bg-[#FAF6F0] focus:border-[#4F7A4B] focus:ring-1 focus:ring-[#4F7A4B] text-sm text-[#3B2A20] outline-none transition-all cursor-pointer"
                    >
                      <option value="Table Inquiry">Table Inquiry</option>
                      <option value="Catering & Bulk Bakes">Catering & Bulk Bakes</option>
                      <option value="Roast Bean Orders">Roast Bean Orders</option>
                      <option value="General Feedback">General Feedback</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#3B2A20] mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tell us about your timing, group size, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#3B2A20]/20 bg-[#FAF6F0] focus:border-[#4F7A4B] focus:ring-1 focus:ring-[#4F7A4B] text-sm text-[#3B2A20] placeholder-[#3B2A20]/40 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#3B2A20] hover:bg-[#261B14] text-[#F5EBDD] font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
