import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../../lib/auth';
import prisma from '../../../../lib/prisma';

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    // Find the referral record for this user
    const referral = await prisma.referral.findFirst({ where: { userId: session.user.id } });
    if (!referral) {
      return NextResponse.json({ referred: [] });
    }
    // Find users who were referred by this referral
    const referredUsers = await prisma.user.findMany({
      where: { referredById: referral.id },
      select: { id: true, email: true, username: true, created_at: true },
    });
    return NextResponse.json({ referred: referredUsers });
  } catch (error) {
    console.error('Error retrieving referred users:', error);
    return NextResponse.json({ error: 'Failed to retrieve referred users' }, { status: 500 });
  }
} 