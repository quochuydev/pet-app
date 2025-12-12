"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, MapPin } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Headline */}
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Ready to Give Your Pet the Best Care?
          </h2>

          {/* Subtext */}
          <p className="mt-6 text-xl text-blue-100">
            Schedule an appointment today and let our expert team take care of
            your beloved companion
          </p>

          {/* CTA Button with Pulse Animation */}
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-block"
            >
              <Link
                href="/booking"
                className="inline-flex items-center rounded-full bg-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:bg-orange-600 hover:shadow-xl"
              >
                Book Now
                <svg
                  className="ml-2 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {/* Phone */}
            <motion.a
              href="tel:+15551234567"
              className="flex items-center gap-3 text-white transition-transform hover:scale-105"
              whileHover={{ x: 5 }}
            >
              <motion.div
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20"
                whileHover={{ rotate: 15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Phone className="h-6 w-6" />
              </motion.div>
              <div className="text-left">
                <p className="text-sm text-blue-100">Call us</p>
                <p className="text-lg font-semibold">(555) 123-4567</p>
              </div>
            </motion.a>

            {/* Address */}
            <motion.div
              className="flex items-center gap-3 text-white"
              whileHover={{ x: 5 }}
            >
              <motion.div
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20"
                whileHover={{ rotate: 15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MapPin className="h-6 w-6" />
              </motion.div>
              <div className="text-left">
                <p className="text-sm text-blue-100">Visit us</p>
                <p className="text-lg font-semibold">123 Pet Care Lane</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
