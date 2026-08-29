import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiOutlineClock, HiOutlinePaperAirplane, HiCheckCircle } from 'react-icons/hi';
import { FaInstagram, FaFacebookF, FaPinterestP, FaHeart, FaComment } from 'react-icons/fa';

const INSTAGRAM_POSTS = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=350&auto=format&fit=crop',
    likes: '1.2k',
    comments: '48'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=350&auto=format&fit=crop',
    likes: '3.4k',
    comments: '120'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=350&auto=format&fit=crop',
    likes: '980',
    comments: '32'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=350&auto=format&fit=crop',
    likes: '1.8k',
    comments: '56'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=350&auto=format&fit=crop',
    likes: '2.1k',
    comments: '94'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=350&auto=format&fit=crop',
    likes: '850',
    comments: '22'
  }
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSent, setIsSent] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const tempErrors = {};
    if (!form.name.trim()) tempErrors.name = 'Name is required.';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) tempErrors.email = 'Valid Email is required.';
    if (!form.subject.trim()) tempErrors.subject = 'Subject is required.';
    if (!form.message.trim()) tempErrors.message = 'Message details are required.';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!validate()) return;
    
    // Trigger message sent state
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <div className="bg-dark-950 text-white min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-xs text-gold-500 tracking-widest uppercase"
          >
            Get In Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mt-4"
          >
            Connect With Us
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
            Have a question, custom commercial concept, or print publication request? Leave us a note and we'll reply shortly.
          </motion.p>
        </div>

        {/* Contact Info & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          
          {/* Left Column: Studio Details */}
          <div className="lg:col-span-5 flex flex-col gap-8 text-left">
            <div>
              <h2 className="font-serif text-2xl text-white font-light mb-4">Studio Location</h2>
              <p className="text-xs text-zinc-400 font-light leading-relaxed max-w-sm mb-6">
                Our main boutique studio is located in the heart of the Tribeca Art District in New York. Consultations are available strictly by prior booking.
              </p>
            </div>

            <div className="flex flex-col gap-6 text-xs font-light text-zinc-300">
              <div className="flex items-start gap-4">
                <HiOutlineLocationMarker className="text-gold-500 text-xl shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-mono text-[9px] uppercase tracking-wider text-zinc-500 mb-1">Address</h4>
                  <p>Studio 45, Art District, New York, NY 10013</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <HiOutlinePhone className="text-gold-500 text-xl shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-mono text-[9px] uppercase tracking-wider text-zinc-500 mb-1">Phone</h4>
                  <p>+1 (555) 987-6543</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <HiOutlineMail className="text-gold-500 text-xl shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-mono text-[9px] uppercase tracking-wider text-zinc-500 mb-1">Email</h4>
                  <p className="hover:text-gold-500 transition-colors">hello@chronosstudio.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <HiOutlineClock className="text-gold-500 text-xl shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-mono text-[9px] uppercase tracking-wider text-zinc-500 mb-1">Studio Hours</h4>
                  <p>Tuesday - Saturday: 10:00 AM - 07:00 PM</p>
                  <p className="text-zinc-500 mt-0.5">Sunday - Monday: Closed (On location shoots)</p>
                </div>
              </div>
            </div>

            {/* Social Coordinates */}
            <div className="border-t border-dark-900 pt-6">
              <h4 className="font-mono text-[9px] uppercase tracking-wider text-zinc-500 mb-3">Social Coordinates</h4>
              <div className="flex items-center gap-4 text-zinc-300">
                <a href="#" className="w-10 h-10 rounded-full bg-dark-900 border border-dark-800 flex items-center justify-center hover:border-gold-500 hover:text-gold-500 transition-all duration-300">
                  <FaInstagram />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-dark-900 border border-dark-800 flex items-center justify-center hover:border-gold-500 hover:text-gold-500 transition-all duration-300">
                  <FaFacebookF />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-dark-900 border border-dark-800 flex items-center justify-center hover:border-gold-500 hover:text-gold-500 transition-all duration-300">
                  <FaPinterestP />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSend} className="bg-dark-900 border border-dark-800 p-8 rounded-sm text-left flex flex-col gap-6 relative overflow-hidden">
              <h3 className="font-serif text-xl font-light text-white mb-2 border-b border-dark-800 pb-4">
                Send a Message
              </h3>

              {/* Grid Name/Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="font-mono text-[10px] tracking-widest text-zinc-400 uppercase">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleInputChange}
                    placeholder="Enter name"
                    className={`bg-dark-950 border text-sm text-white px-4 py-3 rounded-sm focus:outline-none focus:border-gold-500 transition-colors ${
                      errors.name ? 'border-red-500' : 'border-dark-800'
                    }`}
                  />
                  {errors.name && <span className="text-[10px] text-red-500 mt-1">{errors.name}</span>}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="font-mono text-[10px] tracking-widest text-zinc-400 uppercase">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleInputChange}
                    placeholder="Enter email"
                    className={`bg-dark-950 border text-sm text-white px-4 py-3 rounded-sm focus:outline-none focus:border-gold-500 transition-colors ${
                      errors.email ? 'border-red-500' : 'border-dark-800'
                    }`}
                  />
                  {errors.email && <span className="text-[10px] text-red-500 mt-1">{errors.email}</span>}
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="font-mono text-[10px] tracking-widest text-zinc-400 uppercase">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleInputChange}
                  placeholder="e.g. Collaboration, Print Order, or Press Inquiry"
                  className={`bg-dark-950 border text-sm text-white px-4 py-3 rounded-sm focus:outline-none focus:border-gold-500 transition-colors ${
                    errors.subject ? 'border-red-500' : 'border-dark-800'
                  }`}
                />
                {errors.subject && <span className="text-[10px] text-red-500 mt-1">{errors.subject}</span>}
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="font-mono text-[10px] tracking-widest text-zinc-400 uppercase">
                  Message Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleInputChange}
                  rows="5"
                  placeholder="Write message details..."
                  className={`bg-dark-950 border text-sm text-white px-4 py-3 rounded-sm focus:outline-none focus:border-gold-500 transition-colors resize-none ${
                    errors.message ? 'border-red-500' : 'border-dark-800'
                  }`}
                />
                {errors.message && <span className="text-[10px] text-red-500 mt-1">{errors.message}</span>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-fit px-8 py-3.5 bg-gold-500 hover:bg-gold-600 text-dark-950 font-mono text-[10px] tracking-widest uppercase rounded-sm font-bold shadow-lg transition-colors cursor-pointer flex items-center gap-2 mt-2"
              >
                Send Message <HiOutlinePaperAirplane className="rotate-45" />
              </button>

              {/* Send Toast success card */}
              <AnimatePresence>
                {isSent && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="absolute inset-0 bg-dark-900 flex flex-col items-center justify-center p-6 text-center"
                  >
                    <HiCheckCircle className="text-gold-500 text-5xl mb-3" />
                    <h3 className="font-serif text-lg text-white font-light">Message Dispatched!</h3>
                    <p className="text-xs text-zinc-400 font-light mt-1 max-w-xs">
                      We have received your message. Christian or one of our studio managers will reach out to you within 24 hours.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>

        {/* Map Embed Section (Inverted dark mode filter applied) */}
        <section className="mb-24 rounded-sm overflow-hidden border border-dark-800 relative h-96 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2536830567623!2d-74.0089851!3d40.7127761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a21fb017c29%3A0x4104975e5332f143!2sTribeca%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ 
              border: 0, 
              filter: 'grayscale(1) invert(0.9) contrast(1.15) brightness(0.9)' 
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Tribeca Studio"
          />
        </section>

        {/* Instagram Grid Feed */}
        <section className="border-t border-dark-900 pt-16">
          <div className="text-center mb-12">
            <span className="font-mono text-xs text-gold-500 tracking-widest uppercase">@CHRONOS_STUDIO</span>
            <h2 className="font-serif text-2xl md:text-3xl font-light mt-3">Instagram Journal</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {INSTAGRAM_POSTS.map((post) => (
              <a
                key={post.id}
                href="#"
                className="group relative aspect-square overflow-hidden bg-dark-900 border border-dark-800 rounded-sm block"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${post.url})` }}
                />
                
                {/* Overlay Likes/Comments on Hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-5 text-sm text-white">
                  <span className="flex items-center gap-1.5 font-mono text-xs">
                    <FaHeart className="text-gold-500" /> {post.likes}
                  </span>
                  <span className="flex items-center gap-1.5 font-mono text-xs">
                    <FaComment /> {post.comments}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
