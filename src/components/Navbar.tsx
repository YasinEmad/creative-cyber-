import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  navVariants,
  linkVariants,
  glowVariants,
  easeInOut
} from '../features/animations';

export const Navbar: React.FC = () => {
  // Removed useDispatch and user useSelector as they are related to login/auth
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>('/courses'); // Default active link
  const navLinks = [
    { to: '/courses', label: 'COURSES' },
    { to: '/faq', label: 'FAQ' },
    { to: '/dashboard', label: 'DASHBOARD' } // Added Dashboard link
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          'bg-gradient-to-r from-slate-800/90 via-purple-900/90 to-slate-800/90 backdrop-blur-sm'
        }`}
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated Border */}
        <motion.div
          className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          animate={{
            width: ['0%', '100%', '0%'],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: easeInOut
          }}
        />
        <div className="container px-4 py-3 mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/" className="flex items-center gap-3 group">
                <div className="relative">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-cyan-400 blur-md opacity-30"
                    variants={glowVariants}
                    animate="animate"
                  />
                  <img
                    src="/images/Clearmove_Approved_Logo_Sign-removebg-preview.png"
                    alt="Creative Cyber Logo"
                    className="relative z-10 w-10 h-10 transition-transform group-hover:rotate-12"
                  />
                </div>
                <div className="hidden sm:block">
                  <span className="text-xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text">
                    CREATIVE
                  </span>
                  <span className="ml-1 text-xl font-bold text-white">CYBER</span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="items-center hidden gap-8 lg:flex">
              <div className="flex gap-8">
                {navLinks.map((link) => (
                  <motion.div key={link.to} className="relative">
                    <Link
                      to={link.to}
                      onClick={() => setActiveLink(link.to)}
                    >
                      <motion.span
                        className={`font-medium tracking-wide cursor-pointer relative ${
                          activeLink === link.to ? 'text-cyan-400' : 'text-slate-300'
                        }`}
                        variants={linkVariants}
                        initial="idle"
                        whileHover="hover"
                      >
                        {link.label}
                      </motion.span>
                    </Link>
                    {activeLink === link.to && (
                      <motion.div
                        className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500"
                        layoutId="navbar-indicator"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Auth Section */}
              <div className="flex items-center gap-4 pl-8 ml-8 border-l border-slate-600/50">
                <Link to="/login">
                  <motion.span
                    className="font-medium tracking-wide text-slate-300"
                    variants={linkVariants}
                    initial="idle"
                    whileHover="hover"
                  >
                    LOGIN
                  </motion.span>
                </Link>
                <Link to="/register">
                  <motion.button
                    className="px-6 py-2 font-medium text-white rounded-lg shadow-lg bg-gradient-to-r from-cyan-500 to-purple-600"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: '0 0 20px rgba(6, 182, 212, 0.4)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    REGISTER
                  </motion.button>
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="flex flex-col gap-1 p-2 lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="w-6 h-0.5 bg-cyan-400 rounded-full"
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 6 : 0
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-cyan-400 rounded-full"
                animate={{
                  opacity: isMobileMenuOpen ? 0 : 1
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-cyan-400 rounded-full"
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -6 : 0
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="absolute p-6 border top-20 left-4 right-4 bg-slate-900/95 backdrop-blur-lg rounded-xl border-cyan-500/20"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.to}
                      onClick={() => {
                        setActiveLink(link.to);
                        setIsMobileMenuOpen(false);
                      }}
                      className="block text-lg font-medium transition-colors text-slate-300 hover:text-cyan-400"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                {/* Auth Section - Removed User-specific logic */}
                <div className="pt-6 mt-2 border-t border-slate-700">
                  <div className="flex flex-col gap-4">
                    <Link
                      to="/login"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-lg font-medium transition-colors text-slate-300 hover:text-cyan-400"
                    >
                      LOGIN
                    </Link>
                    <Link
                      to="/register"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-4 py-2 font-medium text-center text-white rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600"
                    >
                      REGISTER
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="h-16" />
    </>
  );
};