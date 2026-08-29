import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState('CALIBRATING LENS...');

  useEffect(() => {
    const statusTimer = setTimeout(() => {
      setStatus('LOCKING FOCUS...');
    }, 900);

    const shutterTimer = setTimeout(() => {
      setStatus('SHUTTER READY.');
    }, 1800);

    const endTimer = setTimeout(() => {
      setShow(false);
      if (onComplete) onComplete();
    }, 2500);

    return () => {
      clearTimeout(statusTimer);
      clearTimeout(shutterTimer);
      clearTimeout(endTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark-950 text-white select-none"
        >
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 bg-[radial-gradient(#1c1c22_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />

          {/* Lens Outline & Focus Ring */}
          <div className="relative w-48 h-48 flex items-center justify-center">
            {/* Outer Lens Body */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute w-44 h-44 border border-dashed border-zinc-700 rounded-full"
            />
            
            {/* Focus Brackets */}
            <motion.div 
              animate={{ scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-36 h-36 border-2 border-transparent border-t-gold-500 border-b-gold-500 border-l-gold-500 border-r-gold-500 rounded-lg flex items-center justify-center"
              style={{ borderRadius: '24px' }}
            >
              {/* Corner brackets */}
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t-4 border-l-4 border-gold-500 rounded-tl" />
              <div className="absolute -top-1 -right-1 w-4 h-4 border-t-4 border-r-4 border-gold-500 rounded-tr" />
              <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-4 border-l-4 border-gold-500 rounded-bl" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-4 border-r-4 border-gold-500 rounded-br" />
            </motion.div>

            {/* Aperture Iris (Shutter Blades) */}
            <div className="absolute w-24 h-24 rounded-full overflow-hidden border-2 border-zinc-800 flex items-center justify-center bg-dark-900">
              <motion.div 
                animate={{ 
                  scale: [1, 0.15, 1.15, 1],
                  rotate: [0, 95, 180, 0],
                  filter: ['blur(4px)', 'blur(0px)', 'blur(0px)']
                }}
                transition={{ duration: 2.1, ease: "easeInOut" }}
                className="w-16 h-16 rounded-full border-4 border-gold-500 flex items-center justify-center bg-dark-950"
              >
                <div className="w-2 h-2 rounded-full bg-gold-500" />
              </motion.div>
            </div>
            
            {/* Focal Point Indicator */}
            <motion.div
              animate={{ opacity: [0.2, 0.8, 0.2] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="absolute top-2 right-2 text-[10px] text-zinc-500 font-mono"
            >
              CH: 01
            </motion.div>
          </div>

          {/* Typography */}
          <div className="mt-8 flex flex-col items-center">
            <motion.h1 
              initial={{ letterSpacing: "0.2em", opacity: 0 }}
              animate={{ letterSpacing: "0.08em", opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-2xl font-serif tracking-widest text-zinc-100 font-light"
            >
              CHRONOS STUDIO
            </motion.h1>
            
            <motion.div 
              key={status}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 font-mono text-xs text-gold-500 tracking-widest flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
              {status}
            </motion.div>
          </div>

          {/* Camera Shutter Settings */}
          <div className="absolute bottom-10 left-10 font-mono text-[10px] text-zinc-500 flex flex-col gap-1">
            <div>ISO 100 | f/1.8 | 1/250s</div>
            <div>RAW | 8240 x 5624 px</div>
          </div>
          <div className="absolute bottom-10 right-10 font-mono text-[10px] text-zinc-500">
            © CHRONOS PORTFOLIO
          </div>

          {/* Shutter Click White Flash */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0, 1, 0],
            }}
            transition={{ 
              times: [0, 0.88, 0.92, 1],
              duration: 2.4,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-white pointer-events-none z-50"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
