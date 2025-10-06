'use client'

import React, { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

import Home from './components/Home'
import About from './components/About'
import Format from './components/Format'
import Why from './components/Why'
import Speakers from './components/Speakers'
import Details from './components/Details'
import Connected from './components/Connected'
import Footer from './components/Footer'

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
    <div className="bg-[url('/bg-main.svg')] bg-fixed bg-cover pt-5 min-h-screen overflow-x-hidden">
      <Home />
      <About />
      <Format />
      <Why />
      <Speakers />
      <Details />
      <Connected />
      <Footer />
    </div>
  )
}

export default Page
