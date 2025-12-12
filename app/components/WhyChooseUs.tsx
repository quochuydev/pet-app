"use client";

import { motion } from "framer-motion";
import { Award, Heart, Building2, Clock, LucideIcon } from "lucide-react";

interface FeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

function Feature({ icon: Icon, title, description, index }: FeatureProps) {
  return (
    <motion.div
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Animated Icon */}
      <motion.div
        className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 shadow-lg"
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
          delay: index * 0.1 + 0.2,
        }}
        whileHover={{ scale: 1.1 }}
      >
        <Icon className="h-10 w-10 text-blue-600" />
      </motion.div>

      {/* Content */}
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <p className="mt-3 text-base leading-relaxed text-gray-600">
        {description}
      </p>
    </motion.div>
  );
}

export default function WhyChooseUs() {
  const features = [
    {
      icon: Award,
      title: "15+ Years Experience",
      description:
        "Serving the community with excellence and dedication since 2009",
    },
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Treating every pet like family with love and understanding",
    },
    {
      icon: Building2,
      title: "Modern Facilities",
      description:
        "State-of-the-art equipment and comfortable treatment spaces",
    },
    {
      icon: Clock,
      title: "24/7 Emergency",
      description: "Always here when you need us, day or night",
    },
  ];

  return (
    <section id="about" className="bg-gray-50 py-20">
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
            Why Choose PetCare Clinic?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Dedicated to providing the best care for your beloved pets
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Feature
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
