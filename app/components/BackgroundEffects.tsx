"use client";

import { motion } from "framer-motion";

interface BlobProps {
  className: string;
  style: React.CSSProperties;
  animateX?: number[];
  animateY?: number[];
  duration?: number;
  delay?: number;
}

function GradientBlob({
  className,
  style,
  animateX = [0, 50, -30, 0],
  animateY = [0, -40, 30, 0],
  duration = 20,
  delay = 0,
}: BlobProps) {
  return (
    <motion.div
      className={className}
      style={style}
      animate={{
        x: animateX,
        y: animateY,
        scale: [1, 1.1, 0.95, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );
}

export default function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" style={{ zIndex: -1 }}>
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />

      {/* Animated Gradient Blobs - more visible */}
      <GradientBlob
        className="absolute rounded-full"
        style={{
          width: 600,
          height: 600,
          top: "-5%",
          left: "10%",
          background: "radial-gradient(circle, rgba(96, 165, 250, 0.4) 0%, rgba(96, 165, 250, 0) 70%)",
        }}
        animateX={[0, 80, -40, 0]}
        animateY={[0, 60, -30, 0]}
        duration={25}
        delay={0}
      />

      <GradientBlob
        className="absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          top: "20%",
          right: "5%",
          background: "radial-gradient(circle, rgba(167, 139, 250, 0.35) 0%, rgba(167, 139, 250, 0) 70%)",
        }}
        animateX={[-30, 50, 0, -30]}
        animateY={[0, -50, 40, 0]}
        duration={22}
        delay={3}
      />

      <GradientBlob
        className="absolute rounded-full"
        style={{
          width: 550,
          height: 550,
          bottom: "10%",
          left: "5%",
          background: "radial-gradient(circle, rgba(45, 212, 191, 0.3) 0%, rgba(45, 212, 191, 0) 70%)",
        }}
        animateX={[0, -60, 40, 0]}
        animateY={[0, 50, -40, 0]}
        duration={28}
        delay={6}
      />

      <GradientBlob
        className="absolute rounded-full"
        style={{
          width: 450,
          height: 450,
          bottom: "30%",
          right: "15%",
          background: "radial-gradient(circle, rgba(244, 114, 182, 0.3) 0%, rgba(244, 114, 182, 0) 70%)",
        }}
        animateX={[20, -40, 60, 20]}
        animateY={[-20, 40, -30, -20]}
        duration={24}
        delay={9}
      />

      {/* Extra accent blob for depth */}
      <GradientBlob
        className="absolute rounded-full"
        style={{
          width: 400,
          height: 400,
          top: "50%",
          left: "40%",
          background: "radial-gradient(circle, rgba(251, 191, 36, 0.2) 0%, rgba(251, 191, 36, 0) 70%)",
        }}
        animateX={[-40, 30, -20, -40]}
        animateY={[30, -40, 50, 30]}
        duration={30}
        delay={12}
      />
    </div>
  );
}
