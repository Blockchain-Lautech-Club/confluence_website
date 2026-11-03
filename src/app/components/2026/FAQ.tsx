'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: "Is Confluence 2.0 free to attend?",
    answer: "General registration for the Community Track is completely free. However, 'The Human Layer' is a premium, capped experience (30 people), and the Founders Track requires an application and approval to attend."
  },
  {
    question: "How do I get selected for the Founders Track?",
    answer: "The Founders Track is curated specifically for young founders (under 30) who are building real products in Ogbomoso - regardless of whether it's Web3 or traditional tech. Applications will open soon."
  },
  {
    question: "Do I need to be a developer to attend?",
    answer: "Not at all! While Day 1 & 2 heavily feature a 24-hour developer hackathon, the Community Track (Day 3) and The Human Layer are designed for everyone, including creators, designers, marketers, and web3 enthusiasts."
  },
  {
    question: "What exactly is 'The Human Layer'?",
    answer: "It's an experimental, no-tech space to discuss the human side of building. We're addressing burnout, purpose, identity, and sharing raw human stories before we even start talking about tech and code. It includes sports, unplugged rooms, and creative art sessions."
  },
  {
    question: "Are accommodations provided?",
    answer: "Attendees are generally responsible for their own accommodation. However, we will provide a list of partnered hotels with discounted rates closer to the event date."
  }
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id='faq' className='py-16 md:py-24 px-5 md:px-20 relative z-10'>
      <div className='max-w-[800px] mx-auto'>
        
        {/* Header */}
        <div data-aos='fade-up' className='mb-12 text-center'>
          <div className='flex items-center justify-center gap-4 mb-4'>
            <div className='h-[2px] w-8 bg-[#286cfd]'></div>
            <h3 className='text-[#286cfd] font-bold tracking-widest uppercase text-sm'>Got Questions?</h3>
            <div className='h-[2px] w-8 bg-[#286cfd]'></div>
          </div>
          <h2 className='font-black lg:text-5xl md:text-4xl text-3xl text-[#0C1246] tracking-tight leading-tight'>
            Frequently Asked <span className='text-[#286cfd]'>Questions.</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className='space-y-4'>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div 
                key={index} 
                className={`border rounded-2xl transition-all duration-300 ${isOpen ? 'border-[#286cfd] bg-white shadow-lg shadow-blue-500/5' : 'border-slate-200 bg-white/60 hover:bg-white'}`}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className='w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer rounded-2xl'
                >
                  <span className={`font-bold text-base md:text-lg pr-4 ${isOpen ? 'text-[#286cfd]' : 'text-[#0C1246]'}`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen ? 'bg-[#286cfd]/10 rotate-180' : 'bg-slate-100'}`}>
                    <ChevronDown className={`w-5 h-5 ${isOpen ? 'text-[#286cfd]' : 'text-slate-500'}`} />
                  </div>
                </button>
                
                <div 
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 md:px-6 pb-6">
                      <p className='text-slate-600 leading-relaxed text-sm md:text-base'>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        
        {/* Still have questions CTA */}
        <div data-aos='fade-up' className='mt-10 text-center'>
          <p className='text-slate-500 text-sm'>
            Still have questions? <a href='mailto:blockchainlautech@gmail.com' className='text-[#286cfd] font-semibold hover:underline cursor-pointer'>Reach out to us</a>.
          </p>
        </div>

      </div>
    </section>
  )
}

export default FAQ
