import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';
import { validateCreditAmount, getPriceForCredits, createCharge } from '@/lib/coinbase';

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { creditAmount } = await request.json();
    
    // Validate credit amount
    if (!validateCreditAmount(creditAmount)) {
      return NextResponse.json({ error: 'Invalid credit amount' }, { status: 400 });
    }

    const price = getPriceForCredits(creditAmount);
    
    // Create a charge
    const chargeData = {
      name: `${creditAmount} Predictly Credits`,
      description: `Purchase ${creditAmount} credits for Predictly`,
      local_price: {
        amount: price.toString(),
        currency: 'USD'
      },
      pricing_type: 'fixed_price',
      metadata: {
        user_id: session.user.id,
        credit_amount: creditAmount,
      },
      redirect_url: `${process.env.NEXTAUTH_URL}/payment-success?amount=${creditAmount}`,
      cancel_url: `${process.env.NEXTAUTH_URL}/my-credits`,
    };

    const charge = await createCharge(chargeData);

    // Save pending transaction
    await prisma.transaction.create({
      data: {
        userId: session.user.id,
        amount: parseInt(creditAmount),
        status: 'pending',
        paymentType: 'crypto',
        referenceId: charge.data.id
      }
    });

    return NextResponse.json({ 
      chargeId: charge.data.id,
      hostedUrl: charge.data.hosted_url 
    });

  } catch (error) {
    console.error('Coinbase Commerce error:', error);
    return NextResponse.json(
      { error: 'Failed to create charge' },
      { status: 500 }
    );
  }
} 