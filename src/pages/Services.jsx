import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiCheck, HiOutlineSparkles, HiOutlineChevronRight } from 'react-icons/hi';

const PACKAGES = [
  {
    name: 'Portrait Session',
    alias: 'Portraits',
    price: '$350',
    duration: '1.5 Hours Session',
    tagline: 'Ideal for individuals, professional headshots, and creative model tests.',
    features: [
      '1.5 Hours shoot duration',
      '1 Selected outdoor/indoor location',
      '15 Ultra high-resolution edited images',
      'Full private digital gallery access',
      'Personal print release license',
      'Delivery within 10 business days'
    ],
    highlight: false,
  },
  {
    name: 'Editorial & Fashion',
    alias: 'Products',
    price: '$850',
    duration: '4 Hours Session',
    tagline: 'Tailored for lookbooks, designer brands, products, and stylized concepts.',
    features: [
      '4 Hours detailed session',
      'Up to 3 location changes',
      '35 Magazine-grade retouched photos',
      'Moodboard design & art direction prep',
      'Standard commercial license included',
      'Next-day proofing sheet preview',
      'Delivery within 14 business days'
    ],
    highlight: true,
  },
  {
    name: 'Cinematic Ceremony',
    alias: 'Weddings',
    price: '$2,450',
    duration: 'Full Day Coverage',
    tagline: 'Comprehensive, narrative coverage of your wedding day from prep to banquet.',
    features: [
      'Up to 9 hours continuous coverage',
      'Lead photographer + secondary shooter',
      '120+ Fine-art graded digital files',
      'Premium linen print box with 20 physical prints',
      'Online preview slideshow set to music',
      'Drone coverage of venue (where permitted)',
      'Delivery within 6 weeks'
    ],
    highlight: false,
  }
];

const FAQS = [
  {
    q: 'How long does it take to receive the final photos?',
    a: 'Portrait sessions are delivered within 10 business days. Commercial lookbooks take up to 14 days, and wedding galleries are delivered within 4-6 weeks depending on custom retouch levels.'
  },
  {
    q: 'Can we change locations during a shoot?',
    a: 'Absolutely! Our Editorial and Wedding packages include location changes. Standard Portrait sessions are capped at 1 location, but you can purchase additional spots for an add-on fee.'
  },
  {
    q: 'What is your cancellation policy?',
    a: 'Rescheduling is free if requested at least 7 days before your booked slot. Retained deposits are non-refundable for cancellations made under 7 days to cover studio prep costs.'
  }
];

export default function Services() {
  return (
    <div className="bg-dark-950 text-white min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-xs text-gold-500 tracking-widest uppercase"
          >
            Pricing &amp; Rates
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mt-4"
          >
            Creative Packages
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '60px' }}
            transition={{ delay: 0.3 }}
            className="h-[1px] bg-gold-500 mx-auto my-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm font-light text-zinc-400 leading-relaxed"
          >
            Transparent pricing for artistic photography. Select a package that fits your creative vision, and proceed to lock your session date.
          </motion.p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-28">
          {PACKAGES.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className={`relative flex flex-col justify-between p-8 rounded-sm border ${
                pkg.highlight
                  ? 'border-gold-500 bg-dark-900/60 shadow-xl shadow-gold-500/5'
                  : 'border-dark-800/80 bg-dark-900/25'
              }`}
            >
              {/* Highlight Badge */}
              {pkg.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold-500 text-dark-950 font-mono text-[9px] font-bold tracking-widest uppercase py-1 px-4 rounded-sm flex items-center gap-1">
                  <HiOutlineSparkles /> Recommended
                </div>
              )}

              <div>
                <span className="font-mono text-[10px] text-zinc-500 tracking-widest uppercase">
                  {pkg.duration}
                </span>
                <h3 className="font-serif text-2xl text-white mt-1 font-light">
                  {pkg.name}
                </h3>
                
                <div className="flex items-baseline gap-2 mt-4 mb-6">
                  <span className="font-serif text-4xl md:text-5xl text-gold-500 font-light">
                    {pkg.price}
                  </span>
                  <span className="text-zinc-500 text-xs font-mono">/ session</span>
                </div>

                <p className="text-xs text-zinc-400 font-light leading-relaxed mb-8 border-b border-dark-800 pb-6">
                  {pkg.tagline}
                </p>

                {/* Features List */}
                <ul className="flex flex-col gap-4 text-xs font-light text-zinc-300 mb-12">
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <HiCheck className="text-gold-500 text-base shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button - Routes to Booking with state */}
              <Link
                to="/booking"
                state={{ packageType: pkg.alias }}
                className={`w-full text-center block py-4 text-xs tracking-widest uppercase rounded-sm transition-all duration-300 font-medium ${
                  pkg.highlight
                    ? 'bg-gold-500 hover:bg-gold-600 text-dark-950'
                    : 'border border-zinc-700 hover:border-gold-500 hover:text-gold-500 text-zinc-300'
                }`}
              >
                Book This Package
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Studio Add-Ons */}
        <section className="py-16 border-t border-dark-900 grid grid-cols-1 md:grid-cols-3 gap-8 mb-28">
          <div className="text-left">
            <h4 className="font-serif text-lg text-white mb-2 font-light">Additional Shoot Hour</h4>
            <p className="text-xs text-zinc-500 font-light leading-relaxed">
              Need extra frames or setting time? Extend your session on-site for <strong className="text-gold-500">$150/hour</strong>, subject to booking availability.
            </p>
          </div>
          <div className="text-left">
            <h4 className="font-serif text-lg text-white mb-2 font-light">Makeup Artist Prep</h4>
            <p className="text-xs text-zinc-500 font-light leading-relaxed">
              We work with elite stylists. Book full makeup, brow styling, and outfit changes prep directly at our studio starting at <strong className="text-gold-500">$120</strong>.
            </p>
          </div>
          <div className="text-left">
            <h4 className="font-serif text-lg text-white mb-2 font-light">Extra Retouched Image</h4>
            <p className="text-xs text-zinc-500 font-light leading-relaxed">
              Choose additional edits from your proof sheet catalog. Extra retouches are billed at <strong className="text-gold-500">$20/photo</strong> with bulk discounts available.
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="max-w-4xl mx-auto pt-16 border-t border-dark-900">
          <div className="text-center mb-16">
            <span className="font-mono text-xs text-gold-500 tracking-widest uppercase">Answers</span>
            <h2 className="font-serif text-3xl font-light mt-3">Pricing FAQs</h2>
          </div>

          <div className="flex flex-col gap-8">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="p-6 bg-dark-900/35 border border-dark-800 rounded-sm">
                <h4 className="font-serif text-base text-white mb-2 flex items-center gap-2 font-light">
                  <HiOutlineChevronRight className="text-gold-500 text-sm" /> {faq.q}
                </h4>
                <p className="text-xs text-zinc-400 font-light leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
