'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackEmoji?: string;
}

export default function ProductImage({ 
  src, 
  alt, 
  className = "w-full h-full object-cover", 
  fallbackEmoji = "🍪" 
}: ProductImageProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  if (imageError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-saffron/20 via-desert-sand/20 to-turquoise/20 relative overflow-hidden">
        {/* Afghan pattern overlay */}
        <div className="absolute inset-0 afghan-pattern opacity-10"></div>
        
        {/* Floating sparkles */}
        <div className="absolute top-4 left-4 w-2 h-2 bg-saffron rounded-full sparkle"></div>
        <div className="absolute top-8 right-6 w-1 h-1 bg-turquoise rounded-full sparkle"></div>
        <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-pomegranate rounded-full sparkle"></div>
        <div className="absolute bottom-4 right-4 w-2 h-2 bg-desert-sand rounded-full sparkle"></div>
        
        <div className="text-center relative z-10">
          <div className="text-6xl mb-3 animate-pulse">{fallbackEmoji}</div>
          <p className="text-sm text-charcoal/70 font-medium bg-warm-white/80 px-3 py-1 rounded-full">
            Photo coming soon
          </p>
          <p className="text-xs text-saffron mt-2 italic">
            Handcrafted with love ✨
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      {imageLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-saffron/20 via-desert-sand/20 to-turquoise/20 animate-pulse">
          {/* Loading sparkles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-saffron rounded-full sparkle"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-turquoise rounded-full sparkle"></div>
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-pomegranate rounded-full sparkle"></div>
          
          <div className="text-center">
            <div className="text-4xl mb-2">{fallbackEmoji}</div>
            <p className="text-xs text-charcoal/60 bg-warm-white/80 px-2 py-1 rounded-full">
              Loading deliciousness...
            </p>
          </div>
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        fill
        className={`${className} transition-opacity duration-500 ${
          imageLoading ? 'opacity-0' : 'opacity-100'
        }`}
        onLoad={() => setImageLoading(false)}
        onError={() => {
          console.log(`Image failed to load: ${src}`);
          setImageError(true);
          setImageLoading(false);
        }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={false}
        unoptimized={true}
      />
    </div>
  );
}