"use client";

import { motion } from "framer-motion";

interface BlobProps {
  color: string;
  size: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  delay: number;
}

function GradientBlob({ color, size, top, left, right, bottom, delay }: BlobProps) {
  return (
    <motion.div
      className={`absolute rounded-full ${color} blur-3xl`}
      style={{
        width: size,
        height: size,
        top,
        left,
        right,
        bottom,
      }}
      animate={{
        x: [0, 100, -50, 0],
        y: [0, -80, 60, 0],
        scale: [1, 1.2, 0.9, 1],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );
}

export default function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Animated Gradient Blobs */}
      <GradientBlob
        color="bg-blue-400/30"
        size={500}
        top="-10%"
        left="-5%"
        delay={0}
      />
      <GradientBlob
        color="bg-purple-400/25"
        size={450}
        top="5%"
        right="-10%"
        delay={5}
      />
      <GradientBlob
        color="bg-teal-400/25"
        size={400}
        bottom="20%"
        left="-8%"
        delay={10}
      />
      <GradientBlob
        color="bg-pink-400/20"
        size={480}
        bottom="10%"
        right="5%"
        delay={15}
      />
    </div>
  );
}
