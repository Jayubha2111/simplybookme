import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth"; // <-- apne authOptions ka path
import { connectDB } from "@/lib/mongodb";
import Company from "@/models/Company";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Not authenticated" },
        { status: 401 }
      );
    }

    const body = await req.json();

    const {
      ownerName,
      companyLogin,
      phone,
      category,
      country,
      state,
      city,
      zip,
      address,
    } = body;

    if (!ownerName || !companyLogin || !phone || !category) {
      return NextResponse.json(
        { error: "All required fields must be filled" },
        { status: 400 }
      );
    }

    const slug = companyLogin.trim().toLowerCase();

    if (!/^[a-z0-9-]+$/.test(slug)) {
      return NextResponse.json(
        {
          error:
            "Company URL can only contain lowercase letters, numbers and hyphens.",
        },
        { status: 400 }
      );
    }

    const existing = await Company.findOne({
      companyLogin: slug,
    }).lean();

    if (existing) {
      return NextResponse.json(
        {
          error: "This company URL is already taken.",
        },
        { status: 409 }
      );
    }

    const company = await Company.create({
      userId: session.user.email,
      ownerName,
      companyLogin: slug,
      phone,
      category,
      country,
      state,
      city,
      zip,
      address,
    });

    return NextResponse.json(
      {
        success: true,
        company: {
          id: company._id,
          companyLogin: company.companyLogin,
        },
      },
      { status: 201 }
    );
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        error: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);

    const slug = searchParams.get("slug");

    if (!slug) {
      return NextResponse.json({
        available: false,
      });
    }

    const existing = await Company.findOne({
      companyLogin: slug.toLowerCase(),
    }).lean();

    return NextResponse.json({
      available: !existing,
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        error: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}