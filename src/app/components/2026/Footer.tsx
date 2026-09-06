'use client'

import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='bg-black border-t border-white/10 text-white px-6 md:px-20 py-16 mt-16 relative z-10 w-full overflow-hidden' >
      
      {/* Background visual highlight */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#286cfd] opacity-5 blur-3xl pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Top half */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 border-b border-white/10 pb-12">
          
          {/* Logo & Meta */}
          <div className="space-y-4">
            <div className="flex gap-3 items-center">
              <Image 
                src='/con-img (1).jpg'
                width={36}
                height={36}
                className='h-9 w-9 rounded-full border-2 border-[#ccff00]'
                alt='Confluence 2.0 Logo'
              />
              <span className="self-center text-2xl font-black whitespace-nowrap text-white uppercase tracking-wider">
                Confluence <span className="text-[#286cfd]">2.0</span>
              </span>
            </div>
            
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest leading-none">
              CODE. CREATE. CONNECT.
            </p>
            
            <p className='text-slate-300 font-semibold text-sm'>
              November 2–7, 2026 • Ogbomoso, Nigeria
            </p>
            
            <p className="text-slate-400 text-xs font-semibold">
              Blockchain Club LAUTECH
            </p>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 text-left lg:text-right">Follow Our Journey</h4>
            <div className="flex items-center gap-3 flex-wrap justify-start lg:justify-end">
              <a 
                href="mailto:blockchainlautech@gmail.com" 
                className="p-3 bg-white/5 hover:bg-[#ccff00] hover:text-black hover:scale-105 transition-all rounded-xl w-11 h-11 flex justify-center items-center text-white border border-white/10"
                aria-label="Email Blockchain Club LAUTECH"
              >
                <i className="bi bi-envelope text-lg"></i>
              </a>
              <a 
                href="https://x.com/ConfluenceEvent/" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-[#ccff00] hover:text-black hover:scale-105 transition-all rounded-xl w-11 h-11 flex justify-center items-center text-white border border-white/10"
                aria-label="X (Twitter)"
              >
                <i className="bi bi-twitter-x text-lg"></i>
              </a>
              <a 
                href="https://t.me/BlockchainLautech/24" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-[#ccff00] hover:text-black hover:scale-105 transition-all rounded-xl w-11 h-11 flex justify-center items-center text-white border border-white/10"
                aria-label="Telegram"
              >
                <i className="bi bi-telegram text-lg"></i>
              </a>
              <a 
                href="https://chat.whatsapp.com/BvmEcyxnRsKAI64ht8LQls" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-[#ccff00] hover:text-black hover:scale-105 transition-all rounded-xl w-11 h-11 flex justify-center items-center text-white border border-white/10"
                aria-label="WhatsApp Community"
              >
                <i className="bi bi-whatsapp text-lg"></i>
              </a>
              <a 
                href="https://www.linkedin.com/company/blockchain-club-lautech/" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-[#ccff00] hover:text-black hover:scale-105 transition-all rounded-xl w-11 h-11 flex justify-center items-center text-white border border-white/10"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin text-lg"></i>
              </a>
              <a 
                href="https://www.tiktok.com/@blockchainlautech" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-[#ccff00] hover:text-black hover:scale-105 transition-all rounded-xl w-11 h-11 flex justify-center items-center text-white border border-white/10"
                aria-label="TikTok"
              >
                <i className="bi bi-tiktok text-lg"></i>
              </a>
              <a 
                href="https://www.instagram.com/blockchainlautech" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-[#ccff00] hover:text-black hover:scale-105 transition-all rounded-xl w-11 h-11 flex justify-center items-center text-white border border-white/10"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram text-lg"></i>
              </a>
            </div>
          </div>
          
        </div>

        {/* Bottom half */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-sm text-slate-400">
          
          <div className="text-center sm:text-left space-y-1">
            <p className="font-semibold text-slate-300">
              Technology is powerful. People are the point.
            </p>
            <p className="text-slate-500 text-sm">
              &copy; 2026 Blockchain Club LAUTECH. All rights reserved.
            </p>
          </div>

          <div className="flex gap-6 font-semibold text-xs uppercase tracking-wider">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#schedule" className="hover:text-white transition-colors">Schedule</a>
            <a href="#speakers" className="hover:text-white transition-colors">Speakers</a>
            <a href="https://blockchainlautech.club" className="hover:text-white transition-colors flex items-center gap-1">
              BCL Website <i className="bi bi-box-arrow-up-right text-[10px]"></i>
            </a>
          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer