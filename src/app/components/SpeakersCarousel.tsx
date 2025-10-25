"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Swiper as SwiperType } from "swiper";

interface Speaker {
  id: number;
  name: string;
  title: string[];
  image: string;
}

const speakers: Speaker[] = [
  {
    id: 1,
    name: "𝐇𝐢𝐬 𝐈𝐦𝐩𝐞𝐫𝐢𝐚𝐥 𝐌𝐚𝐣𝐞𝐬𝐭𝐲, 𝐎𝐛𝐚 𝐆𝐡𝐚𝐧𝐝𝐢 𝐀𝐟𝐨𝐥𝐚𝐛𝐢 𝐎𝐥𝐚𝐨𝐲𝐞, 𝐎𝐫𝐮𝐦𝐨𝐠𝐞𝐠𝐞 𝐈𝐈𝐈.",
    title: ["Soun of Ogbomoso land,"],
    image: "/Soun of Ogbomoso.jpg",
  },
  {
    id: 2,
    name: 'Jesudamilare "JD" Adesegun-David',
    title: ["Co-founder and CEO of Ennovate Lab"],
    image: "/JD's Headshot.jpg",
  },
  {
    id: 3,
    name: "Eniola Mercy",
    title: ["Web3 Community and Partnerships manager"],
    image: "/eniolamercy.jpg",
  },
  {
    id: 4,
    name: "Uchenna Agams Onuegbu",
    title: ["Arbitrum Ambassador"],
    image: "/uchenna_agams.jpg",
  },
  {
    id: 5,
    name: "Deborah Enyone Oni",
    title: ["Founder, Hilton Top Solicitors", "Founder, Hilton Innovations Hub"],
    image: "/1000017551.jpg",
  },
];

export default function SpeakersCarousel() {
  const swiperRef = useRef<SwiperType | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // 👇 Only autoplay when visible in viewport
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
      className="flex flex-col items-center justify-center pt-8 md:pt-16"
      data-aos="fade-up"
    >
      <div className="max-w-7xl w-full relative">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
            renderBullet: (index, className) =>
              `<span class="w-3 h-3 rounded-full mx-1 ${className}"></span>`,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          loop
          className="w-full"
        >
          {speakers.map((speaker) => (
            <SwiperSlide key={speaker.id}>
              {/* Desktop layout */}
              <div className="hidden lg:flex items-center gap-8">
                <button
                  className="prev-btn bg-gray-300 hover:bg-gray-400 p-3 md:p-4 rounded-full transition-all duration-300 flex-shrink-0 cursor-pointer"
                  aria-label="Previous speaker"
                >
                  <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-gray-700" />
                </button>

                <div className="flex-1 bg-conblue rounded-3xl shadow-2xl p-12">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-white space-y-6">
                      <div>
                        <h2 className="text-2xl lg:text-2xl font-bold mb-4 uppercase tracking-wide">
                          {speaker.name}
                        </h2>
                        <p className="text-gray-100 text-xl lg:text-lg font-medium leading-relaxed">
                          {speaker.title.map((line, i) => (
                            <span key={i}>
                              {line}
                              <br />
                            </span>
                          ))}
                        </p>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl bg-black">
                        <Image
                          width={500}
                          height={500}
                          src={speaker.image}
                          alt={speaker.name}
                          className="w-full h-full object-cover transition-all duration-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  className="next-btn bg-gray-300 hover:bg-gray-400 p-3 md:p-4 rounded-full transition-all duration-300 flex-shrink-0 cursor-pointer"
                  aria-label="Next speaker"
                >
                  <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-gray-700" />
                </button>
              </div>

              {/* Mobile layout */}
              <div className="lg:hidden bg-conblue rounded-2xl shadow-2xl p-6 mx-auto max-w-md h-135">
                <div className="mb-6">
                  <div className="aspect-square rounded-xl overflow-hidden shadow-2xl bg-white mx-auto max-w-xs">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover transition-all duration-500"
                    />
                  </div>
                </div>

                <div className="text-white text-center space-y-3">
                  <div>
                    <h2 className="text-xl font-bold mb-2 uppercase tracking-wide">
                      {speaker.name}
                    </h2>
                    <p className="text-gray-100 text-sm font-medium leading-relaxed">
                      {speaker.title.map((line, i) => (
                        <span key={i}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </p>
                  </div>
                </div>

                <div className="flex justify-center gap-4 mt-6 absolute left-1/2 transform -translate-x-1/2 bottom-4">
                  <button
                    className="prev-btn bg-gray-200 hover:bg-gray-300 p-3 rounded-full transition-all duration-300 cursor-pointer"
                    aria-label="Previous speaker"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-700" />
                  </button>
                  <button
                    className="next-btn bg-gray-200 hover:bg-gray-300 p-3 rounded-full transition-all duration-300 cursor-pointer"
                    aria-label="Next speaker"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-700" />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination */}
        <div className="custom-pagination flex justify-center mt-5"></div>

        {/* Tailwind patch for active bullet */}
        <style>{`
          .swiper-pagination-bullet {
            background-color: #d1d5db; /* gray-300 */
            opacity: 1;
            transition: background-color 0.3s, transform 0.3s;
          }
          .swiper-pagination-bullet-active {
            background-color: #2563eb; /* blue-600 */
            transform: scale(1.1);
          }
        `}</style>
      </div>
    </div>
  );
}
