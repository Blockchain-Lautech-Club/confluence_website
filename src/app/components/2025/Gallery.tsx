'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, Maximize2, Image as ImageIcon, Users, Code } from 'lucide-react'

interface GalleryItem {
  image: string
  text: string
  track: 'community' | 'dev' | string
}

export default function Gallery() {
  const [items, setItems] = useState<GalleryItem[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedTrack, setSelectedTrack] = useState<'all' | 'community' | 'dev'>('all')
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  useEffect(() => {
    async function fetchGallery() {
      try {
        setLoading(true)
        const res = await fetch('/api/gallery?track=all')
        const data = await res.json()
        if (data.items && data.items.length > 0) {
          setItems(data.items)
        }
      } catch (err) {
        console.error('Failed to fetch gallery images:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchGallery()
  }, [])

  const filteredItems = items.filter((item) => {
    if (selectedTrack === 'all') return true
    return item.
    track === selectedTrack
  })

  const communityCount = items.filter((i) => i.track === 'community').length
  const devCount = items.filter((i) => i.track === 'dev').length

  const handleNext = useCallback(() => {
    if (selectedIndex !== null && filteredItems.length > 0) {
      setSelectedIndex((selectedIndex + 1) % filteredItems.length)
    }
  }, [selectedIndex, filteredItems.length])

  const handlePrev = useCallback(() => {
    if (selectedIndex !== null && filteredItems.length > 0) {
      setSelectedIndex((selectedIndex - 1 + filteredItems.length) % filteredItems.length)
    }
  }, [selectedIndex, filteredItems.length])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (selectedIndex === null) return
      if (e.key === 'Escape') setSelectedIndex(null)
      if (e.key === 'ArrowRight') handleNext()
      if (e.key === 'ArrowLeft') handlePrev()
    },
    [selectedIndex, handleNext, handlePrev]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  return (
    <section id="gallery" className="py-12 px-6 md:px-20 relative z-10 max-w-7xl mx-auto">
      {/* Header Badge */}
      <div className="flex justify-center mb-4" data-aos="fade-up">
        <div className="text-xs sm:text-sm font-semibold bg-white py-2 px-7 rounded-full shadow text-nowrap">
          <h2 className="text-gradient uppercase font-semibold">Confluence 1.0 — Event Chronicles</h2>
        </div>
      </div>

      {/* Section Title */}
      <div className="text-center space-y-3 mb-10" data-aos="fade-up" data-aos-delay="100">
        <h1 className="text-3xl md:text-5xl font-black text-gradient uppercase tracking-tight">
          Select Event Track
        </h1>
        <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto">
          Choose a track below to view photos from Community Track or Developer Track.
        </p>
      </div>

      {/* Event Track Cards (Clickable Preview Albums) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="200">
        
        {/* Community Track Card */}
        <div
          onClick={() => setSelectedTrack('community')}
          className={`group relative p-6 rounded-3xl cursor-pointer transition-all duration-300 border-2 shadow-lg overflow-hidden ${
            selectedTrack === 'community'
              ? 'bg-gradient-to-br from-blue-900 to-indigo-900 text-white border-[#286cfd] ring-4 ring-blue-400/30 scale-[1.02]'
              : 'bg-white/80 hover:bg-white text-slate-800 border-slate-200 hover:border-blue-300 hover:shadow-xl'
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-2xl ${selectedTrack === 'community' ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'}`}>
              <Users className="w-6 h-6" />
            </div>
            <span className={`text-xs font-semibold px-3 py-1 rounded-full uppercase ${
              selectedTrack === 'community' ? 'bg-white/20 text-white' : 'bg-blue-100 text-blue-700'
            }`}>
              November 8, 2025
            </span>
          </div>

          <h3 className="text-xl md:text-2xl font-bold mb-1">Community Track</h3>
          <p className={`text-xs md:text-sm mb-4 ${selectedTrack === 'community' ? 'text-blue-100' : 'text-slate-500'}`}>
            Fireside chats, panels, networking, and keynotes.
          </p>

          <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider">
            <span>{communityCount > 0 ? `${communityCount} Photos` : '24 Photos'}</span>
            <span className="group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
              View Album →
            </span>
          </div>
        </div>

        {/* Developer Track Card */}
        <div
          onClick={() => setSelectedTrack('dev')}
          className={`group relative p-6 rounded-3xl cursor-pointer transition-all duration-300 border-2 shadow-lg overflow-hidden ${
            selectedTrack === 'dev'
              ? 'bg-gradient-to-br from-purple-900 to-slate-900 text-white border-purple-500 ring-4 ring-purple-400/30 scale-[1.02]'
              : 'bg-white/80 hover:bg-white text-slate-800 border-slate-200 hover:border-purple-300 hover:shadow-xl'
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-2xl ${selectedTrack === 'dev' ? 'bg-purple-600 text-white' : 'bg-purple-50 text-purple-600'}`}>
              <Code className="w-6 h-6" />
            </div>
            <span className={`text-xs font-semibold px-3 py-1 rounded-full uppercase ${
              selectedTrack === 'dev' ? 'bg-white/20 text-white' : 'bg-purple-100 text-purple-700'
            }`}>
              November 7, 2025
            </span>
          </div>

          <h3 className="text-xl md:text-2xl font-bold mb-1">Developer Track</h3>
          <p className={`text-xs md:text-sm mb-4 ${selectedTrack === 'dev' ? 'text-purple-100' : 'text-slate-500'}`}>
            Hackathons, live coding workshops, and dev sessions.
          </p>

          <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider">
            <span>{devCount > 0 ? `${devCount} Photos` : '48 Photos'}</span>
            <span className="group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
              View Album →
            </span>
          </div>
        </div>

      </div>

      {/* Filter Tabs & Counter */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 border-b border-slate-200/80 pb-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSelectedTrack('all')}
            className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              selectedTrack === 'all'
                ? 'bg-slate-900 text-white shadow'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            All Tracks ({items.length})
          </button>
          <button
            onClick={() => setSelectedTrack('community')}
            className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              selectedTrack === 'community'
                ? 'bg-[#286cfd] text-white shadow'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Community Track ({communityCount})
          </button>
          <button
            onClick={() => setSelectedTrack('dev')}
            className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              selectedTrack === 'dev'
                ? 'bg-purple-600 text-white shadow'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Dev Track ({devCount})
          </button>
        </div>

        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
          Showing {filteredItems.length} photos
        </p>
      </div>

      {/* Loading Skeletons */}
      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="h-64 bg-slate-200/60 animate-pulse rounded-2xl" />
          ))}
        </div>
      )}

      {/* Empty State */}
      {!loading && filteredItems.length === 0 && (
        <div className="text-center py-16 bg-white/60 backdrop-blur-sm rounded-3xl border border-slate-200 p-8">
          <ImageIcon className="w-12 h-12 text-slate-400 mx-auto mb-3" />
          <p className="text-slate-700 font-medium">No images found for this track.</p>
        </div>
      )}

      {/* Photo Grid */}
      {!loading && filteredItems.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedIndex(index)}
              className="group relative h-80 sm:h-96 md:h-[420px] rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 cursor-pointer bg-slate-900 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <Image
                src={item.image}
                alt={item.text || `Confluence photo ${index + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="flex items-center justify-between text-white">
                  <span className="text-sm font-bold uppercase tracking-wider line-clamp-1">
                    {item.track === 'dev' ? 'Dev Track' : 'Community Track'}
                  </span>
                  <div className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedIndex !== null && filteredItems[selectedIndex] && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-6 z-10 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all cursor-pointer"
            aria-label="Close photo view"
          >
            <X className="w-6 h-6" />
          </button>

          {filteredItems.length > 1 && (
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all cursor-pointer"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>
          )}

          {filteredItems.length > 1 && (
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all cursor-pointer"
              aria-label="Next photo"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          )}

          <div className="max-w-5xl max-h-[85vh] flex flex-col items-center justify-center relative w-full">
            <div className="relative w-full h-[65vh] max-h-[700px]">
              <Image
                src={filteredItems[selectedIndex].image}
                alt={filteredItems[selectedIndex].text || 'Gallery detail'}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
            <div className="mt-4 text-center text-white space-y-1">
              <p className="text-sm md:text-base font-semibold capitalize">
                {filteredItems[selectedIndex].track === 'dev' ? 'Developer Track [Nov 7, 2025]' : 'Community Track [Nov 8, 2025]'}
              </p>
              <p className="text-xs text-slate-400">
                Photo {selectedIndex + 1} of {filteredItems.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
