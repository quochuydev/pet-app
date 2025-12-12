"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook", hoverColor: "hover:bg-blue-600" },
  { icon: Twitter, href: "#", label: "Twitter", hoverColor: "hover:bg-blue-400" },
  { icon: Instagram, href: "#", label: "Instagram", hoverColor: "hover:bg-pink-600" },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "Our Team", href: "/#our-vets" },
  { name: "Contact", href: "/#contact" },
];

const serviceLinks = [
  { name: "General Checkup", href: "/services/general-checkup" },
  { name: "Emergency Care", href: "/services/emergency-care" },
  { name: "Surgery", href: "/services/surgery" },
  { name: "Preventive Care", href: "/services/vaccination" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-4 text-lg font-bold text-white">
              PetCare Clinic
            </h3>
            <p className="mb-6 text-sm leading-relaxed">
              Providing compassionate and professional veterinary care for your
              beloved pets since 2009. Your pet&apos;s health is our priority.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className={`flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-colors ${social.hoverColor}`}
                  aria-label={social.label}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="mb-4 text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center transition-colors hover:text-blue-400"
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-blue-400 transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="mb-4 text-lg font-bold text-white">Services</h3>
            <ul className="space-y-3 text-sm">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center transition-colors hover:text-blue-400"
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-blue-400 transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="mb-4 text-lg font-bold text-white">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-400" />
                <div>
                  <p className="font-semibold text-white">Address</p>
                  <p>123 Pet Care Lane</p>
                  <p>Springfield, ST 12345</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-400" />
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <a
                    href="tel:+15551234567"
                    className="transition-colors hover:text-blue-400"
                  >
                    (555) 123-4567
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-400" />
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <a
                    href="mailto:info@petcareclinic.com"
                    className="transition-colors hover:text-blue-400"
                  >
                    info@petcareclinic.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 h-5 w-5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Business Hours</p>
                  <p>Mon-Fri: 8:00 AM - 8:00 PM</p>
                  <p>Sat-Sun: 9:00 AM - 6:00 PM</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-950 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm sm:flex-row">
            <p>
              &copy; {new Date().getFullYear()} PetCare Clinic. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="group relative transition-colors hover:text-blue-400"
              >
                Privacy Policy
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-blue-400 transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link
                href="#"
                className="group relative transition-colors hover:text-blue-400"
              >
                Terms of Service
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-blue-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
