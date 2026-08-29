import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaPinterestP, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-950 border-t border-dark-800 text-zinc-400 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Brand Column */}
        <div className="flex flex-col gap-4">
          <Link to="/" className="flex flex-col select-none">
            <span className="font-serif text-xl text-white tracking-widest">CHRONOS</span>
            <span className="font-mono text-[8px] tracking-[0.3em] text-zinc-500 uppercase -mt-1">
              Photography Studio
            </span>
          </Link>
          <p className="text-sm font-light leading-relaxed mt-2 text-zinc-500">
            Capturing timeless stories through visual poetry. Specialized in high-fashion, editorial portraits, and cinematic wedding stories.
          </p>
        </div>

        {/* Quick Links Column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-mono text-xs uppercase tracking-widest text-white">Explore</h4>
          <ul className="flex flex-col gap-2.5 text-sm font-light">
            <li>
              <Link to="/" className="hover:text-gold-500 transition-colors duration-300">Home</Link>
            </li>
            <li>
              <Link to="/portfolio" className="hover:text-gold-500 transition-colors duration-300">Portfolio</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-gold-500 transition-colors duration-300">Services &amp; Pricing</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gold-500 transition-colors duration-300">About the Artist</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-mono text-xs uppercase tracking-widest text-white font-medium">Contact Info</h4>
          <ul className="flex flex-col gap-2.5 text-sm font-light text-zinc-500">
            <li className="hover:text-zinc-300 transition-colors duration-300">
              hello@chronosstudio.com
            </li>
            <li className="hover:text-zinc-300 transition-colors duration-300">
              +1 (555) 987-6543
            </li>
            <li>
              Studio 45, Art District, New York, NY 10013
            </li>
          </ul>
        </div>

        {/* Newsletter/Social Column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-mono text-xs uppercase tracking-widest text-white">Follow Us</h4>
          <div className="flex items-center gap-4 text-zinc-300 text-lg mt-1">
            <a href="#" className="w-10 h-10 rounded-full bg-dark-900 border border-dark-800 flex items-center justify-center hover:border-gold-500 hover:text-gold-500 transition-all duration-300">
              <FaInstagram />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-dark-900 border border-dark-800 flex items-center justify-center hover:border-gold-500 hover:text-gold-500 transition-all duration-300">
              <FaFacebookF />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-dark-900 border border-dark-800 flex items-center justify-center hover:border-gold-500 hover:text-gold-500 transition-all duration-300">
              <FaPinterestP />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-dark-900 border border-dark-800 flex items-center justify-center hover:border-gold-500 hover:text-gold-500 transition-all duration-300">
              <FaTwitter />
            </a>
          </div>
          <p className="text-xs font-light text-zinc-600 mt-2">
            Available worldwide for editorial projects and destination weddings.
          </p>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto border-t border-dark-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono tracking-wider text-zinc-600">
        <div>
          &copy; {currentYear} CHRONOS PHOTOGRAPHY. ALL RIGHTS RESERVED.
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-zinc-400 transition-colors">PRIVACY POLICY</a>
          <a href="#" className="hover:text-zinc-400 transition-colors">TERMS &amp; CONDITIONS</a>
        </div>
      </div>
    </footer>
  );
}
