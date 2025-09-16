'use client';

import { useState } from 'react';
import { Heart, Star, ShoppingCart, Plus, Minus } from 'lucide-react';
import ProductImage from '@/components/ProductImage';
import StripeCheckout from '@/components/StripeCheckout';
import PayPalCheckout from '@/components/PayPalCheckout';

export default function Shop() {
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  const [activeCheckout, setActiveCheckout] = useState<{
    type: 'stripe' | 'paypal' | null;
    product: any;
  }>({ type: null, product: null });

  const products = [
    {
      id: 1,
      name: "Saffron Rose Delight",
      description: "Traditional Afghan cookies infused with precious saffron and delicate rose water, inspired by the royal kitchens of Kabul.",
      price: 18.99,
      image: "/cookies/saffron-rose.jpg",
      heritage: "Inspired by Kabul's royal kitchens",
      ingredients: ["Saffron", "Rose Water", "Almonds", "Flour", "Butter"],
      inStock: true
    },
    {
      id: 2,
      name: "Cardamom Pistachio Dream",
      description: "Aromatic cardamom cookies loaded with premium Afghan pistachios, a Herat family recipe passed down through generations.",
      price: 16.99,
      image: "/cookies/cardamom-pistachio.jpg",
      heritage: "A Herat family recipe",
      ingredients: ["Cardamom", "Pistachios", "Honey", "Flour", "Ghee"],
      inStock: true
    },
    {
      id: 3,
      name: "Honey Almond Treasure",
      description: "Sweet honey cookies with crushed almonds, celebrating Afghan hospitality from the bazaars of Mazar-i-Sharif.",
      price: 15.99,
      image: "/cookies/honey-almond.jpg",
      heritage: "From the bazaars of Mazar-i-Sharif",
      ingredients: ["Wild Honey", "Almonds", "Sesame", "Flour", "Butter"],
      inStock: true
    },
    {
      id: 4,
      name: "Rosewater Coconut Bliss",
      description: "Delicate rosewater cookies with tropical coconut, representing contemporary Afghan artistry and fusion flavors.",
      price: 17.99,
      image: "/cookies/rosewater-coconut.jpg",
      heritage: "Contemporary Afghan artistry",
      ingredients: ["Rose Water", "Coconut", "Pistachios", "Flour", "Butter"],
      inStock: true
    },
    {
      id: 5,
      name: "Walnut Date Symphony",
      description: "Rich cookies combining premium walnuts with sweet dates, a traditional Kandahar recipe celebrating harvest seasons.",
      price: 19.99,
      image: "/cookies/walnut-date.jpg",
      heritage: "Traditional Kandahar recipe",
      ingredients: ["Walnuts", "Dates", "Cinnamon", "Flour", "Ghee"],
      inStock: true
    },
    {
      id: 6,
      name: "Pomegranate Surprise",
      description: "Unique cookies featuring dried pomegranate seeds and a hint of mint, representing the gardens of Herat.",
      price: 20.99,
      image: "/cookies/pomegranate.jpg",
      heritage: "Gardens of Herat inspiration",
      ingredients: ["Pomegranate", "Mint", "Almonds", "Flour", "Butter"],
      inStock: false
    }
  ];

  const updateQuantity = (productId: number, change: number) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(1, (prev[productId] || 1) + change)
    }));
  };

  const getQuantity = (productId: number) => quantities[productId] || 1;

  const handleStripePayment = (product: any) => {
    setActiveCheckout({ type: 'stripe', product });
  };

  const handlePayPalPayment = (product: any) => {
    setActiveCheckout({ type: 'paypal', product });
  };

  const handlePaymentSuccess = () => {
    alert('🎉 Payment successful! Your delicious cookies will be prepared with love and delivered fresh to your door. Thank you for choosing Kuki Bazaar!');
    setActiveCheckout({ type: null, product: null });
  };

  const handlePaymentCancel = () => {
    setActiveCheckout({ type: null, product: null });
  };

  return (
    <div className="min-h-screen bg-warm-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-charcoal mb-6">
            Our <span className="text-gradient">Cookie Collection</span>
          </h1>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
            Discover authentic Afghan-inspired cookies, each one crafted with traditional recipes and premium ingredients
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden ${!product.inStock ? 'opacity-75' : ''}`}>
              <div className="relative h-64">
                <ProductImage 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Heart className="w-6 h-6 text-pomegranate/60 hover:text-pomegranate hover:fill-current transition-colors cursor-pointer" />
                </div>
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">Coming Soon</span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-saffron text-saffron" />
                  ))}
                  <span className="text-sm text-charcoal/60 ml-2">(4.9)</span>
                </div>
                
                <h3 className="text-xl font-serif font-semibold text-charcoal mb-2">
                  {product.name}
                </h3>
                
                <p className="text-charcoal/70 text-sm mb-3 leading-relaxed">
                  {product.description}
                </p>
                
                <p className="text-xs text-saffron font-medium mb-4 italic">
                  {product.heritage}
                </p>
                
                <div className="mb-4">
                  <p className="text-xs text-charcoal/60 mb-1">Ingredients:</p>
                  <div className="flex flex-wrap gap-1">
                    {product.ingredients.map((ingredient, index) => (
                      <span key={index} className="text-xs bg-saffron/10 text-saffron px-2 py-1 rounded-full">
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-pomegranate">
                    ${product.price}
                  </span>
                  
                  {product.inStock && (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(product.id, -1)}
                        className="w-8 h-8 rounded-full bg-saffron/20 text-saffron flex items-center justify-center hover:bg-saffron hover:text-white transition-colors"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="font-semibold text-charcoal min-w-[2rem] text-center">
                        {getQuantity(product.id)}
                      </span>
                      <button
                        onClick={() => updateQuantity(product.id, 1)}
                        className="w-8 h-8 rounded-full bg-saffron/20 text-saffron flex items-center justify-center hover:bg-saffron hover:text-white transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  )}
                </div>
                
                {product.inStock ? (
                  <div className="space-y-2">
                    <button
                      onClick={() => handleStripePayment(product)}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <span>💳</span>
                      Pay with Stripe - ${(product.price * getQuantity(product.id)).toFixed(2)}
                    </button>
                    <button
                      onClick={() => handlePayPalPayment(product)}
                      className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <span>🅿️</span>
                      Pay with PayPal - ${(product.price * getQuantity(product.id)).toFixed(2)}
                    </button>
                  </div>
                ) : (
                  <button className="w-full bg-gray-400 text-white py-3 rounded-lg font-semibold cursor-not-allowed">
                    Coming Soon
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Modals */}
      {activeCheckout.type === 'stripe' && activeCheckout.product && (
        <StripeCheckout
          amount={activeCheckout.product.price}
          productName={activeCheckout.product.name}
          quantity={getQuantity(activeCheckout.product.id)}
          onSuccess={handlePaymentSuccess}
          onCancel={handlePaymentCancel}
        />
      )}

      {activeCheckout.type === 'paypal' && activeCheckout.product && (
        <PayPalCheckout
          amount={activeCheckout.product.price}
          productName={activeCheckout.product.name}
          quantity={getQuantity(activeCheckout.product.id)}
          onSuccess={handlePaymentSuccess}
          onCancel={handlePaymentCancel}
        />
      )}
    </div>
  );
}