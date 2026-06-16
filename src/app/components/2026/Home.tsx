'use client'

import React from 'react'
import { MapPin, Calendar, Users, Mic, Layers, Clock } from 'lucide-react'
import Navbar from './Navbar'

const Home = () => {
  return (
    <section id='home'>
      <div>
        <Navbar />
        <div className='flex flex-col justify-center items-center gap-7 md:pt-26 pt-14 max-sm:px-5 px-20 relative z-10'>
          
          <div data-aos="fade-up" className="flex flex-col items-center mt-8 md:mt-0">
            <h2 className='text-[#286cfd] font-bold text-[clamp(10px,3.2vw,14px)] sm:text-sm md:text-base tracking-[0.05em] sm:tracking-widest uppercase text-center mb-4 whitespace-nowrap'>
              The biggest Blockchain extravaganza in Oyo State
            </h2>
            <h1 className='font-black lg:text-8xl md:text-7xl sm:text-5xl text-[clamp(32px,11vw,48px)] text-[#0C1246] text-center tracking-tight uppercase leading-none mb-2 whitespace-nowrap'>
              CONFLUENCE
              <span className="text-[#286cfd]"> 2.0</span>
            </h1>
          </div>

          {/* <div className="mb-6">
            <p className='uppercase text-center font-semibold text-xl pb-2 text-slate-500 tracking-wider' data-aos="fade-up" data-aos-delay="100">Theme:</p>
            <h2 className='font-extrabold lg:text-5xl text-3xl text-gradient text-center tracking-wide uppercase' data-aos="fade-up" data-aos-delay="100">
             NEXT EVOLUTION
            </h2>
          </div>

          <p className='font-normal lg:text-lg text-center text-slate-600 max-w-2xl mx-auto mb-4' data-aos="fade-up" data-aos-delay="150">
            The next chapter of Ogbomoso's digital transformation is in the works. 
            <br className='hidden lg:block' /> 
            Get ready for a bigger and better Web3 experience.
          </p> */}

          {/* Date and Venue - Compact Inline Pill */}
          <div className="flex flex-row items-center justify-center gap-2 sm:gap-6 bg-white/90 backdrop-blur-sm px-4 sm:px-8 py-3 rounded-full shadow-sm border border-slate-100 mt-4 mx-auto w-fit" data-aos="fade-up" data-aos-delay="200">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Calendar className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#286cfd]" />
              <span className="font-semibold text-[11px] sm:text-base text-[#0C1246] whitespace-nowrap">September, 2026</span>
            </div>
            
            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-slate-300"></div>
            
            <div className="flex items-center gap-1.5 sm:gap-2">
              <MapPin className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#286cfd]" />
              <span className="font-semibold text-[11px] sm:text-base text-[#0C1246] whitespace-nowrap">TBA - Ogbomoso, Nigeria</span>
            </div>
          </div>

          {/* Stats Grid */}
          {/* Stats Grid */}
          <div className="w-full max-w-4xl flex flex-row justify-center items-start gap-3 sm:gap-6 md:gap-16 mt-2 md:mt-4 mb-2 py-1 mx-auto" data-aos="fade-up" data-aos-delay="600">
            <div className="flex flex-col items-center text-center flex-1">
              <h3 className="text-3xl sm:text-4xl md:text-6xl font-medium text-[#0C1246] mb-1 tracking-tight">800<span className="text-[#286cfd]">+</span></h3>
              <p className="text-slate-500 font-medium text-[10px] sm:text-sm md:text-base leading-snug">Expected Attendees</p>
            </div>

            <div className="flex flex-col items-center text-center flex-1">
              <h3 className="text-3xl sm:text-4xl md:text-6xl font-medium text-[#0C1246] mb-1 tracking-tight">20<span className="text-[#286cfd]">+</span></h3>
              <p className="text-slate-500 font-medium text-[10px] sm:text-sm md:text-base leading-snug">Speakers</p>
            </div>

            <div className="flex flex-col items-center text-center flex-1">
              <h3 className="text-3xl sm:text-4xl md:text-6xl font-medium text-[#0C1246] mb-1 tracking-tight">3</h3>
              <p className="text-slate-500 font-medium text-[10px] sm:text-sm md:text-base leading-snug">Tracks</p>
            </div>

            <div className="flex flex-col items-center text-center flex-1">
              <h3 className="text-3xl sm:text-4xl md:text-6xl font-medium text-[#0C1246] mb-1 tracking-tight">3<span className="text-[#286cfd]">+</span></h3>
              <p className="text-slate-500 font-medium text-[10px] sm:text-sm md:text-base leading-snug">Days</p>
            </div>
          </div>

                    {/* Buttons */}
          <div className='flex gap-5' data-aos="fade-up" data-aos-delay="400">
             <a href="#" rel='noreferrer' target='_blank'>  
                <button className='bg-[#286cfd] hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30 text-white px-5 py-4 rounded-xl md:text-lg text-base font-medium cursor-pointer'>
                  Pitch Deck
                </button>
             </a>
             <a href="/2025" rel='noreferrer' target='_blank'>  
                <button className='bg-[#0C1246] hover:bg-slate-800 transition-colors shadow-lg text-white px-5 py-4 rounded-xl md:text-lg text-base font-medium cursor-pointer'>
                  View 2025 Highlights
                </button>
             </a>
            
          </div>

        </div>
      </div>
    </section>
  )
}

export default Home
