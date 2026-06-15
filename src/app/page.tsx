'use client'

import React, { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import Image from "next/image"
import Link from "next/link"
import Home2026 from './components/2026/Home'
import Footer2026 from './components/2026/Footer'
import Connected2026 from './components/2026/Connected'

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
      {/* <div className="bg-white max-w-[1200px] mx-auto rounded-full shadow fixed top-5 left-1/2 transform -translate-x-1/2 lg:w-[90%] w-[95%] z-50">
        <nav>
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-6">
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
          </div> */}
        {/* </nav> */}
      {/* </div> */}


      <Home2026/>
      <Connected2026/>
      <Footer2026/>
    </div>
  )
}

export default Page
