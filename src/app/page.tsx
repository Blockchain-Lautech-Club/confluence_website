'use client'

import React, { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import Image from "next/image"
import Link from "next/link"

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
    <div className="bg-[url('/bg-main.svg')] bg-fixed bg-cover pt-5 min-h-screen overflow-x-hidden flex flex-col relative">
      
      {/* Simplified Navbar */}
      <div className="bg-white max-w-[1200px] mx-auto rounded-full shadow fixed top-5 left-1/2 transform -translate-x-1/2 lg:w-[90%] w-[95%] z-50">
        <nav>
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 px-6">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/actual-logo.png"
                width={180}
                height={10}
                alt="Confluence Logo"
                className="max-sm:w-35"
              />
            </Link>

            <div className="flex md:order-2 space-x-3">
              <Link href="/2025">
                <button
                  type="button"
                  className="text-white bg-[#286cfd] hover:bg-blue-800 focus:ring-4 focus:outline-none 
                  focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center cursor-pointer transition-colors shadow-sm"
                >
                  Relive Confluence 2025
                </button>
              </Link>
            </div>
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="flex-1 flex flex-col justify-center items-center text-center px-5 relative z-10 pt-40 pb-20">
        
        <div className="bg-[#0C1246] px-8 py-3 rounded-full shadow mb-8" data-aos="fade-up">
          <h2 className='text-[#F5F5F5] font-medium lg:text-xl uppercase tracking-widest'>
            Confluence 2.0
          </h2>
        </div>
        
        <h1 className='font-semibold lg:text-7xl md:text-5xl text-4xl text-gradient tracking-wide uppercase mb-6 max-w-5xl leading-tight' data-aos="fade-up" data-aos-delay="200">
          The Next Evolution
        </h1>
        
        <p className='font-normal lg:text-2xl md:text-xl text-lg text-slate-700 max-w-2xl mb-12' data-aos="fade-up" data-aos-delay="400">
          The next chapter of Ogbomoso&apos;s digital transformation is in the works. Get ready for a bigger and better Web3 experience.
        </p>

        <div className="flex flex-col sm:flex-row gap-5" data-aos="fade-up" data-aos-delay="600">
          <button className='bg-[#286cfd] text-white px-8 py-4 rounded-lg md:text-lg text-base font-medium cursor-pointer shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all' onClick={() => alert("Waitlist coming soon!")}>
            Coming Soon...
          </button>
          <Link href="/2025">
            <button className='border-[#286cfd] border-2 bg-white/50 backdrop-blur-sm text-[#286cfd] px-8 py-4 rounded-lg md:text-lg text-base font-medium cursor-pointer hover:bg-white transition-all'>
              View 2025 Highlights
            </button>
          </Link>
        </div>

      </div>
      
      {/* Footer minimal */}
      <div className="w-full text-center py-6 text-slate-500 text-sm mt-auto z-10" data-aos="fade-in" data-aos-delay="800">
        &copy; {new Date().getFullYear()} Confluence. All rights reserved.
      </div>
    </div>
  )
}

export default Page
