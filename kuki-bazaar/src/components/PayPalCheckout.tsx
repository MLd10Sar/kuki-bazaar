'use client';

import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { X } from 'lucide-react';

interface PayPalCheckoutProps {
  amount: number;
  productName: string;
  quantity: number;
  onSuccess: () => void;
  onCancel: () => void;
}

export default function PayPalCheckout({ 
  amount, 
  productName, 
  quantity, 
  onSuccess, 
  onCancel 
}: PayPalCheckoutProps) {
  const totalAmount = (amount * quantity).toFixed(2);

  const initialOptions = {
    clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || '',
    currency: 'USD',
    intent: 'capture',
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-serif font-bold text-charcoal">
            PayPal Checkout
          </h3>
          <button
            onClick={onCancel}
            className="text-charcoal/60 hover:text-charcoal transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="text-center mb-6">
          <p className="text-charcoal/70 mb-2">{productName}</p>
          <p className="text-lg font-semibold text-pomegranate">
            ${amount.toFixed(2)} × {quantity}
          </p>
          <p className="text-2xl font-bold text-charcoal">
            Total: ${totalAmount}
          </p>
        </div>

        {process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID ? (
          <PayPalScriptProvider options={initialOptions}>
            <PayPalButtons
              style={{
                layout: 'vertical',
                color: 'gold',
                shape: 'rect',
                label: 'paypal',
              }}
              createOrder={(data, actions) => {
                return actions.order.create({
                  intent: 'CAPTURE',
                  purchase_units: [
                    {
                      amount: {
                        value: totalAmount,
                        currency_code: 'USD',
                      },
                      description: `${productName} (Quantity: ${quantity})`,
                    },
                  ],
                });
              }}
              onApprove={async (data, actions) => {
                if (actions.order) {
                  try {
                    const details = await actions.order.capture();
                    console.log('Payment completed:', details);
                    onSuccess();
                  } catch (error) {
                    console.error('Payment capture error:', error);
                    alert('Payment failed. Please try again.');
                  }
                }
              }}
              onError={(error) => {
                console.error('PayPal error:', error);
                alert('PayPal error occurred. Please try again.');
              }}
              onCancel={() => {
                console.log('Payment cancelled');
                onCancel();
              }}
            />
          </PayPalScriptProvider>
        ) : (
          <div className="text-center">
            <p className="text-red-600 mb-4">
              PayPal is not configured. Please add your PayPal Client ID to the environment variables.
            </p>
            <button
              onClick={onCancel}
              className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}