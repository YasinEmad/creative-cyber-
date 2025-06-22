import React, { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
} from "framer-motion";
import {
  faqContainerVariants,
  faqItemVariants,
  faqAnswerVariants,
} from "../features/animations";
import { faqItems } from "../data/faqItems";

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const heroIsInView = useInView(heroRef, { once: true });
  const faqIsInView = useInView(faqRef, { once: true });

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen overflow-hidden font-sans bg-black"
    >
      {/* Dynamic Background */}      <motion.div
        className="fixed inset-0 z-0"
      >
        {/* Layered subtle gradients for visual depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-cyan-900/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,105,180,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(6,182,212,0.1)_0deg,rgba(147,51,234,0.1)_180deg,rgba(6,182,212,0.1)_360deg)]" />
        {/* New: Subtle Vignette Effect */}
        <div className="absolute inset-0 radial-gradient(ellipse_at_center,_transparent_50%,_rgba(0,0,0,0.5)_100%)" />
      </motion.div>

      {/* Animated Grid Background */}
      <div className="fixed inset-0 z-0 opacity-30">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <motion.path
                d="M 100 0 L 0 0 0 100"
                fill="none"
                stroke="url(#gridGradient)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{ duration: 2, delay: 1 }}
              />
            </pattern>
            <linearGradient
              id="gridGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Particles for Visual Ambiance */}
      <div className="fixed inset-0 z-10 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: `linear-gradient(45deg, #06b6d4, #8b5cf6)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [-10, 10, -10],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Hero Section: "WHO WE ARE" */}
      <motion.section
        ref={heroRef}
        className="relative z-20 px-4 py-32 text-center"
        initial="hidden"
        animate={heroIsInView ? "visible" : "hidden"}
        // New: Apply subtle 3D rotation based on scroll

      >
        <div className="max-w-6xl mx-auto">
          {/* Main Title with Animated Text Gradient */}
          <motion.div
            className="mb-8"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.h1
              className="mb-4 font-black tracking-tight text-transparent text-7xl md:text-9xl bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 200%",
                // Add subtle text shadow for better readability on complex backgrounds
                textShadow: "0px 0px 10px rgba(0,0,0,0.5)",
              }}
            >
              WHO WE ARE
            </motion.h1>
          </motion.div>

          {/* "Who We Are" Section Content Box */}
          <motion.div
            className="relative p-8 overflow-hidden border rounded-3xl border-white/10 backdrop-blur-xl"
            whileHover={{
              scale: 1.02,
              rotateX: 2,
              rotateY: 2,
            }}
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
          >
            {/* Inner glow effect */}
            <motion.div
              className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl"
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Who We Are content */}
            <div className="relative z-10">
              <motion.p
                className="mb-8 text-2xl font-light leading-relaxed text-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                At{" "}
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Creative Cyber
                </span>
                , we are pioneers in digital education, bridging the gap between
                creativity and cybersecurity. Our mission is to empower the next
                generation of digital innovators with cutting-edge skills and
                knowledge.
              </motion.p>
              <motion.p
                className="text-2xl font-light leading-relaxed text-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                Founded by industry experts and passionate educators, we deliver
                comprehensive training programs that combine theoretical
                knowledge with practical experience. Our innovative approach
                ensures that students are well-prepared for the challenges of
                tomorrow's digital landscape.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </motion.section>{" "}
      {/* FAQ Section */}
      <motion.section
        ref={faqRef}
        className="relative z-20 px-4 py-32"
        variants={faqContainerVariants}
        initial="hidden"
        animate={faqIsInView ? "visible" : "hidden"}
        // New: Apply subtle 3D rotation based on scroll

      >
        <div className="max-w-5xl mx-auto">
          {/* FAQ Section Title */}
          <motion.div
            className="mb-20 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="mb-4 text-6xl font-black tracking-tight text-transparent md:text-8xl bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"
              whileHover={{ scale: 1.05 }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 200%",
                textShadow: "0px 0px 10px rgba(0,0,0,0.5)", // Added text shadow
              }}
            >
              FAQ
            </motion.h2>
            <motion.p
              className="text-xl text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Everything you need to know about Creative Cyber
            </motion.p>
          </motion.div>{" "}
          {/* Grid of FAQ Items */}
          <motion.div className="grid gap-6" variants={faqContainerVariants}>
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                className="relative group"
                variants={faqItemVariants}
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  transition: {
                    duration: 0.2,
                  },
                }}
                style={{ perspective: 1000 }}
              >
                {/* Border glow effect on hover/active */}
                <motion.div
                  className="absolute inset-0 transition-opacity duration-500 opacity-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl group-hover:opacity-100"
                  animate={
                    activeIndex === index
                      ? { opacity: 1, scale: 1.05, filter: "blur(20px) brightness(1.2)" } // More pronounced glow
                      : {}
                  }
                />

                {/* FAQ Item Card */}
                <motion.div
                  className={`relative overflow-hidden border rounded-2xl border-white/10 backdrop-blur-xl transition-all duration-300 ${
                    activeIndex === index ? "border-cyan-500/50" : ""
                  }`}
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
                  }}
                  animate={
                    activeIndex === index
                      ? {
                          boxShadow:
                            "0 25px 50px -12px rgba(6, 182, 212, 0.25), 0 0 40px rgba(6, 182, 212, 0.3)", // Stronger shadow
                        }
                      : {}
                  }
                >
                  {/* FAQ Question Button */}
                  <motion.button
                    className="flex items-center justify-between w-full p-8 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-2xl"
                    onClick={() =>
                      setActiveIndex(activeIndex === index ? null : index)
                    }
                    whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                    // New: Add a subtle press effect on click
                    whileTap={{ scale: 0.98 }}
                    id={`faq-question-${index}`}
                    aria-expanded={activeIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <div className="flex items-center space-x-4">
                      {/* Question mark icon with rotation animation */}
                      <motion.span
                        className="text-3xl"
                        animate={{ rotate: activeIndex === index ? 360 : 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        {"❔"}
                      </motion.span>
                      {/* Question text */}
                      <span className="text-xl font-bold transition-colors text-cyan-400 group-hover:text-cyan-300">
                        {item.question}
                      </span>
                    </div>
                    {/* Expand/Collapse Arrow Icon with rotation and scale animation */}
                    <motion.div
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20"
                      animate={{
                        rotate: activeIndex === index ? 180 : 0,
                        scale: activeIndex === index ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-2xl text-purple-400">↓</span>
                    </motion.div>
                  </motion.button>{" "}
                  {/* FAQ Answer Content with AnimatePresence for smooth entry/exit */}
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        variants={faqAnswerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="px-8 pb-8"
                        id={`faq-answer-${index}`}
                        role="region"
                        aria-labelledby={`faq-question-${index}`}
                      >
                        {/* Inner box for answer text */}
                        <motion.div
                          className="p-6 border rounded-xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-white/5"
                          initial={{ scale: 0.95, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.1 }}
                        >
                          <p className="text-lg leading-relaxed text-gray-300">
                            {item.answer}
                          </p>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default FAQ;