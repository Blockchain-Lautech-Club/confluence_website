import { Calendar, CircleDollarSign, MapPin, Target, Users } from 'lucide-react'
import React from 'react'
import Image from 'next/image'


const Details = () => {
  return (
    <section id='details' className='pt-[8%] max-sm:pt-[20%] px-20 max-sm:px-5'>
      <div className='md:text-2xl text-xs font-semibold bg-white py-2 px-7 rounded-full w-fit text-nowrap mx-auto shadow'><h2 className=' text-gradient uppercase'>Venue Details</h2></div>
        <p className='text-center text-gradient pt-3 text-2xl md:text-4xl lg:text-5xl font-semibold '>Everything you need to know <br className='hidden lg:block' /> about the location</p>  

      <div className="flex pt-12 max-sm:pt-6 gap-5 flex-col lg:flex-row items-stretch">
        <div className="basis-1/2">
          <div className="flex flex-col-reverse gap-5">
            <div className="bg-white px-5 py-5 max-sm:py-10 rounded-lg text-center shadow max-sm:h-full" data-aos="fade-right">
              <div className='p-3 bg-conblue text-white rounded-lg w-fit mx-auto'>
                <MapPin/>
              </div>
              <h2 className='text-conblue font-bold py-3 text-3xl'>Venue</h2>
               <p className='text-slate-500 font-medium'>The Assembly, Beside Bon Nest Hotel, along Lautech main gate, Ogbomoso, Nigeria</p>
            </div>

            <div>
              {/* <div className="bg-white px-5 py-10 rounded-lg text-center shadow basis-1/2 h-55 max-sm:h-full" data-aos="fade-up" data-aos-delay="200">
              <div className='p-3 bg-conblue text-white rounded-lg w-fit mx-auto'>
                <Calendar />
              </div>
              <h2 className='text-conblue font-bold py-3 text-3xl'>Event Date</h2>
              <p className='text-slate-500 font-medium'>November 7-8, 2025</p>
              </div> */}

              {/* <div className="bg-white px-5 py-10 rounded-lg text-center shadow basis-1/2 h-55 max-sm:h-full" data-aos="fade-up" data-aos-delay="300">
                <div className='p-3 bg-conblue text-white rounded-lg w-fit mx-auto'>
                  <Users />
                </div>
                <h2 className='text-conblue font-bold py-3 text-3xl'>Attendance</h2>
                <p className='text-slate-500 font-medium'>500+ participants</p>
              </div> */}
              <div>
                <Image 
                  src={"/assembly.jpg"}
                  width={500}
                  height={500}
                  className='w-full h-75 max-sm:h-55 rounded-lg object-cover object-center'
                  alt="The Assembly event center"
                />
              </div>
            </div>

          </div>
        </div>
        <div className="basis-1/2" data-aos="fade-left">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.3599618668827!2d4.258801973987679!3d8.166441901896137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10370d2c956cd0d9%3A0x2d96e60dd59d8443!2sThe%20Assembly%20by%20Ennovate%20Lab!5e0!3m2!1sen!2sng!4v1758164387860!5m2!1sen!2sng" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full h-full max-sm:h-55 rounded-lg'></iframe>
         {/* <div className='basis-[100%]'>
              </div> */}
          {/* <div className="flex">
              <div className="bg-white px-5 py-10 rounded-lg text-center shadow h-55 max-sm:h-full" data-aos="fade-left" data-aos-delay="500">
                  <div className='p-3 bg-conblue text-white rounded-lg w-fit mx-auto'>
                    <CircleDollarSign />
                  </div>
                  <h2 className='text-conblue font-bold py-3 text-3xl'>Cost</h2>
                  <p className='text-slate-500 font-medium'>Free for all attendees</p>
              </div>

             

              <div className="bg-white px-5 py-10 rounded-lg text-center shadow h-55 max-sm:h-full" data-aos="fade-left" data-aos-delay="700">
                  <div className='p-3 bg-conblue text-white rounded-lg w-fit mx-auto'>
                    <Target />
                  </div>
                  <h2 className='text-conblue font-bold py-3 text-3xl'>Focus</h2>
                  <p className='text-slate-500 font-medium'>Blockchain, Web3, and emerging technologies</p>
              </div>

          </div> */}
        </div>
      </div>

    </section>
  )
}

export default Details