'use client'

import React, { useState } from 'react'
import { Users, Code2, Heart, Megaphone, Trophy, Mic2, Palette, Zap, Building2, ArrowRight } from 'lucide-react'

const tracks = [
  {
    id: 'human',
    day: 'Sept 22 - 23',
    label: 'Pre-Event',
    title: 'The Human Layer',
    subtitle: 'Before the tech, we are human.',
    color: '#b45cf4',
    bgGradient: 'linear-gradient(135deg, #1a0a2e 0%, #2d1154 100%)',
    borderColor: '#b45cf4',
    badge: 'Premium · Capped at 30',
    badgeBg: '#2d1154',
    badgeText: '#d89fff',
    icon: Heart,
    items: [
      { icon: Trophy, text: 'Novelty Sports & Games - Maracana (Sept 22, 3pm)' },
      { icon: Mic2, text: 'Unplugged Room - raw human stories, no phones' },
      { icon: Palette, text: 'Create With Purpose - arts, painting & soft music evening' },
      { icon: Users, text: 'Intentional conversations on life, tech & identity' },
    ],
    description: 'A curated, premium experience exploring what it means to be human in a Web3 world. Real stories. Real people. No noise.',
    cta: null,
  },
  {
    id: 'founders',
    day: 'Sept 24 (Morning)',
    label: 'Day 1',
    title: 'Founders Track',
    subtitle: 'The Confluence Fellowship',
    color: '#f59e0b',
    bgGradient: 'linear-gradient(135deg, #1a1200 0%, #2d1f00 100%)',
    borderColor: '#f59e0b',
    badge: 'Under-30 Founders',
    badgeBg: '#2d1f00',
    badgeText: '#fcd34d',
    icon: Building2,
    items: [
      { icon: Zap, text: 'Raising capital & building in public' },
      { icon: Users, text: 'Founder mental health & identity' },
      { icon: Building2, text: 'Product-market fit & scaling communities' },
      { icon: Trophy, text: 'Join the Confluence Fellowship network' },
    ],
    description: '20-30 young founders (under 30) building real products in Ogbomoso. Not just Web3 - real businesses, real conversations.',
    cta: null,
  },
  {
    id: 'dev',
    day: 'Sept 24 (Eve) - Sept 25',
    label: 'Day 1 → 2',
    title: 'Dev Track',
    subtitle: '24-Hour Hackathon Sprint',
    color: '#286cfd',
    bgGradient: 'linear-gradient(135deg, #020b1f 0%, #0a1f4d 100%)',
    borderColor: '#286cfd',
    badge: '24-Hour Sprint',
    badgeBg: '#0a1f4d',
    badgeText: '#6092ff',
    icon: Code2,
    items: [
      { icon: Code2, text: '18 hours to build' },
      { icon: Zap, text: '6 hours to demo' },
      { icon: Trophy, text: 'Bounty challenges & prizes' },
      { icon: Users, text: 'Developer networking & workshops' },
    ],
    description: 'An intense 24-hour hackathon sprint for builders. From briefing to demo - build, ship, and showcase your project to industry judges.',
    cta: null,
  },
  {
    id: 'community',
    day: 'Sept 26',
    label: 'Day 3',
    title: 'Community Track',
    subtitle: 'Full Day Experience',
    color: '#10b981',
    bgGradient: 'linear-gradient(135deg, #001a0f 0%, #00311f 100%)',
    borderColor: '#10b981',
    badge: 'Full Day',
    badgeBg: '#00311f',
    badgeText: '#6ee7b7',
    icon: Megaphone,
    items: [
      { icon: Mic2, text: 'Keynote presentations' },
      { icon: Users, text: 'Expert panel discussions' },
      { icon: Zap, text: 'Interactive workshops' },
      { icon: Trophy, text: 'Prize distribution & closing ceremony' },
    ],
    description: 'The flagship community experience - keynotes, panels, exhibitions, and networking. Theme to be announced.',
    cta: null,
  },
]

const Format = () => {
  const [active, setActive] = useState('human')
  const selected = tracks.find(t => t.id === active)!

  return (
    <section id='format' className='py-16 md:py-24 px-5 md:px-20 relative z-10'>
      <div className='max-w-[1200px] mx-auto'>

        {/* Header */}
        <div data-aos='fade-up' className='mb-10'>
          <div className='flex items-center gap-4 mb-4'>
            <div className='h-[2px] w-8 bg-[#286cfd]'></div>
            <h3 className='text-[#286cfd] font-bold tracking-widest uppercase text-sm'>Event Format</h3>
          </div>
          <h2 className='font-black lg:text-5xl md:text-4xl text-3xl text-[#0C1246] tracking-tight leading-tight'>
            Four Tracks. <br className='hidden md:block' />
            <span className='text-[#286cfd]'>One Unforgettable Week.</span>
          </h2>
          <p className='text-slate-600 mt-4 text-base md:text-lg max-w-2xl'>
            Confluence 2.0 is not just a conference - it&apos;s a multi-day experience designed for founders, builders, creatives, and community leaders.
          </p>
        </div>

        {/* Tab Buttons */}
        <div data-aos='fade-up' data-aos-delay='100' className='flex flex-wrap gap-2 mb-8'>
          {tracks.map(t => {
            const Icon = t.icon
            const isActive = active === t.id
            return (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className='flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer'
                style={{
                  background: isActive ? t.color : 'white',
                  color: isActive ? 'white' : '#64748b',
                  border: `2px solid ${isActive ? t.color : '#e2e8f0'}`,
                  boxShadow: isActive ? `0 4px 20px ${t.color}40` : 'none',
                }}
              >
                <Icon className='w-4 h-4' />
                {t.title}
              </button>
            )
          })}
        </div>

        {/* Track Detail Card */}
        {tracks.map(track => {
          if (track.id !== active) return null
          const Icon = track.icon
          return (
            <div
              key={track.id}
              data-aos='fade-up'
              className='rounded-2xl overflow-hidden border'
              style={{ borderColor: track.borderColor, background: track.bgGradient }}
            >
              {/* Top accent line */}
              <div className='h-[3px] w-full' style={{ background: track.color, boxShadow: `0 0 20px ${track.color}` }}></div>

              <div className='p-6 md:p-10'>
                <div className='flex flex-col lg:flex-row gap-10'>

                  {/* Left: Info */}
                  <div className='lg:basis-1/2'>
                    <div className='flex items-center gap-3 mb-5'>
                      <div
                        className='w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0'
                        style={{ background: `${track.color}20`, border: `1px solid ${track.color}50` }}
                      >
                        <Icon className='w-6 h-6' style={{ color: track.color }} />
                      </div>
                      <div>
                        <div
                          className='text-xs font-bold px-3 py-1 rounded-full inline-block mb-1'
                          style={{ background: track.badgeBg, color: track.badgeText, border: `1px solid ${track.borderColor}40` }}
                        >
                          {track.badge}
                        </div>
                        <p className='text-slate-400 text-xs font-medium uppercase tracking-wider'>{track.day} · {track.label}</p>
                      </div>
                    </div>

                    <h3 className='text-white font-black text-3xl md:text-4xl mb-1 tracking-tight'>{track.title}</h3>
                    <p className='font-semibold text-base mb-4' style={{ color: track.color }}>{track.subtitle}</p>
                    <p className='text-slate-300 leading-relaxed text-base'>{track.description}</p>

                    {track.id === 'human' && (
                      <div
                        className='mt-6 p-4 rounded-xl border text-sm text-slate-300 leading-relaxed'
                        style={{ background: '#ffffff08', borderColor: `${track.color}30` }}
                      >
                        💡 <span className='font-semibold' style={{ color: track.color }}>Why?</span> Right now Web3 events are full of noise. People are tired. Confluence 2.0 creates space for humans to be people first - before the tech and the code.
                      </div>
                    )}
                  </div>

                  {/* Right: Items */}
                  <div className='lg:basis-1/2'>
                    <h4 className='text-slate-400 text-xs font-bold uppercase tracking-widest mb-4'>What&apos;s Inside</h4>
                    <div className='space-y-3'>
                      {track.items.map((item, i) => {
                        const ItemIcon = item.icon
                        return (
                          <div
                            key={i}
                            className='flex items-center gap-3 p-3.5 rounded-xl transition-all'
                            style={{ background: '#ffffff08', border: `1px solid ${track.borderColor}20` }}
                          >
                            <div
                              className='w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0'
                              style={{ background: `${track.color}20` }}
                            >
                              <ItemIcon className='w-4 h-4' style={{ color: track.color }} />
                            </div>
                            <span className='text-white font-medium text-sm'>{item.text}</span>
                          </div>
                        )
                      })}
                    </div>

                    {/* Navigation hint */}
                    <div className='mt-6 flex items-center gap-2 text-slate-500 text-xs'>
                      <span>Next:</span>
                      {tracks.find((t, i) => tracks.indexOf(t) === (tracks.findIndex(t => t.id === active) + 1)) && (
                        <button
                          onClick={() => {
                            const idx = tracks.findIndex(t => t.id === active)
                            if (idx < tracks.length - 1) setActive(tracks[idx + 1].id)
                          }}
                          className='flex items-center gap-1 font-semibold cursor-pointer'
                          style={{ color: tracks[(tracks.findIndex(t => t.id === active) + 1)]?.color }}
                        >
                          {tracks[(tracks.findIndex(t => t.id === active) + 1)]?.title}
                          <ArrowRight className='w-3 h-3' />
                        </button>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          )
        })}

      </div>
    </section>
  )
}

export default Format
