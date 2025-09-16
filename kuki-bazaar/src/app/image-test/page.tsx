'use client';

import ProductImage from '@/components/ProductImage';

export default function ImageTest() {
  const testImages = [
    { name: 'saffron-rose.jpg', title: 'Saffron Rose Delight', emoji: '🌹' },
    { name: 'cardamom-pistachio.jpg', title: 'Cardamom Pistachio Dream', emoji: '🥜' },
    { name: 'honey-almond.jpg', title: 'Honey Almond Treasure', emoji: '🍯' },
    { name: 'rosewater-coconut.jpg', title: 'Rosewater Coconut Bliss', emoji: '🥥' },
    { name: 'walnut-date.jpg', title: 'Walnut Date Symphony', emoji: '🌰' },
    { name: 'pomegranate.jpg', title: 'Pomegranate Surprise', emoji: '🟥' },
  ];

  return (
    <div className="min-h-screen bg-warm-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-charcoal mb-4">
            📸 Image Test Page
          </h1>
          <p className="text-lg text-charcoal/70 mb-6">
            This page shows how your product images will look. Add photos to public/cookies/ to see them appear!
          </p>
          <div className="bg-saffron/10 border border-saffron/30 rounded-lg p-4 text-left max-w-2xl mx-auto">
            <h3 className="font-semibold text-charcoal mb-2">📁 How to add photos:</h3>
            <ol className="text-sm text-charcoal/80 space-y-1">
              <li>1. Navigate to: <code className="bg-saffron/20 px-2 py-1 rounded">kuki-bazaar/public/cookies/</code></li>
              <li>2. Add your photos with exact names shown below</li>
              <li>3. Refresh this page to see them appear! ✨</li>
            </ol>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testImages.map((image, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-64 relative">
                <ProductImage
                  src={`/cookies/${image.name}`}
                  alt={image.title}
                  fallbackEmoji={image.emoji}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-serif font-semibold text-charcoal mb-2">
                  {image.title}
                </h3>
                <p className="text-sm text-charcoal/60 mb-2">
                  Expected file: <code className="bg-gray-100 px-2 py-1 rounded text-xs">{image.name}</code>
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-green-600">Ready for photo</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-turquoise/10 to-saffron/10 rounded-2xl p-8">
            <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
              🎨 Photography Tips
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <h3 className="font-semibold text-saffron mb-2">📸 Setup</h3>
                <ul className="text-sm text-charcoal/70 space-y-1">
                  <li>• Natural light near window</li>
                  <li>• Clean, simple background</li>
                  <li>• 800x600px recommended</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-turquoise mb-2">🎭 Styling</h3>
                <ul className="text-sm text-charcoal/70 space-y-1">
                  <li>• Afghan-inspired props</li>
                  <li>• Show ingredients nearby</li>
                  <li>• Traditional patterns/fabrics</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-pomegranate mb-2">✨ Magic</h3>
                <ul className="text-sm text-charcoal/70 space-y-1">
                  <li>• Multiple angles</li>
                  <li>• Show handmade quality</li>
                  <li>• Make them look delicious!</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a 
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-saffron to-desert-sand text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
          >
            ← Back to Homepage
          </a>
        </div>
      </div>
    </div>
  );
}