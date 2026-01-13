import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Lock } from 'lucide-react';
import { Button } from './ui/Button';

interface LoginProps {
  onLogin: () => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Updated credentials as requested
    if (username.toLowerCase() === 'hiba' && password === 'hamid') {
      onLogin();
    } else {
      setError('بيانات غير صحيحة، حاولي مرة أخرى ❤️');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden bg-romantic-50">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-romantic-200/40 rounded-full blur-3xl animate-pulse-slow"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-romantic-300/30 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="glass-card p-8 md:p-12 rounded-[2rem] shadow-xl w-full max-w-md relative z-10 text-center border border-white/60"
      >
        <div className="mb-8 flex justify-center">
          <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center shadow-md">
            <Lock className="w-6 h-6 text-romantic-400" />
          </div>
        </div>

        <h2 className="font-serif text-3xl font-bold text-romantic-900 mb-2">منطقة خاصة</h2>
        <p className="text-romantic-700 mb-8 font-light">لشخص واحد فقط في هذا العالم</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="text-right">
            <input
              type="text"
              placeholder="اسم المستخدم"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-6 py-4 rounded-xl bg-white/50 border border-white focus:outline-none focus:ring-2 focus:ring-romantic-300 transition-all text-right placeholder-romantic-400 text-romantic-800"
            />
          </div>
          <div className="text-right">
            <input
              type="password"
              placeholder="كلمة المرور"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-6 py-4 rounded-xl bg-white/50 border border-white focus:outline-none focus:ring-2 focus:ring-romantic-300 transition-all text-right placeholder-romantic-400 text-romantic-800"
            />
          </div>

          {error && (
            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="text-red-400 text-sm font-medium"
            >
              {error}
            </motion.p>
          )}

          <Button type="submit" className="w-full mt-4 bg-romantic-400 hover:bg-romantic-500 text-white shadow-lg shadow-romantic-300/50 rounded-xl py-4 text-lg">
            دخول ❤️
          </Button>
        </form>
      </motion.div>
    </div>
  );
};