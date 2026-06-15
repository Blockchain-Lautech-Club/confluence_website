"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white max-w-[1200px] mx-auto rounded-full shadow fixed left-1/2 transform -translate-x-1/2 lg:w-[90%] w-[95%] z-50">
      <nav className="">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-3 sm:p-4 gap-2">
          {/* Logo */} 
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/actual-logo.png"
              width={180}
              height={10}
              alt="Confluence Logo"
              className="w-28 sm:w-35 md:w-[180px] h-auto"/>
          </Link>

          {/* Buttons */}
          <div className="flex md:order-2 space-x-2 md:space-x-3 rtl:space-x-reverse items-center flex-shrink-0">
            <Link href="/2025">
              <button
                type="button"
                className="text-white bg-[#286cfd] hover:bg-blue-800 focus:ring-4 focus:outline-none 
                focus:ring-blue-300 font-medium rounded-full text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 text-center cursor-pointer whitespace-nowrap"
              >
                <span className="hidden sm:inline">Relive Confluence 2025</span>
                <span className="sm:hidden">Relive 2025</span>
              </button>
            </Link>
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center p-2 w-9 h-9 sm:w-10 sm:h-10 justify-center text-sm text-gray-500 
              rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded={isOpen}
            >
              <span className="sr-only">{isOpen ? "Close main menu" : "Open main menu"}</span>

              {isOpen ? (
                // Close (X) icon
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              )}
            </button>

          </div>

          {/* as */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          >
           <ul
              className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg 
              max-sm:absolute max-sm:bg-white max-sm:w-[95%] max-sm:mt-10 max-sm:z-20 max-sm:left-1/2 
              max-sm:transform max-sm:-translate-x-1/2 
              md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white"
            >
              <li>
                <a
                  href="#home"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-3 text-gray-900 rounded-sm md:bg-transparent 
                  md:p-0 md:hover:text-blue-700"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-3 text-gray-900 rounded-sm max-sm:hover:bg-gray-100
                  md:hover:text-blue-700 md:p-0"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#details"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-3 text-gray-900 rounded-sm max-sm:hover:bg-gray-100
                  md:hover:text-blue-700 md:p-0"
                >
                  Venue
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-3 text-gray-900 rounded-sm max-sm:hover:bg-gray-100
                  md:hover:text-blue-700 md:p-0"
                >
                  Contact
                </a>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </div>
  );
}
