import { Stethoscope, HeartPulse } from "lucide-react";
import ServiceCard from "./ServiceCard";

export default function Services() {
  const services = [
    {
      image: "/service_general_checkup.jpg",
      title: "General Health Checkups",
      description:
        "Comprehensive wellness exams to keep your pet healthy and happy",
      icon: Stethoscope,
    },
    {
      image: "/service_inpatient.jpg",
      title: "Inpatient & Emergency Care",
      description:
        "24/7 emergency services and comfortable inpatient facilities for your pet's recovery",
      icon: HeartPulse,
    },
  ];

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
              key={service.title}
              image={service.image}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
