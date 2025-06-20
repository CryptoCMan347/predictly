// Coinbase Commerce API configuration
const COINBASE_API_URL = 'https://api.commerce.coinbase.com';

export const CREDIT_PACKAGES = {
  '100': { price: 10 },
  '250': { price: 20 },
  '500': { price: 35 }
} as const;

export type CreditAmount = keyof typeof CREDIT_PACKAGES;

export function validateCreditAmount(amount: string): amount is CreditAmount {
  return amount in CREDIT_PACKAGES;
}

export function getPriceForCredits(credits: CreditAmount): number {
  return CREDIT_PACKAGES[credits].price;
}

export async function createCharge(data: {
  name: string;
  description: string;
  local_price: {
    amount: string;
    currency: string;
  };
  pricing_type: string;
  metadata: Record<string, string>;
  redirect_url: string;
  cancel_url: string;
}) {
  const response = await fetch(`${COINBASE_API_URL}/charges`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CC-Api-Key': process.env.COINBASE_COMMERCE_API_KEY!,
      'X-CC-Version': '2018-03-22'
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    throw new Error(`Coinbase API error: ${response.statusText}`);
  }

  return response.json();
}

export function verifyWebhookSignature(
  rawBody: string,
  signature: string,
  secret: string
): boolean {
  const crypto = require('crypto');
  const hmac = crypto.createHmac('sha256', secret);
  hmac.update(rawBody);
  const computedSignature = hmac.digest('hex');
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(computedSignature)
  );
} 