import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-30 py-6 pointer-events-none">
      <div className="container mx-auto px-4 flex justify-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1, delay: 1 }}
          className="bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/50 flex items-center gap-2"
        >
          <Heart className="text-romantic-400 w-4 h-4 fill-current animate-pulse-slow" />
        </motion.div>
      </div>
    </nav>
  );
};