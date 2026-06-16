import { MailQuestionMark, ExternalLink } from 'lucide-react'
import React from 'react'

const Connected = () => {
  return (
    <section id='contact' className='pt-8 md:pt-12 px-5 md:px-20 relative z-10'>
      <div data-aos="fade-up" className="flex flex-col items-center">
        <h2 className='text-[#286cfd] font-bold text-sm md:text-base tracking-widest uppercase text-center mb-4'>
          Stay Connected
        </h2>
        <h1 className='font-black lg:text-5xl md:text-4xl text-[clamp(16px,6vw,36px)] sm:text-4xl text-[#0C1246] text-center tracking-tight uppercase leading-tight mb-8 whitespace-nowrap'>
          Follow our journey to <br /> 
          <span className="text-[#286cfd]">Confluence 2026</span>
        </h1>
      </div>


      <div className="flex gap-10 mt-2 mb-6 flex-col lg:flex-row lg:items-stretch">
        <div className="basis-1/2" data-aos="fade-right">
          <h2 className='text-3xl md:text-4xl font-bold text-[#0C1246] max-sm:text-center tracking-tight'>About Blockchain Lautech</h2>
          <p className='text-slate-600 mt-4 text-lg leading-relaxed text-justify md:text-left'>
            Blockchain Lautech has been championing blockchain education since 2020. Through workshops, hackathons, and community building, we&apos;ve created a vibrant ecosystem that connects LAUTECH students to the global Web3 movement.
          </p>
        </div>
        <div className="basis-1/2 h-full flex flex-col justify-center" data-aos="fade-left" data-aos-delay="200">
          <div className='bg-white/80 backdrop-blur-sm shadow-sm rounded-3xl p-4 border border-slate-100 border-l-4 border-l-[#286cfd] font-medium hover:-translate-y-1 transition-transform'>
            <h3 className="text-md leading-relaxed text-[#0C1246] font-semibold">Our Mission: To democratize blockchain education and foster innovation from Nigeria to the world.</h3>
          </div>

          <a href="https://blockchainlautech.club" rel='noreferrer' target='_blank' className="mt-6">
            <button className='bg-[#286cfd] hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30 text-white px-8 py-4 rounded-2xl md:text-lg text-base font-medium cursor-pointer w-full flex items-center justify-center gap-3'>
              Learn More About Us <ExternalLink className="w-5 h-5" />
            </button>
          </a>

          {/* Reserved for Contact Cards
          <div className="flex flex-col gap-5 h-full mt-8">
            ...
          </div>
          */}
        </div>
      </div>

    </section>
  )
}

export default Connected