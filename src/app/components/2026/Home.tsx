'use client'

import React, { useState, useEffect } from 'react'
import { MapPin, Calendar, ArrowDown, ArrowUpRight } from 'lucide-react'
import Navbar from './Navbar'
import CountdownTimer from './CountdownTimer'

const Home = () => {
  const [activePillar, setActivePillar] = useState<'code' | 'create' | 'connect'>('code');
  const [isHovered, setIsHovered] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const pillars: ('code' | 'create' | 'connect')[] = ['code', 'create', 'connect'];
    const interval = setInterval(() => {
      setActivePillar((prev) => {
        const currentIndex = pillars.indexOf(prev);
        return pillars[(currentIndex + 1) % pillars.length];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const themeDetails = {
    code: {
      color: 'text-[#286cfd]',
      bgGlow: 'bg-[#286cfd]/10',
      description: 'Capturing developers, engineers, researchers, and technical minds coming together to explore the technologies powering the next generation of the digital economy. Features technical workshops, and hackathon sprints.',
      badge: 'CODE'
    },
    create: {
      color: 'text-[#ccff00]',
      bgGlow: 'bg-[#ccff00]/10',
      description: 'Capturing founders, entrepreneurs, product builders, creators, and innovators turning ideas into companies, products, communities, and solutions for real problems.',
      badge: 'CREATE'
    },
    connect: {
      color: 'text-[#facc15]',
      bgGlow: 'bg-[#facc15]/10',
      description: 'Capturing the space for students, professionals, creators, communities, founders, and ecosystem leaders to meet, exchange ideas, find opportunities, and build relationships that extend far beyond confluence. Connecting people to people, talent to opportunity, ideas to resources, Africa to the global ecosystem.',
      badge: 'CONNECT'
    }
  };

  const currentTheme = activePillar ? themeDetails[activePillar] : null;

  return (
    <section id='home' className="relative w-full overflow-hidden transition-colors duration-500 pb-6 bg-[#0a0a0a]">
      <Navbar isRegisterOpen={isRegisterOpen} setIsRegisterOpen={setIsRegisterOpen} />
      
      {/* Background gradients that transition based on active pillar */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-8xl h-[800px] pointer-events-none z-0">
        <div className={`absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl transition-all duration-700 ease-out ${
          activePillar === 'code' ? 'bg-blue-600/10 scale-125' : 
          activePillar === 'create' ? 'bg-lime-500/10 scale-125' : 
          activePillar === 'connect' ? 'bg-yellow-600/10 scale-125' : 
          'bg-blue-600/5'
        }`} />
        <div className={`absolute top-40 right-10 w-[500px] h-[500px] rounded-full blur-3xl transition-all duration-700 ease-out ${
          activePillar === 'code' ? 'bg-indigo-600/10 scale-125' : 
          activePillar === 'create' ? 'bg-emerald-500/10 scale-125' : 
          activePillar === 'connect' ? 'bg-amber-600/10 scale-125' : 
          'bg-indigo-600/5'
        }`} />
      </div>

      <div className='flex flex-col justify-center items-center gap-10 md:pt-32 pt-26 max-sm:px-5 px-6 lg:px-20 relative z-10 max-w-7xl mx-auto'>
        
        {/* Sub-header badge */}
        <div data-aos="fade-up" className="flex sm:inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 shadow-sm px-4.5 py-2.5 rounded-3xl sm:rounded-full hover:shadow-md transition-shadow max-w-full">
          <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 transition-colors duration-500 ${
            activePillar === 'code' ? 'bg-[#286cfd] animate-pulse' : 
            activePillar === 'create' ? 'bg-[#ccff00] animate-pulse' : 
            activePillar === 'connect' ? 'bg-[#facc15] animate-pulse' : 
            'bg-[#286cfd] animate-pulse'
          }`}></span>
          <span className="text-white font-extrabold text-[10px] sm:text-xs uppercase tracking-widest text-center leading-normal">
            Blockchain LAUTECH Presents: <br /> The Largest Student-led Blockchain Conference in Africa
          </span>
        </div>

        {/* Evolved Hero Typography System */}
        <div data-aos="fade-up" data-aos-delay="100" className="flex flex-col items-center text-center">
          
          {/* Main Headline */}
          <h1 className='mb-2 font-black lg:text-[7.5rem] md:text-8xl sm:text-6xl text-[clamp(2.5rem,9vw,4.5rem)] text-white tracking-tighter uppercase leading-[0.85] select-none'>
            <span 
              onMouseEnter={() => {
                setActivePillar('code');
                setIsHovered(true);
              }}
              onMouseLeave={() => setIsHovered(false)}
              className={`transition-all duration-300 cursor-pointer inline-block hover:scale-[1.02] ${
                activePillar === 'code' ? 'text-[#286cfd]' : 'opacity-30'
              }`}
            >
              CODE.
            </span>
            <span className="mx-2 sm:mx-4 opacity-10">/</span>
            <span 
              onMouseEnter={() => {
                setActivePillar('create');
                setIsHovered(true);
              }}
              onMouseLeave={() => setIsHovered(false)}
              className={`transition-all duration-300 cursor-pointer inline-block hover:scale-[1.02] ${
                activePillar === 'create' ? 'text-[#ccff00]' : 'opacity-30'
              }`}
            >
              CREATE.
            </span>
            <span className="mx-2 sm:mx-4 opacity-10">/</span>
            <span 
              onMouseEnter={() => {
                setActivePillar('connect');
                setIsHovered(true);
              }}
              onMouseLeave={() => setIsHovered(false)}
              className={`transition-all duration-300 cursor-pointer inline-block hover:scale-[1.02] ${
                activePillar === 'connect' ? 'text-[#facc15]' : 'opacity-30'
              }`}
            >
              CONNECT.
            </span>
          </h1>

          <div className="h-30 mt-2 md:h-16 max-w-5xl flex items-center justify-center">
            {currentTheme ? (
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 text-center">
                {/* <span className={`inline-block font-black text-xs tracking-widest px-3 py-1 rounded-full uppercase mb-2 ${
                  activePillar === 'code' ? 'bg-blue-950/40 text-[#286cfd] border border-blue-900/40' : 
                  activePillar === 'create' ? 'bg-lime-950/40 text-[#ccff00] border border-lime-800/40' : 
                  'bg-yellow-950/40 text-[#facc15] border border-yellow-800/40'
                }`}>
                  {currentTheme.badge} EXPERIENCE
                </span> */}
                <p className="text-slate-300 font-bold text-sm sm:text-base leading-relaxed">
                  {currentTheme.description}
                </p>
              </div>
            ) : (
              <p className="text-slate-300 mt-6 font-semibold text-sm sm:text-lg md:text-xl leading-relaxed max-w-5xl">
                Evolving the digital landscape of Ogbomoso through an immersive gathering of builders, founders, creators, and leaders. Join 1,000+ attendees at the largest student Web3 conference in Southwestern Nigeria.
              </p>
            )}
          </div>
        </div>

        {/* Main CTA & Info Pill */}
        <div data-aos="fade-up" data-aos-delay="200" className='flex flex-col items-center gap-4 w-full relative z-20'>
          
          {/* Date & Venue Pill */}
          <div className="bg-black/90 border border-white/15 shadow-2xl rounded-3xl sm:rounded-full py-4 px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 w-full max-w-[360px] sm:w-fit sm:max-w-none">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#ccff00] flex-shrink-0" />
              <span className="font-extrabold text-[10px] sm:text-sm text-slate-100 uppercase tracking-wider whitespace-nowrap">
                November 9–14, 2026
              </span>
            </div>
            
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-[#286cfd] flex-shrink-0"></div>
            
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#ccff00] flex-shrink-0" />
              <span className="font-extrabold text-[10px] sm:text-sm text-slate-100 uppercase tracking-wider text-center sm:text-left">
                TBA
              </span>
            </div>
          </div>

          {/* Hero Actions */}
          <div className='flex flex-row gap-2 sm:gap-4 items-center justify-center mb-2 w-full max-w-full sm:max-w-none px-2 sm:px-0'>
            <a 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsRegisterOpen(true);
              }}
              className="flex items-center justify-center gap-1.5 sm:gap-2 bg-[#ccff00] hover:bg-[#b5e000] text-black hover:scale-[1.02] px-3.5 sm:px-8 py-3 sm:py-4 rounded-full text-[11px] sm:text-base font-black uppercase tracking-wider cursor-pointer transition-all whitespace-nowrap neo-shadow-blue border border-black"
            >
              Register To Attend <ArrowUpRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 flex-shrink-0" />
            </a>
            
            <a 
              href="#schedule" 
              className="flex items-center justify-center gap-1.5 sm:gap-2 bg-[#286cfd] hover:bg-blue-700 text-white hover:scale-[1.02] px-3.5 sm:px-8 py-3 sm:py-4 rounded-full text-[11px] sm:text-base font-black uppercase tracking-wider cursor-pointer transition-all whitespace-nowrap neo-shadow-yellow border border-black"
            >
              Explore Schedule <ArrowDown className="w-3 h-3 sm:w-4 sm:h-4 animate-bounce flex-shrink-0" />
            </a>
          </div>
        </div>

      </div>

      {/* WebGL Carousel Showcase */}
      {/* <div 
        style={{ height: '620px', position: 'relative' }} 
        className='-mt-10 max-sm:-mt-20 overflow-hidden select-none' 
        data-aos="fade-up" 
        data-aos-delay="500"
      >
        <CircularGallery 
          bend={bend} 
          textColor="#0C1246" 
          borderRadius={0.05} 
          scrollEase={0.03} 
          autoScrollSpeed={0.12}
          items={galleryItems}
        />
      </div> */}

      {/* Countdown Timer */}
      <div className="w-full mt-4 relative z-20">
        <CountdownTimer />
      </div>
    </section>
  )
}

export default Home
