"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Calendar } from "lucide-react";

interface VetCardProps {
  image: string;
  name: string;
  specialization: string;
  bio: string;
  fullBio?: string;
  email?: string;
}

export default function VetCard({
  image,
  name,
  specialization,
  bio,
  fullBio,
  email,
}: VetCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="group h-[400px] cursor-pointer"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Front of card */}
        <div
          className="absolute inset-0 flex flex-col items-center text-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Profile Image */}
          <div className="relative mb-4 h-40 w-40 overflow-hidden rounded-full border-4 border-blue-100 shadow-lg">
            <Image
              src={image}
              alt={name}
              fill
              sizes="160px"
              className="object-cover"
            />
          </div>

          {/* Info */}
          <h3 className="text-xl font-bold text-gray-900">{name}</h3>
          <p className="mt-1 text-sm font-medium text-blue-600">
            {specialization}
          </p>
          <p className="mt-3 px-2 text-sm leading-relaxed text-gray-600 line-clamp-3">
            {bio}
          </p>

          {/* Hover hint */}
          <p className="mt-4 text-xs text-gray-400">Hover for more info</p>
        </div>

        {/* Back of card */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 p-6 text-center text-white"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="mt-1 text-sm text-blue-200">{specialization}</p>

          <p className="mt-4 text-sm leading-relaxed text-blue-100">
            {fullBio || bio}
          </p>

          {/* Action Buttons */}
          <div className="mt-6 flex gap-3">
            {email && (
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium transition-colors hover:bg-white/30"
                onClick={(e) => e.stopPropagation()}
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
            )}
            <Link
              href="/booking"
              className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-50"
              onClick={(e) => e.stopPropagation()}
            >
              <Calendar className="h-4 w-4" />
              Book
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
