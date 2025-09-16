import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Star } from "lucide-react";
import ProductImage from "@/components/ProductImage";

export default function Home() {
  const featuredProducts = [
    {
      id: 1,
      name: "Saffron Rose Delight",
      description: "Traditional Afghan cookies infused with precious saffron and delicate rose water",
      price: "$18.99",
      image: "/cookies/saffron-rose.jpg",
      heritage: "Inspired by Kabul's royal kitchens"
    },
    {
      id: 2,
      name: "Cardamom Pistachio Dream",
      description: "Aromatic cardamom cookies loaded with premium Afghan pistachios",
      price: "$16.99",
      image: "/cookies/cardamom-pistachio.jpg",
      heritage: "A Herat family recipe"
    },
    {
      id: 3,
      name: "Honey Almond Treasure",
      description: "Sweet honey cookies with crushed almonds, a celebration of Afghan hospitality",
      price: "$15.99",
      image: "/cookies/honey-almond.jpg",
      heritage: "From the bazaars of Mazar-i-Sharif"
    },
    {
      id: 4,
      name: "Rosewater Coconut Bliss",
      description: "Delicate rosewater cookies with tropical coconut, a modern Afghan fusion",
      price: "$17.99",
      image: "/cookies/rosewater-coconut.jpg",
      heritage: "Contemporary Afghan artistry"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Afghan pattern */}
        <div className="absolute inset-0 afghan-pattern opacity-10"></div>
        <div className="absolute inset-0 gradient-afghan opacity-90"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          {/* Decorative sparkles */}
          <div className="absolute -top-10 left-1/4 w-4 h-4 bg-warm-white rounded-full sparkle"></div>
          <div className="absolute -top-5 right-1/3 w-3 h-3 bg-warm-white rounded-full sparkle"></div>
          <div className="absolute top-10 left-1/3 w-2 h-2 bg-warm-white rounded-full sparkle"></div>
          <div className="absolute top-5 right-1/4 w-3 h-3 bg-warm-white rounded-full sparkle"></div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-warm-white mb-6 leading-tight">
            Every Cookie
            <br />
            <span className="text-6xl md:text-8xl bg-gradient-to-r from-warm-white to-desert-sand bg-clip-text text-transparent">
              Tells a Story
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-warm-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Flavors of Afghan tradition, handcrafted for you
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/shop"
              className="group bg-warm-white text-charcoal px-8 py-4 rounded-full font-semibold text-lg hover:bg-desert-sand transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-2xl"
            >
              Order Now
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/about"
              className="group border-2 border-warm-white text-warm-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-warm-white hover:text-charcoal transition-all duration-300 transform hover:scale-105"
            >
              Our Story
            </Link>
          </div>
        </div>
        
        {/* Floating cookie image */}
        <div className="absolute bottom-10 right-10 hidden lg:block animate-bounce">
          <div className="w-32 h-32 bg-warm-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <span className="text-4xl">🍪</span>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6">
              Featured <span className="text-gradient">Treasures</span>
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Discover our signature collection of Afghan-inspired cookies, each recipe passed down through generations and perfected with love
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="relative h-64">
                  <ProductImage 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-t-2xl"
                  />
                  <div className="absolute top-4 right-4">
                    <Heart className="w-6 h-6 text-pomegranate/60 hover:text-pomegranate hover:fill-current transition-colors cursor-pointer" />
                  </div>
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
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-pomegranate">
                      {product.price}
                    </span>
                    <button className="bg-gradient-to-r from-saffron to-desert-sand text-white px-4 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/shop"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-turquoise to-saffron text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              View All Cookies
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Heritage Story Teaser */}
      <section className="py-20 gradient-afghan">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-warm-white mb-8">
            A Taste of <span className="text-desert-sand">Afghan Heritage</span>
          </h2>
          
          <p className="text-xl text-warm-white/90 mb-8 leading-relaxed">
            From the bustling bazaars of Kabul to your doorstep, each Kuki carries the essence of Afghan hospitality, traditional recipes, and the warmth of our homeland.
          </p>
          
          <Link 
            href="/about"
            className="inline-flex items-center gap-2 bg-warm-white text-charcoal px-8 py-4 rounded-full font-semibold text-lg hover:bg-desert-sand transition-all duration-300 transform hover:scale-105"
          >
            Discover Our Journey
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-warm-white mb-6">
            Ready to taste tradition?
          </h2>
          
          <p className="text-lg text-warm-white/80 mb-8">
            Order now and experience the flavors that have delighted families for generations
          </p>
          
          <Link 
            href="/shop"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-saffron to-pomegranate text-white px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Start Your Journey
            <ArrowRight size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
}
