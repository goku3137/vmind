"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'zoomIn' | 'rotateInUpLeft';
  delay?: number;
}

const variants = {
  fadeInUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 }
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 }
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  },
  rotateInUpLeft: {
    hidden: { opacity: 0, y: 40, rotate: 15, transformOrigin: "left bottom" },
    visible: { opacity: 1, y: 0, rotate: 0 }
  }
};

export function AnimatedSection({ 
  children, 
  className = "", 
  animation = "fadeInUp",
  delay = 0 
}: AnimatedSectionProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants[animation]}
      transition={{ duration: 1.25, delay: delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
