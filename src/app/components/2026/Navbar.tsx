'use client'

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Menu } from "lucide-react";

interface NavbarProps {
  isRegisterOpen?: boolean;
  setIsRegisterOpen?: (open: boolean) => void;
}

export default function Navbar({ isRegisterOpen: propsRegisterOpen, setIsRegisterOpen: propsSetRegisterOpen }: NavbarProps = {}) {
  const [isOpen, setIsOpen] = useState(false);
  const [localRegisterOpen, setLocalRegisterOpen] = useState(false);
  
  const isRegisterOpen = propsRegisterOpen !== undefined ? propsRegisterOpen : localRegisterOpen;
  const setIsRegisterOpen = propsSetRegisterOpen !== undefined ? propsSetRegisterOpen : setLocalRegisterOpen;

  const communityRegUrl = "#";
  const developerRegUrl = "https://www.crenelle.org/register/developers-track-confluence-2-0-f637";
  const founderRegUrl = "https://www.crenelle.org/register/the-confluence-fellowship-founders-track-4cdf";
  const humanLayerRegUrl = "https://www.crenelle.org/register/the-human-layer-unplugged-room-9de3";
  const femaleGuildRegUrl = "https://confluence-sandbox.vercel.app/";

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Schedule", href: "#schedule" },
    // { label: "The Human Layer", href: "#human-layer" },
    { label: "Speakers", href: "#speakers" },
    { label: "Sponsors", href: "#sponsors" },
    { label: "BCL Hub", href: "https://blockchainlautech.club" },
  ];

  return (
    <>
      {/* Background overlay for mobile menu */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/60 md:hidden backdrop-blur-md transition-all duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Floating Navbar Container */}
      <div className="bg-black/80 backdrop-blur-md max-w-[1200px] rounded-full shadow-2xl border border-white/10 fixed top-4 sm:top-6 lg:top-6 left-1/2 transform -translate-x-1/2 w-[92%] transition-all duration-300 z-50">
        <nav className="px-6 py-3.5">
          <div className="flex items-center justify-between mx-auto gap-4">
            
            {/* Logo */} 
            <Link href="/" className="flex items-center flex-shrink-0 transition-transform hover:scale-[1.02]">
              <Image
                src="/actual-logo.png"
                width={160}
                height={35}
                alt="Confluence Logo"
                className="w-28 sm:w-36 md:w-[150px] h-auto invert"
              />
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-slate-300 hover:text-[#ccff00] font-semibold text-sm transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Buttons & Actions */}
            <div className="flex space-x-3 items-center flex-shrink-0">
              <Link href="/2025">
                <button
                  type="button"
                  className="text-slate-300 hover:text-white border border-white/10 hover:border-white/20 font-bold rounded-full text-xs px-3.5 py-2 text-center cursor-pointer transition-all duration-200 max-sm:hidden"
                >
                  Relive 2025
                </button>
              </Link>
              
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setIsRegisterOpen(true);
                }}
                className="text-black bg-[#ccff00] hover:bg-[#b5e000] font-black rounded-full text-xs sm:text-sm px-5 py-2 sm:py-2.5 text-center cursor-pointer transition-all duration-200 neo-shadow-blue border border-black inline-block"
              >
                Register To Attend
              </a>

              {/* Mobile hamburger menu */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center p-2 justify-center text-slate-300 rounded-full md:hidden hover:bg-white/5 transition-colors"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">{isOpen ? "Close main menu" : "Open main menu"}</span>
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Fullscreen Navigation Menu */}
          <div
            id="mobile-menu"
            className={`${
              isOpen ? "translate-y-0 opacity-100 scale-100" : "-translate-y-10 opacity-0 scale-95 pointer-events-none"
            } absolute top-[calc(100%+12px)] left-0 w-full bg-black/95 backdrop-blur-lg rounded-3xl border border-white/10 shadow-2xl p-6 md:hidden transition-all duration-300 origin-top z-50`}
          >
            <ul className="flex flex-col space-y-4 font-semibold text-slate-200 text-lg">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block py-2 px-4 rounded-xl hover:bg-white/5 hover:text-[#ccff00] transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <hr className="border-white/10 my-4" />
              <li className="flex flex-col gap-3">
                <Link href="/2025" onClick={() => setIsOpen(false)} className="w-full">
                  <button className="w-full py-3 border border-white/10 rounded-xl font-bold text-slate-300 hover:bg-white/5 transition-colors">
                    Relive Confluence 2025
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Registration Modal */}
      {isRegisterOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setIsRegisterOpen(false)}
          />
          <div className="relative bg-[#0B0A12] rounded-3xl border border-purple-500/20 shadow-2xl p-6 sm:p-10 w-full max-w-xl overflow-hidden transform transition-all animate-in fade-in zoom-in duration-300 z-10">
            
            {/* Top border accent line */}
            <div className="absolute top-0 left-0 w-full h-2.5 bg-gradient-to-r from-purple-600 via-[#286cfd] to-[#ccff00]" />
            
            <button 
              onClick={() => setIsRegisterOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="inline-flex items-center gap-1.5 bg-purple-950/40 border border-purple-900/40 text-[#ccff00] text-xs font-bold px-3 py-1 rounded-full mb-4">
                <span className="w-2 h-2 bg-[#ccff00] rounded-full animate-pulse"></span>
                SELECT YOUR EXPERIENCE
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-2 uppercase tracking-tight">
                Register For Confluence
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-6">
                Choose a track to register. You will be redirected to the registration page.
              </p>

              <div className="flex flex-col gap-4 mt-6">
                {/* Community Track (Main Event) - 2x Size/Height */}
                <a 
                  href={communityRegUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsRegisterOpen(false)}
                  className="bg-[#18132B]/60 border-2 border-purple-500/30 hover:border-[#ccff00] hover:bg-[#1C1733] p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 cursor-pointer shadow-lg hover:shadow-purple-500/10 group relative overflow-hidden text-left"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-[#ccff00]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-black text-white group-hover:text-[#ccff00] transition-colors uppercase tracking-tight">
                        Community Track (Main Event)
                      </h4>
                      <span className="bg-[#ccff00]/20 text-[#ccff00] border border-[#ccff00]/30 text-[8px] font-bold px-1.5 py-0.5 rounded uppercase">
                        Connect
                      </span>
                    </div>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-1">
                      For students, tech enthusiasts, and community builders. Keynotes, fireside chats, networking, and human layer experiences.
                    </p>
                  </div>
                </a>

                {/* Two columns for Developer and Founder Track */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Developers Track */}
                  <a 
                    href={developerRegUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsRegisterOpen(false)}
                    className="bg-[#13172C]/60 border border-white/10 hover:border-[#286cfd] hover:bg-[#171C35] p-5 rounded-2xl flex flex-col justify-between transition-all duration-300 cursor-pointer group relative overflow-hidden text-left"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#286cfd]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-sm font-black text-white group-hover:text-[#286cfd] transition-colors uppercase tracking-tight">
                          Developers Track
                        </h4>
                        <span className="bg-[#286cfd]/20 text-[#286cfd] border border-[#286cfd]/30 text-[8px] font-bold px-1.5 py-0.5 rounded uppercase">
                          CODE
                        </span>
                      </div>
                      <p className="text-slate-400 text-[11px] sm:text-xs leading-relaxed mt-1">
                        For builders, hackers, and engineers. Includes technical workshops and hackathon sprints.
                      </p>
                    </div>
                  </a>

                  {/* Founders Track */}
                  <a 
                    href={founderRegUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsRegisterOpen(false)}
                    className="bg-[#1C1613]/60 border border-white/10 hover:border-[#facc15] hover:bg-[#251F1B] p-5 rounded-2xl flex flex-col justify-between transition-all duration-300 cursor-pointer group relative overflow-hidden text-left"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#facc15]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-sm font-black text-white group-hover:text-[#facc15] transition-colors uppercase tracking-tight">
                          Founders Track
                        </h4>
                        <span className="bg-[#facc15]/20 text-[#facc15] border border-[#facc15]/30 text-[8px] font-bold px-1.5 py-0.5 rounded uppercase">
                          CREATE
                        </span>
                      </div>
                      <p className="text-slate-400 text-[11px] sm:text-xs leading-relaxed mt-1">
                        For innovators and entrepreneurs. Includes pitching, scaling, and the Fellowship.
                      </p>
                    </div>
                  </a>
                </div>

                {/* Side Events */}
                <div className="mt-2">
                  <p className="text-xs uppercase font-extrabold tracking-widest text-slate-500 mb-3 flex items-center gap-2">
                    <span className="flex-1 h-px bg-white/10" />
                    Side Events
                    <span className="flex-1 h-px bg-white/10" />
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* The Human Layer: Novelty Sports & Games */}
                    <a
                      href={humanLayerRegUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsRegisterOpen(false)}
                      className="bg-[#1A1500]/60 border border-white/10 hover:border-[#facc15] hover:bg-[#1F1A00] p-4 rounded-2xl flex flex-col justify-between transition-all duration-300 cursor-pointer group relative overflow-hidden text-left"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#facc15]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      <div className="relative z-10">
                        <div className="flex justify-between items-start mb-1.5">
                          <h4 className="text-xs font-black text-white group-hover:text-[#facc15] transition-colors uppercase tracking-tight leading-tight pr-2">
                            The Human Layer
                          </h4>
                        </div>
                        <p className="text-slate-400 text-[10px] leading-relaxed">
                          Unplugged room and Create with Purpose (Sip & Paint).
                        </p>
                      </div>
                    </a>

                    {/* Female Guild Picnic */}
                    <a
                      href={femaleGuildRegUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsRegisterOpen(false)}
                      className="bg-[#1A0A14]/60 border border-white/10 hover:border-[#f9a8d4] hover:bg-[#200D18] p-4 rounded-2xl flex flex-col justify-between transition-all duration-300 cursor-pointer group relative overflow-hidden text-left"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#f9a8d4]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      <div className="relative z-10">
                        <div className="flex justify-between items-start mb-1.5">
                          <h4 className="text-xs font-black text-white group-hover:text-[#f9a8d4] transition-colors uppercase tracking-tight leading-tight pr-2">
                            Female Guild Picnic
                          </h4>
                        </div>
                        <p className="text-slate-400 text-[10px] leading-relaxed">
                          Icebreakers, candid girl conversations &amp; games.
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <p className="text-slate-500 text-[10px] text-center mt-6 uppercase tracking-wider">
                Blockchain Club LAUTECH • Ogbomoso
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
