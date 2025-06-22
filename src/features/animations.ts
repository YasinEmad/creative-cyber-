import { type Easing, type Variants } from 'framer-motion';

// Common easing types
export const easeOut: Easing = "easeOut";
export const easeInOut: Easing = "easeInOut";

// Container animations
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.3
    }
  }
};

// Item animations
export const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOut
    }
  }
};

// Glitch effect
export const glitchVariants = {
  initial: { x: 0 },
  animate: {
    x: [-2, 2, -2, 2, 0],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatDelay: 3
    }
  }
};

// Pulse effect
export const pulseVariants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: easeInOut
    }
  }
};

// Navbar animations
export const navVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: easeOut
    }
  }
};

export const linkVariants = {
  idle: { scale: 1, color: '#cbd5e1' },
  hover: {
    scale: 1.05,
    color: '#06b6d4',
    transition: { duration: 0.2 }
  }
};

// Glow effect animations
export const glowVariants: Variants = {
  initial: {
    boxShadow: "0 0 20px rgba(6, 182, 212, 0.3)"
  },
  animate: {
    boxShadow: [
      "0 0 20px rgba(6, 182, 212, 0.3)",
      "0 0 60px rgba(147, 51, 234, 0.4)",
      "0 0 20px rgba(6, 182, 212, 0.3)"
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Background particle animation
export function getParticleAnimation() {
  return {
    animate: {
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
    },
    transition: {
      duration: Math.random() * 3 + 2,
      repeat: Infinity,
      delay: Math.random() * 2,
    }
  };
}

// Grid cell animation
export function getGridCellAnimation(i: number) {
  return {
    animate: {
      opacity: [0.1, 0.3, 0.1],
    },
    transition: {
      duration: 3,
      repeat: Infinity,
      delay: i * 0.1,
    }
  };
}

// Code snippet floating animation
export function getFloatingCodeAnimation(index: number) {
  return {
    animate: {
      y: [-20, 20, -20],
      opacity: [0.2, 0.5, 0.2],
    },
    transition: {
      duration: 4,
      repeat: Infinity,
      delay: index * 0.5,
    }
  };
}

// FAQ Animations
export const faqContainerVariants: Variants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
};

export const faqItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

export const faqAnswerVariants: Variants = {
  hidden: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};
