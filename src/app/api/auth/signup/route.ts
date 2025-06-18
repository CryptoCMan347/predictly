import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import { hash } from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { email, username, password, referralCode } = await req.json();
    if (!email || !username || !password) {
      return NextResponse.json({ error: "Missing fields." }, { status: 400 });
    }
    // Check if user/email/username already exists
    const existing = await prisma.user.findFirst({
      where: {
        OR: [
          { email },
          { username },
        ],
      },
    });
    if (existing) {
      return NextResponse.json({ error: "Email or username already in use." }, { status: 400 });
    }
    // Hash password
    const hashedPassword = await hash(password, 10);

    // Handle referral code logic
    let referredById = undefined;
    if (referralCode) {
      const ref = await prisma.referral.findUnique({ where: { code: referralCode } });
      if (!ref) {
        return NextResponse.json({ error: "Invalid referral code." }, { status: 400 });
      }
      referredById = ref.id;
      // Award bonus credits to referrer
      await prisma.user.update({
        where: { id: ref.userId },
        data: { credits: { increment: 100 } }, // Example: 100 credits for referrer
      });
    }
    // Create user (and link to referrer if applicable)
    await prisma.user.create({
      data: {
        email,
        username,
        hashedPassword,
        referredById,
        credits: referralCode ? 100 : 0, // Example: 100 credits for new user if referred
      },
    });
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
} 