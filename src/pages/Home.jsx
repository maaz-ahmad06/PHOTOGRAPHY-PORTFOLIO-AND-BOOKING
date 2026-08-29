import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { HiArrowRight, HiOutlineCamera, HiStar } from 'react-icons/hi';
import { FaQuoteLeft } from 'react-icons/fa';

// Premium Unsplash images for photography categories
const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1920&auto=format&fit=crop',
    title: 'CINEMATIC STORIES',
    subtitle: 'Capturing the deep romance, unscripted glances, and raw emotion of your wedding day.',
  },
  {
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1920&auto=format&fit=crop',
    title: 'EDITORIAL PORTRAITURE',
    subtitle: 'High-fashion, striking studio and outdoor concepts that reveal your authentic essence.',
  },
  {
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1920&auto=format&fit=crop',
    title: 'THE ART OF LIGHT',
    subtitle: 'Chasing the golden hour, deep contrasts, and poetic compositions that live forever.',
  }
];

const TEASER_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&auto=format&fit=crop',
    title: 'Fashion Editorial',
    category: 'Portrait',
  },
  {
    url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=600&auto=format&fit=crop',
    title: 'Golden Sunset Kiss',
    category: 'Wedding',
  },
  {
    url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600&auto=format&fit=crop',
    title: 'The Banquet Toast',
    category: 'Events',
  },
  {
    url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=600&auto=format&fit=crop',
    title: 'Mist in the Forest',
    category: 'Nature',
  }
];

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Eleanor Vance',
    role: 'Editorial Director',
    quote: 'CHRONOS is an absolute visionary. The way they direct lighting and capture micro-expressions is unparalleled. Our shoot felt comfortable, collaborative, and the final results were high-end gallery material.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Julian & Sophia',
    role: 'Bride & Groom',
    quote: 'Looking through our wedding album is like walking back into our favorite dream. Every laugh, tear, and golden hour ray of sun was perfectly preserved. They were invisible yet captured everything.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Marcus Sterling',
    role: 'Creative Director, KOR',
    quote: 'Remarkable speed, flawless composition, and a unique artistic voice. We hired CHRONOS for our luxury watch catalog launch and they elevated the entire brand aesthetic. Highly recommended.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop',
  }
];

// Stats item helper component
function StatItem({ value, label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    
    // Parse the number out of string (e.g. "500+" -> 500)
    const num = parseInt(value);
    if (isNaN(num)) return;

    let start = 0;
    const end = num;
    const duration = 1.5; // seconds
    const stepTime = Math.abs(Math.floor((duration * 1000) / end));
    
    const timer = setInterval(() => {
      start += Math.ceil(end / 40);
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, Math.max(stepTime, 20));

    return () => clearInterval(timer);
  }, [isInView, value]);

  // Append '+' or other character back if present
  const displayValue = value.includes('+') ? `${count}+` : value;

  return (
    <div ref={ref} className="text-center">
      <motion.h3 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-serif text-4xl md:text-5xl lg:text-6xl text-gold-500 font-light"
      >
        {displayValue}
      </motion.h3>
      <p className="mt-2 text-xs md:text-sm font-mono tracking-widest text-zinc-500 uppercase">
        {label}
      </p>
    </div>
  );
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Hero slider timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  // Testimonials slider timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-dark-950 text-white min-h-screen">
      {/* 1. Ken Burns Hero Slider */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Slides */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Ken Burns zoom animation */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full animate-kenburns scale-105"
              style={{ backgroundImage: `url(${HERO_SLIDES[currentSlide].image})` }}
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-black/50" />
          </motion.div>
        </AnimatePresence>

        {/* Floating elements */}
        <div className="absolute bottom-10 left-12 hidden lg:flex items-center gap-6 text-xs font-mono tracking-widest text-zinc-500">
          <span>COORDINATES: 40.7128° N, 74.0060° W</span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
          <span>EST. 2016</span>
        </div>

        {/* Hero Content */}
        <div className="relative max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center justify-center h-full pt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center gap-2 mb-4"
          >
            <HiOutlineCamera className="text-gold-500 text-xl" />
            <span className="font-mono text-xs md:text-sm tracking-[0.4em] text-gold-500 uppercase">
              Chronos Photography
            </span>
          </motion.div>

          {/* Letter Reveal Title */}
          <div className="overflow-hidden mb-6 py-2">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentSlide}
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '-100%', opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
                className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight text-white leading-none font-extralight"
              >
                {HERO_SLIDES[currentSlide].title}
              </motion.h1>
            </AnimatePresence>
          </div>

          <div className="max-w-xl mb-10 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentSlide}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-zinc-400 font-light text-sm sm:text-base md:text-lg leading-relaxed"
              >
                {HERO_SLIDES[currentSlide].subtitle}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/booking"
              className="bg-gold-500 hover:bg-gold-600 text-dark-950 font-medium text-xs md:text-sm tracking-widest uppercase px-8 py-4 flex items-center gap-2.5 transition-all duration-300 rounded-sm shadow-lg hover:shadow-gold-500/10"
            >
              Book a Session <HiArrowRight />
            </Link>
            <Link
              to="/portfolio"
              className="border border-white/20 hover:border-gold-500 hover:text-gold-500 text-white font-medium text-xs md:text-sm tracking-widest uppercase px-8 py-4 transition-all duration-300 rounded-sm"
            >
              Explore Portfolio
            </Link>
          </motion.div>

          {/* Slide Indicator Dots */}
          <div className="absolute bottom-10 flex items-center gap-3">
            {HERO_SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-gold-500 w-8' : 'bg-zinc-700 hover:bg-zinc-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 2. Brand Pitch / Quote Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-dark-900">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-mono text-xs text-gold-500 tracking-widest uppercase"
            >
              Philosophy
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-tight mt-4 text-white"
            >
              We shoot light, we shoot connection, we shoot memory.
            </motion.h2>
          </div>
          <div className="lg:col-span-7 font-light text-zinc-400 text-base md:text-lg leading-relaxed flex flex-col gap-6">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              To us, photography is not just about clicking shutter buttons. It is an act of preservation. We immerse ourselves in the atmosphere of your moments, finding the subtle, transient magic that happens in between poses.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-zinc-500 text-sm"
            >
              Whether it’s a bespoke editorial shoot or an intimate destination ceremony, our signature dark cinematic grading highlights colors that evoke nostalgia, giving every photograph a timeless, painted quality.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 3. Teaser Gallery Section */}
      <section className="py-20 bg-dark-900 border-y border-dark-800 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="font-mono text-xs text-gold-500 tracking-widest uppercase">Curated Selection</span>
              <h2 className="font-serif text-3xl md:text-5xl font-light mt-3">Recent Projects</h2>
            </div>
            <Link 
              to="/portfolio" 
              className="text-gold-500 hover:text-white flex items-center gap-2 group text-xs md:text-sm font-mono tracking-widest uppercase mt-4 md:mt-0 transition-colors duration-300"
            >
              View Full Gallery <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEASER_IMAGES.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative h-96 overflow-hidden bg-dark-950 border border-dark-800 rounded-sm cursor-pointer"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url(${img.url})` }}
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                
                {/* Details */}
                <div className="absolute bottom-6 left-6 right-6 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="font-mono text-[10px] text-gold-500 tracking-widest uppercase">
                    {img.category}
                  </span>
                  <h3 className="font-serif text-lg text-white mt-1 group-hover:text-gold-500 transition-colors">
                    {img.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Interactive Statistics Counter */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
          <StatItem value="10+" label="Years of Shutter" />
          <StatItem value="500+" label="Sessions Completed" />
          <StatItem value="30+" label="Global Destinations" />
          <StatItem value="15+" label="Editorial Awards" />
        </div>
      </section>

      {/* 5. Client Testimonials Carousel */}
      <section className="py-24 bg-dark-900/60 border-t border-dark-800 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-1/2 left-10 -translate-y-1/2 text-dark-800 text-[180px] font-serif select-none pointer-events-none opacity-20 leading-none">
          “
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="w-12 h-12 bg-gold-500/10 border border-gold-500/20 rounded-full flex items-center justify-center mb-8 text-gold-500"
          >
            <FaQuoteLeft className="text-sm" />
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={testimonialIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-6 text-gold-500">
                {[...Array(TESTIMONIALS[testimonialIndex].rating)].map((_, i) => (
                  <HiStar key={i} className="text-lg" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-lg md:text-2xl font-light italic leading-relaxed text-zinc-100 max-w-3xl">
                "{TESTIMONIALS[testimonialIndex].quote}"
              </p>

              {/* Client Profile */}
              <div className="flex items-center gap-4 mt-8">
                <img
                  src={TESTIMONIALS[testimonialIndex].avatar}
                  alt={TESTIMONIALS[testimonialIndex].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-gold-500/40"
                />
                <div className="text-left">
                  <h4 className="font-serif text-base text-white tracking-wide">
                    {TESTIMONIALS[testimonialIndex].name}
                  </h4>
                  <p className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase">
                    {TESTIMONIALS[testimonialIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Testimonial Nav dots */}
          <div className="flex items-center gap-2 mt-12">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setTestimonialIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  testimonialIndex === index ? 'bg-gold-500 w-6' : 'bg-zinc-700 hover:bg-zinc-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Call to Action Section */}
      <section className="py-28 px-6 md:px-12 max-w-7xl mx-auto text-center border-t border-dark-900">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center max-w-2xl mx-auto"
        >
          <span className="font-mono text-xs text-gold-500 tracking-widest uppercase">Start Your Journey</span>
          <h2 className="font-serif text-4xl md:text-5xl font-light mt-4 mb-6 leading-tight">
            Ready to immortalize your story?
          </h2>
          <p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed mb-8">
            Sessions fill up quickly, especially during spring and fall wedding seasons. Book your consultation today and let's craft something beautiful together.
          </p>
          <Link
            to="/booking"
            className="bg-gold-500 hover:bg-gold-600 text-dark-950 font-medium text-xs md:text-sm tracking-widest uppercase px-10 py-5 transition-all duration-300 rounded-sm shadow-xl"
          >
            Reserve Your Booking
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
