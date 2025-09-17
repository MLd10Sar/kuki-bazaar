'use client';

import Image from 'next/image';

export default function ImageDebug() {
  const images = [
    '/cookies/saffron-rose-realistic.jpg',
    '/cookies/cardamom-pistachio-realistic.jpg', 
    '/cookies/honey-almond-realistic.jpg',
    '/cookies/kulcha-badakhshani-realistic.jpg'
  ];

  return (
    <div className="min-h-screen bg-warm-white p-8">
      <h1 className="text-3xl font-bold mb-8">Image Debug Page</h1>
      
      <div className="grid grid-cols-2 gap-8">
        {images.map((src, index) => (
          <div key={index} className="border p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">{src}</h3>
            
            {/* Next.js Image */}
            <div className="mb-4">
              <p className="text-sm mb-2">Next.js Image Component:</p>
              <div className="w-64 h-64 border">
                <Image
                  src={src}
                  alt={`Cookie ${index + 1}`}
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                  unoptimized={true}
                  onError={(e) => console.log('Image error:', src, e)}
                  onLoad={() => console.log('Image loaded:', src)}
                />
              </div>
            </div>
            
            {/* Regular img tag */}
            <div>
              <p className="text-sm mb-2">Regular img tag:</p>
              <div className="w-64 h-64 border">
                <img
                  src={src}
                  alt={`Cookie ${index + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => console.log('Regular img error:', src, e)}
                  onLoad={() => console.log('Regular img loaded:', src)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}