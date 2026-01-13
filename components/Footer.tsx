import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 text-center relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-romantic-300 to-transparent"></div>
      <p className="font-serif text-lg text-romantic-500/80 mt-6" dir="rtl">
        من 15.07.2024… وأنتِ أجمل أيامي
      </p>
    </footer>
  );
};