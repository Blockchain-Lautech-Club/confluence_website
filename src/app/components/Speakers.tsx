import { HeartHandshake, Users } from 'lucide-react'
import React from 'react'
import Image from 'next/image'



const phoneNumber = "+2349162706257"
  const message = "Hi, I’m interested in being a sponsor or partner at the confluence 2025 event."
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`


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
          <a  href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer">
            <button className='px-10 py-3 rounded-lg md:text-sm text-xs pointer font-normal bg-conblue text-white transition cursor-pointer'>
              Contact Us
            </button>
            </a>
        </div>

        <div className="text-center mt-[8%]" data-aos="fade-up">
          <div className='md:text-2xl text-xs font-semibold bg-white py-2 px-7 rounded-full w-fit text-nowrap mx-auto shadow'>
            <h2 className='text-gradient uppercase'>Sponsors</h2>
          </div>
          <p className='text-center text-gradient pt-3 text-2xl md:text-4xl lg:text-5xl font-semibold'>Event Partners</p>

          <div className=" mt-10">
            <div className="flex justify-center items-center">
              <Image
                src={'/20250520_191329.png'}
                width={200}
                height={10}
                alt="Facucet Drops"
                className=''
              />
            </div>

          </div>

        </div>
        <div className="text-center mt-[8%]" data-aos="fade-up">
          <div className='md:text-2xl text-xs font-semibold bg-white py-2 px-7 rounded-full w-fit text-nowrap mx-auto shadow'>
            <h2 className='text-gradient uppercase'>Partners</h2>
          </div>
          <p className='text-center text-gradient pt-3 text-2xl md:text-4xl lg:text-5xl font-semibold'>Event Partners</p>

          <div className=" mt-10">
            <div className="flex justify-center items-center">
              <Image
                src={'/Asset 1.png'}
                width={200}
                height={10}
                alt="Facucet Drops"
                className=''
              />
            </div>

          </div>

        </div>

      </div>

      {/* Logo Loop Section */}
      {/* <div className="mt-16">
        <p className='text-center text-gradient pt-3 text-2xl md:text-4xl lg:text-5xl font-semibold'>
        Our Partners
      </p>
        <div style={{ position: 'relative', overflow: 'hidden'}} className='pt-10'>
          <LogoLoop
            logos={techLogos}
            speed={120}
            direction="left"
            logoHeight={48}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="transparent"
            ariaLabel="Technology partners"
          />
        </div>
      </div> */}

        

    </div>
  )
}

export default Speakers