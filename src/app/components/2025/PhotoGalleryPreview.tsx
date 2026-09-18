'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface GalleryItem {
  image: string
  text: string
}

export default function PhotoGalleryPreview() {
  const [items, setItems] = useState<GalleryItem[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    async function fetchGallery() {
      try {
        const res = await fetch('/api/gallery')
        const data = await res.json()
        if (data.items && data.items.length > 0) {
          setItems(data.items)
        }
      } catch (err) {
        console.error('Failed to fetch gallery preview:', err)
      }
    }
    fetchGallery()
  }, [])

  // Auto rotate preview photos
  useEffect(() => {
    if (items.length <= 1) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [items.length])

  // Helper for safe cyclic indices
  const getIndex = (offset: number) => {
    if (items.length === 0) return 0
    return (currentIndex + offset + items.length) % items.length
  }

  // Fallback images if items are loading or API is unconfigured
  const fallbackImages = [
    { image: "https://res.cloudinary.com/zz3ptcjd/image/upload/v1789731686/img-9944_uigdeq.jpg", text: "Community Track Keynote" },
    { image: "https://res.cloudinary.com/zz3ptcjd/image/upload/v1789733101/IMG_20251107_115424_nz2rto.jpg", text: "Developer Workshop & Hackathon" },
    { image: "https://res.cloudinary.com/zz3ptcjd/image/upload/v1789731684/img-9940_qd8qch.jpg", text: "Confluence 1.0 Panel" },
  ]

  const displayList = items.length > 0 ? items : fallbackImages

  const [selectedModalIndex, setSelectedModalIndex] = useState<number | null>(null)

  const leftItem = displayList[getIndex(-1)]
  const centerItem = displayList[getIndex(0)]
  const rightItem = displayList[getIndex(1)]

  return (
    <section id="photo-preview" className="py-16 relative overflow-hidden flex flex-col items-center justify-center">
      {/* Photo Gallery Pill Header */}
      <div className="mb-12 text-center" data-aos="fade-up">
        <span className="inline-block border-2 border-[#286cfd] text-[#286cfd] font-semibold px-8 py-2.5 rounded-full text-base md:text-lg tracking-wide bg-white/70 shadow-sm">
          Photo Gallery
        </span>
      </div>

      {/* 3-Circle Preview Section */}
      <div className="relative w-full max-w-5xl mx-auto flex items-center justify-center gap-2 md:gap-8 px-4 py-6" data-aos="fade-up" data-aos-delay="200">
        
        {/* Left Circle Image (Click to rotate to left item) */}
        <div 
          onClick={() => setCurrentIndex(getIndex(-1))} 
          className="relative group cursor-pointer transition-transform duration-500 hover:scale-105"
          title="Click to preview photo"
        >
          <div className="w-36 h-36 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl relative bg-slate-100">
            <Image
              src={leftItem.image}
              alt={leftItem.text || "Gallery photo"}
              fill
              sizes="(max-width: 640px) 144px, 256px"
              className="object-cover transition-opacity duration-500"
            />
          </div>
        </div>

        {/* Center Circle Image (Click to open Lightbox Modal Preview) */}
        <div 
          onClick={() => setSelectedModalIndex(getIndex(0))} 
          className="relative group cursor-pointer z-10 transition-transform duration-500 hover:scale-105"
          title="Click to expand preview"
        >
          <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl relative bg-slate-200">
            <Image
              src={centerItem.image}
              alt={centerItem.text || "Main gallery photo"}
              fill
              sizes="(max-width: 640px) 192px, 320px"
              className="object-cover transition-opacity duration-500"
              priority
            />
            {/* Hover overlay hint */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs md:text-sm font-semibold">
              🔍 Click to Preview
            </div>
          </div>
        </div>

        {/* Right Circle Image (Click to rotate to right item) */}
        <div 
          onClick={() => setCurrentIndex(getIndex(1))} 
          className="relative group cursor-pointer transition-transform duration-500 hover:scale-105"
          title="Click to preview photo"
        >
          <div className="w-36 h-36 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl relative bg-slate-100">
            <Image
              src={rightItem.image}
              alt={rightItem.text || "Gallery photo"}
              fill
              sizes="(max-width: 640px) 144px, 256px"
              className="object-cover transition-opacity duration-500"
            />
          </div>
        </div>

      </div>

      {/* Pagination Indicator Dots */}
      {displayList.length > 1 && (
        <div className="flex items-center gap-2 mt-8 mb-8" data-aos="fade-up" data-aos-delay="300">
          {displayList.slice(0, Math.min(displayList.length, 12)).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                idx === currentIndex
                  ? 'w-6 h-2.5 bg-[#286cfd]'
                  : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}

      {/* View All Pill Button */}
      <div data-aos="fade-up" data-aos-delay="400">
        <Link
          href="/2025/gallery"
          className="inline-block border-2 border-[#286cfd] text-[#286cfd] hover:bg-[#286cfd] hover:text-white px-10 py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 shadow-sm cursor-pointer hover:shadow-md"
        >
          View All
        </Link>
      </div>

      {/* Lightbox Modal Preview on Main Page */}
      {selectedModalIndex !== null && displayList[selectedModalIndex] && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedModalIndex(null)}
            className="absolute top-6 right-6 z-10 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all cursor-pointer"
          >
            ✕
          </button>
          <div className="max-w-4xl max-h-[80vh] flex flex-col items-center justify-center relative w-full">
            <div className="relative w-full h-[60vh]">
              <Image
                src={displayList[selectedModalIndex].image}
                alt={displayList[selectedModalIndex].text || 'Photo preview'}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
            <div className="mt-4 text-center text-white space-y-2">
              <p className="text-sm font-semibold capitalize">{displayList[selectedModalIndex].text}</p>
              <Link
                href="/2025/gallery"
                className="inline-block bg-[#286cfd] text-white px-6 py-2 rounded-full text-xs font-semibold hover:bg-blue-700 transition-colors"
              >
                View Full 2025 Gallery →
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
