import { HeartHandshake, Users } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import {LogoLoop} from './LogoLoop' // Adjust path as needed

const phoneNumber = "+2349162706257"
const message = "Hi, I'm interested in being a sponsor or partner at the confluence 2025 event."
const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

// Sponsors logos
const sponsorLogos = [
  { 
    src: '/20250520_191329.png', 
    alt: 'Sponsor 1',
    href: '#' // Add actual sponsor website
  },
  // Add more sponsor logos here
  // { src: '/sponsor2.png', alt: 'Sponsor 2', href: 'https://sponsor2.com' },
  // { src: '/sponsor3.png', alt: 'Sponsor 3', href: 'https://sponsor3.com' },
]

// Partners logos
const partnerLogos = [
  { 
    src: '/Asset 1.png', 
    alt: 'Partner 1',
    href: '#',
    width: 200
  },
  { 
    src: '/partner1.png', 
    alt: 'Partner 1',
    href: '#',
     width: 200
  },
  { 
    src: '/partner2.png', 
    alt: 'Partner 1',
    href: '#',
    width: 200
  },
  { 
    src: '/partner3.png', 
    alt: 'Partner 1',
    href: '#',
     width: 200
  },
  { 
    src: '/partner4.png', 
    alt: 'Partner 4',
    href: '#',
     width: 200
  },
  // Add more partner logos here
  // { src: '/partner2.png', alt: 'Partner 2', href: 'https://partner2.com' },
  // { src: '/partner3.png', alt: 'Partner 3', href: 'https://partner3.com' },
]

const Speakers = () => {
  return (
    <div className='pt-[8%] max-sm:pt-[20%] px-20 max-sm:px-5'>
      <div className='md:text-2xl text-xs font-semibold bg-white py-2 px-7 rounded-full w-fit text-nowrap mx-auto shadow'>
        <h2 className='text-gradient uppercase'>Speakers & Partners</h2>
      </div>
      <p className='text-center text-gradient pt-3 text-2xl md:text-4xl lg:text-5xl font-semibold'>
        The Voices and the <br /> Visionaries
      </p>

      <div className='pt-10'>
        <div className="bg-white p-10 mb-10 rounded-3xl shadow text-center" data-aos="fade-up">
          <div className="p-5 rounded-lg mx-auto w-fit text-white bg-conblue mb-5">
            <Users size={30}/>
          </div>

          <h2 className='text-3xl font-semibold text-slate-700'>Coming Soon...</h2>
          <p className='text-slate-500 py-5 text-lg'>
            We&apos;re announcing our incredible lineup of industry leaders, <br /> 
            innovative startups, and ecosystem partners.
          </p>
          <a  
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button className='px-10 py-3 rounded-lg md:text-sm text-xs pointer font-normal bg-conblue text-white transition cursor-pointer'>
              Contact Us
            </button>
          </a>
        </div>

        {/* Sponsors Section with LogoLoop */}
        <div className="text-center mt-[8%]" data-aos="fade-up">
          <div className='md:text-2xl text-xs font-semibold bg-white py-2 px-7 rounded-full w-fit text-nowrap mx-auto shadow'>
            <h2 className='text-gradient uppercase'>Sponsors</h2>
          </div>
          <p className='text-center text-gradient pt-3 text-2xl md:text-4xl lg:text-5xl font-semibold'>
            Event Sponsors
          </p>

          <div className="mt-10">
            {sponsorLogos.length > 1 ? (
              // Use LogoLoop if multiple sponsors
              <LogoLoop
                logos={sponsorLogos}
                speed={100}
                direction="left"
                logoHeight={80}
                gap={32}
                pauseOnHover
                scaleOnHover
                fadeOut
                fadeOutColor="#ffffff"
                ariaLabel="Event Sponsors"
                className="[&_img]:!w-[150px] [&_img]:!h-auto"
              />
            ) : (
              // Single sponsor - static display
              <div className="flex justify-center items-center">
                <Image
                  src={sponsorLogos[0].src}
                  width={200}
                  height={100}
                  alt={sponsorLogos[0].alt || "Sponsor"}
                  className='object-contain'
                />
              </div>
            )}
          </div>
        </div>

        {/* Partners Section with LogoLoop */}
        <div className="text-center mt-[8%]" data-aos="fade-up">
          <div className='md:text-2xl text-xs font-semibold bg-white py-2 px-7 rounded-full w-fit text-nowrap mx-auto shadow'>
            <h2 className='text-gradient uppercase'>Partners</h2>
          </div>
          <p className='text-center text-gradient pt-3 text-2xl md:text-4xl lg:text-5xl font-semibold'>
            Event Partners
          </p>

          <div className="mt-10">
            {partnerLogos.length > 1 ? (
              // Use LogoLoop if multiple partners
              <LogoLoop
                logos={partnerLogos}
                speed={120}
                direction="right"
                logoHeight={60}
                gap={50}
                pauseOnHover
                scaleOnHover
                fadeOut={false}
                fadeOutColor="#000"
                ariaLabel="Event Partners"
              />
            ) : (
              // Single partner - static display
              <div className="flex justify-center items-center">
                <Image
                  src={partnerLogos[0].src}
                  width={200}
                  height={100}
                  alt={partnerLogos[0].alt || "Partner"}
                  className='object-contain'
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Speakers