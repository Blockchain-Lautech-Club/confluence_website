'use client'

import React from 'react'
import Image from 'next/image'
import SpeakersCarousel from './SpeakersCarousel'
import { Mail, Handshake } from 'lucide-react'
import { sponsorTiers, partnerLogos } from '@/app/constants/2026'

const Speakers = () => {
  const PARTNER_SLOTS = 6;

  return (
    <div id="speakers-partners" className="space-y-16 md:space-y-24 pt-8 pb-8 px-6 md:px-20 max-w-7xl mx-auto overflow-hidden w-full">
      
      {/* 1. SPEAKERS SECTION */}
      <section id="speakers" className="space-y-8">
        {/* Badge */}
        <div className="flex justify-center" data-aos="fade-up">
          <div className="text-xs sm:text-sm font-bold bg-white/5 py-2 px-6 rounded-full w-fit text-nowrap shadow border border-white/10">
            <h2 className="text-gradient uppercase tracking-wider">Speakers</h2>
          </div>
        </div>
        
        {/* Title */}
        <div className="text-center space-y-3" data-aos="fade-up" data-aos-delay="100">
          <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
            The Voices and the Visionaries
          </h3>
        </div>

        <SpeakersCarousel />
      </section>

      {/* 2. SPONSORS SECTION */}
      <section id="sponsors" className="space-y-8">
        {/* Badge */}
        <div className="flex justify-center" data-aos="fade-up">
          <div className="text-xs sm:text-sm font-bold bg-white/5 py-2 px-6 rounded-full w-fit text-nowrap shadow border border-white/10">
            <h2 className="text-gradient uppercase tracking-wider">Sponsors</h2>
          </div>
        </div>
        
        {/* Title */}
        <div className="text-center space-y-3" data-aos="fade-up" data-aos-delay="100">
          <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
            Event Sponsors
          </h3>
        </div>

        {/* Sponsor Tiers Grid */}
        <div className="space-y-8 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          {sponsorTiers.map((tier) => (
            <div key={tier.name} className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-white/10 pb-2 gap-1.5">
                <h4 className="text-sm font-black uppercase tracking-widest text-[#286cfd]">
                  {tier.name}
                </h4>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {tier.description}
                </p>
              </div>
              <div className={`grid ${tier.cols} gap-4`}>
                {Array.from({ length: tier.slots }).map((_, idx) => {
                  const logo = tier.sponsors[idx];
                  return logo ? (
                    <div
                      key={idx}
                      className={`border border-white/20 rounded-2xl flex items-center justify-center ${tier.height} bg-black/40 px-4`}
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width}
                        height={logo.height}
                        className="object-contain w-auto"
                        style={{ maxHeight: logo.height ? `${logo.height}px` : '48px' }}
                      />
                    </div>
                  ) : (
                    <div 
                      key={idx}
                      className={`border border-dashed border-white/10 rounded-2xl flex items-center justify-center ${tier.height} bg-black/40 hover:bg-black/60 transition-colors duration-300 group`}
                    >
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider group-hover:text-[#ccff00] transition-colors duration-300">
                        Sponsor Slot
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Become a sponsor card */}
          <div className="bg-black/40 border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-center gap-6 mt-8 neo-shadow-blue">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-lg font-black text-white uppercase tracking-tight">Partner with Confluence 2.0</h4>
              <p className="text-sm text-slate-350 font-semibold">Expose your brand to thousands of developers, founders, and students in Nigeria.</p>
            </div>
            <a 
              href="mailto:blockchainlautech@gmail.com?subject=Sponsorship%20Interest%20-%20Confluence%202.0"
              className="w-full sm:w-auto bg-[#ccff00] hover:bg-[#b5e000] text-black text-sm font-black py-3.5 px-6 rounded-full cursor-pointer transition-all flex items-center justify-center gap-2 shrink-0 border border-black neo-shadow-blue"
            >
              <Mail className="w-4 h-4 text-[#286cfd]" /> Sponsor Confluence
            </a>
          </div>
        </div>
      </section>

      {/* 3. PARTNERS SECTION */}
      <section id="partners" className="space-y-8">
        {/* Badge */}
        <div className="flex justify-center" data-aos="fade-up">
          <div className="text-xs sm:text-sm font-bold bg-white/5 py-2 px-6 rounded-full w-fit text-nowrap shadow border border-white/10">
            <h2 className="text-gradient uppercase tracking-wider">Partners</h2>
          </div>
        </div>
        
        {/* Title */}
        <div className="text-center space-y-3" data-aos="fade-up" data-aos-delay="100">
          <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
            Event Partners
          </h3>
        </div>

        {/* Partners Grid */}
        <div className="max-w-4xl mx-auto space-y-4" data-aos="fade-up" data-aos-delay="200">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-white/10 pb-2 gap-1.5">
            <h4 className="text-sm font-black uppercase tracking-widest text-[#286cfd]">
              Media & Ecosystem Partners
            </h4>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Press coverage and distribution.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {Array.from({ length: PARTNER_SLOTS }).map((_, idx) => {
              const logo = partnerLogos[idx];
              return logo ? (
                <div
                  key={idx}
                  className="border border-white/20 rounded-xl h-16 bg-black/40 flex items-center justify-center px-2 hover:border-[#286cfd] transition-colors relative group"
                  title={`${logo.alt}${logo.category ? ` (${logo.category})` : ''}`}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width ?? 120}
                    height={logo.height ?? 50}
                    className="object-contain max-h-full w-auto"
                  />
                </div>
              ) : (
                <div 
                  key={idx}
                  className="border border-dashed border-white/10 rounded-xl h-16 bg-black/40 hover:bg-black/60 transition-colors duration-300 flex items-center justify-center group"
                >
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest group-hover:text-[#ccff00] transition-colors duration-300">
                    Partner Slot
                  </span>
                </div>
              );
            })}
          </div>

          {/* Become a partner call-to-action */}
          <div className="bg-black/40 border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-center gap-6 mt-8 neo-shadow-yellow">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-lg font-black text-white uppercase tracking-tight">Become a Media or Ecosystem Partner</h4>
              <p className="text-sm text-slate-350 font-semibold">Join forces with us to expand coverage and bring value to Ogbomoso.</p>
            </div>
            <a 
              href="mailto:blockchainlautech@gmail.com?subject=Partner%20Interest%20-%20Confluence%202.0"
              className="w-full sm:w-auto bg-[#286cfd] hover:bg-blue-700 text-white text-sm font-black py-3.5 px-6 rounded-full cursor-pointer transition-all flex items-center justify-center gap-2 shrink-0 border border-black neo-shadow-yellow"
            >
              <Handshake className="w-4 h-4 text-[#ccff00]" /> Partner With Confluence
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Speakers
