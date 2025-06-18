import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import { hash, compare } from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { username, email, currentPassword, newPassword } = await req.json();
    // TODO: Get user ID from session (for now, use email as identifier)
    if (!email) return NextResponse.json({ error: "Missing email." }, { status: 400 });
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return NextResponse.json({ error: "User not found." }, { status: 404 });
    // If changing email or password, require current password
    if ((email !== user.email || newPassword) && !currentPassword) {
      return NextResponse.json({ error: "Current password required." }, { status: 400 });
    }
    if (currentPassword && user.hashedPassword) {
      const valid = await compare(currentPassword, user.hashedPassword);
      if (!valid) return NextResponse.json({ error: "Current password is incorrect." }, { status: 400 });
    }
    // Prepare update data
    const updateData: any = { username };
    if (email !== user.email) updateData.email = email;
    if (newPassword) updateData.hashedPassword = await hash(newPassword, 10);
    await prisma.user.update({ where: { id: user.id }, data: updateData });
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
} 