import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Validate the required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Zarur maydonlar to'ldirilmagan" }, { status: 400 })
    }

    // In a real application, you would:
    // 1. Store the contact form submission in a database
    // 2. Send an email notification
    // 3. Possibly integrate with a CRM

    // For now, we'll just simulate a successful submission
    return NextResponse.json(
      {
        success: true,
        message: "Aloqa formasi muvaffaqiyatli yuborildi",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Aloqa formasini qayta ishlashda xatolik:", error)
    return NextResponse.json({ error: "Ichki server xatosi" }, { status: 500 })
  }
}
