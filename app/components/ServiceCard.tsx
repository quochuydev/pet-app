import Image from "next/image";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  icon: LucideIcon;
  slug: string;
}

export default function ServiceCard({
  image,
  title,
  description,
  icon: Icon,
  slug,
}: ServiceCardProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {/* Icon Badge */}
        <div className="absolute right-4 top-4 rounded-full bg-blue-600 p-3 shadow-lg">
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <p className="mt-3 flex-1 text-base leading-relaxed text-gray-600">
          {description}
        </p>
        <a
          href={`/services/${slug}`}
          className="mt-4 inline-flex items-center text-base font-semibold text-blue-600 transition-colors hover:text-blue-700"
        >
          Learn More
          <svg
            className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
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
  );
}
