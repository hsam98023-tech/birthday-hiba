import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-10 flex flex-col items-center justify-center text-center px-4">
      {/* Subtle Floating Hearts Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
         {[...Array(6)].map((_, i) => (
           <motion.div
             key={i}
             initial={{ opacity: 0, y: 100 }}
             animate={{ opacity: [0, 0.4, 0], y: -100 }}
             transition={{ 
               duration: 10 + Math.random() * 10, 
               repeat: Infinity, 
               delay: Math.random() * 5,
               ease: "linear"
             }}
             style={{ 
               left: `${Math.random() * 100}%`,
               fontSize: `${20 + Math.random() * 30}px`
             }}
             className="absolute text-romantic-200"
           >
             ❤️
           </motion.div>
         ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="inline-block px-4 py-1 rounded-full bg-romantic-100 text-romantic-600 text-sm font-medium tracking-wide mb-6 border border-romantic-200">
          عيد ميلاد سعيد
        </span>
        <h1 className="font-serif text-5xl md:text-7xl text-romantic-900 leading-tight mb-4">
          إلى حبيبتي
        </h1>
        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-romantic-400 to-transparent mx-auto rounded-full"></div>
      </motion.div>
    </div>
  );
};