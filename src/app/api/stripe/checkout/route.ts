import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../../lib/auth';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
if (!stripeSecretKey) {
  throw new Error('STRIPE_SECRET_KEY is not set in environment variables');
}

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2025-05-28.basil',
});

export async function POST(req: Request) {
  try {
    // First verify the user is authenticated
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Parse and validate the request body
    const body = await req.json();
    const { credits, userId } = body;

    // Validate userId matches the authenticated user
    if (userId !== session.user.id) {
      return NextResponse.json({ error: 'Invalid user ID' }, { status: 400 });
    }

    const minCredits = 50;
    const creditsNum = Number(credits);

    // Validate credits
    if (!creditsNum || isNaN(creditsNum)) {
      return NextResponse.json({ error: 'Invalid credit amount' }, { status: 400 });
    }
    if (creditsNum < minCredits) {
      return NextResponse.json({ error: `Minimum purchase is ${minCredits} credits` }, { status: 400 });
    }

    // Calculate amount in cents
    const amount = Math.round((creditsNum / 10) * 100);
    
    // Get the base URL
    const baseUrl = process.env.NEXTAUTH_URL || process.env.NEXT_PUBLIC_BASE_URL;
    if (!baseUrl) {
      throw new Error('Base URL not configured');
    }

    // Create Stripe checkout session
    const checkoutSession = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `${creditsNum} Predictly Credits`,
              description: 'Credits for use on Predictly',
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${baseUrl}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/my-credits`,
      metadata: {
        userId: session.user.id,
        credits: creditsNum,
      },
    });

    if (!checkoutSession.url) {
      throw new Error('Failed to create checkout session URL');
    }

    return NextResponse.json({ url: checkoutSession.url });
  } catch (err) {
    console.error('Stripe checkout error:', err);
    const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
} 