'use client';

import { useState, useEffect, useRef } from 'react';
import confetti from "canvas-confetti";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface TimeUnit {
  label: string;
  value: number;
}

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [eventStarted, setEventStarted] = useState<boolean>(false);

  const targetDate: string = '2026-11-09T09:00:00';

  const startedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
        setEventStarted(false);
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setEventStarted(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  // Confetti observer when event starts
  useEffect(() => {
    if (!eventStarted) return;

    const el = startedRef.current;
    if (!el) return;

    let fired = false;

    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0];
        if (entry.isIntersecting && !fired) {
          fired = true;

          confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
          });
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [eventStarted]);

  const timeUnits: TimeUnit[] = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <div className="relative z-30 flex items-center justify-center p-4 px-6 md:px-20">
      <div className="bg-black/60 rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/10 max-w-4xl w-full neo-shadow-blue">
        
        {eventStarted ? (
          <div ref={startedRef} className="text-center py-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/10 transition-all duration-300">
              <div className="text-xl md:text-3xl font-black text-white mb-3 uppercase tracking-tight">
                Confluence 2.0 has commenced!
              </div>
              <p className="text-slate-300 text-sm max-w-lg mx-auto">
                Welcome to the digital beginning of the Confluence experience. Immerse yourself in our track sessions, network with founders, and build the future.
              </p>
            </div>
          </div>
        ) : (
          <div>
            <p className="text-center text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">
              Event Countdown
            </p>
            <div className="grid grid-cols-4 gap-3 sm:gap-6">
              {timeUnits.map((unit: TimeUnit, index: number) => (
                <div key={index} className="text-center">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-white/10 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300">
                    <div className="text-2xl sm:text-5xl font-black text-white mb-1.5 font-mono tracking-tight">
                      {unit.value.toString().padStart(2, '0')}
                    </div>
                    <div className="text-slate-400 text-[9px] sm:text-xs font-bold uppercase tracking-wider">
                      {unit.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default CountdownTimer;
