import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Inquiry from "@/models/Inquiry";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, place, interest, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and Email are required fields." },
        { status: 400 }
      );
    }

    await connectDB();

    const newInquiry = await Inquiry.create({
      name,
      email,
      phone: phone || "",
      place: place || "Madhya Pradesh",
      interest: interest || "Take services/ build website",
      message: message || "",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry saved successfully!",
        data: { id: newInquiry._id },
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("Database submission error:", error);
    const errMessage = error instanceof Error ? error.message : "Failed to submit inquiry";
    return NextResponse.json(
      { error: errMessage },
      { status: 500 }
    );
  }
}
