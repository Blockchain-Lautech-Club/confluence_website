'use client';

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight, HelpCircle } from "lucide-react";
import type { Swiper as SwiperType } from "swiper";
import { speakers } from "@/app/constants/2026";

const confirmedSpeakers = speakers.filter((s) => s.confirmed);
const placeholderSpeakers = speakers.filter((s) => !s.confirmed);


export default function SpeakersCarousel() {
  const swiperRef = useRef<SwiperType | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const swiper = swiperRef.current;
        if (!swiper) return;
        if (entry.isIntersecting) {
          swiper.autoplay.start();
        } else {
          swiper.autoplay.stop();
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [swiperRef, containerRef]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center pt-4 md:pt-2 w-full min-w-0"
      data-aos="fade-up"
    >
      <div className="max-w-5xl w-full relative px-4 sm:px-12 overflow-visible">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: ".speaker-next-btn",
            prevEl: ".speaker-prev-btn",
          }}
          pagination={{
            clickable: true,
            el: ".speaker-pagination",
            renderBullet: (index, className) =>
              `<span class="w-3 h-3 rounded-full mx-1 ${className}"></span>`,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="w-full py-8 overflow-hidden"
        >
          {/* Confirmed speakers */}
          {confirmedSpeakers.map((speaker) => (
            <SwiperSlide key={speaker.id} className="h-full">
              <div className="group bg-black/40 hover:bg-black/60 border border-white/10 hover:border-[#ccff00]/50 rounded-3xl p-6 shadow-sm hover:shadow-[0_0_30px_rgba(204,255,0,0.12)] transition-all duration-300 flex flex-col justify-between h-[420px] transform hover:-translate-y-2 relative overflow-hidden backdrop-blur-sm">

                {/* Gradient top bar */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#286cfd] to-[#ccff00] opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="space-y-4">
                  {/* Track label */}
                  {/* <span className="inline-flex items-center gap-1.5 bg-[#ccff00]/10 text-[#ccff00] border border-[#ccff00]/20 text-[10px] font-black tracking-widest px-3 py-1 rounded-full uppercase">
                    {speaker.track}
                  </span> */}

                  {/* Speaker photo */}
                  <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden relative shadow-inner border border-white/5">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Overlay gradient at bottom */}
                    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-black text-white uppercase tracking-tight mb-1 group-hover:text-[#ccff00] transition-colors duration-300">
                    {speaker.name}
                  </h4>
                  <p className="text-slate-400 font-bold text-xs uppercase tracking-wider group-hover:text-slate-300 transition-colors duration-300">
                    {speaker.title.join(' · ')}
                  </p>
                </div>

              </div>
            </SwiperSlide>
          ))}

          {/* Mystery placeholder speakers */}
          {placeholderSpeakers.map((speaker) => (
            <SwiperSlide key={speaker.id} className="h-full">
              <div className="group bg-black/40 hover:bg-black/60 border border-white/10 hover:border-[#286cfd]/50 rounded-3xl p-6 shadow-sm hover:shadow-[0_0_30px_rgba(40,108,253,0.15)] transition-all duration-300 flex flex-col justify-between h-[420px] transform hover:-translate-y-2 relative overflow-hidden backdrop-blur-sm">
                
                {/* Neon-like top border line always present, brightens on hover */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#286cfd] to-[#ccff00] opacity-30 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="space-y-4">
                  {/* Category label */}
                  {/* <span className="inline-flex items-center gap-1.5 bg-[#286cfd]/10 text-[#286cfd] border border-[#286cfd]/20 text-[10px] font-black tracking-widest px-3 py-1 rounded-full uppercase">
                    {speaker.track}
                  </span>
                   */}
                  {/* Giant mysterious question mark block */}
                  <div className="aspect-video w-full rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center relative overflow-hidden shadow-inner group-hover:bg-[#286cfd]/5 transition-colors duration-300">
                    <span className="text-4xl sm:text-5xl font-black text-white/10 tracking-widest group-hover:text-[#ccff00]/30 group-hover:scale-110 transition-all duration-500">
                      ???
                    </span>
                    <HelpCircle className="absolute bottom-4 right-4 w-5 h-5 text-white/10 group-hover:text-[#ccff00]/30 transition-colors" />
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-black text-white uppercase tracking-tight mb-1 group-hover:text-[#ccff00] transition-colors duration-300">
                    {speaker.name}
                  </h4>
                  <p className="text-slate-400 font-bold text-xs uppercase tracking-wider group-hover:text-slate-300 transition-colors duration-300">
                    {speaker.title.join(' · ')}
                  </p>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation arrows (hidden on mobile, visible on tablet/desktop) */}
        <div className="hidden sm:block">
          <button
            className="speaker-prev-btn absolute left-0 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 border border-white/10 hover:border-[#286cfd]/50 p-3 rounded-full shadow-md transition-all duration-300 cursor-pointer z-10 backdrop-blur-sm"
            aria-label="Previous speaker"
          >
            <ChevronLeft className="w-5 h-5 text-slate-300" />
          </button>
          
          <button
            className="speaker-next-btn absolute right-0 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 border border-white/10 hover:border-[#286cfd]/50 p-3 rounded-full shadow-md transition-all duration-300 cursor-pointer z-10 backdrop-blur-sm"
            aria-label="Next speaker"
          >
            <ChevronRight className="w-5 h-5 text-slate-300" />
          </button>
        </div>

        {/* Custom Pagination */}
        <div className="speaker-pagination flex justify-center mt-6"></div>

        {/* CSS Patch for swiper pagination */}
        <style>{`
          .speaker-pagination .swiper-pagination-bullet {
            background-color: rgba(255,255,255,0.2);
            opacity: 1;
            transition: all 0.3s;
          }
          .speaker-pagination .swiper-pagination-bullet-active {
            background-color: #ccff00;
            width: 24px;
            border-radius: 9999px;
          }
        `}</style>
      </div>
    </div>
  );
}
