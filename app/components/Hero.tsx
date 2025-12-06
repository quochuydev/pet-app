import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/sample_pet_dog_02.jpg"
          alt="Happy pet at our clinic"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay Gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-center sm:text-left">
          {/* Headline */}
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Compassionate Care for Your Beloved Pets
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-xl leading-relaxed text-white/95 sm:text-2xl">
            Professional veterinary services with love and expertise
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            {/* Primary Button */}
            <a
              href="/booking"
              className="rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
            >
              Schedule Appointment
            </a>

            {/* Secondary Button */}
            <a
              href="#services"
              className="rounded-full border-2 border-white bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
