import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: About */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">
              PetCare Clinic
            </h3>
            <p className="mb-6 text-sm leading-relaxed">
              Providing compassionate and professional veterinary care for your
              beloved pets since 2009. Your pet&apos;s health is our priority.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-colors hover:bg-blue-600"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-colors hover:bg-blue-400"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-colors hover:bg-pink-600"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-blue-400"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="transition-colors hover:text-blue-400"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#our-vets"
                  className="transition-colors hover:text-blue-400"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="transition-colors hover:text-blue-400"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#services"
                  className="transition-colors hover:text-blue-400"
                >
                  General Checkup
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="transition-colors hover:text-blue-400"
                >
                  Emergency Care
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="transition-colors hover:text-blue-400"
                >
                  Surgery
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="transition-colors hover:text-blue-400"
                >
                  Preventive Care
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
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
                  <p>(555) 123-4567</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-400" />
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p>info@petcareclinic.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 h-5 w-5 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-white">Business Hours</p>
                  <p>Mon-Fri: 8:00 AM - 8:00 PM</p>
                  <p>Sat-Sun: 9:00 AM - 6:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
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
              <a
                href="#"
                className="transition-colors hover:text-blue-400"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="transition-colors hover:text-blue-400"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
