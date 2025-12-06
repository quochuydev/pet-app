import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { appointments } from "@/db/schema";
import { verifyAuth } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const requiredFields = [
      "fullName",
      "email",
      "phone",
      "petName",
      "petType",
      "preferredDate",
      "preferredTime",
      "serviceType",
    ];

    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Insert appointment into database
    const [newAppointment] = await db
      .insert(appointments)
      .values({
        fullName: body.fullName,
        email: body.email,
        phone: body.phone,
        petName: body.petName,
        petType: body.petType,
        petAge: body.petAge || null,
        preferredDate: body.preferredDate,
        preferredTime: body.preferredTime,
        serviceType: body.serviceType,
        notes: body.notes || null,
      })
      .returning();

    return NextResponse.json(
      {
        success: true,
        message: "Appointment booked successfully!",
        appointment: newAppointment,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create appointment. Please try again." },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve all appointments (for admin purposes - requires authentication)
export async function GET(request: NextRequest) {
  try {
    // Verify authentication
    const isAuthenticated = await verifyAuth(request);

    if (!isAuthenticated) {
      return NextResponse.json(
        { error: "Unauthorized. Please login first." },
        { status: 401 }
      );
    }

    const allAppointments = await db.select().from(appointments);

    return NextResponse.json({
      success: true,
      appointments: allAppointments,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch appointments." },
      { status: 500 }
    );
  }
}
