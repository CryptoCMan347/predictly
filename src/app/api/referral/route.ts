import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../lib/auth';
import prisma from '../../../lib/prisma';

// POST /api/referral
// Creates a new referral code for the authenticated user
export async function POST() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // Check if referral code already exists for this user
    const existing = await prisma.referral.findFirst({
      where: { userId: session.user.id },
    });
    if (existing) {
      return NextResponse.json(existing);
    }
    // Generate a random referral code (e.g., 8 characters)
    const referralCode = Math.random().toString(36).substring(2, 10).toUpperCase();
    const referral = await prisma.referral.create({
      data: {
        code: referralCode,
        userId: session.user.id,
      },
    });
    return NextResponse.json(referral);
  } catch (error) {
    console.error('Error creating referral code:', error);
    return NextResponse.json({ error: 'Failed to create referral code' }, { status: 500 });
  }
}

// GET /api/referral
// Retrieves the referral code for the authenticated user
export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const referral = await prisma.referral.findFirst({
      where: { userId: session.user.id },
    });
    if (!referral) {
      return NextResponse.json({ error: 'Referral code not found' }, { status: 404 });
    }
    return NextResponse.json(referral);
  } catch (error) {
    console.error('Error retrieving referral code:', error);
    return NextResponse.json({ error: 'Failed to retrieve referral code' }, { status: 500 });
  }
}

// GET /api/referral/referred
// Returns a list of users referred by the authenticated user
export async function GET_referred(req) {
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