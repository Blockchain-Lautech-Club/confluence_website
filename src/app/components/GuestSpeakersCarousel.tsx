import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight,} from 'lucide-react';

interface Speaker {
  id: number;
  name: string;
  title: string;
  image: string;
}

const speakers: Speaker[] = [
  {
    id: 1,
    name: 'Jesudamilare "JD" Adesegun-David',
    title: "Co-founder and CEO of Ennovate Lab",
    image: "/JD's Headshot.jpg",
  },
  
];

export default function SpeakersCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % speakers.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + speakers.length) % speakers.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % speakers.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

return (
    <div className="flex flex-col items-center justify-center p-4 py-8 md:py-16">
      {/* Title */}
      
      <div className="max-w-7xl w-full">
        {/* Desktop Layout - Side by Side */}
        <div className="hidden lg:flex items-center gap-8">
          {/* Left Navigation Button */}
          <button
            onClick={goToPrevious}
            className="bg-gray-300 hover:bg-gray-400 p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 flex-shrink-0"
            aria-label="Previous speaker"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-gray-700" />
          </button>

          {/* Speaker Card */}
          <div className="flex-1 bg-blue-700 rounded-3xl shadow-2xl p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Speaker Info */}
              <div className="text-white space-y-6">
                <div>
                  <h2 className="text-2xl lg:text-2xl font-bold mb-4 uppercase tracking-wide">
                    {speakers[currentIndex].name}
                  </h2>
                  <p className="text-gray-100 text-xl lg:text-lg font-light italic leading-relaxed">
                    {speakers[currentIndex].title}
                  </p>
                </div>


              </div>

              {/* Speaker Image */}
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl bg-black">
                  <img
                    src={speakers[currentIndex].image}
                    alt={speakers[currentIndex].name}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Navigation Button */}
          <button
            onClick={goToNext}
            className="bg-gray-300 hover:bg-gray-400 p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 flex-shrink-0"
            aria-label="Next speaker"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-gray-700" />
          </button>
        </div>

        {/* Mobile Layout - Vertical Stack */}
        <div className="lg:hidden bg-blue-700 rounded-2xl shadow-2xl p-6 mx-auto max-w-md">
          {/* Speaker Image */}
          <div className="mb-6">
            <div className="aspect-square rounded-xl overflow-hidden shadow-2xl bg-white mx-auto max-w-xs">
              <img
                src={speakers[currentIndex].image}
                alt={speakers[currentIndex].name}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>
          </div>

          {/* Speaker Info */}
          <div className="text-white text-center space-y-3">
            <div>
              <h2 className="text-xl font-bold mb-2 uppercase tracking-wide">
                {speakers[currentIndex].name}
              </h2>
              <p className="text-gray-100 text-sm font-light italic leading-relaxed">
                {speakers[currentIndex].title}
              </p>
            </div>

          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={goToPrevious}
              className="bg-gray-200 hover:bg-gray-300 p-3 rounded-full transition-all duration-300"
              aria-label="Previous speaker"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={goToNext}
              className="bg-gray-200 hover:bg-gray-300 p-3 rounded-full transition-all duration-300"
              aria-label="Next speaker"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-8 md:mt-12">
        {speakers.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'w-3 h-3 bg-blue-600'
                : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to speaker ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}