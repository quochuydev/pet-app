"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "Amazing care for my dog Max! The staff is incredibly friendly and professional. I wouldn't trust anyone else with my furry family member.",
    author: "Sarah M.",
    role: "Dog Parent",
    rating: 5,
  },
  {
    id: 2,
    text: "Dr. Chen saved my cat's life during an emergency visit. Forever grateful for the quick response and expert care. They truly go above and beyond!",
    author: "Michael R.",
    role: "Cat Parent",
    rating: 5,
  },
  {
    id: 3,
    text: "Best vet clinic in town. My pets actually enjoy coming here! The welcoming atmosphere and gentle handling make all the difference.",
    author: "Jennifer L.",
    role: "Multi-pet Parent",
    rating: 5,
  },
  {
    id: 4,
    text: "Professional, caring, and always available. The preventive care program has kept my senior dog healthy and happy. Highly recommend!",
    author: "David K.",
    role: "Dog Parent",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const goToPrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  // Auto-advance carousel
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [isPaused, goToNext]);

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
            What Pet Parents Say
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Hear from our happy clients
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div
          className="relative mt-16"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition-all hover:bg-gray-50 hover:shadow-xl md:-left-6"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition-all hover:bg-gray-50 hover:shadow-xl md:-right-6"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>

          {/* Testimonial Card */}
          <div className="mx-auto max-w-3xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="rounded-2xl bg-gray-50 p-8 md:p-12"
              >
                {/* Quote Icon */}
                <Quote className="mb-6 h-12 w-12 text-blue-200" />

                {/* Stars */}
                <div className="mb-6 flex gap-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-6 w-6 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-xl leading-relaxed text-gray-700 md:text-2xl">
                  &ldquo;{testimonials[currentIndex].text}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-8">
                  <p className="font-bold text-gray-900">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot Indicators */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 w-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-blue-600"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
