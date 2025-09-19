import React from 'react'
// import { Target, Globe, Rocket, HeartHandshake } from 'lucide-react'

const Why = () => {
  return (
    <div className='pt-[8%] max-sm:pt-[20%]  px-20 max-sm:px-5'>
        <div className='md:text-2xl text-xs  font-semibold bg-white py-2 px-7 rounded-full w-fit text-nowrap mx-auto shadow'>
            <h2 className=' text-gradient uppercase'>Why Ogbomoso?</h2>
        </div>
        <p className='text-center text-gradient pt-3 text-2xl md:text-4xl lg:text-5xl font-semibold '>Amplifying Innovation <br /> Through Confluence</p>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-5 gap-15 pt-14">
            <div className="px-5 py-14 text-center rounded-lg bg-white shadow relative flex flex-col items-center justify-center" data-aos="fade-up">
                <div className='flex justify-center w-fit mx-auto bg-conblue text-white p-3 rounded-lg absolute -top-5 left-1/2 -translate-x-1/2'>
                    <Target />
                </div>
                <h2 className='text-lg font-semibold text-slate-700'>Proven Impact</h2>
                <p className='text-slate-600 text-md'>2,500+ students trained since 2020</p>
            </div>
            <div className="px-5 py-14 text-center rounded-lg bg-white shadow relative flex flex-col items-center justify-center" data-aos="fade-up" data-aos-delay="200">
                <div className='flex justify-center w-fit mx-auto bg-conblue text-white p-3 rounded-lg absolute -top-5 left-1/2 -translate-x-1/2'>
                    <Globe />
                </div>
                <h2 className='text-lg font-semibold text-slate-700'>Global Connections</h2>
                <p className='text-slate-600 text-md'>Partnerships with Solana, Sui, Celo ecosystems</p>
            </div>
            <div className="px-5 py-14 text-center rounded-lg bg-white shadow flex flex-col items-center justify-center relative" data-aos="fade-up" data-aos-delay="400">
               <div className='flex justify-center w-fit mx-auto bg-conblue text-white p-3 rounded-lg absolute -top-5 left-1/2 -translate-x-1/2'>
                    <Rocket />
               </div>
                <h2 className='text-lg font-semibold text-slate-700'>Innovation Hub</h2>
                <p className='text-slate-600 text-md'>Showcasing the future from Ogbomoso to the world</p>
            </div>
            <div className="px-5 py-14 text-center rounded-lg bg-white shadow flex flex-col items-center justify-center relative" data-aos="fade-up" data-aos-delay="600">
             <div className='flex justify-center w-fit mx-auto bg-conblue text-white p-3 rounded-lg absolute -top-5 left-1/2 -translate-x-1/2'>
                <HeartHandshake />
               </div>
                <h2 className='text-lg font-semibold text-slate-700'>Inclusive Community</h2>
                <p className='text-slate-600 text-md'>Uniting beginners to experts in one space</p>
            </div>
        </div> */}

        <div className="flex flex-col lg:flex-row lg:mt-10 mt-5 gap-10 items-stretch">
            <div className="basis-1/2" data-aos="fade-right">
            <p className='text-slate-700 text-md md:text-md leading-relaxed text-justify'>
                Ogbomoso isn’t just a city - it’s a growing hub of energy, innovation, and youthful talent. As the second largest city in Oyo State, with a population running into the millions, Ogbomoso stands out as a vibrant urban center on the rise. The city is alive with curious minds eager to explore and embrace new technologies. <br />
            </p>
            <p className='py-3.5 text-slate-700 text-md md:text-md leading-relaxed text-justify'>
                Yet, while Ogbomoso is rich in people, ideas, and culture, it has often been overlooked in conversations about digital transformation. That’s why this is the perfect place for Confluence. By bringing Blockchain and Web3 innovation here, we’re not only sparking conversations; we’re planting seeds of opportunity, empowering a new generation of builders, and showing that global technology can take root in local communities. <br />
            </p>

            <p className='text-slate-700 text-md md:text-md leading-relaxed text-justify'>It is the right city, at the right time, for a digital shift.</p>
            </div>
            <div className="basis-1/2" data-aos="fade-left">
            <video src="VID-20250916-WA0048_1.mp4" autoPlay loop muted className="w-full h-full object-cover rounded-lg"></video>
            </div>
        </div> 

    </div>
  )
}

export default Why