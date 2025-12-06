import ServiceCard from "./ServiceCard";
import { servicesData } from "@/lib/services-data";

export default function Services() {
  // Show only the first 2 services on the homepage
  const services = servicesData.slice(0, 2);

  return (
    <section id="services" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Our Services
          </h2>
        </div>

        {/* Service Cards Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              image={service.image}
              title={service.title}
              description={service.shortDescription}
              icon={service.icon}
              slug={service.slug}
            />
          ))}
        </div>

        {/* View All Services Link */}
        <div className="mt-12 text-center">
          <a
            href="/services"
            className="inline-flex items-center rounded-full border-2 border-blue-600 bg-white px-8 py-3 text-base font-semibold text-blue-600 transition-all hover:bg-blue-50"
          >
            View All Services
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
      </div>
    </section>
  );
}
