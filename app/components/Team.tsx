import VetCard from "./VetCard";

export default function Team() {
  const veterinarians = [
    {
      image: "/vet_01.jpg",
      name: "Dr. Sarah Mitchell",
      specialization: "Senior Veterinarian",
      bio: "With over 15 years of experience, Dr. Mitchell leads our team with expertise in comprehensive pet care and diagnostics.",
    },
    {
      image: "/vet_02.jpg",
      name: "Dr. James Chen",
      specialization: "Emergency Care Specialist",
      bio: "Dr. Chen specializes in critical care and emergency medicine, ensuring your pet receives immediate expert attention when needed.",
    },
    {
      image: "/vet_03.jpg",
      name: "Dr. Emily Rodriguez",
      specialization: "Surgery & Dentistry",
      bio: "Board-certified in veterinary surgery and dentistry, Dr. Rodriguez provides advanced surgical care with precision and compassion.",
    },
    {
      image: "/vet_04.jpg",
      name: "Dr. Michael Thompson",
      specialization: "Preventive Care",
      bio: "Dr. Thompson focuses on preventive medicine and wellness programs to keep your pets healthy throughout their lives.",
    },
  ];

  return (
    <section id="our-vets" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Meet Our Expert Team
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Experienced veterinarians dedicated to your pet&apos;s wellbeing
          </p>
        </div>

        {/* Vet Cards Grid */}
        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {veterinarians.map((vet) => (
            <VetCard
              key={vet.name}
              image={vet.image}
              name={vet.name}
              specialization={vet.specialization}
              bio={vet.bio}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
