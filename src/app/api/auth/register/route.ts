import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();

    const name = body.name?.trim();
    const email = body.email?.toLowerCase().trim();
    const password = body.password;

    if (!name || !email || !password) {
      return NextResponse.json(
        {
          error: "Name, email and password are required",
        },
        {
          status: 400,
        }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        {
          error: "Password must be at least 6 characters",
        },
        {
          status: 400,
        }
      );
    }

    const existing = await User.findOne({
      email,
    });

    if (existing) {
      return NextResponse.json(
        {
          error: "Email already exists",
        },
        {
          status: 409,
        }
      );
    }

    const hashedPassword = await bcrypt.hash(
      password,
      12
    );

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      provider: "credentials",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Registration successful",
        user: {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
        },
      },
      {
        status: 201,
      }
    );
  } catch (err) {
    console.error("Register Error:", err);

    return NextResponse.json(
      {
        error: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}