"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Shield, Lock } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [pin, setPin] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ pin }),
      });

      const result = await response.json();

      if (response.ok) {
        // Redirect to admin dashboard
        router.push("/admin/dashboard");
      } else {
        setError(result.error || "Invalid PIN");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="w-full max-w-md px-4">
        {/* Logo/Header */}
        <div className="mb-8 text-center">
          <div className="mb-4 flex justify-center">
            <div className="rounded-full bg-blue-100 p-4">
              <Shield className="h-12 w-12 text-blue-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Admin Login</h1>
          <p className="mt-2 text-gray-600">
            Enter your PIN to access the admin dashboard
          </p>
        </div>

        {/* Login Form */}
        <div className="rounded-2xl bg-white p-8 shadow-xl">
          {error && (
            <div className="mb-6 rounded-lg bg-red-50 border border-red-200 p-4 text-red-800 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="pin"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                PIN Code
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  id="pin"
                  name="pin"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  required
                  maxLength={6}
                  className="w-full rounded-lg border border-gray-300 py-3 pl-12 pr-4 text-center text-2xl font-mono tracking-widest transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="••••••"
                  autoComplete="off"
                />
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Default PIN: 123456 (Change in .env.local)
              </p>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || pin.length === 0}
              className="w-full rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-xl hover:scale-[1.02] disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? "Verifying..." : "Login"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <a
              href="/"
              className="text-sm text-blue-600 hover:text-blue-700 hover:underline"
            >
              ← Back to Home
            </a>
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-6 rounded-lg bg-yellow-50 border border-yellow-200 p-4">
          <p className="text-xs text-yellow-800">
            <strong>Security Notice:</strong> This is a demonstration admin
            login. In production, use strong authentication and HTTPS.
          </p>
        </div>
      </div>
    </div>
  );
}
