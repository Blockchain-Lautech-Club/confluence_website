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

  const targetDate: string = '2025-11-07T00:00:00';

  const startedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval: NodeJS.Timeout = setInterval(() => {
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

  // Confetti observer
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
    <div className="max-sm:-mt-15 relative z-30 flex items-center justify-center p-4 px-20 max-sm:px-5">
      <div className="bg-conblue rounded-3xl lg:p-8 p-4 shadow-2xl border border-white/20 max-w-4xl w-full">

        {eventStarted ? (
          <div ref={startedRef} className="text-center">
            <div className="bg-white/15 backdrop-blur-sm rounded-3xl lg:p-8 p-4 shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-2xl text-center md:text-5xl font-bold text-white mb-4">
                Thank you for being a part of Confluence! <br />
              </div>
              <p className="text-white">
                We hope you had an amazing experience filled with learning, networking, and inspiration. Looking forward to seeing you at the next one.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-4 md:grid-cols-4 md:gap-4 gap-2">
            {timeUnits.map((unit: TimeUnit, index: number) => (
              <div key={index} className="text-center">
                <div className="bg-white/15 backdrop-blur-sm rounded-3xl max-sm:rounded-xl md:p-6 p-3 shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-xl md:text-5xl font-bold text-white mb-2 font-mono">
                    {unit.value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-white/80 text-[9px] md:text-base font-medium uppercase lg:tracking-wide">
                    {unit.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default CountdownTimer;
