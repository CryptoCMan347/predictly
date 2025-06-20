import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { verifyWebhookSignature } from '@/lib/coinbase';

export async function POST(request: Request) {
  try {
    const rawBody = await request.text();
    const signature = request.headers.get('x-cc-webhook-signature');

    if (!signature) {
      return NextResponse.json({ error: 'No signature' }, { status: 401 });
    }

    // Verify webhook signature
    if (!process.env.COINBASE_COMMERCE_WEBHOOK_SECRET) {
      throw new Error('COINBASE_COMMERCE_WEBHOOK_SECRET is not set');
    }

    const isValid = verifyWebhookSignature(
      rawBody,
      signature,
      process.env.COINBASE_COMMERCE_WEBHOOK_SECRET
    );

    if (!isValid) {
      console.error('Webhook signature verification failed');
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
    }

    const event = JSON.parse(rawBody);
    const { type, data } = event;

    // Handle charge:confirmed event
    if (type === 'charge:confirmed') {
      const { metadata } = data;
      const userId = metadata.user_id;
      const creditAmount = parseInt(metadata.credit_amount);

      // Update transaction status
      await prisma.transaction.update({
        where: {
          referenceId: data.id
        },
        data: {
          status: 'completed'
        }
      });

      // Update user's credit balance
      await prisma.user.update({
        where: { id: userId },
        data: {
          credits: {
            increment: creditAmount
          }
        }
      });
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Webhook processing error:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
} 