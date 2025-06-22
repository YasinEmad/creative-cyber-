import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  containerVariants,
  itemVariants,
  glitchVariants,
  pulseVariants,
  easeInOut,
  getGridCellAnimation,
  getParticleAnimation,
  getFloatingCodeAnimation
} from '../features/animations';


const HelloPage: React.FC = () => { 
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const cyberWords: string[] = ['CREATIVE', 'CYBER', 'INNOVATION', 'FUTURE', 'CODE', 'SECURITY'];

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev: number) => (prev + 1) % cyberWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [cyberWords.length]);
  // Animation variants are now imported from animations.ts

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i: number) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-cyan-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}            {...getParticleAnimation()}
          />
        ))}
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 transform -skew-y-12 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse"></div>
        <div className="grid h-full grid-cols-12 gap-1">
          {[...Array(144)].map((_, i) => (
            <motion.div
              key={i}
              className="border border-cyan-500 opacity-20"              {...getGridCellAnimation(i)}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        {/* Glowing Orb */}
        <motion.div
          className="absolute w-64 h-64 rounded-full top-20 bg-gradient-to-r from-cyan-400 to-purple-600 blur-3xl opacity-30"
          variants={pulseVariants}
          animate="animate"
        />

        {/* Main Hello Text */}
        <motion.div
          className="mb-8 text-center"
          variants={itemVariants}
        >
          <motion.h1
            className="mb-4 font-black tracking-wider text-transparent text-8xl md:text-9xl bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400"
            variants={glitchVariants}
            initial="initial"
            animate="animate"
          >
            HELLO
          </motion.h1>

          <motion.div
            className="flex items-center justify-center h-16"
            variants={itemVariants}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={currentIndex}
                className="text-4xl font-bold tracking-widest md:text-5xl text-cyan-400"
                initial={{ opacity: 0, rotateX: -90 }}
                animate={{ opacity: 1, rotateX: 0 }}
                exit={{ opacity: 0, rotateX: 90 }}
                transition={{ duration: 0.5 }}
              >
                {cyberWords[currentIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Welcome Message */}
        <motion.div
          className="max-w-4xl mx-auto mb-12 text-center"
          variants={itemVariants}
        >
          <motion.p
            className="mb-6 text-xl leading-relaxed text-gray-300 md:text-2xl"
            variants={itemVariants}
          >
            Welcome to the future of digital education. Dive into the world of
            <span className="font-semibold text-cyan-400"> Creative Cyber</span> where
            innovation meets security.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 text-sm text-purple-300 md:text-base"
            variants={itemVariants}
          >
            {['LEARN', 'CREATE', 'SECURE', 'INNOVATE'].map((word) => ( // Removed unused 'index'
              <motion.span
                key={word}
                className="px-4 py-2 border border-purple-500 rounded-full bg-purple-500/10 backdrop-blur-sm"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: 'rgba(168, 85, 247, 0.2)',
                  borderColor: 'rgb(168, 85, 247)'
                }}
                transition={{ duration: 0.3 }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Interactive Elements */}
        <motion.div
          className="flex flex-col items-center gap-6 sm:flex-row"
          variants={itemVariants}
        >
          <motion.button
            onClick={() => navigate('/faq')}
            className="px-8 py-4 text-lg font-bold tracking-wide text-white rounded-lg shadow-2xl bg-gradient-to-r from-cyan-500 to-purple-600"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(6, 182, 212, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Any QUESTIONS?
          </motion.button>

          <motion.button
            onClick={() => navigate('/courses')}
            className="px-8 py-4 text-lg font-bold tracking-wide border-2 rounded-lg border-cyan-400 text-cyan-400 backdrop-blur-sm hover:bg-cyan-400/10"
            whileHover={{
              scale: 1.05,
              borderColor: 'rgb(34, 197, 94)',
              color: 'rgb(34, 197, 94)'
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            EXPLORE COURSES
          </motion.button>
        </motion.div>

        {/* Floating Code Snippets */}
        <div className="absolute inset-0 pointer-events-none">
          {['<code>', '{cyber}', '0x41', 'def hack():', '#!/bin/bash'].map((code, index) => (
            <motion.div
              key={index}
              className="absolute font-mono text-sm text-green-400 opacity-30"
              style={{
                left: `${20 + index * 15}%`,
                top: `${30 + index * 10}%`,
              }}              {...getFloatingCodeAnimation(index)}
            >
              {code}
            </motion.div>
          ))}
        </div>

        {/* Bottom Accent */}
        <motion.div
          className="absolute transform -translate-x-1/2 bottom-8 left-1/2"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: easeInOut // Use defined Easing type
          }}
        >
          <div className="w-1 h-16 rounded-full bg-gradient-to-b from-cyan-400 to-transparent"></div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HelloPage;