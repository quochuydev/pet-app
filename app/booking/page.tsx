"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Calendar, User, Mail, Phone, Stethoscope } from "lucide-react";

export default function BookingPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      petName: formData.get("petName"),
      petType: formData.get("petType"),
      petAge: formData.get("petAge"),
      preferredDate: formData.get("date"),
      preferredTime: formData.get("time"),
      serviceType: formData.get("service"),
      notes: formData.get("notes"),
    };

    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        // Redirect to success page with appointment details
        const params = new URLSearchParams({
          id: result.appointment.id.toString(),
          fullName: data.fullName as string,
          email: data.email as string,
          phone: data.phone as string,
          petName: data.petName as string,
          petType: data.petType as string,
          preferredDate: data.preferredDate as string,
          preferredTime: data.preferredTime as string,
          serviceType: data.serviceType as string,
        });
        router.push(`/booking/success?${params.toString()}`);
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Failed to book appointment. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Booking Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Book an Appointment
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Schedule a visit for your beloved pet. We&apos;ll get back to you
              within 24 hours to confirm your appointment.
            </p>
          </div>

          {/* Status Message */}
          {submitStatus.type && (
            <div
              className={`mb-6 rounded-lg p-4 ${
                submitStatus.type === "success"
                  ? "bg-green-50 text-green-800 border border-green-200"
                  : "bg-red-50 text-red-800 border border-red-200"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          {/* Booking Form */}
          <div className="rounded-2xl bg-white p-8 shadow-xl">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Pet Owner Information */}
              <div>
                <h2 className="mb-6 flex items-center text-2xl font-bold text-gray-900">
                  <User className="mr-3 h-6 w-6 text-blue-600" />
                  Your Information
                </h2>

                <div className="grid gap-6 md:grid-cols-2">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  {/* Pet Name */}
                  <div>
                    <label
                      htmlFor="petName"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      Pet&apos;s Name *
                    </label>
                    <input
                      type="text"
                      id="petName"
                      name="petName"
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                      placeholder="Buddy"
                    />
                  </div>
                </div>
              </div>

              {/* Pet Information */}
              <div className="border-t border-gray-200 pt-6">
                <h2 className="mb-6 flex items-center text-2xl font-bold text-gray-900">
                  <Stethoscope className="mr-3 h-6 w-6 text-blue-600" />
                  Pet Details
                </h2>

                <div className="grid gap-6 md:grid-cols-2">
                  {/* Pet Type */}
                  <div>
                    <label
                      htmlFor="petType"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      Pet Type *
                    </label>
                    <select
                      id="petType"
                      name="petType"
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    >
                      <option value="">Select pet type</option>
                      <option value="dog">Dog</option>
                      <option value="cat">Cat</option>
                      <option value="bird">Bird</option>
                      <option value="rabbit">Rabbit</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Pet Age */}
                  <div>
                    <label
                      htmlFor="petAge"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      Pet Age
                    </label>
                    <input
                      type="text"
                      id="petAge"
                      name="petAge"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                      placeholder="e.g., 2 years"
                    />
                  </div>
                </div>
              </div>

              {/* Appointment Details */}
              <div className="border-t border-gray-200 pt-6">
                <h2 className="mb-6 flex items-center text-2xl font-bold text-gray-900">
                  <Calendar className="mr-3 h-6 w-6 text-blue-600" />
                  Appointment Details
                </h2>

                <div className="grid gap-6 md:grid-cols-2">
                  {/* Preferred Date */}
                  <div>
                    <label
                      htmlFor="date"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    />
                  </div>

                  {/* Preferred Time */}
                  <div>
                    <label
                      htmlFor="time"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      Preferred Time *
                    </label>
                    <select
                      id="time"
                      name="time"
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    >
                      <option value="">Select time</option>
                      <option value="09:00">9:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                      <option value="17:00">5:00 PM</option>
                    </select>
                  </div>

                  {/* Service Type */}
                  <div className="md:col-span-2">
                    <label
                      htmlFor="service"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      Service Type *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    >
                      <option value="">Select service</option>
                      <option value="checkup">General Health Checkup</option>
                      <option value="emergency">Emergency Care</option>
                      <option value="surgery">Surgery</option>
                      <option value="dental">Dental Care</option>
                      <option value="vaccination">Vaccination</option>
                      <option value="grooming">Grooming</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional Notes */}
              <div className="border-t border-gray-200 pt-6">
                <label
                  htmlFor="notes"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Additional Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="Tell us about your pet's condition or any specific concerns..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:from-blue-600 hover:to-indigo-600 hover:shadow-xl hover:scale-[1.02] disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? "Scheduling..." : "Schedule Appointment"}
                </button>
                <p className="mt-4 text-center text-sm text-gray-600">
                  We&apos;ll contact you within 24 hours to confirm your
                  appointment
                </p>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="mt-12 rounded-xl bg-blue-50 p-6 text-center">
            <h3 className="mb-4 text-xl font-bold text-gray-900">
              Need Immediate Assistance?
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
