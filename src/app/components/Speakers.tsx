import React from 'react'
import Image from 'next/image'
import {LogoLoop} from './LogoLoop'
import SpeakersCarousel from './SpeakersCarousel'

const phoneNumber = "+2349162706257"
const message = "Hi, I'm interested in being a sponsor or partner at the confluence 2025 event."
const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

import { sponsorLogos, partnerLogos } from '@/app/constants'


const Speakers = () => {
  return (
    <div className='pt-[8%] max-sm:pt-[20%] px-20 max-sm:px-5'>
      <div className='md:text-2xl text-xs font-semibold bg-white py-2 px-7 rounded-full w-fit text-nowrap mx-auto shadow'>
        <h2 className='text-gradient uppercase'>Speakers</h2>
      </div>
      <p className='text-center text-gradient pt-3 text-2xl md:text-4xl lg:text-5xl font-semibold'>
        The Voices and the <br /> Visionaries
      </p>


      <SpeakersCarousel />

      <div>

        {/* Sponsors Section with LogoLoop */}
        <div className="text-center mt-[8%] max-sm:mt-[20%]" data-aos="fade-up">
          <div className='md:text-2xl text-xs font-semibold bg-white py-2 px-7 rounded-full w-fit text-nowrap mx-auto shadow'>
            <h2 className='text-gradient uppercase'>Event Sponsors</h2>
          </div>
          <div className=" mt-10">
            {/* <div className="flex justify-center gap-10 items-center">
              <Image
                src={'/sponsor2.png'}
                width={200}
                height={10}
                alt="Facucet Drops"
                className='max-sm:w-35'
              />
              <Image
                src={'/sponsor1.png'}
                width={200}
                height={10}
                alt="LandRite"
                className='max-sm:w-35'
              />
            </div> */}

            <LogoLoop
                logos={sponsorLogos}
                speed={120}
                direction="right"
                logoHeight={{ mobile: 40, tablet: 50, desktop: 40 }}
                gap={{ mobile: 30, tablet: 30, desktop: 50 }}
                pauseOnHover
                scaleOnHover
                fadeOut={false}
                fadeOutColor="#000"
                ariaLabel="Event Partners"
              />

          </div>
        </div>

        {/* Partners Section with LogoLoop */}
        <div className="text-center mt-[8%] max-sm:mt-[20%]" data-aos="fade-up">
          <div className='md:text-2xl text-xs font-semibold bg-white py-2 px-7 rounded-full w-fit text-nowrap mx-auto shadow'>
            <h2 className='text-gradient uppercase'>Event Partners</h2>
          </div>
          <div className="">
            <div className="mt-10">
            {partnerLogos.length > 1 ? (
              // Use LogoLoop if multiple partners
              <LogoLoop
                logos={partnerLogos}
                speed={120}
                direction="right"
                logoHeight={{ mobile: 40, tablet: 50, desktop: 40 }}
                gap={{ mobile: 30, tablet: 30, desktop: 50 }}
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
    </div>
  )
}

export default Speakers
