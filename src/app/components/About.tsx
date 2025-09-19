import React from 'react'
import { Users, ChartNoAxesCombined  } from 'lucide-react'

const About = () => {
  return (
    <section id='about' className='pt-[5%] px-20 max-sm:px-5 max-sm:pt-[18%]'>
        <div className='md:text-2xl text-xs font-semibold bg-white py-2 px-7 rounded-full w-fit text-nowrap mx-auto shadow'><h2 className=' text-gradient uppercase'>About Confluence</h2></div>
        <p className='text-center text-gradient pt-3 text-2xl md:text-4xl lg:text-5xl font-semibold '>The Vision Behind <br /> Confluence</p>

        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:pt-10 pt-5">
          <div data-aos="fade-right" className='basis-1/2 text-justify'>

            <p className='text-slate-700'>
              Confluence is the flagship tech conference of Blockchain Lautech, designed to unite students,
              developers, innovators, and industry leaders at the intersection of blockchain, Web3, and emerging
              technologies.
            </p>
            <p className='py-3.5 text-slate-700'>
              Since 2020, Blockchain Lautech has championed blockchain adoption on campus, driving education and
              innovation through hands-on workshops, hackathons, Bitcoin Pizza Day celebrations, developer
              bootcamps, and partnerships with global Web3 projects. To date, we have trained 2,500+ students,
              onboarded developers into ecosystems such as Crossfi, Sui, and Celo, and nurtured a vibrant community
              that connects LAUTECH to the global blockchain movement
            </p>
            <p className='text-slate-700'>
              Confluence represents the next milestone in this journey — a platform to amplify impact, foster
              collaboration, and showcase the future of technology from Ogbomoso to the world
            </p>

          </div>
          <div data-aos="fade-left" className='basis-1/2'>
            {/* <Image src='/con-img (2).jpg'
             width={400} 
             height={400}
             alt='About img'
             className='w-full h-full object-cover rounded-2xl'
             /> */}

             <div className="flex lg:gap-5 gap-3 lg:mt-5 flex-row lg:flex-col">
               <div className='w-full lg:py-10 py-6 text-center rounded-lg bg-conblack shadow text-white'>
                  <Users className='mx-auto' size={30} />
                 <h2 className='text-3xl font-semibold py-3'>2,500+</h2>
                 <p>Students Trained</p>
               </div>
               <div className='w-full lg:py-10 py-6 text-center rounded-lg bg-conblack shadow text-white'>
                  <ChartNoAxesCombined className='mx-auto' size={30} />
                 <h2 className='text-3xl font-semibold py-3'> 5+</h2>   
                 <p>Years of Impact</p>
               </div>
             </div>

          </div>
        </div>

    </section>
  )
}

export default About