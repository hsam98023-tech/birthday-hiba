import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-2xl font-serif font-bold transition-all shadow-sm cursor-pointer";
  
  const variants = {
    // Updated to use 'romantic' colors defined in index.html
    primary: "bg-gradient-to-r from-romantic-400 to-romantic-600 text-white shadow-lg shadow-romantic-300/40 hover:shadow-xl hover:shadow-romantic-400/50 border border-transparent",
    secondary: "bg-white text-romantic-700 border border-romantic-200 hover:border-romantic-300 hover:bg-romantic-50",
    outline: "bg-transparent text-romantic-600 border border-romantic-300 hover:border-romantic-400 hover:bg-romantic-50"
  };

  const sizes = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-8 py-3",
    lg: "text-xl px-10 py-5"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};