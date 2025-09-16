'use client';

import { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import getStripe from '@/lib/stripe';
import CheckoutForm from '@/components/CheckoutForm';

interface StripeCheckoutProps {
  amount: number;
  productName: string;
  quantity: number;
  onSuccess: () => void;
  onCancel: () => void;
}

export default function StripeCheckout({ 
  amount, 
  productName, 
  quantity, 
  onSuccess, 
  onCancel 
}: StripeCheckoutProps) {
  const [clientSecret, setClientSecret] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const createPaymentIntent = async () => {
    setLoading(true);
    setError('');
    
    try {
      const stripe = await getStripe();
      if (!stripe) {
        throw new Error('Stripe is not configured. Please add your Stripe publishable key to environment variables.');
      }
      
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
          productName,
          quantity,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create payment intent');
      }

      const data = await response.json();
      setClientSecret(data.clientSecret);
    } catch (error: any) {
      console.error('Error:', error);
      setError(error.message || 'Failed to initialize payment. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const appearance = {
    theme: 'stripe' as const,
    variables: {
      colorPrimary: '#f4a261', // Saffron color
      colorBackground: '#fefae0', // Warm white
      fontFamily: 'Inter, sans-serif',
    },
  };

  if (error) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
          <h3 className="text-2xl font-serif font-bold text-charcoal mb-4 text-center">
            Payment Setup Required
          </h3>
          <div className="text-center mb-6">
            <div className="text-6xl mb-4">⚠️</div>
            <p className="text-red-600 mb-4">{error}</p>
            <p className="text-sm text-charcoal/70">
              This is normal for development. Add your Stripe keys to enable payments.
            </p>
          </div>
          <button
            onClick={onCancel}
            className="w-full bg-gradient-to-r from-saffron to-desert-sand text-white px-4 py-3 rounded-lg hover:shadow-lg transition-all"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  if (!clientSecret) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
          <h3 className="text-2xl font-serif font-bold text-charcoal mb-4 text-center">
            Complete Your Order
          </h3>
          <div className="text-center mb-6">
            <p className="text-charcoal/70 mb-2">{productName}</p>
            <p className="text-lg font-semibold text-pomegranate">
              ${amount.toFixed(2)} × {quantity}
            </p>
            <p className="text-2xl font-bold text-charcoal">
              Total: ${(amount * quantity).toFixed(2)}
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={onCancel}
              className="flex-1 px-4 py-3 border border-saffron text-saffron rounded-lg hover:bg-saffron/10 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={createPaymentIntent}
              disabled={loading}
              className="flex-1 bg-gradient-to-r from-saffron to-desert-sand text-white px-4 py-3 rounded-lg hover:shadow-lg transition-all disabled:opacity-50"
            >
              {loading ? 'Preparing...' : 'Pay with Stripe'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
        <Elements 
          stripe={getStripe()}
          options={{ clientSecret, appearance }}
        >
          <CheckoutForm 
            onSuccess={onSuccess}
            onCancel={onCancel}
            productName={productName}
            amount={amount * quantity}
          />
        </Elements>
      </div>
    </div>
  );
}