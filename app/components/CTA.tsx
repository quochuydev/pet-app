import { Phone, MapPin } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Headline */}
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Ready to Give Your Pet the Best Care?
          </h2>

          {/* Subtext */}
          <p className="mt-6 text-xl text-blue-100">
            Schedule an appointment today and let our expert team take care of
            your beloved companion
          </p>

          {/* CTA Button */}
          <div className="mt-10">
            <a
              href="/booking"
              className="inline-flex items-center rounded-full bg-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:bg-orange-600 hover:shadow-xl hover:scale-105"
            >
              Book Now
              <svg
                className="ml-2 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>

          {/* Contact Information */}
          <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-12">
            {/* Phone */}
            <div className="flex items-center gap-3 text-white">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                <Phone className="h-6 w-6" />
              </div>
              <div className="text-left">
                <p className="text-sm text-blue-100">Call us</p>
                <p className="text-lg font-semibold">(555) 123-4567</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center gap-3 text-white">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                <MapPin className="h-6 w-6" />
              </div>
              <div className="text-left">
                <p className="text-sm text-blue-100">Visit us</p>
                <p className="text-lg font-semibold">123 Pet Care Lane</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
