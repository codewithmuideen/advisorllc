import React, { useState, useEffect } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FiMenu, FiX, FiPlus } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import images from '../constants/images';

const Logo = () => (
  <a href="/" aria-label="Go to homepage" className="flex items-center">
    <img
      src={images.logo}
      alt="Global Career Advisors Logo"
      className="h-16 w-auto" style={{marginLeft:'-35%'}}
    />
  </a>
);

const navLinks = [
  { title: 'About', href: '/about' },
  {
    title: 'Services',
    href: '',
    submenu: [
      { title: 'Career Coaching', href: '/career-coaching' },
      { title: 'Resume writing', href: '/resume-writing' },
      { title: 'LinkedIn Optimization', href: '/linkedin-optimization' },
      { title: 'Job Interview Preparation', href: '/job-interview-preparation' },
    ],
  },
  { title: 'Pricing', href: '/pricing' },
  { title: 'Resources', href: '/resources' },
  { title: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
  }, [isMobileMenuOpen]);

  return (
    <header className="bg-yellow-400 font-sans relative overflow-hidden fixed top-0 left-0 w-full z-50 shadow-md">
      {/* Top Banner */}
      <div className="bg-gray-900 text-white text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-center sm:justify-between items-center py-4">
          <p>
            ⚡ Supercharge your Job Search.
            <a href="#" className="font-bold underline ml-2 hover:text-yellow-400 transition-colors">
              BOOK A CALL NOW
            </a>
          </p>
          <a href="#" aria-label="LinkedIn" className="hidden sm:block text-xl hover:text-yellow-400 transition-colors">
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          <Logo />
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.submenu ? <DesktopDropdown key={link.title} link={link} /> : (
                <a key={link.title} href={link.href} className="text-gray-900 font-semibold hover:text-blue-600 transition-colors">
                  {link.title}
                </a>
              )
            )}
          </div>
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="text-gray-900 text-3xl"
              aria-label="Open menu"
            >
              <FiMenu />
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-0 md:pt-10 md:pb-0">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Side */}
          <div className="text-center lg:text-left">
            <p className="font-bold text-gray-900">
              Career Coaching: Land your dream job in 90 days
            </p>
            <h1 className="text-5xl md:text-6xl font-extrabold text-black mt-4 leading-tight">
              BUILD THE <br />
              FUTURE YOU'VE <br />
              ALWAYS IMAGINED
            </h1>
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4 justify-center lg:justify-start w-full sm:w-auto">
              <a
                href="/contact"
                className="w-full sm:w-64 text-center bg-black text-white font-bold py-4 px-8 rounded-full hover:bg-gray-800 transition-transform hover:scale-105"
              >
                Test Your Career Readiness Now
              </a>
              <a
                href="/contact"
                className="w-full sm:w-64 text-center text-black font-bold py-4 px-8 rounded-full border-2 border-black hover:bg-black hover:text-white transition-all"
              >
                Book A Breakthrough Session Today
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative">
            <img
              src={images.hero}
              alt="Portrait of a career advisor"
              className="w-full max-w-md lg:max-w-full object-contain lg:object-cover"
              style={{ marginBottom: '-4px' }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

const DesktopDropdown = ({ link }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-gray-900 font-semibold hover:text-blue-600 transition-colors"
      >
        {link.title}
        <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.2 }}>
          <FiPlus />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute top-full mt-2 w-56 bg-gray-800 text-white rounded-lg shadow-xl z-20 overflow-hidden"
          >
            <div className="py-2">
              {link.submenu.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="block w-full text-left px-4 py-2.5 text-sm hover:bg-gray-700 transition-colors"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed top-0 right-0 w-full h-screen bg-yellow-400 z-50 lg:hidden"
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-end p-6">
              <button onClick={onClose} className="text-gray-900 text-3xl" aria-label="Close menu">
                <FiX />
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center flex-grow gap-8 text-2xl text-gray-900 font-semibold">
              {navLinks.map((link) =>
                link.submenu ? <MobileDropdown key={link.title} link={link} /> : (
                  <a key={link.title} href={link.href} onClick={onClose} className="hover:text-blue-600">
                    {link.title}
                  </a>
                )
              )}
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const MobileDropdown = ({ link }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="text-center">
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-2">
        {link.title}
        <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.3 }}>
          <FiPlus />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden mt-4 flex flex-col items-center gap-4"
          >
            {link.submenu.map((item) => (
              <a key={item.title} href={item.href} className="text-lg font-normal text-gray-700 hover:text-blue-600">
                {item.title}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
