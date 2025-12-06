"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { CheckCircle2, Calendar, Clock, User, Mail, Phone, Stethoscope, PawPrint } from "lucide-react";

function SuccessContent() {
  const searchParams = useSearchParams();

  // Get appointment details from URL params
  const appointmentId = searchParams.get("id");
  const fullName = searchParams.get("fullName");
  const email = searchParams.get("email");
  const phone = searchParams.get("phone");
  const petName = searchParams.get("petName");
  const petType = searchParams.get("petType");
  const preferredDate = searchParams.get("preferredDate");
  const preferredTime = searchParams.get("preferredTime");
  const serviceType = searchParams.get("serviceType");

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Success Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Success Icon and Message */}
          <div className="mb-12 text-center">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-green-100 p-6">
                <CheckCircle2 className="h-20 w-20 text-green-600" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Appointment Booked Successfully!
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Thank you for choosing PetCare Clinic. We&apos;ve received your
              appointment request.
            </p>
          </div>

          {/* Appointment Details Card */}
          <div className="rounded-2xl bg-white p-8 shadow-xl">
            <div className="mb-6 border-b border-gray-200 pb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Appointment Details
              </h2>
              {appointmentId && (
                <p className="mt-2 text-sm text-gray-600">
                  Booking ID: <span className="font-mono font-semibold">#{appointmentId}</span>
                </p>
              )}
            </div>

            <div className="space-y-6">
              {/* Pet Owner Information */}
              <div>
                <h3 className="mb-4 flex items-center text-lg font-bold text-gray-900">
                  <User className="mr-3 h-5 w-5 text-blue-600" />
                  Your Information
                </h3>
                <div className="ml-8 space-y-3">
                  <div className="flex items-start">
                    <span className="w-32 text-sm font-semibold text-gray-700">
                      Name:
                    </span>
                    <span className="text-sm text-gray-900">{fullName || "N/A"}</span>
                  </div>
                  <div className="flex items-start">
                    <Mail className="mr-2 mt-0.5 h-4 w-4 text-gray-400" />
                    <span className="w-28 text-sm font-semibold text-gray-700">
                      Email:
                    </span>
                    <span className="text-sm text-gray-900">{email || "N/A"}</span>
                  </div>
                  <div className="flex items-start">
                    <Phone className="mr-2 mt-0.5 h-4 w-4 text-gray-400" />
                    <span className="w-28 text-sm font-semibold text-gray-700">
                      Phone:
                    </span>
                    <span className="text-sm text-gray-900">{phone || "N/A"}</span>
                  </div>
                </div>
              </div>

              {/* Pet Information */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="mb-4 flex items-center text-lg font-bold text-gray-900">
                  <PawPrint className="mr-3 h-5 w-5 text-blue-600" />
                  Pet Details
                </h3>
                <div className="ml-8 space-y-3">
                  <div className="flex items-start">
                    <span className="w-32 text-sm font-semibold text-gray-700">
                      Pet Name:
                    </span>
                    <span className="text-sm text-gray-900">{petName || "N/A"}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-32 text-sm font-semibold text-gray-700">
                      Pet Type:
                    </span>
                    <span className="text-sm capitalize text-gray-900">
                      {petType || "N/A"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Appointment Information */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="mb-4 flex items-center text-lg font-bold text-gray-900">
                  <Stethoscope className="mr-3 h-5 w-5 text-blue-600" />
                  Appointment Information
                </h3>
                <div className="ml-8 space-y-3">
                  <div className="flex items-start">
                    <Calendar className="mr-2 mt-0.5 h-4 w-4 text-gray-400" />
                    <span className="w-28 text-sm font-semibold text-gray-700">
                      Date:
                    </span>
                    <span className="text-sm text-gray-900">
                      {preferredDate
                        ? new Date(preferredDate).toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })
                        : "N/A"}
                    </span>
                  </div>
                  <div className="flex items-start">
                    <Clock className="mr-2 mt-0.5 h-4 w-4 text-gray-400" />
                    <span className="w-28 text-sm font-semibold text-gray-700">
                      Time:
                    </span>
                    <span className="text-sm text-gray-900">
                      {preferredTime || "N/A"}
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-32 text-sm font-semibold text-gray-700">
                      Service:
                    </span>
                    <span className="text-sm capitalize text-gray-900">
                      {serviceType?.replace("-", " ") || "N/A"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Notice */}
            <div className="mt-8 rounded-lg bg-blue-50 p-6">
              <h4 className="mb-3 font-bold text-blue-900">
                What Happens Next?
              </h4>
              <ul className="space-y-2 text-sm text-blue-800">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Our team will review your appointment request within 24 hours
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    You will receive a confirmation email at {email || "your email"}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    We may call you at {phone || "your phone number"} to confirm details
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Please arrive 10 minutes early for your appointment
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="/"
              className="rounded-full bg-blue-600 px-8 py-4 text-center text-lg font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
            >
              Back to Home
            </a>
            <a
              href="/booking"
              className="rounded-full border-2 border-blue-600 bg-white px-8 py-4 text-center text-lg font-semibold text-blue-600 transition-all hover:bg-blue-50"
            >
              Book Another Appointment
            </a>
          </div>

          {/* Contact Information */}
          <div className="mt-12 rounded-xl bg-gray-50 p-6 text-center">
            <h3 className="mb-4 text-xl font-bold text-gray-900">
              Questions or Need to Reschedule?
            </h3>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-blue-600" />
                <span className="font-semibold text-gray-900">
                  (555) 123-4567
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-600" />
                <span className="font-semibold text-gray-900">
                  info@petcareclinic.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
            <p className="text-gray-600">Loading...</p>
          </div>
        </div>
        <Footer />
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}
