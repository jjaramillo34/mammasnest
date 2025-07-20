# Mamma's Nest 🐝

A modern, responsive website for Mamma's Nest - a business showcasing their products and services with beautiful animations and smooth user experience.

## ✨ Features

- **Modern Design**: Clean, professional layout with beautiful animations
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Lottie Animations**: Interactive bee animations using Lottie
- **Contact Form**: Functional contact section for customer inquiries
- **Testimonials**: Customer testimonials section
- **Products Showcase**: Dedicated section to highlight products/services
- **Scroll to Top**: Convenient navigation feature
- **Performance Optimized**: Built with Next.js 15 and optimized for speed

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Lottie**: Lottie React for animated graphics
- **Deployment**: Vercel (recommended)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd mammasnest
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
mammasnest/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── Products.tsx       # Products showcase
│   ├── About.tsx          # About section
│   ├── CustomAnimation.tsx # Custom animations
│   ├── LottieAnimation.tsx # Lottie animations
│   ├── Testimonials.tsx   # Customer testimonials
│   ├── Contact.tsx        # Contact form
│   ├── Footer.tsx         # Footer
│   └── ScrollToTop.tsx    # Scroll to top button
├── public/                # Static assets
│   └── assets/           # Images and SVGs
└── package.json          # Dependencies and scripts
```

## 🎨 Customization

### Styling
- Modify `app/globals.css` for global styles
- Update `tailwind.config.js` for Tailwind configuration
- Component-specific styles are in each component file

### Content
- Update content in individual component files
- Replace images in the `public/assets/` directory
- Modify animations in `CustomAnimation.tsx` and `LottieAnimation.tsx`

### Colors and Branding
- Update the color scheme in `tailwind.config.js`
- Replace logo and brand assets in `public/assets/`

## 📦 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Deploy automatically** on every push to main branch
3. **Custom domain** can be configured in Vercel dashboard

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm run start
   ```

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for any environment-specific configurations:

```env
# Add any environment variables here
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Next.js Configuration
Modify `next.config.js` for additional Next.js configurations.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary to Mamma's Nest.

## 📞 Support

For support or questions, please contact the development team or create an issue in the repository.

---

**Built with ❤️ using Next.js 15** 