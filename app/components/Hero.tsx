"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

// Floating element component
function FloatingElement({
  className,
  delay = 0,
  duration = 15,
  mouseX,
  mouseY,
  sensitivity = 20,
  children,
}: {
  className: string;
  delay?: number;
  duration?: number;
  mouseX: ReturnType<typeof useMotionValue<number>>;
  mouseY: ReturnType<typeof useMotionValue<number>>;
  sensitivity?: number;
  children?: React.ReactNode;
}) {
  const x = useTransform(mouseX, [0, 1], [-sensitivity, sensitivity]);
  const y = useTransform(mouseY, [0, 1], [-sensitivity, sensitivity]);
  const springX = useSpring(x, { stiffness: 50, damping: 20 });
  const springY = useSpring(y, { stiffness: 50, damping: 20 });

  return (
    <motion.div
      className={className}
      style={{ x: springX, y: springY }}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

// Paw print SVG component
function PawPrint({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="currentColor"
    >
      <ellipse cx="50" cy="70" rx="20" ry="25" />
      <ellipse cx="25" cy="40" rx="12" ry="15" />
      <ellipse cx="75" cy="40" rx="12" ry="15" />
      <ellipse cx="15" cy="60" rx="10" ry="12" />
      <ellipse cx="85" cy="60" rx="10" ry="12" />
    </svg>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const headline = "Compassionate Care for Your Beloved Pets";
  const words = headline.split(" ");

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/sample_pet_dog_02.jpg"
          alt="Happy pet at our clinic"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Overlay Gradient for text readability */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* Floating Elements */}
      {mounted && (
        <>
          <FloatingElement
            className="absolute top-[15%] left-[10%] h-16 w-16 text-white/20"
            mouseX={mouseX}
            mouseY={mouseY}
            delay={0}
            duration={12}
            sensitivity={30}
          >
            <PawPrint />
          </FloatingElement>

          <FloatingElement
            className="absolute top-[25%] right-[15%] h-20 w-20 text-white/15"
            mouseX={mouseX}
            mouseY={mouseY}
            delay={2}
            duration={15}
            sensitivity={25}
          >
            <PawPrint />
          </FloatingElement>

          <FloatingElement
            className="absolute bottom-[30%] left-[5%] h-12 w-12 rounded-full bg-blue-400/20"
            mouseX={mouseX}
            mouseY={mouseY}
            delay={1}
            duration={10}
            sensitivity={35}
          >
            <div className="h-full w-full rounded-full" />
          </FloatingElement>

          <FloatingElement
            className="absolute bottom-[20%] right-[10%] h-24 w-24 text-white/10"
            mouseX={mouseX}
            mouseY={mouseY}
            delay={3}
            duration={18}
            sensitivity={20}
          >
            <PawPrint />
          </FloatingElement>

          <FloatingElement
            className="absolute top-[60%] right-[30%] h-8 w-8 rounded-full bg-orange-400/20"
            mouseX={mouseX}
            mouseY={mouseY}
            delay={1.5}
            duration={13}
            sensitivity={40}
          >
            <div className="h-full w-full rounded-full" />
          </FloatingElement>
        </>
      )}

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 pt-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-center sm:text-left">
          {/* Animated Headline */}
          <motion.h1
            className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="mt-6 text-xl leading-relaxed text-white/90 sm:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            Professional veterinary services with love and expertise
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ delayChildren: 1.5 }}
          >
            {/* Primary Button */}
            <motion.div variants={buttonVariants}>
              <Link
                href="/booking"
                className="inline-block rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:from-blue-600 hover:to-indigo-600 hover:shadow-xl hover:scale-105"
              >
                Schedule Appointment
              </Link>
            </motion.div>

            {/* Secondary Button */}
            <motion.div variants={buttonVariants}>
              <Link
                href="#services"
                className="inline-block rounded-full border-2 border-white bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-105"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-white/70"
        >
          <span className="mb-2 text-sm">Scroll to explore</span>
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
