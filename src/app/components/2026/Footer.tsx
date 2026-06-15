import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='bg-[#0C1246] px-20 max-sm:px-5 py-12 mt-10 relative z-10' >
        <div className="flex items-center justify-between flex-col lg:flex-row gap-8">
            <div className="flex flex-col lg:items-start items-center">
                <div className="logo flex gap-3 items-center mb-3">
                    <Image 
                        src='/con-img (1).jpg'
                        width={32}
                        height={32}
                        className='h-10 w-10 rounded-full border-2 border-[#286cfd]'
                        alt='logo'
                    />
                     <span className="self-center text-2xl font-black whitespace-nowrap text-white uppercase tracking-widest">
                        Confluence <span className="text-[#286cfd]">2.0</span>
                    </span>
                </div>

                <p className='text-slate-300 font-medium tracking-wide'>Ogbomoso, Nigeria</p>
            </div>

            <div className="flex items-center gap-4">
                <span className='text-slate-300 font-medium hidden md:block tracking-wide uppercase text-sm'>Contact Us:</span>
                
                <a href="mailto:blockchainlautech@gmail.com" className="transition-transform hover:-translate-y-1">
                    <div className="p-2 cursor-pointer bg-white/10 hover:bg-[#286cfd] transition-colors rounded-xl w-10 h-10 text-xl flex justify-center items-center text-white">
                        <i className="bi bi-envelope"></i>
                    </div>
                </a>
                <a href="https://x.com/ConfluenceEvent/" className="transition-transform hover:-translate-y-1">
                    <div className='p-2 cursor-pointer bg-white/10 hover:bg-[#286cfd] transition-colors rounded-xl w-10 h-10 text-xl flex justify-center items-center text-white'>
                    <i className="bi bi-twitter-x"></i>
                    </div>
                </a>
                <a href="https://t.me/BlockchainLautech/24" className="transition-transform hover:-translate-y-1">
                    <div className='p-2 cursor-pointer bg-white/10 hover:bg-[#286cfd] transition-colors rounded-xl w-10 h-10 text-xl flex justify-center items-center text-white'>
                    <i className="bi bi-telegram"></i>
                    </div>
                </a>
                <a href="https://chat.whatsapp.com/BvmEcyxnRsKAI64ht8LQls" className="transition-transform hover:-translate-y-1">
                    <div className='p-2 cursor-pointer bg-white/10 hover:bg-[#286cfd] transition-colors rounded-xl w-10 h-10 text-xl flex justify-center items-center text-white'>
                    <i className="bi bi-whatsapp"></i>
                    </div>
                </a>
            </div>
            
        </div>

        <hr className='border-slate-700/50 my-8' />

        <div className="flex justify-center items-center">
            <div className="text-slate-400 text-sm text-center font-medium tracking-wide">
                <p>© 2026 Blockchain Lautech. All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer