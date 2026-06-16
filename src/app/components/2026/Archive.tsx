import React from 'react';
import Link from 'next/link';

const archiveData = [
  {
    id: '2025',
    version: '1.0',
    year: '2025',
    theme: 'Confluence 2025 Highlights',
    link: '/2025',
    isLatest: true,
  },
];

const Archive = () => {
  return (
    <section id="archive" className="py-10 px-5 md:px-20 relative z-10">
      <div className="max-w-[1200px] mx-auto">
        <div data-aos="fade-up" className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[2px] w-8 bg-[#286cfd]"></div>
            <h3 className="text-[#286cfd] font-bold tracking-widest uppercase text-sm">
              The Chronicles
            </h3>
          </div>
          {/* <h2 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight">
            Confluence Over The Years
          </h2> */}
        </div>

        {/* Scrollable Container for cards */}
        <div 
          className="flex gap-6 overflow-x-auto pb-2 pt-4 snap-x snap-mandatory hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {archiveData.map((item, index) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={100 * index}
              className={`min-w-[280px] md:min-w-[320px] lg:min-w-[350px] p-8 rounded-2xl flex flex-col justify-between snap-start transition-all duration-300 ${
                item.isLatest
                  ? 'bg-[#0f1730] border border-[#286cfd] shadow-[0_0_20px_rgba(40,108,253,0.15)] relative'
                  : 'bg-[#0C1226] border border-slate-800 hover:border-slate-700'
              }`}
            >
              {item.isLatest && (
                <div className="absolute top-[-1px] left-8 w-20 h-[2px] bg-[#286cfd] shadow-[0_0_10px_#286cfd]"></div>
              )}
              
              <div>
                {item.isLatest && (
                  <div className="mb-6 inline-flex items-center gap-2 bg-[#12224d] border border-[#286cfd]/30 text-[#6092ff] text-xs font-bold px-3 py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 bg-[#6092ff] rounded-full animate-pulse"></span>
                    LATEST
                  </div>
                )}
                
                <h4 className={`text-sm font-bold tracking-wider uppercase mb-3 ${item.isLatest ? 'text-[#6092ff]' : 'text-slate-400'}`}>
                  Confluence {item.version} - {item.year}
                </h4>
                
                <h3 className="text-white text-xl md:text-2xl font-bold leading-snug mb-8">
                  {item.theme}
                </h3>
              </div>

              <Link href={item.link}>
                <div className="inline-flex items-center text-sm font-medium text-[#286cfd] hover:text-[#6092ff] transition-colors group">
                  View 
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Archive;
