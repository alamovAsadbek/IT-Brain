import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = body

    // Validate email
    if (!email) {
      return NextResponse.json({ error: "Email talab qilinadi" }, { status: 400 })
    }

    // In a real application, you would:
    // 1. Store the email in a database
    // 2. Add the email to a newsletter service like Mailchimp, ConvertKit, etc.
    // 3. Send a confirmation email

    // For now, we'll just simulate a successful subscription
    return NextResponse.json(
      {
        success: true,
        message: "Axborot byulleteniga muvaffaqiyatli obuna bo'ldingiz",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Axborot byulleteniga obunani qayta ishlashda xatolik:", error)
    return NextResponse.json({ error: "Ichki server xatosi" }, { status: 500 })
  }
}
