'use client'

import { Sparkles, PhoneOff, ArrowUpRight } from 'lucide-react'

const HumanLayer = () => {
  return (
    <section id="human-layer" className="pt-8 pb-4 px-6 md:px-20 text-white relative overflow-hidden w-full bg-black">
      
      {/* Decorative radial glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-yellow-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-2 items-end">
          
          <div className="lg:col-span-8 space-y-4" data-aos="fade-right">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#facc15] animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">
                Exclusive Experience
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter leading-[0.9] text-white">
              The Human Layer
            </h2>
            
            <p className="text-[#ccff00] font-extrabold text-sm sm:text-base md:text-lg uppercase tracking-wider">
              &quot;TECHNOLOGY IS POWERFUL. PEOPLE ARE THE POINT.&quot;
            </p>
          </div>

          <div className="lg:col-span-4" data-aos="fade-left">
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 p-6 rounded-3xl flex flex-col justify-between hover:border-white/20 transition-colors">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block">Capacity Limit</span>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black text-white font-mono">50</span>
                <span className="text-slate-400 text-sm font-bold uppercase tracking-wider">Attendees Only</span>
              </div>
              <div className="pt-4">
                <a 
                  href="https://www.crenelle.org/register/the-human-layer-unplugged-room-9de3"
                  className="inline-flex items-center gap-2 bg-[#ccff00] text-black hover:bg-[#b5e000] hover:scale-[1.02] transition-all px-8 py-4 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider w-full justify-center border border-black neo-shadow-blue"
                >
                  Secure your Spot <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}

export default HumanLayer
