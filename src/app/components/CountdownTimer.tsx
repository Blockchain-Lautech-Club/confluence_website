'use client';

import { useState, useEffect } from 'react';

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
  
  // Set your target date and time here
  const targetDate: string = '2025-11-07T00:00:00';
  const [title, setTitle] = useState<string>('Upcoming Event');

  useEffect(() => {
    const interval: NodeJS.Timeout = setInterval(() => {
      const now: number = new Date().getTime();
      const target: number = new Date(targetDate).getTime();
      const difference: number = target - now;

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
          // Event Started Message
          <div className="text-center">
            <div className="bg-white/15 backdrop-blur-sm rounded-3xl lg:p-8 p-4 shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-2xl text-center md:text-5xl font-bold text-white animate-pulse">
              Confluence 2025 has started! 
              </div>
            </div>
          </div>
        ) : (
          // Countdown Display
          <div className="grid grid-cols-4 md:grid-cols-4 md:gap-4 gap-2">
            {timeUnits.map((unit: TimeUnit, index: number) => (
              <div key={index} className="text-center">
                <div className="bg-white/15 backdrop-blur-sm rounded-3xl max-sm:rounded-xl md:p-6 p-3 shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-xl md:text-5xl font-bold text-white mb-2 font-mono">
                    {unit.value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-white/80 text-[10px] md:text-base font-medium uppercase lg:tracking-wide">
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