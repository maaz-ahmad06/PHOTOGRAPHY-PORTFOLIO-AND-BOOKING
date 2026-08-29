import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Booking', path: '/booking' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-dark-950/85 backdrop-blur-md border-b border-dark-800/80 py-4 shadow-lg'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex flex-col select-none group">
            <span className="font-serif text-xl md:text-2xl tracking-widest text-white group-hover:text-gold-500 transition-colors duration-300">
              CHRONOS
            </span>
            <span className="font-mono text-[8px] tracking-[0.3em] text-zinc-500 uppercase -mt-1 group-hover:text-zinc-400 transition-colors duration-300">
              Photography Studio
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-sm tracking-widest uppercase transition-colors duration-300 py-1 ${
                    isActive ? 'text-gold-500 font-medium' : 'text-zinc-400 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-500"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Call To Action */}
          <div className="hidden lg:block">
            <Link
              to="/booking"
              className="border border-gold-500/30 hover:border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-dark-950 px-5 py-2 text-xs tracking-widest uppercase transition-all duration-300 rounded-sm"
            >
              Book Session
            </Link>
          </div>

          {/* Hamburger Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-2xl text-zinc-300 hover:text-gold-500 transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <HiX /> : <HiMenuAlt4 />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/90 lg:hidden"
            />

            {/* Menu Container */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-4/5 max-w-sm bg-dark-900 border-l border-dark-800 p-8 flex flex-col justify-between lg:hidden"
            >
              <div>
                <div className="flex items-center justify-between border-b border-dark-800 pb-6 mb-8">
                  <div className="flex flex-col">
                    <span className="font-serif text-lg tracking-wider text-white">CHRONOS</span>
                    <span className="font-mono text-[7px] tracking-[0.2em] text-zinc-500 uppercase -mt-1">
                      STUDIO
                    </span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-2xl text-zinc-300 hover:text-gold-500 transition-colors"
                  >
                    <HiX />
                  </button>
                </div>

                <nav className="flex flex-col gap-6">
                  {navLinks.map((link, idx) => (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      key={link.name}
                    >
                      <NavLink
                        to={link.path}
                        className={({ isActive }) =>
                          `text-base tracking-widest uppercase block ${
                            isActive ? 'text-gold-500 font-medium' : 'text-zinc-400 hover:text-white'
                          }`
                        }
                      >
                        {link.name}
                      </NavLink>
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Drawer Footer */}
              <div className="border-t border-dark-800 pt-8">
                <Link
                  to="/booking"
                  className="w-full text-center block bg-gold-500 hover:bg-gold-600 text-dark-950 px-6 py-3 text-sm tracking-widest uppercase transition-all duration-300 font-medium rounded-sm mb-6"
                >
                  Book Session
                </Link>
                <div className="flex items-center justify-center gap-6 text-zinc-400 text-lg">
                  <a href="#" className="hover:text-gold-500 transition-colors">
                    <FaInstagram />
                  </a>
                  <a href="#" className="hover:text-gold-500 transition-colors">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="hover:text-gold-500 transition-colors">
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
