import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const TimeCounter: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Start date: July 15, 2024
    const startDate = new Date('2024-07-15T00:00:00');

    const calculateTime = () => {
      const now = new Date();
      const difference = now.getTime() - startDate.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    const timer = setInterval(calculateTime, 1000);
    calculateTime(); // Initial call

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center justify-center w-12 md:w-16">
      <span className="text-lg md:text-xl font-bold text-romantic-800 font-sans tabular-nums leading-none">
        {value}
      </span>
      <span className="text-[10px] md:text-xs text-romantic-500 font-medium mt-1">
        {label}
      </span>
    </div>
  );

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="fixed bottom-0 left-0 right-0 z-40 pb-6 pt-4 px-4 bg-white/70 backdrop-blur-md border-t border-white/50 shadow-[0_-4px_20px_rgba(255,182,193,0.15)]"
    >
      <div className="max-w-md mx-auto">
        <div className="text-center mb-2">
          <span className="text-xs font-serif text-romantic-600 tracking-wide">منذ أن بدأ كل شيء 💗</span>
        </div>
        <div className="flex justify-between items-center dir-rtl max-w-xs mx-auto px-2">
          <TimeUnit value={timeLeft.days} label="أيام" />
          <div className="h-6 w-px bg-romantic-200"></div>
          <TimeUnit value={timeLeft.hours} label="ساعات" />
          <div className="h-6 w-px bg-romantic-200"></div>
          <TimeUnit value={timeLeft.minutes} label="دقائق" />
          <div className="h-6 w-px bg-romantic-200"></div>
          <TimeUnit value={timeLeft.seconds} label="ثواني" />
        </div>
      </div>
    </motion.div>
  );
};