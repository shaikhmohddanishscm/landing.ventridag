# VentriDAG Landing Page

A modern, beautiful, and fully responsive landing page for VentriDAG built with React, Vite, TailwindCSS, and Framer Motion.

## ✨ Features

- 🎨 **Modern UI/UX Design** - Stunning gradients, glassmorphism effects, and smooth animations
- 📱 **Fully Responsive** - Optimized for all devices from mobile to desktop
- ⚡ **Lightning Fast** - Built with Vite for instant HMR and optimal performance
- 🎭 **Smooth Animations** - Powered by Framer Motion for delightful interactions
- ♿ **Accessible** - Follows WCAG 2.1 guidelines with proper focus states and reduced motion support
- 🎯 **SEO Optimized** - Proper meta tags, semantic HTML, and optimized images
- 🔥 **Modern Stack** - React 18, TailwindCSS 3, Framer Motion, Lucide Icons

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm/yarn installed

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit: `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
ventridag-landing/
├── public/              # Static assets (images, logo)
├── src/
│   ├── components/      # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── Team.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles with Tailwind
├── index.html          # HTML template
├── package.json        # Dependencies
├── tailwind.config.js  # Tailwind configuration
├── vite.config.js      # Vite configuration
└── README.md
```

## 🎨 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **TailwindCSS 3** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icon set

## 🌟 Key Sections

1. **Hero** - Captivating introduction with animated stats
2. **Features** - 7 product features with beautiful image showcases
3. **Team** - Meet the founding team with professional profiles
4. **Contact** - Interactive contact form with validation
5. **Footer** - Comprehensive footer with links and social media

## 🎯 Performance

- ⚡ First Contentful Paint: < 1.5s
- 📦 Optimized bundle size with code splitting
- 🖼️ Lazy loading for images
- 🎭 Hardware-accelerated animations
- 📱 Mobile-first responsive design

## 🔧 Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```js
theme: {
  extend: {
    colors: {
      primary: {
        500: '#ff0040', // Change main brand color
      }
    }
  }
}
```

### Content

All content is in the component files under `src/components/`. Simply edit the text, images, or data arrays.

## 📝 License

© 2025 VentriDAG. All rights reserved.

## 🤝 Support

For questions or support, contact us at contact@ventridag.com
# landing.ventridag
