"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { PawPrint, Award, Heart, Clock } from "lucide-react";

interface StatProps {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  delay: number;
}

function StatCard({ icon: Icon, value, suffix, label, delay }: StatProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        delay: delay,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplayValue(Math.round(latest));
        },
      });

      return () => controls.stop();
    }
  }, [isInView, value, delay]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
    >
      {/* Icon */}
      <motion.div
        className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
          delay: delay + 0.2,
        }}
      >
        <Icon className="h-8 w-8 text-blue-600" />
      </motion.div>

      {/* Number */}
      <div className="text-4xl font-bold text-blue-600 md:text-5xl">
        {displayValue}
        {suffix}
      </div>

      {/* Label */}
      <p className="mt-2 text-lg text-gray-600">{label}</p>
    </motion.div>
  );
}

export default function Statistics() {
  const stats = [
    {
      icon: PawPrint,
      value: 5000,
      suffix: "+",
      label: "Pets Treated",
    },
    {
      icon: Award,
      value: 15,
      suffix: "+",
      label: "Years Experience",
    },
    {
      icon: Heart,
      value: 98,
      suffix: "%",
      label: "Happy Clients",
    },
    {
      icon: Clock,
      value: 24,
      suffix: "/7",
      label: "Available",
    },
  ];

  return (
    <section className="bg-white/60 backdrop-blur-sm py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Trusted by Pet Parents
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Numbers that reflect our commitment to excellence
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="mt-16 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
