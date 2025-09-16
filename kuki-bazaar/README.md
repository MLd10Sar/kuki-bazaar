# 🍪 Kuki Bazaar - Afghan Traditional Cookies

**"Every cookie tells a story — flavors of Afghan tradition, handcrafted for you"**

A beautiful, fully responsive e-commerce website for selling authentic Afghan-inspired cookies with integrated payment processing.

## ✨ Features

- **Stunning Design**: Afghan-inspired color palette with sparkle animations
- **Fully Responsive**: Mobile-first design that works on all devices
- **Payment Integration**: Stripe and PayPal support
- **Product Showcase**: Beautiful product galleries with fallback images
- **Contact System**: Contact form and delivery information
- **Modern Tech Stack**: Next.js 15, React, TypeScript, Tailwind CSS

## 🚀 Quick Start

1. **Clone and Install**
   ```bash
   git clone <your-repo>
   cd kuki-bazaar
   npm install
   ```

2. **Environment Setup**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your API keys to `.env.local`:
   ```env
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   STRIPE_SECRET_KEY=sk_test_...
   NEXT_PUBLIC_PAYPAL_CLIENT_ID=...
   PAYPAL_CLIENT_SECRET=...
   ```

3. **Add Product Images**
   - Place cookie images in `public/cookies/`
   - Use these filenames:
     - `saffron-rose.jpg`
     - `cardamom-pistachio.jpg`
     - `honey-almond.jpg`
     - `rosewater-coconut.jpg`
     - `walnut-date.jpg`
     - `pomegranate.jpg`

4. **Run Development**
   ```bash
   npm run dev
   ```

## 💳 Payment Setup

### Stripe Setup
1. Create account at [stripe.com](https://stripe.com)
2. Get your publishable and secret keys
3. Add to `.env.local`

### PayPal Setup
1. Create developer account at [developer.paypal.com](https://developer.paypal.com)
2. Create new app and get Client ID
3. Add to `.env.local`

## 🌐 Deployment Options

### Recommended: Vercel (Best for Next.js)
```bash
npm install -g vercel
vercel
```

### Netlify Alternative
```bash
npm run build
# Upload dist folder to Netlify
```

### GitHub Pages (Static only)
- Configure in repository settings
- Use GitHub Actions for automated deployment

## 📁 Project Structure

```
kuki-bazaar/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── page.tsx         # Homepage
│   │   ├── shop/page.tsx    # Shop page
│   │   ├── about/page.tsx   # About page
│   │   └── contact/page.tsx # Contact page
│   └── components/          # Reusable components
│       ├── Navigation.tsx
│       ├── ProductImage.tsx
│       ├── StripeCheckout.tsx
│       └── PayPalCheckout.tsx
├── public/
│   └── cookies/            # Product images
└── .env.example           # Environment template
```

## 🎨 Customization

### Colors (in `globals.css`)
- Saffron: `#f4a261`
- Turquoise: `#2a9d8f`
- Pomegranate: `#e63946`
- Desert Sand: `#e9c46a`

### Products
Edit the products array in `src/app/shop/page.tsx` to add/modify cookies.

## 🔧 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom Afghan-inspired design
- **Payments**: Stripe & PayPal integration
- **TypeScript**: Full type safety
- **Icons**: Lucide React

## 📞 Support

For questions about implementation:
- Check the code comments
- Review the `.env.example` file
- Ensure all dependencies are installed

---

**Made with ❤️ for preserving Afghan culinary heritage**