"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
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
    <motion.div
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md"
      whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
      transition={{ duration: 0.3 }}
    >
      {/* Image */}
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Icon Badge */}
        <motion.div
          className="absolute right-4 top-4 rounded-full bg-blue-600 p-3 shadow-lg"
          whileHover={{ scale: 1.1, rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Icon className="h-5 w-5 text-white" aria-hidden="true" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600 line-clamp-2">
          {description}
        </p>
        <Link
          href={`/services/${slug}`}
          className="mt-4 inline-flex items-center text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
        >
          Learn More
          <motion.svg
            className="ml-2 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </motion.svg>
        </Link>
      </div>
    </motion.div>
  );
}
