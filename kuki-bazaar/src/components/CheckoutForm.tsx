'use client';

import { useState } from 'react';
import {
  useStripe,
  useElements,
  PaymentElement,
} from '@stripe/react-stripe-js';
import { Check, X } from 'lucide-react';

interface CheckoutFormProps {
  onSuccess: () => void;
  onCancel: () => void;
  productName: string;
  amount: number;
}

export default function CheckoutForm({ 
  onSuccess, 
  onCancel, 
  productName, 
  amount 
}: CheckoutFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);
    setMessage('');

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/payment-success`,
      },
      redirect: 'if_required',
    });

    if (error) {
      setMessage(error.message || 'An unexpected error occurred.');
    } else {
      setMessage('Payment successful! Thank you for your order.');
      setTimeout(() => {
        onSuccess();
      }, 2000);
    }

    setLoading(false);
  };

  return (
    <div>
      <div className="text-center mb-6">
        <h3 className="text-2xl font-serif font-bold text-charcoal mb-2">
          Secure Payment
        </h3>
        <p className="text-charcoal/70 mb-1">{productName}</p>
        <p className="text-xl font-bold text-pomegranate">
          ${amount.toFixed(2)}
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <PaymentElement />
        </div>

        {message && (
          <div className={`mb-4 p-3 rounded-lg flex items-center gap-2 ${
            message.includes('successful') 
              ? 'bg-green-100 text-green-700' 
              : 'bg-red-100 text-red-700'
          }`}>
            {message.includes('successful') ? (
              <Check size={16} />
            ) : (
              <X size={16} />
            )}
            <span className="text-sm">{message}</span>
          </div>
        )}

        <div className="flex gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 px-4 py-3 border border-saffron text-saffron rounded-lg hover:bg-saffron/10 transition-colors"
            disabled={loading}
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={!stripe || loading}
            className="flex-1 bg-gradient-to-r from-saffron to-desert-sand text-white px-4 py-3 rounded-lg hover:shadow-lg transition-all disabled:opacity-50"
          >
            {loading ? 'Processing...' : `Pay $${amount.toFixed(2)}`}
          </button>
        </div>
      </form>
    </div>
  );
}