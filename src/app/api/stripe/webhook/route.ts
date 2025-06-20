import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import prisma from '../../../../lib/prisma';
import { headers } from 'next/headers';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
if (!stripeSecretKey) {
  throw new Error('STRIPE_SECRET_KEY is not set in environment variables');
}
if (!webhookSecret) {
  throw new Error('STRIPE_WEBHOOK_SECRET is not set in environment variables');
}
const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2025-05-28.basil',
});

export async function POST(req: Request) {
  const body = await req.text();
  const headersList = headers();
  const sig = headersList.get('stripe-signature');

  let event: Stripe.Event;

  try {
    if (!sig) throw new Error('Missing Stripe signature');
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return NextResponse.json({ error: 'Invalid signature', details: String(err) }, { status: 400 });
  }

  try {
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session;
      
      // Extract data from session
      const userId = session.metadata?.userId;
      const credits = Number(session.metadata?.credits);
      const amount = session.amount_total ? session.amount_total / 100 : 0;
      const paymentId = session.payment_intent as string;

      console.log('Processing payment:', {
        eventType: event.type,
        userId,
        credits,
        amount,
        paymentId
      });

      if (!userId || !credits) {
        console.error('Missing required data:', { userId, credits });
        return NextResponse.json({ error: 'Missing required data' }, { status: 400 });
      }

      // Start a transaction to ensure both operations complete or neither does
      const result = await prisma.$transaction(async (tx) => {
        // Update user credits
        const updatedUser = await tx.user.update({
          where: { id: userId },
          data: { 
            credits: { increment: credits }
          },
          select: { 
            id: true,
            credits: true
          }
        });

        // Create transaction record
        const transaction = await tx.transaction.create({
          data: {
            userId,
            amount,
            credits,
            paymentType: 'stripe',
            paymentId,
            status: 'confirmed'
          }
        });

        return { updatedUser, transaction };
      });

      console.log('Payment processed successfully:', {
        userId,
        newCredits: result.updatedUser.credits,
        transactionId: result.transaction.id
      });

      return NextResponse.json({ 
        received: true,
        success: true,
        details: {
          userId,
          credits: result.updatedUser.credits,
          transactionId: result.transaction.id
        }
      });
    }

    // Handle other event types if needed
    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Error processing webhook:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed', details: String(error) },
      { status: 500 }
    );
  }
} 