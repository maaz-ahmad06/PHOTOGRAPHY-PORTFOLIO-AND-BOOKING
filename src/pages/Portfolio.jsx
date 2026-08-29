import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowLeft, HiArrowRight, HiOutlineEye, HiX } from 'react-icons/hi';

// Curated high-quality professional photos for masonry grid
const GALLERY_ITEMS = [
  // Portraits
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
    title: 'Aurelia',
    category: 'Portraits',
    aspect: 'portrait'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    title: 'Gaze',
    category: 'Portraits',
    aspect: 'square'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=600&auto=format&fit=crop',
    title: 'Editorial Denim',
    category: 'Portraits',
    aspect: 'portrait'
  },
  // Weddings
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop',
    title: 'The Altar Kiss',
    category: 'Weddings',
    aspect: 'landscape'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=600&auto=format&fit=crop',
    title: 'Embrace in Gold',
    category: 'Weddings',
    aspect: 'portrait'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=600&auto=format&fit=crop',
    title: 'Dancing under Stars',
    category: 'Weddings',
    aspect: 'landscape'
  },
  // Events
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600&auto=format&fit=crop',
    title: 'The Banquet Gala',
    category: 'Events',
    aspect: 'landscape'
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600&auto=format&fit=crop',
    title: 'Stage Spotlight',
    category: 'Events',
    aspect: 'portrait'
  },
  // Nature
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=600&auto=format&fit=crop',
    title: 'Foggy Redwood Path',
    category: 'Nature',
    aspect: 'portrait'
  },
  {
    id: 10,
    url: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=600&auto=format&fit=crop',
    title: 'Root of Life',
    category: 'Nature',
    aspect: 'square'
  },
  {
    id: 11,
    url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=600&auto=format&fit=crop',
    title: 'Valley Mist',
    category: 'Nature',
    aspect: 'landscape'
  },
  // Products
  {
    id: 12,
    url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600&auto=format&fit=crop',
    title: 'Chronograph Minimalist',
    category: 'Products',
    aspect: 'square'
  },
  {
    id: 13,
    url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop',
    title: 'Sartorial Red',
    category: 'Products',
    aspect: 'landscape'
  },
  {
    id: 14,
    url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop',
    title: 'Studio Beats',
    category: 'Products',
    aspect: 'portrait'
  }
];

const CATEGORIES = ['All', 'Weddings', 'Portraits', 'Events', 'Nature', 'Products'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredItems, setFilteredItems] = useState(GALLERY_ITEMS);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  // Filter items
  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredItems(GALLERY_ITEMS);
    } else {
      setFilteredItems(GALLERY_ITEMS.filter((item) => item.category === activeCategory));
    }
  }, [activeCategory]);

  // Handle keyboard inputs for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') {
        setSelectedImageIndex(null);
      } else if (e.key === 'ArrowRight') {
        handleNextImage();
      } else if (e.key === 'ArrowLeft') {
        handlePrevImage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, filteredItems]);

  const handleNextImage = () => {
    setSelectedImageIndex((prev) => 
      prev === null ? null : (prev + 1) % filteredItems.length
    );
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) => 
      prev === null ? null : (prev - 1 + filteredItems.length) % filteredItems.length
    );
  };

  return (
    <div className="bg-dark-950 text-white min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-xs text-gold-500 tracking-widest uppercase"
          >
            Visual Portfolio
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mt-4"
          >
            Capturing Essence
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
            Explore our curated projects sorted by category. Hover over images for details, and click to inspect individual shots in high-definition.
          </motion.p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-16">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setSelectedImageIndex(null); // Reset lightbox active state index offset
              }}
              className={`relative px-5 py-2.5 rounded-sm font-mono text-[10px] md:text-xs tracking-widest uppercase transition-all duration-300 ${
                activeCategory === category
                  ? 'text-dark-950 font-semibold z-10'
                  : 'text-zinc-400 hover:text-white border border-dark-800 hover:border-zinc-700 bg-transparent'
              }`}
            >
              {category}
              {activeCategory === category && (
                <motion.span
                  layoutId="activeCategoryBg"
                  className="absolute inset-0 bg-gold-500 rounded-sm -z-10"
                  transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div 
          layout
          className="masonry-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                onClick={() => setSelectedImageIndex(index)}
                className="masonry-item group relative overflow-hidden bg-dark-900 border border-dark-800 rounded-sm cursor-pointer"
              >
                {/* Image */}
                <img
                  src={item.url}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Shading/Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-6" />

                {/* Eye Icon Hover */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-dark-950/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                  <HiOutlineEye className="text-sm text-gold-500" />
                </div>

                {/* Hover Text Details */}
                <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-left">
                  <span className="font-mono text-[9px] tracking-widest text-gold-500 uppercase">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg text-white mt-1">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Fallback if no images found */}
        {filteredItems.length === 0 && (
          <div className="text-center py-24 text-zinc-500 font-light">
            No work available in this category. Check back soon.
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 select-none"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="absolute top-6 right-6 text-3xl text-zinc-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <HiX />
            </button>

            {/* Previous Image Navigation */}
            <button
              onClick={handlePrevImage}
              className="absolute left-6 text-3xl text-zinc-400 hover:text-gold-500 transition-colors bg-dark-900/50 hover:bg-dark-900 w-12 h-12 rounded-full border border-dark-800 flex items-center justify-center cursor-pointer hidden md:flex"
              aria-label="Previous Image"
            >
              <HiArrowLeft />
            </button>

            {/* Next Image Navigation */}
            <button
              onClick={handleNextImage}
              className="absolute right-6 text-3xl text-zinc-400 hover:text-gold-500 transition-colors bg-dark-900/50 hover:bg-dark-900 w-12 h-12 rounded-full border border-dark-800 flex items-center justify-center cursor-pointer hidden md:flex"
              aria-label="Next Image"
            >
              <HiArrowRight />
            </button>

            {/* Image & Detail Slide */}
            <div className="flex flex-col items-center max-w-5xl w-full h-full justify-center max-h-[85vh]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={filteredItems[selectedImageIndex].id}
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center"
                >
                  <img
                    src={filteredItems[selectedImageIndex].url}
                    alt={filteredItems[selectedImageIndex].title}
                    className="max-h-[70vh] max-w-[90vw] md:max-w-[75vw] object-contain border border-dark-800 shadow-2xl rounded-sm"
                  />
                  
                  {/* Photo details bottom bar */}
                  <div className="text-center mt-6">
                    <span className="font-mono text-[10px] tracking-widest text-gold-500 uppercase block mb-1">
                      {filteredItems[selectedImageIndex].category}
                    </span>
                    <h2 className="font-serif text-xl text-white">
                      {filteredItems[selectedImageIndex].title}
                    </h2>
                    <p className="text-[10px] font-mono text-zinc-500 mt-1 uppercase">
                      Image {selectedImageIndex + 1} of {filteredItems.length}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile swipe indicator / quick instructions */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[9px] text-zinc-500 tracking-widest uppercase md:block hidden">
              USE ARROWS ← → OR ESCAPE TO NAVIGATION
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
