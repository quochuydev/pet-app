import { Award, Heart, Building2, Clock } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface FeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

function Feature({ icon: Icon, title, description }: FeatureProps) {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Icon */}
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl">
        <Icon className="h-10 w-10 text-white" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <p className="mt-3 text-base leading-relaxed text-gray-600">
        {description}
      </p>
    </div>
  );
}

export default function WhyChooseUs() {
  const features = [
    {
      icon: Award,
      title: "15+ Years Experience",
      description: "Serving the community with excellence and dedication since 2009",
    },
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Treating every pet like family with love and understanding",
    },
    {
      icon: Building2,
      title: "Modern Facilities",
      description: "State-of-the-art equipment and comfortable treatment spaces",
    },
    {
      icon: Clock,
      title: "24/7 Emergency",
      description: "Always here when you need us, day or night",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Why Choose PetCare Clinic?
          </h2>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Feature
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
