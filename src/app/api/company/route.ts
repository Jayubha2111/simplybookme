import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { connectDB } from '@/lib/mongodb'
import Company from '@/models/Company'

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession()
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }

    const body = await req.json()
    const { ownerName, companyLogin, phone, category, country, state, city, zip, address } = body

    if (!ownerName || !companyLogin || !phone || !category) {
      return NextResponse.json({ error: 'All required fields must be filled' }, { status: 400 })
    }

    // Validate companyLogin — only lowercase letters, numbers, hyphens
    const slugRegex = /^[a-z0-9-]+$/
    if (!slugRegex.test(companyLogin)) {
      return NextResponse.json(
        { error: 'Company URL can only contain lowercase letters, numbers, and hyphens' },
        { status: 400 }
      )
    }

    await connectDB()

    // Check if slug already taken
    const existing = await Company.findOne({ companyLogin })
    if (existing) {
      return NextResponse.json(
        { error: 'This company URL is already taken. Please choose another.' },
        { status: 409 }
      )
    }

    const company = await Company.create({
      userId: session.user.email,
      ownerName,
      companyLogin,
      phone,
      category,
      country,
      state,
      city,
      zip,
      address,
    })

    return NextResponse.json(
      {
        message: 'Company created successfully',
        company: {
          id: company._id.toString(),
          companyLogin: company.companyLogin,
        },
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Company create error:', error)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}

// Check if company URL is available
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const slug = searchParams.get('slug')

  if (!slug) return NextResponse.json({ available: false })

  await connectDB()
  const existing = await Company.findOne({ companyLogin: slug.toLowerCase() })
  return NextResponse.json({ available: !existing })
}