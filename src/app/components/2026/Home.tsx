'use client'

import React from 'react'
import { MapPin, Calendar, Users, Mic, Layers, Clock } from 'lucide-react'
import Navbar from './Navbar'

const Home = () => {
  return (
    <section id='home'>
      <div>
        <Navbar />
        <div className='flex flex-col justify-center items-center gap-7 md:pt-30 pt-14 max-sm:px-5 px-20 relative z-10'>
          
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

          {/* Date and Venue */}
          <div className='flex flex-col md:flex-row items-center gap-6 md:gap-12 mt-2' data-aos="fade-up" data-aos-delay="200">
            <div className="flex flex-col items-center gap-2">
              <p className='uppercase font-bold text-sm text-slate-500 tracking-wider'>Date</p>
              <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm border border-slate-100">
                <Calendar className="w-5 h-5 text-[#286cfd]" />
                <p className='font-semibold md:text-lg text-base text-[#0C1246]'>September, 2026</p>
              </div>
            </div>

            <div className="hidden md:block w-px h-16 bg-slate-200"></div>

            <div className="flex flex-col items-center gap-2">
              <p className='uppercase font-bold text-sm text-slate-500 tracking-wider'>Venue</p>
              <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm border border-slate-100">
                <MapPin className="w-5 h-5 text-[#286cfd]" />
                <p className='font-semibold md:text-lg text-base text-[#0C1246]'>TBA - Ogbomoso, Nigeria</p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className='flex gap-5 mt-4' data-aos="fade-up" data-aos-delay="400">
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

          {/* Stats Grid */}
          <div className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8 md:mt-14 mb-10" data-aos="fade-up" data-aos-delay="600">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-5">
                <Users className="w-7 h-7 text-[#286cfd]" />
              </div>
              <h3 className="text-4xl font-bold text-[#0C1246] mb-1">800<span className="text-[#286cfd]">+</span></h3>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-wide">Expected Attendees</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-5">
                <Mic className="w-7 h-7 text-[#286cfd]" />
              </div>
              <h3 className="text-4xl font-bold text-[#0C1246] mb-1">20<span className="text-[#286cfd]">+</span></h3>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-wide">Expert Speakers</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-5">
                <Layers className="w-7 h-7 text-[#286cfd]" />
              </div>
              <h3 className="text-4xl font-bold text-[#0C1246] mb-1">3</h3>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-wide">Dynamic Tracks</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-5">
                <Clock className="w-7 h-7 text-[#286cfd]" />
              </div>
              <h3 className="text-4xl font-bold text-[#0C1246] mb-1">3<span className="text-[#286cfd]">+</span></h3>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-wide">Days of Content</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Home
