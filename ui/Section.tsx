import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className = "", id }) => {
  return (
    <section id={id} className={`relative py-20 overflow-hidden ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
        className="container mx-auto px-4 relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
};