import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-05-28.basil',
});

export async function POST(req: Request) {
  try {
    const { credits, userId } = await req.json();
    const minCredits = 50;
    const creditsNum = Number(credits);
    console.log({ credits, creditsNum, userId }); // Debug log
    if (!creditsNum || isNaN(creditsNum) || creditsNum < minCredits || !userId) {
      return NextResponse.json({ error: `Minimum purchase is ${minCredits} credits.` }, { status: 400 });
    }
    // $1 per 10 credits
    const amount = (creditsNum / 10) * 100; // Stripe expects cents
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `${creditsNum} Predictly Credits`,
              description: 'Credits for use on Predictly',
            },
            unit_amount: Math.round(amount),
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/account`,
      metadata: {
        userId,
        credits: creditsNum,
      },
    });
    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error('Stripe checkout error:', err);
    return NextResponse.json({ error: 'Stripe checkout failed.' }, { status: 500 });
  }
} 