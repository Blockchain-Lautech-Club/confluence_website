'use client'

import React, { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

import Home2026 from './components/2026/Home'
import About2026 from './components/2026/About'
import Pillars2026 from './components/2026/Pillars'
import Why2026 from './components/2026/Why'
import HumanLayer2026 from './components/2026/HumanLayer'
import Schedule2026 from './components/2026/Schedule'
import Speakers2026 from './components/2026/Speakers'
import Archive2026 from './components/2026/Archive'
import Connected2026 from './components/2026/Connected'
import Footer2026 from './components/2026/Footer'
import StickyWhatsAppButton from './components/2026/StickyWhatsAppButton'

const Page = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="bg-[#000000] bg-grid min-h-screen overflow-x-hidden flex flex-col relative">
      
      {/* 1. Hero Section & WebGL Carousel & Countdown */}
      <Home2026 />

      {/* 2. The Three Pillars Section (CODE. CREATE. CONNECT.) */}
      <Pillars2026 />

      {/* 3. Editorial About Section (Vision & Stats) */}
      <About2026 />
      
      {/* 4. Event Experience Schedule Timeline */}
      <Schedule2026 />

      {/* 5. The Human Layer Featured Story (Dark Theme) */}
      <HumanLayer2026 />    
      
      {/* 6. Speakers Carousel & Sponsors & Partners grids */}
      <Speakers2026 />

            {/* 7. Why Ogbomoso Section (Video & Copy) */}
      <Why2026 />
      
      {/* 8. The Chronicles (Confluence 1.0 / 2025 Archive) */}
      <Archive2026 />
      
      {/* 9. Connected & About BCL Section */}
      <Connected2026 />
      
      {/* 10. closing Footer */}
      <Footer2026 />

      {/* Sticky Community WhatsApp Button */}
      <StickyWhatsAppButton />

    </div>
  )
}

export default Page
