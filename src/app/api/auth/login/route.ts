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

    const email = body.email?.toLowerCase().trim();
    const password = body.password;

    if (!email || !password) {
      return NextResponse.json(
        {
          error: "Email and password are required",
        },
        {
          status: 400,
        }
      );
    }

    const user = await User.findOne({
      email,
    });

    if (!user) {
      return NextResponse.json(
        {
          error: "No account found with this email",
        },
        {
          status: 404,
        }
      );
    }

    if (!user.password) {
      return NextResponse.json(
        {
          error: "Please login with Google",
        },
        {
          status: 400,
        }
      );
    }

    const valid = await bcrypt.compare(
      password,
      user.password
    );

    if (!valid) {
      return NextResponse.json(
        {
          error: "Incorrect password",
        },
        {
          status: 401,
        }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Login successful",
      user: {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
        image: user.image,
      },
    });
  } catch (err) {
    console.error("Login Error:", err);

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