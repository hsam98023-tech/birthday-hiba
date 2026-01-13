import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EntryCountdownProps {
  onComplete: () => void;
}

export const EntryCountdown: React.FC<EntryCountdownProps> = ({ onComplete }) => {
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (count === 0) {
      onComplete();
      return;
    }

    const timer = setTimeout(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count, onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-romantic-50 via-[#fff0f5] to-romantic-100 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-romantic-200/30 rounded-full blur-3xl animate-pulse-slow"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-romantic-300/20 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={count}
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 1.5, filter: "blur(10px)" }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          {count > 0 && (
            <span className="font-serif text-[120px] md:text-[180px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-romantic-400 to-romantic-600 drop-shadow-sm">
              {count}
            </span>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};