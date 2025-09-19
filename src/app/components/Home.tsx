'use client'

import React, { useState, useEffect } from 'react'
import { MapPin, Calendar } from 'lucide-react'
import Navbar from './Navbar'
import CircularGallery from './CircularGallery'
import CountdownTimer from './CountdownTimer'

const Home = () => {
  const [bend, setBend] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setBend(0.5) // smaller bend on small screens
      } else {
        setBend(3) // default bend on larger screens
      }
    }

    handleResize() // run on mount
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section id='home'>
      <div>
        <Navbar />
        <div className='flex flex-col justify-center items-center gap-7 md:pt-35 pt-28 max-sm:px-5 relative z-10'>
          <div data-aos="fade-up">
          <div className="bg-[#fef4e2] px-8 py-3 rounded-full shadow">
            <h2 className='text-gradient font-medium lg:text-2xl uppercase text-center'>
              Welcome to Confluence 2025

            </h2>
          </div>
            <p className='text-center text-slate-700 pt-2 lg:text-2xl'>The Biggest Web 3 Extravaganza in Oyo State</p>
          </div>
          <div>
            <p className='uppercase text-center font-semibold text-xl pb-3' data-aos="fade-up" data-aos-delay="300">Theme:</p>
            <h1 className='font-semibold lg:text-5xl text-xl text-gradient text-center tracking-wide uppercase' data-aos="fade-up" data-aos-delay="300">
              Ogbomoso&apos;s digital transformation: BlockChain as a catalyst
            </h1>
          </div>

          <p className='font-normal lg:text-lg text-center text-slate-700' data-aos="fade-up" data-aos-delay="600">
            The flagship tech conference uniting students, developers, and industry leaders at <br className='hidden lg:block' /> 
            the intersection of blockchain, Web3, and emerging technologies.
          </p>

          <div className='flex lg:gap-10 gap-5' data-aos="fade-up" data-aos-delay="600">
            <div className="flex items-center gap-1">
              <i className="bi bi-geo-alt-fill text-pink-700"></i> 
              <p className='uppercase font-normal md:text-base text-xs text-slate-700'>Ogbomoso, Nigeria</p>
            </div>
            <div className="flex items-center gap-2">
              <i className="bi bi-calendar-event text-pink-700"></i>
              <p className='uppercase font-normal md:text-base text-xs text-slate-700'>November 7 - 8, 2025</p>
            </div>
          </div>

          <div className='flex gap-5' data-aos="fade-up" data-aos-delay="900">
             <a href="https://luma.com/c0kc9817" rel='noreferrer' target='_blank'>  
              <button className=' bg-[#286cfd] text-white px-7 py-3 rounded-lg md:text-sm text-xs pointer font-normal cursor-pointer'>
              Register for Community Track
            </button>
             </a>
            

            <button className='border-[#286cfd] border-2 text-[#286cfd] px-7 py-3 rounded-lg md:text-sm text-xs pointer font-normal cursor-pointer'>
              Apply for Dev Track
            </button>
          </div>
        </div>

        <div style={{ height: '600px', position: 'relative' }} className='-mt-25 max-sm:-mt-20' data-aos="fade-up" data-aos-delay="1300">
          <CircularGallery 
            bend={bend} 
            textColor="#000" 
            borderRadius={0.05} 
            scrollEase={0.02} 
            autoScrollSpeed={0.09}
          />
        </div>


        <CountdownTimer />
      </div>

    </section>
  )
}

export default Home
