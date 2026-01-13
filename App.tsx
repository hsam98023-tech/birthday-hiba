import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { Message } from './components/Testimonials'; // Acts as the Message Component
import { Footer } from './components/Footer';
import { Login } from './components/Login';
import { TimeCounter } from './components/TimeCounter';
import { EntryCountdown } from './components/EntryCountdown';
import { AnimatePresence, motion } from 'framer-motion';

type ViewState = 'countdown' | 'login' | 'content';

function App() {
  const [viewState, setViewState] = useState<ViewState>('countdown');

  return (
    <div className="min-h-screen font-sans text-right dir-rtl bg-gradient-to-br from-romantic-50 via-[#fff5f7] to-romantic-100 selection:bg-romantic-200 selection:text-romantic-900">
      <AnimatePresence mode='wait'>
        {viewState === 'countdown' && (
          <motion.div
            key="countdown"
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <EntryCountdown onComplete={() => setViewState('login')} />
          </motion.div>
        )}

        {viewState === 'login' && (
          <motion.div 
            key="login"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-50"
          >
            <Login onLogin={() => setViewState('content')} />
          </motion.div>
        )}

        {viewState === 'content' && (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="relative pb-24" // Padding bottom for fixed footer
          >
            {/* The persistent counter is rendered here and will stay fixed at bottom */}
            <TimeCounter />
            
            <main className="relative z-10 pt-10">
              <Hero />
              <Message />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;