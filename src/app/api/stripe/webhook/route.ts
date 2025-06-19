import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import prisma from '../../../../lib/prisma';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-05-28.basil',
});

export async function POST(req: Request) {
  const sig = req.headers.get('stripe-signature');
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  let event;
  const body = await req.text();

  try {
    if (!sig || !webhookSecret) throw new Error('Missing Stripe signature or webhook secret');
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const userId = session.metadata?.userId;
    const credits = Number(session.metadata?.credits);
    const amount = session.amount_total ? session.amount_total / 100 : 0;
    const paymentId = session.id;
    if (!userId || !credits || !paymentId) {
      console.error('Missing userId, credits, or paymentId in session metadata');
      return NextResponse.json({ error: 'Missing data' }, { status: 400 });
    }
    try {
      // Credit the user
      await prisma.user.update({
        where: { id: userId },
        data: { credits: { increment: credits } },
      });
      // Log the transaction
      await prisma.transaction.create({
        data: {
          userId,
          amount,
          credits,
          paymentType: 'stripe',
          paymentId,
          status: 'confirmed',
        },
      });
      return NextResponse.json({ received: true });
    } catch (err) {
      console.error('Error crediting user or logging transaction:', err);
      return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }
  }

  return NextResponse.json({ received: true });
} 