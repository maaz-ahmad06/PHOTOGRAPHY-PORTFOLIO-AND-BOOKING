import { motion } from 'framer-motion';
import { HiOutlineCamera, HiOutlineBadgeCheck, HiOutlineSparkles, HiOutlineGlobe } from 'react-icons/hi';
import { FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const MILESTONES = [
  {
    year: '2016',
    title: 'Studio Foundation',
    desc: 'Began as an independent fashion photographer in London, opening a small creative space in Shoreditch.'
  },
  {
    year: '2019',
    title: 'Vogue & Editorial Covers',
    desc: 'Contracted with elite fashion houses, landing editorial covers in Paris and Milan. Focus shifted to luxury portraits.'
  },
  {
    year: '2022',
    title: 'International Excursions',
    desc: 'Expanded wedding services globally, shooting destination weddings across Italy, Bali, and Iceland.'
  },
  {
    year: '2025',
    title: 'First Solo Exhibition',
    desc: 'Held the "Shadow & Grace" solo prints exhibition in Manhattan, showcasing cinematic street photography.'
  }
];

export default function About() {
  return (
    <div className="bg-dark-950 text-white min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-28">
          
          {/* Left Column: Image */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[3/4] overflow-hidden rounded-sm border border-dark-800"
            >
              {/* Profile Image (Elegant Black & White portrait) */}
              <div 
                className="absolute inset-0 bg-cover bg-center grayscale contrast-125"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-60" />
            </motion.div>

            {/* Float Frame Box */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-gold-500/50 pointer-events-none rounded-br" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-gold-500/50 pointer-events-none rounded-tl" />
          </div>

          {/* Right Column: Bio */}
          <div className="lg:col-span-7">
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-mono text-xs text-gold-500 tracking-widest uppercase block mb-3"
            >
              The Artist Behind The Shutter
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-8"
            >
              Hi, I'm Christian Vance
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-light text-zinc-400 text-sm md:text-base leading-relaxed flex flex-col gap-6"
            >
              <p>
                My journey with photography began when I first held my father's manual SLR camera. Looking through that viewport, I realized that composition wasn't about placing subjects in frame—it was about locking an emotional state in time.
              </p>
              <p>
                After graduating from the London School of Fine Arts, I spent ten years exploring the interplay of dark spaces and sharp highlights. Today, my signature look blends editorial styling with high-contrast, moody tones to create photographs that read like cinema frames.
              </p>
              <p>
                I split my time between shooting commercial catalogs in New York, and directing destination wedding films in Europe. I believe the best pictures are taken when you forget the camera is in the room. Let's make something timeless.
              </p>
            </motion.div>

            {/* Socials & Info */}
            <div className="flex items-center gap-6 mt-10">
              <span className="font-mono text-[10px] text-zinc-500 tracking-widest uppercase">
                Find Christian:
              </span>
              <div className="flex items-center gap-4 text-zinc-400">
                <a href="#" className="hover:text-gold-500 transition-colors duration-300">
                  <FaInstagram className="text-lg" />
                </a>
                <a href="#" className="hover:text-gold-500 transition-colors duration-300">
                  <FaTwitter className="text-lg" />
                </a>
                <a href="#" className="hover:text-gold-500 transition-colors duration-300">
                  <FaLinkedinIn className="text-lg" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Core Pillars */}
        <section className="py-16 border-t border-dark-900 grid grid-cols-1 md:grid-cols-4 gap-8 mb-24">
          <div className="p-6 bg-dark-900/40 border border-dark-800/60 rounded-sm">
            <HiOutlineCamera className="text-gold-500 text-2xl mb-4" />
            <h3 className="font-serif text-lg text-white mb-2">Bespoke Directing</h3>
            <p className="text-xs text-zinc-500 font-light leading-relaxed">
              We guide poses with ease, prompting natural movements rather than rigid poses.
            </p>
          </div>
          <div className="p-6 bg-dark-900/40 border border-dark-800/60 rounded-sm">
            <HiOutlineSparkles className="text-gold-500 text-2xl mb-4" />
            <h3 className="font-serif text-lg text-white mb-2">Cinematic Grading</h3>
            <p className="text-xs text-zinc-500 font-light leading-relaxed">
              Each raw capture goes through our custom color pipeline to achieve painted contrasts.
            </p>
          </div>
          <div className="p-6 bg-dark-900/40 border border-dark-800/60 rounded-sm">
            <HiOutlineBadgeCheck className="text-gold-500 text-2xl mb-4" />
            <h3 className="font-serif text-lg text-white mb-2">Print Quality</h3>
            <p className="text-xs text-zinc-500 font-light leading-relaxed">
              All galleries are exported in full ultra-resolution, perfect for large fine-art prints.
            </p>
          </div>
          <div className="p-6 bg-dark-900/40 border border-dark-800/60 rounded-sm">
            <HiOutlineGlobe className="text-gold-500 text-2xl mb-4" />
            <h3 className="font-serif text-lg text-white mb-2">Global Travel</h3>
            <p className="text-xs text-zinc-500 font-light leading-relaxed">
              Equipped with global mobile gear and visa clearances for shooting in any timezone.
            </p>
          </div>
        </section>

        {/* Milestone Timeline */}
        <section className="py-16 border-t border-dark-900 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-xs text-gold-500 tracking-widest uppercase">The Journey</span>
            <h2 className="font-serif text-3xl md:text-4xl font-light mt-3">Studio Milestones</h2>
          </div>

          <div className="relative border-l border-dark-800 pl-8 ml-4 md:ml-24 flex flex-col gap-16">
            {MILESTONES.map((milestone, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-12 top-1.5 w-7 h-7 rounded-full bg-dark-950 border border-gold-500 flex items-center justify-center text-[10px] font-mono text-gold-500 font-bold shadow-md">
                  •
                </div>

                {/* Content */}
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <span className="font-serif text-3xl text-gold-500/80 font-light leading-none md:w-24 shrink-0">
                    {milestone.year}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl text-white font-light mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-sm font-light text-zinc-400 leading-relaxed max-w-xl">
                      {milestone.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
