import React from 'react'
import { Calendar, MapPin, Footprints, Flame, Code2, Megaphone, Heart, ChevronRight } from 'lucide-react'

const schedule = [
  {
    date: 'Sept 21',
    day: 'Monday',
    label: 'Road to Confluence',
    color: '#64748b',
    borderColor: '#334155',
    bg: '#0f172a',
    events: [
      { time: 'All Day', title: 'Kickoff Day', desc: 'Internal team sync & alignment session' },
    ],
    icon: Footprints,
    muted: true,
  },
  {
    date: 'Sept 22',
    day: 'Tuesday',
    label: 'The Human Layer',
    color: '#b45cf4',
    borderColor: '#7c3aed',
    bg: '#1a0a2e',
    events: [
      { time: '3:00 PM', title: 'Novelty Sports & Games', desc: 'Football, Basketball, Tennis, Volleyball & more at Maracana' },
    ],
    icon: Heart,
    muted: false,
  },
  {
    date: 'Sept 23',
    day: 'Wednesday',
    label: 'The Human Layer',
    color: '#b45cf4',
    borderColor: '#7c3aed',
    bg: '#1a0a2e',
    events: [
      { time: 'Morning', title: 'Unplugged Room', desc: 'No phones. Raw human stories & intentional conversations.' },
      { time: '3:00 PM', title: 'Create With Purpose', desc: 'Arts, painting, soft music & a chill creative evening.' },
    ],
    icon: Heart,
    muted: false,
  },
  {
    date: 'Sept 24',
    day: 'Thursday',
    label: 'Founders Track + Dev Track Begins',
    color: '#f59e0b',
    borderColor: '#d97706',
    bg: '#1a1200',
    events: [
      { time: 'Morning', title: 'Founders Track', desc: '20-30 young founders (under 30). Real startup conversations: raising capital, building in public, founder mental health, PMF.' },
      { time: 'Evening', title: '24-Hour Hackathon Kicks Off', desc: 'Dev Track begins - 18 hours to build, 6 hours to demo.' },
    ],
    icon: Flame,
    muted: false,
  },
  {
    date: 'Sept 25',
    day: 'Friday',
    label: 'Dev Track - Demo Day',
    color: '#286cfd',
    borderColor: '#1d4ed8',
    bg: '#020b1f',
    events: [
      { time: 'All Day', title: 'Hackathon Demo Day', desc: 'Teams present their builds. Judging, bounty distribution, and Developer Track closing.' },
    ],
    icon: Code2,
    muted: false,
  },
  {
    date: 'Sept 26',
    day: 'Saturday',
    label: 'Community Track',
    color: '#10b981',
    borderColor: '#059669',
    bg: '#001a0f',
    events: [
      { time: 'Full Day', title: 'Community Track', desc: 'Keynotes, panels, workshops, exhibitions, networking & closing ceremony.' },
    ],
    icon: Megaphone,
    muted: false,
  },
]

const Details = () => {
  return (
    <section id='details' className='py-16 md:py-24 px-5 md:px-20 relative z-10'>
      <div className='max-w-[1200px] mx-auto'>

        {/* Header */}
        <div data-aos='fade-up' className='mb-12'>
          <div className='flex items-center gap-4 mb-4'>
            <div className='h-[2px] w-8 bg-[#286cfd]'></div>
            <h3 className='text-[#286cfd] font-bold tracking-widest uppercase text-sm'>Schedule</h3>
          </div>
          <h2 className='font-black lg:text-5xl md:text-4xl text-3xl text-[#0C1246] tracking-tight leading-tight'>
            Six Days. <span className='text-[#286cfd]'>One Movement.</span>
          </h2>

          {/* Summary Pills */}
          <div className='flex flex-wrap gap-3 mt-6'>
            <div className='flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-slate-100'>
              <Calendar className='w-4 h-4 text-[#286cfd]' />
              <span className='font-semibold text-[#0C1246] text-sm'>November 12–14, 2026</span>
            </div>
            <div className='flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-slate-100'>
              <MapPin className='w-4 h-4 text-[#286cfd]' />
              <span className='font-semibold text-[#0C1246] text-sm'>Ogbomoso, Nigeria</span>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className='relative'>
          {/* Vertical line */}
          <div className='hidden md:block absolute left-[88px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-slate-200 via-slate-300 to-slate-200'></div>

          <div className='space-y-6'>
            {schedule.map((day, idx) => {
              const Icon = day.icon
              return (
                <div
                  key={idx}
                  data-aos='fade-up'
                  data-aos-delay={idx * 80}
                  className='flex flex-col md:flex-row gap-4 md:gap-8'
                >
                  {/* Date Column */}
                  <div className='flex md:flex-col items-center md:items-end gap-3 md:gap-1 md:w-[88px] flex-shrink-0'>
                    <div
                      className='w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 relative z-10 md:ml-auto'
                      style={{
                        background: day.muted ? '#1e293b' : `${day.color}20`,
                        border: `2px solid ${day.muted ? '#334155' : day.color}`,
                      }}
                    >
                      <Icon className='w-4 h-4' style={{ color: day.muted ? '#64748b' : day.color }} />
                    </div>
                    <div className='md:text-right'>
                      <p className='font-black text-sm md:text-base' style={{ color: day.muted ? '#64748b' : day.color }}>{day.date}</p>
                      <p className='text-slate-400 text-xs hidden md:block'>{day.day}</p>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className='flex-1 rounded-2xl overflow-hidden border'
                    style={{
                      borderColor: day.muted ? '#1e293b' : `${day.color}40`,
                      background: day.muted ? '#0f172a' : day.bg,
                    }}
                  >
                    {/* Track badge */}
                    <div
                      className='px-5 py-3 border-b flex items-center justify-between'
                      style={{ borderColor: day.muted ? '#1e293b' : `${day.color}20` }}
                    >
                      <span
                        className='text-xs font-bold uppercase tracking-wider'
                        style={{ color: day.muted ? '#64748b' : day.color }}
                      >
                        {day.label}
                      </span>
                      {!day.muted && (
                        <span className='text-xs text-slate-500'>{day.day}</span>
                      )}
                    </div>

                    {/* Events */}
                    <div className='p-5 space-y-4'>
                      {day.events.map((event, i) => (
                        <div key={i} className={`flex gap-4 ${i > 0 ? 'pt-4 border-t border-white/5' : ''}`}>
                          <div className='flex-shrink-0 mt-0.5'>
                            <span
                              className='text-xs font-bold px-2 py-1 rounded-lg whitespace-nowrap'
                              style={{
                                background: day.muted ? '#1e293b' : `${day.color}15`,
                                color: day.muted ? '#64748b' : day.color,
                              }}
                            >
                              {event.time}
                            </span>
                          </div>
                          <div>
                            <h4 className={`font-bold text-base ${day.muted ? 'text-slate-500' : 'text-white'}`}>{event.title}</h4>
                            <p className='text-slate-400 text-sm mt-0.5 leading-relaxed'>{event.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom note */}
        <div data-aos='fade-up' className='mt-8 text-center'>
          <p className='text-slate-400 text-sm flex items-center justify-center gap-2'>
            <ChevronRight className='w-4 h-4 text-[#286cfd]' />
            Full event schedule and venue details will be announced closer to the date.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Details
