'use client';

import { useState } from 'react';
import { Mail, Instagram, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-warm-white">
      {/* Hero Section */}
      <section className="py-20 gradient-afghan">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-warm-white mb-6">
            Get in <span className="text-desert-sand">Touch</span>
          </h1>
          <p className="text-xl text-warm-white/90 leading-relaxed">
            We'd love to hear from you! Reach out for orders, questions, or just to say hello
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-charcoal mb-8">
                Contact <span className="text-gradient">Information</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-saffron to-desert-sand rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-1">Email</h3>
                    <p className="text-charcoal/70">hello@kukibazaar.com</p>
                    <p className="text-charcoal/70">orders@kukibazaar.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-turquoise to-saffron rounded-full flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-1">Social Media</h3>
                    <p className="text-charcoal/70">@kukibazaar</p>
                    <p className="text-charcoal/70">Follow us for daily inspiration</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pomegranate to-deep-red rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-1">Phone</h3>
                    <p className="text-charcoal/70">+1 (555) 123-KUKI</p>
                    <p className="text-charcoal/70">Monday - Friday, 9 AM - 6 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-desert-sand to-saffron rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-1">Delivery Area</h3>
                    <p className="text-charcoal/70">Local delivery within 25 miles</p>
                    <p className="text-charcoal/70">Nationwide shipping available</p>
                  </div>
                </div>
              </div>
              
              {/* Delivery Information */}
              <div className="mt-12 bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-serif font-semibold text-charcoal mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-saffron" />
                  Delivery Information
                </h3>
                <div className="space-y-3 text-sm text-charcoal/70">
                  <div className="flex justify-between">
                    <span>Local Delivery:</span>
                    <span>Same day (orders before 2 PM)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Regional Shipping:</span>
                    <span>2-3 business days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Nationwide:</span>
                    <span>3-5 business days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Fee:</span>
                    <span>$5 local, $10+ shipping</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Free Delivery:</span>
                    <span>Orders over $50</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-charcoal mb-8">
                Send us a <span className="text-gradient">Message</span>
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-saffron/20 rounded-lg focus:ring-2 focus:ring-saffron focus:border-transparent transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-saffron/20 rounded-lg focus:ring-2 focus:ring-saffron focus:border-transparent transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-charcoal mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-saffron/20 rounded-lg focus:ring-2 focus:ring-saffron focus:border-transparent transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="order">Order Inquiry</option>
                    <option value="delivery">Delivery Question</option>
                    <option value="custom">Custom Order</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-saffron/20 rounded-lg focus:ring-2 focus:ring-saffron focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-saffron to-desert-sand text-white py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-saffron/10 to-turquoise/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-charcoal text-center mb-12">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-semibold text-charcoal mb-3">How fresh are the cookies?</h3>
              <p className="text-charcoal/70">All cookies are baked fresh to order and delivered within 24-48 hours to ensure maximum freshness and quality.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-semibold text-charcoal mb-3">Do you accommodate allergies?</h3>
              <p className="text-charcoal/70">Yes! Please contact us about specific dietary requirements. We can accommodate most nut allergies and dietary restrictions.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-semibold text-charcoal mb-3">Can I place bulk orders?</h3>
              <p className="text-charcoal/70">Absolutely! We offer special pricing for bulk orders for events, offices, and special occasions. Contact us for a custom quote.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-semibold text-charcoal mb-3">What payment methods do you accept?</h3>
              <p className="text-charcoal/70">We accept all major credit cards through Stripe, as well as PayPal for your convenience and security.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}