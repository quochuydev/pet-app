import Image from "next/image";

interface VetCardProps {
  image: string;
  name: string;
  specialization: string;
  bio: string;
}

export default function VetCard({
  image,
  name,
  specialization,
  bio,
}: VetCardProps) {
  return (
    <div className="group flex flex-col items-center text-center">
      {/* Circular Profile Image */}
      <div className="relative mb-6 h-48 w-48 overflow-hidden rounded-full shadow-lg transition-all duration-300 group-hover:shadow-2xl">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Vet Info */}
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
        <p className="text-base font-semibold text-blue-600">
          {specialization}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-gray-600">{bio}</p>
      </div>
    </div>
  );
}
