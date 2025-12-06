"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Calendar, Clock, User, Mail, Phone, PawPrint, LogOut, RefreshCw } from "lucide-react";

interface Appointment {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  petName: string;
  petType: string;
  petAge: string | null;
  preferredDate: string;
  preferredTime: string;
  serviceType: string;
  notes: string | null;
  createdAt: Date;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchAppointments = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/appointments");

      if (response.status === 401) {
        // Unauthorized - redirect to login
        router.push("/admin/login");
        return;
      }

      const result = await response.json();

      if (response.ok) {
        setAppointments(result.appointments);
      } else {
        setError(result.error || "Failed to fetch appointments");
      }
    } catch (error) {
      setError("An error occurred while fetching appointments");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      router.push("/admin/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Admin Dashboard
              </h1>
              <p className="mt-1 text-sm text-gray-600">
                Manage appointment bookings
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={fetchAppointments}
                className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
              >
                <RefreshCw className="h-4 w-4" />
                Refresh
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-white p-6 shadow">
            <div className="text-sm font-semibold text-gray-600">
              Total Appointments
            </div>
            <div className="mt-2 text-3xl font-bold text-gray-900">
              {appointments.length}
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 rounded-lg bg-red-50 border border-red-200 p-4 text-red-800">
            {error}
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
              <p className="text-gray-600">Loading appointments...</p>
            </div>
          </div>
        )}

        {/* Appointments List */}
        {!loading && appointments.length === 0 && (
          <div className="rounded-lg bg-white p-12 text-center shadow">
            <p className="text-gray-600">No appointments yet</p>
          </div>
        )}

        {!loading && appointments.length > 0 && (
          <div className="space-y-4">
            {appointments.map((appointment) => (
              <div
                key={appointment.id}
                className="rounded-lg bg-white p-6 shadow hover:shadow-md transition-shadow"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1 space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">
                          {appointment.fullName}
                        </h3>
                        <p className="text-sm text-gray-600">
                          Booking ID: #{appointment.id}
                        </p>
                      </div>
                      <div className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800">
                        {appointment.serviceType}
                      </div>
                    </div>

                    {/* Details Grid */}
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {/* Contact Info */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Mail className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-900">{appointment.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Phone className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-900">{appointment.phone}</span>
                        </div>
                      </div>

                      {/* Pet Info */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <PawPrint className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-900">
                            {appointment.petName} ({appointment.petType})
                          </span>
                        </div>
                        {appointment.petAge && (
                          <div className="ml-6 text-sm text-gray-600">
                            Age: {appointment.petAge}
                          </div>
                        )}
                      </div>

                      {/* Appointment Date/Time */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-900">
                            {new Date(appointment.preferredDate).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-900">
                            {appointment.preferredTime}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Notes */}
                    {appointment.notes && (
                      <div className="border-t border-gray-200 pt-3">
                        <p className="text-sm font-semibold text-gray-700">Notes:</p>
                        <p className="mt-1 text-sm text-gray-600">{appointment.notes}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
