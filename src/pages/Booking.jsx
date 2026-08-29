import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { HiOutlineCalendar, HiOutlineClock, HiOutlineLocationMarker, HiCheckCircle, HiExclamation } from 'react-icons/hi';

// Helper to disable mock booked dates
const getBookedDates = () => {
  const dates = [];
  const today = new Date();
  
  // Disable today + 2 days, today + 5 days, and today + 8 days
  const d2 = new Date(today);
  d2.setDate(today.getDate() + 2);
  dates.push(d2);

  const d5 = new Date(today);
  d5.setDate(today.getDate() + 5);
  dates.push(d5);

  const d8 = new Date(today);
  d8.setDate(today.getDate() + 8);
  dates.push(d8);

  return dates;
};

export default function Booking() {
  const location = useLocation();
  const bookedDates = getBookedDates();

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'Portraits',
    date: null,
    timeSlot: '',
    location: '',
    message: ''
  });

  // Pre-fill service type if redirected from services page
  useEffect(() => {
    if (location.state?.packageType) {
      setFormData(prev => ({ ...prev, serviceType: location.state.packageType }));
    }
  }, [location]);

  // Validation / Animation state
  const [errors, setErrors] = useState({});
  const [isShake, setIsShake] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Time Slot Options
  const timeSlots = [
    { id: 'morning', label: 'Morning Slot', time: '09:00 AM - 12:00 PM', desc: 'Best for crisp, bright daylight shots' },
    { id: 'afternoon', label: 'Afternoon Slot', time: '01:00 PM - 04:00 PM', desc: 'Overhead light, ideal for indoor studio setups' },
    { id: 'evening', label: 'Golden Hour Slot', time: '05:00 PM - 08:00 PM', desc: 'Soft warm light, premium outdoor landscapes' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleDateChange = (date) => {
    setFormData(prev => ({ ...prev, date }));
    if (errors.date) {
      setErrors(prev => ({ ...prev, date: null }));
    }
  };

  const handleSlotSelect = (slotId) => {
    setFormData(prev => ({ ...prev, timeSlot: slotId }));
    if (errors.timeSlot) {
      setErrors(prev => ({ ...prev, timeSlot: null }));
    }
  };

  // Validation logic
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full Name is required.';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid Email is required.';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.';
    if (!formData.date) newErrors.date = 'Please select a session date.';
    if (!formData.timeSlot) newErrors.timeSlot = 'Please select a preferred time slot.';
    if (!formData.location.trim()) newErrors.location = 'Shoot location preference is required.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (!isValid) {
      // Trigger Framer Motion shake animation
      setIsShake(true);
      setTimeout(() => setIsShake(false), 500);
      return;
    }

    // Success flow
    setIsSubmitted(true);
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
            Reservation Portal
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mt-4"
          >
            Book a Session
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
            Confirm date availability, select a time slot, and tell us about your project. We'll get back to you with custom brief details.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Guidelines */}
          <div className="lg:col-span-4 flex flex-col gap-8 text-left">
            <div className="p-6 bg-dark-900 border border-dark-800 rounded-sm">
              <h3 className="font-serif text-lg text-white mb-4 font-light">Session Guidelines</h3>
              <ul className="flex flex-col gap-4 text-xs font-light text-zinc-400">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 shrink-0" />
                  <span><strong>Secure Deposit:</strong> A 25% deposit is required via billing link to lock your date once confirmed.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 shrink-0" />
                  <span><strong>Location Travel:</strong> Shoots outside city limits may incur minor mileage travel costs.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 shrink-0" />
                  <span><strong>Proof Sheet:</strong> You will receive a watermarked preview grid within 2 days of shooting.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-dark-900/40 border border-dark-800/60 rounded-sm text-xs font-light text-zinc-500">
              <h4 className="font-mono text-[10px] uppercase text-zinc-400 tracking-wider mb-2">Need Custom Prep?</h4>
              <p className="leading-relaxed">
                If you are planning an editorial brand lookbook, dynamic sports action shoot, or detailed product setups, email hello@chronosstudio.com directly for a tailored custom quote.
              </p>
            </div>
          </div>

          {/* Right Column: Booking Form */}
          <div className="lg:col-span-8">
            <motion.form
              onSubmit={handleSubmit}
              noValidate
              animate={isShake ? { x: [-10, 10, -10, 10, -5, 5, 0] } : {}}
              transition={{ duration: 0.5 }}
              className="bg-dark-900 border border-dark-800 p-8 rounded-sm text-left flex flex-col gap-6"
            >
              <h2 className="font-serif text-xl font-light text-white mb-2 border-b border-dark-800 pb-4">
                Booking Information
              </h2>

              {/* Form Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="font-mono text-[10px] tracking-widest text-zinc-400 uppercase">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter name"
                    className={`bg-dark-950 border text-sm text-white px-4 py-3 rounded-sm focus:outline-none focus:border-gold-500 transition-colors ${
                      errors.name ? 'border-red-500' : 'border-dark-800'
                    }`}
                  />
                  {errors.name && <span className="text-[10px] text-red-500 mt-1">{errors.name}</span>}
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="font-mono text-[10px] tracking-widest text-zinc-400 uppercase">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter email"
                    className={`bg-dark-950 border text-sm text-white px-4 py-3 rounded-sm focus:outline-none focus:border-gold-500 transition-colors ${
                      errors.email ? 'border-red-500' : 'border-dark-800'
                    }`}
                  />
                  {errors.email && <span className="text-[10px] text-red-500 mt-1">{errors.email}</span>}
                </div>

                {/* Phone Number */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="font-mono text-[10px] tracking-widest text-zinc-400 uppercase">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 000-0000"
                    className={`bg-dark-950 border text-sm text-white px-4 py-3 rounded-sm focus:outline-none focus:border-gold-500 transition-colors ${
                      errors.phone ? 'border-red-500' : 'border-dark-800'
                    }`}
                  />
                  {errors.phone && <span className="text-[10px] text-red-500 mt-1">{errors.phone}</span>}
                </div>

                {/* Service Type */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="serviceType" className="font-mono text-[10px] tracking-widest text-zinc-400 uppercase">
                    Service Type
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className="bg-dark-950 border border-dark-800 text-sm text-white px-4 py-3 rounded-sm focus:outline-none focus:border-gold-500 transition-colors cursor-pointer"
                  >
                    <option value="Portraits">Portraits ($350)</option>
                    <option value="Weddings">Weddings ($2,450)</option>
                    <option value="Events">Events / Live Sessions</option>
                    <option value="Products">Editorial &amp; Brands ($850)</option>
                    <option value="Nature">Nature / Architectural Prints</option>
                  </select>
                </div>
              </div>

              {/* Datepicker Wrapper */}
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[10px] tracking-widest text-zinc-400 uppercase flex items-center gap-1">
                  <HiOutlineCalendar className="text-sm text-gold-500" /> Select Session Date
                </label>
                <div className="relative">
                  <DatePicker
                    selected={formData.date}
                    onChange={handleDateChange}
                    excludeDates={bookedDates}
                    minDate={new Date()}
                    placeholderText="Click to open calendar"
                    className={`w-full bg-dark-950 border text-sm text-white px-4 py-3 rounded-sm focus:outline-none focus:border-gold-500 transition-colors cursor-pointer ${
                      errors.date ? 'border-red-500' : 'border-dark-800'
                    }`}
                  />
                </div>
                {errors.date && <span className="text-[10px] text-red-500 mt-1">{errors.date}</span>}
                <p className="text-[10px] text-zinc-500 font-mono italic">
                  Note: Grayed-out/crossed dates represent fully-booked studio slots.
                </p>
              </div>

              {/* Time Slot Custom Selection */}
              <div className="flex flex-col gap-1.5 mt-2">
                <label className="font-mono text-[10px] tracking-widest text-zinc-400 uppercase flex items-center gap-1">
                  <HiOutlineClock className="text-sm text-gold-500" /> Select Preferred Time Slot
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {timeSlots.map((slot) => {
                    const isSelected = formData.timeSlot === slot.id;
                    return (
                      <motion.div
                        key={slot.id}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleSlotSelect(slot.id)}
                        className={`p-4 rounded-sm border cursor-pointer flex flex-col justify-between transition-all duration-300 ${
                          isSelected
                            ? 'border-gold-500 bg-gold-500/5 shadow-md shadow-gold-500/5'
                            : 'border-dark-800 bg-dark-950 hover:border-zinc-700'
                        }`}
                      >
                        <div>
                          <h4 className={`text-xs font-mono tracking-wider uppercase font-medium ${
                            isSelected ? 'text-gold-500' : 'text-white'
                          }`}>
                            {slot.label}
                          </h4>
                          <span className="text-[10px] font-mono text-zinc-500 block mt-1">
                            {slot.time}
                          </span>
                        </div>
                        <p className="text-[10px] text-zinc-400 font-light mt-3 leading-snug">
                          {slot.desc}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
                {errors.timeSlot && <span className="text-[10px] text-red-500 mt-1">{errors.timeSlot}</span>}
              </div>

              {/* Location Preference */}
              <div className="flex flex-col gap-1.5 mt-2">
                <label htmlFor="location" className="font-mono text-[10px] tracking-widest text-zinc-400 uppercase flex items-center gap-1">
                  <HiOutlineLocationMarker className="text-sm text-gold-500" /> Location Preference
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="e.g. Studio, Central Park NYC, or Wedding Venue"
                  className={`bg-dark-950 border text-sm text-white px-4 py-3 rounded-sm focus:outline-none focus:border-gold-500 transition-colors ${
                    errors.location ? 'border-red-500' : 'border-dark-800'
                  }`}
                />
                {errors.location && <span className="text-[10px] text-red-500 mt-1">{errors.location}</span>}
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="font-mono text-[10px] tracking-widest text-zinc-400 uppercase">
                  Details &amp; Creative Vision (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Describe your ideal session, concepts, lighting moods, outfits..."
                  className="bg-dark-950 border border-dark-800 text-sm text-white px-4 py-3 rounded-sm focus:outline-none focus:border-gold-500 transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-gold-500 hover:bg-gold-600 text-dark-950 font-mono text-xs tracking-widest uppercase rounded-sm font-bold shadow-lg transition-colors cursor-pointer mt-4"
              >
                Submit Booking Inquiry
              </button>
            </motion.form>
          </div>
        </div>
      </div>

      {/* Success Confirmation Modal */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 select-none"
          >
            <motion.div
              initial={{ scale: 0.9, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 15 }}
              className="bg-dark-900 border border-dark-800 max-w-lg w-full p-8 rounded-sm text-left shadow-2xl relative"
            >
              <div className="flex flex-col items-center text-center">
                <HiCheckCircle className="text-gold-500 text-6xl mb-4" />
                <h2 className="font-serif text-2xl text-white font-light">Inquiry Submitted!</h2>
                <p className="text-xs text-zinc-400 font-light leading-relaxed mt-2 max-w-xs">
                  Thank you, {formData.name}. We have logged your request. Our creative team will review the availability and respond within 24 hours.
                </p>
              </div>

              {/* Booking Summary details */}
              <div className="bg-dark-950 border border-dark-800/80 p-5 rounded-sm my-6 text-xs flex flex-col gap-3 font-mono">
                <div className="flex justify-between border-b border-dark-900 pb-2">
                  <span className="text-zinc-500">Subject:</span>
                  <span className="text-white">{formData.serviceType} Shoot</span>
                </div>
                <div className="flex justify-between border-b border-dark-900 pb-2">
                  <span className="text-zinc-500">Date:</span>
                  <span className="text-white">
                    {formData.date ? formData.date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : ''}
                  </span>
                </div>
                <div className="flex justify-between border-b border-dark-900 pb-2">
                  <span className="text-zinc-500">Slot:</span>
                  <span className="text-white uppercase">{formData.timeSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Venue / Location:</span>
                  <span className="text-white truncate max-w-[200px]">{formData.location}</span>
                </div>
              </div>

              <div className="flex flex-col gap-3 text-center">
                <div className="flex items-center justify-center gap-1.5 text-[10px] font-mono text-gold-500">
                  <HiExclamation /> A confirmation brief has been dispatched to {formData.email}
                </div>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    // Reset Form
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      serviceType: 'Portraits',
                      date: null,
                      timeSlot: '',
                      location: '',
                      message: ''
                    });
                  }}
                  className="w-full py-3 border border-zinc-700 hover:border-gold-500 hover:text-gold-500 text-zinc-300 font-mono text-[10px] tracking-widest uppercase transition-colors rounded-sm cursor-pointer"
                >
                  Close &amp; Reset Form
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
