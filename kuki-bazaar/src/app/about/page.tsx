import Link from 'next/link';
import { Heart, Award, Users, Clock } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-warm-white">
      {/* Hero Section */}
      <section className="py-20 gradient-afghan">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-warm-white mb-6">
            Our <span className="text-desert-sand">Story</span>
          </h1>
          <p className="text-xl text-warm-white/90 leading-relaxed">
            From the heart of Afghanistan to your home - a journey of tradition, flavor, and love
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-charcoal mb-6">
                Born from <span className="text-gradient">Afghan Heritage</span>
              </h2>
              <div className="space-y-6 text-lg text-charcoal/80 leading-relaxed">
                <p>
                  Kuki Bazaar was born from a deep love for Afghan culinary traditions and a desire to share these incredible flavors with the world. Our founder learned these precious recipes in her hometown, where every cookie tells a story of generations past.
                </p>
                <p>
                  In the bustling bazaars of Afghanistan, sweets have always been more than just food - they're expressions of hospitality, celebration, and cultural identity. Each recipe in our collection has been carefully preserved and adapted, maintaining the authentic taste while ensuring the highest quality ingredients.
                </p>
                <p>
                  Today, we bring these treasured recipes to your doorstep, crafted with the same love and attention that has made them special for centuries. Every Kuki is a bridge between cultures, a taste of home, and a celebration of Afghan heritage.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-saffron/20 to-turquoise/20 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🏺</div>
                  <p className="text-charcoal font-medium">Traditional Afghan Kitchen</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-saffron rounded-full sparkle"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-turquoise rounded-full sparkle"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-saffron/10 to-turquoise/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-charcoal text-center mb-16">
            Our <span className="text-gradient">Values</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-saffron to-desert-sand rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-charcoal mb-4">Made with Love</h3>
              <p className="text-charcoal/70">Every cookie is handcrafted with care, passion, and attention to detail, just like in traditional Afghan homes.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-turquoise to-saffron rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-charcoal mb-4">Premium Quality</h3>
              <p className="text-charcoal/70">We source the finest ingredients, including authentic saffron, premium nuts, and traditional spices from trusted suppliers.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-pomegranate to-deep-red rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-charcoal mb-4">Cultural Bridge</h3>
              <p className="text-charcoal/70">We're building bridges between cultures, sharing Afghan hospitality and traditions with communities worldwide.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-desert-sand to-saffron rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-charcoal mb-4">Time-Honored Recipes</h3>
              <p className="text-charcoal/70">Our recipes have been passed down through generations, preserving authentic flavors and traditional techniques.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold text-charcoal mb-8">
            Our <span className="text-gradient">Mission</span>
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-xl text-charcoal/80 leading-relaxed italic">
              "To preserve and share the rich culinary heritage of Afghanistan through authentic, handcrafted cookies that bring families together and create lasting memories. We believe that food is a universal language of love, and every Kuki we create carries the warmth of Afghan hospitality."
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 gradient-afghan">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-warm-white mb-6">
            Taste Our Heritage
          </h2>
          <p className="text-lg text-warm-white/80 mb-8">
            Experience the authentic flavors of Afghanistan, crafted with love and tradition
          </p>
          <Link 
            href="/shop"
            className="inline-flex items-center gap-2 bg-warm-white text-charcoal px-8 py-4 rounded-full font-semibold text-lg hover:bg-desert-sand transition-all duration-300 transform hover:scale-105"
          >
            Explore Our Collection
          </Link>
        </div>
      </section>
    </div>
  );
}