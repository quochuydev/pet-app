import { notFound } from "next/navigation";
import Image from "next/image";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { getServiceBySlug, getAllServiceSlugs } from "@/lib/services-data";
import { CheckCircle2, Clock, Calendar, DollarSign, ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const IconComponent = service.icon;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[400px] w-full">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <a
              href="/#services"
              className="mb-4 inline-flex items-center text-white/90 hover:text-white"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Services
            </a>
            <div className="flex items-center gap-4 mb-4">
              <div className="rounded-full bg-blue-600 p-4">
                <IconComponent className="h-10 w-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>
            <p className="mt-4 max-w-2xl text-xl text-white/95">
              {service.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-blue-100 p-3">
                <DollarSign className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Starting From</p>
                <p className="font-bold text-gray-900">{service.pricing.starting}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-blue-100 p-3">
                <Clock className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Duration</p>
                <p className="font-bold text-gray-900">{service.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-blue-100 p-3">
                <Calendar className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Recommended</p>
                <p className="font-bold text-gray-900">{service.frequency}</p>
              </div>
            </div>
            <div className="flex items-center sm:col-span-2 lg:col-span-1">
              <a
                href="/booking"
                className="w-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-3 text-center font-semibold text-white shadow-md transition-all hover:from-blue-600 hover:to-indigo-600 hover:shadow-lg"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Column */}
            <div className="lg:col-span-2">
              {/* Overview */}
              <div className="mb-12">
                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                  Service Overview
                </h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  {service.fullDescription}
                </p>
              </div>

              {/* Features */}
              <div className="mb-12">
                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                  What's Included
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-12">
                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                  Benefits for Your Pet
                </h2>
                <div className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 rounded-lg bg-blue-50 p-4"
                    >
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                      <span className="text-gray-800">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Pricing Card */}
              <div className="sticky top-24 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 p-8 text-white shadow-xl">
                <h3 className="mb-4 text-2xl font-bold">Ready to Book?</h3>
                <p className="mb-6 text-blue-100">
                  Schedule an appointment for your pet today and give them the care
                  they deserve.
                </p>

                <div className="mb-6 space-y-3 rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                  <div className="flex justify-between">
                    <span className="text-blue-100">Starting Price:</span>
                    <span className="text-xl font-bold">{service.pricing.starting}</span>
                  </div>
                  <div className="border-t border-white/20 pt-3">
                    <p className="text-sm text-blue-100">{service.pricing.note}</p>
                  </div>
                </div>

                <a
                  href="/booking"
                  className="block w-full rounded-full bg-white px-6 py-4 text-center font-bold text-blue-600 shadow-lg transition-all hover:bg-blue-50 hover:shadow-xl"
                >
                  Schedule Appointment
                </a>

                <div className="mt-6 border-t border-white/20 pt-6">
                  <h4 className="mb-3 font-semibold">Have Questions?</h4>
                  <p className="mb-4 text-sm text-blue-100">
                    Our team is here to help. Contact us for more information about
                    this service.
                  </p>
                  <a
                    href="tel:5551234567"
                    className="block text-center font-semibold text-white hover:text-blue-100"
                  >
                    (555) 123-4567
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Give Your Pet the Best Care
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            Our experienced veterinarians are ready to provide top-quality care for
            your beloved companion.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="/booking"
              className="rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:from-blue-600 hover:to-indigo-600 hover:shadow-xl"
            >
              Book This Service
            </a>
            <a
              href="/#services"
              className="rounded-full border-2 border-blue-600 bg-white px-8 py-4 font-semibold text-blue-600 transition-all hover:bg-blue-50"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
