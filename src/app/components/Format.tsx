import React from 'react'
import { Medal, Code, Target, Network, Award, Presentation, Users, Rocket, MonitorPlay, Venus, Cast } from 'lucide-react'

const Format = () => {
  return (
    <section id='format' className='pt-[8%] max-sm:pt-[20%] px-20 max-sm:px-5'>
        <div className='md:text-2xl text-xs font-semibold bg-white py-2 px-7 rounded-full w-fit text-nowrap mx-auto shadow'><h2 className=' text-gradient uppercase'>Event Format</h2></div>
        <p className='text-center text-gradient pt-3 text-2xl md:text-4xl lg:text-5xl font-semibold '>Choose your track and join us for an unforgettable experience <br className='md:hidden lg:block'/> at Confluence 2025.</p>

        <div className="flex justify-between pt-10 flex-col lg:flex-row gap-5">
            <div className="basis-1/2 bg-conblue shadow p-2.5 rounded-lg" data-aos="fade-right">
                <div className="inner bg-conblue rounded-md p-4 h-full">
                    <div className="header py-5.5 border-b border-white">
                        <h3 className='text-white font-semibold text-3xl'> Day 1: Developer Track</h3>
                        <p className='text-white text-lg font-medium pt-3'>November 7, 2025</p>
                    </div>
                    <div className="body pt-6">
                        <ul className='font-medium text-white space-y-4.5'>
                            <li className='flex gap-2'><MonitorPlay />Demo Day</li>
                            <li className='flex gap-2'><Medal />Hackathons & Coding Competitions</li>
                            <li className='flex gap-2'><Code />Technical Workshops</li>
                            <li className='flex gap-2'><Target />Bounty Challenges</li>
                            <li className='flex gap-2'><Network />Developer Networking</li>
                            <li className='flex gap-2'><Cast />Panel Session</li>
                        </ul>

                        <button className='bg-white text-black px-7 py-3 rounded-lg md:text-sm text-xs pointer font-normal mt-15 w-full'>Apply for Dev Track →</button>
                    </div>

                </div>
            </div>
            <div className="basis-1/2 bg-conblack shadow rounded-lg p-2.5 " data-aos="fade-left">
            <div className="inner bg-conblack rounded-md p-4 h-full">
                <div className="header py-5.5 border-b border-white">
                    <h3 className='text-white font-semibold text-3xl'>Day 2: Community Track</h3>
                    <p className='text-white text-lg font-medium pt-3'>November 8, 2025</p>
                </div>
                <div className="body pt-6">
                    <ul className='font-medium text-white space-y-3.5'>
                        <li className='flex gap-2'><Presentation />Keynote Presentations</li>
                        <li className='flex gap-2'><Users />Expert Panel Discussions</li>
                        <li className='flex gap-2'><Venus />Women in Web3 Sessions</li>
                        <li className='flex gap-2'><Rocket />Startup Exhibitions</li>
                        <li className='flex gap-2'><Code />Interactive Workshops</li>
                        <li className='flex gap-2'><Network />Networking Opportunities</li>
                        <li className='flex gap-2'><Award />Prize Distribution</li>
                    </ul>


                    <a href="https://luma.com/c0kc9817" rel='noreferrer' target='_blank'>
                       <button className='bg-white text-black px-7 py-3 rounded-lg md:text-sm text-xs cursor-pointer font-normal mt-15 w-full'>Register for Community Track → </button>
                    </a>
                    
                </div>

            </div>
            </div>

            
        </div>
        <div className="bg-conblack rounded-xl mt-5 lg:p-10 p-5 mx-auto text-center text-white text-center" data-aos="fade-up">
            <div className='bg-white/12 rounded-lg lg:p-10 p-5 px-6 backdrop-blur-md shadow-lg border border-white/20 flex flex-col items-center justify-center gap-4'>
            <h2 className='text-3xl font-semibold'>Access Pass</h2>
            <i className="bi bi-ticket-perforated-fill text-4xl"></i>
            <p className='text-3xl font-semibold'>$0</p>
            <ul className='max-sm:text-sm max-sm:text-justify '>
                <li> <i className="bi bi-check-circle-fill me-3"></i>Registration is free</li>
                <li> <i className="bi bi-check-circle-fill me-3"></i>Upon approval, you will receive an access pass which validates your entry.</li>
            </ul>
            </div>

      </div>
    </section>
  )
}

export default Format