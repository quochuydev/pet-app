"use client";

import { motion } from "framer-motion";
import VetCard from "./VetCard";

const veterinarians = [
  {
    id: "vet-1",
    image: "/vet_01.jpg",
    name: "Dr. Sarah Mitchell",
    specialization: "Senior Veterinarian",
    bio: "With over 15 years of experience, Dr. Mitchell leads our team with expertise in comprehensive pet care and diagnostics.",
    fullBio:
      "Dr. Mitchell graduated from Cornell University College of Veterinary Medicine. She specializes in internal medicine and has a passion for preventive care.",
    email: "sarah.mitchell@petcare.com",
  },
  {
    id: "vet-2",
    image: "/vet_02.jpg",
    name: "Dr. James Chen",
    specialization: "Emergency Care Specialist",
    bio: "Dr. Chen specializes in critical care and emergency medicine, ensuring your pet receives immediate expert attention when needed.",
    fullBio:
      "Board-certified in emergency and critical care, Dr. Chen has saved countless pets in emergency situations over his 10-year career.",
    email: "james.chen@petcare.com",
  },
  {
    id: "vet-3",
    image: "/vet_03.jpg",
    name: "Dr. Emily Rodriguez",
    specialization: "Surgery & Dentistry",
    bio: "Board-certified in veterinary surgery and dentistry, Dr. Rodriguez provides advanced surgical care with precision and compassion.",
    fullBio:
      "Dr. Rodriguez completed her surgical residency at UC Davis and is known for her gentle approach to even the most complex procedures.",
    email: "emily.rodriguez@petcare.com",
  },
  {
    id: "vet-4",
    image: "/vet_04.jpg",
    name: "Dr. Michael Thompson",
    specialization: "Preventive Care",
    bio: "Dr. Thompson focuses on preventive medicine and wellness programs to keep your pets healthy throughout their lives.",
    fullBio:
      "With a focus on nutrition and preventive health, Dr. Thompson helps pet parents create long-term wellness plans for their furry family members.",
    email: "michael.thompson@petcare.com",
  },
];

export default function Team() {
  return (
    <section id="our-vets" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Meet Our Expert Team
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Experienced veterinarians dedicated to your pet&apos;s wellbeing
          </p>
        </motion.div>

        {/* Vet Cards Grid */}
        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {veterinarians.map((vet, index) => (
            <motion.div
              key={vet.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <VetCard
                image={vet.image}
                name={vet.name}
                specialization={vet.specialization}
                bio={vet.bio}
                fullBio={vet.fullBio}
                email={vet.email}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
