# Tareeqi Web 🛣️

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-blue)](https://mohab0p.github.io/TareeqWeb/)
[![Next.js](https://img.shields.io/badge/Next.js-15.3-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-06B6D4)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11.0-FF0080)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A modern, interactive Next.js website for **Tareeqi** - an AI-powered road monitoring application that uses smartphone sensors to assess road quality. Built with cutting-edge web technologies and featuring stunning animations, this website showcases the revolutionary technology behind making roads safer and smarter.

## 🌟 Live Demo

**Visit our live site**: [Tareeqi Web](https://mohab0p.github.io/TareeqWeb/)

## ✨ Features

### 🎨 **Modern UI/UX**
- Responsive design optimized for all devices
- Dark gradient themes with purple and indigo color schemes
- Smooth page transitions and micro-interactions
- Custom animated components and scroll-based animations

### 📱 **Interactive Pages**
- **Home**: Hero section with animated beta registration form
- **About**: Company mission, vision, team profiles, and journey timeline
- **Features**: Comprehensive showcase of Tareeqi's capabilities
- **How It Works**: Step-by-step technology explanation with video integration
- **Contact**: Dual-purpose contact and beta registration forms

### 🎭 **Advanced Animations**
- Framer Motion powered animations throughout the site
- Scroll-triggered animations optimized for mobile and desktop
- Custom animated form components with validation states
- Interactive hover effects and micro-animations
- Particle effects and floating elements

### 🎥 **Rich Media Integration**
- YouTube video integration with custom controls
- Responsive image optimization with Next.js Image component
- Custom SVG icons and graphics
- Screenshot galleries and interactive media

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/mohab0p/TareeqWeb.git
   cd TareeqWeb
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (Optional for form handling)
   ```bash
   cp .env.example .env.local
   ```
   Update `.env.local` with your Formspree IDs:
   ```env
   NEXT_PUBLIC_FORMSPREE_BETA_ID=your_formspree_beta_id
   NEXT_PUBLIC_FORMSPREE_CONTACT_ID=your_formspree_contact_id
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the app.

## 🛠️ Tech Stack

### **Core Framework**
- **[Next.js 15.3](https://nextjs.org/)** - React framework with App Router
- **[TypeScript 5.3](https://www.typescriptlang.org/)** - Type safety and better DX
- **[React 19](https://react.dev/)** - Latest React features

### **Styling & UI**
- **[Tailwind CSS 3.4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Tailwind CSS Animate](https://github.com/jamiebuilds/tailwindcss-animate)** - Animation utilities
- **Custom CSS Variables** - Dynamic theming support

### **Animations & Interactions**
- **[Framer Motion 11.0](https://www.framer.com/motion/)** - Production-ready motion library
- **Custom Animation Components** - Reusable animation primitives
- **Scroll-based Animations** - Viewport-triggered effects

### **Icons & Graphics**
- **[FontAwesome](https://fontawesome.com/)** - Comprehensive icon library
- **Custom SVG Assets** - Optimized vector graphics
- **Next.js Image** - Optimized image loading

### **Typography**
- **[Google Fonts](https://fonts.google.com/)** - Space Grotesk & Outfit fonts
- **Variable Font Loading** - Optimized web font delivery
### **Development Tools**
- **[ESLint](https://eslint.org/)** - Code linting and quality
- **[PostCSS](https://postcss.org/)** - CSS post-processing
- **[Autoprefixer](https://autoprefixer.github.io/)** - CSS vendor prefixing

### **Build & Deployment**
- **Static Export** - Optimized for GitHub Pages
- **Asset Optimization** - Minimized bundles and images
- **GitHub Actions** - Automated CI/CD pipeline

## 📁 Project Structure

```
TareeqWeb/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About page with team & mission
│   │   ├── contact/           # Contact & beta registration
│   │   ├── features/          # Feature showcase
│   │   ├── how-it-works/      # Technology explanation
│   │   └── api/               # API routes (if needed)
│   ├── components/            # Reusable components
│   │   ├── ui/               # UI components with animations
│   │   ├── header.tsx        # Navigation header
│   │   └── footer.tsx        # Site footer
│   ├── lib/                  # Utilities and configurations
│   └── types/                # TypeScript type definitions
├── public/                   # Static assets
│   ├── assets/              # Images and icons
│   └── *.png               # App screenshots
├── scripts/                 # Build and deployment scripts
└── Configuration files      # Next.js, Tailwind, TypeScript configs
```

## 🎨 Animation System

The project features a comprehensive animation system built on Framer Motion:

### **Custom Animation Components**
- `PageTransition` - Smooth page transitions
- `ScrollAnimation` - Viewport-triggered animations  
- `AnimatedForm` - Interactive form components
- `Card` components - Hover and reveal animations

### **Animation Patterns**
- **Fade In/Out** - Smooth content reveals
- **Slide Animations** - Directional content movement
- **Scale Effects** - Interactive button and card scaling
- **Stagger Animations** - Sequential element reveals
- **Particle Effects** - Floating background elements

See `src/lib/ANIMATIONS_README.md` for detailed usage instructions.

## 📝 Form Handling

This project uses [Formspree](https://formspree.io) for form submissions:

### **Dual-Purpose Forms**
- **Beta Registration** - Early access signup
- **Contact Form** - General inquiries and support

### **Setup Instructions**
1. Create a free account at [Formspree](https://formspree.io)
2. Create two forms (Beta Registration and Contact)
3. Add the form IDs to your `.env.local`:
   ```env
   NEXT_PUBLIC_FORMSPREE_BETA_ID=your_beta_form_id
   NEXT_PUBLIC_FORMSPREE_CONTACT_ID=your_contact_form_id
   ```

### **Form Features**
- Real-time validation with error states
- Animated submission states
- Success/error feedback
- Responsive design across all devices

## 🚀 Deployment

### **GitHub Pages (Current)**

The site automatically deploys to GitHub Pages via GitHub Actions:

1. **Automatic Deployment**: Push changes to the `main` branch
2. **Build Process**: GitHub Actions builds and deploys automatically  
3. **Live Site**: Visit `https://mohab0p.github.io/TareeqWeb/`

**Manual deployment**:
```bash
npm run build && npm run export
```

### **Alternative Deployment Options**

#### **Vercel** (Recommended for development)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mohab0p/TareeqWeb)

#### **Netlify**
The project includes `netlify.toml` for easy Netlify deployment.

## 🧑‍💻 Development

### **Available Scripts**
```bash
# Start development server
npm run dev

# Build for production  
npm run build

# Run production build locally
npm run start

# Lint code
npm run lint
```

### **Development Workflow**
1. **Hot Reload**: Instant updates during development
2. **TypeScript**: Full type checking and IntelliSense
3. **ESLint**: Automated code quality checks
4. **Responsive Design**: Mobile-first development approach

### **Code Organization**
- **Component-based Architecture**: Modular and reusable components
- **TypeScript Integration**: Type-safe development
- **Custom Hooks**: Reusable logic abstraction
- **Consistent Styling**: Tailwind CSS utility classes

## 🔧 Configuration

### **Environment Variables**
```env
# Optional: Formspree integration
NEXT_PUBLIC_FORMSPREE_BETA_ID=your_beta_form_id
NEXT_PUBLIC_FORMSPREE_CONTACT_ID=your_contact_form_id

# Development
NODE_ENV=development|production
```

### **Build Configuration**
- **Static Export**: Configured for GitHub Pages
- **Base Path**: Automatically set for subdirectory deployment
- **Asset Optimization**: Images and fonts optimized
- **TypeScript**: Strict mode enabled

## � Mobile Optimization

- **Responsive Design**: Optimized for all screen sizes
- **Touch Interactions**: Mobile-friendly animations
- **Performance**: Optimized bundle sizes and loading
- **Accessibility**: WCAG compliant interactive elements

## 🎯 About Tareeqi

**Tareeqi** is an innovative AI-powered mobile and web platform that revolutionizes road monitoring by:

- **Smart Sensing**: Using smartphone sensors to detect road conditions
- **AI Analysis**: Machine learning algorithms assess road quality in real-time  
- **Community Data**: Creating a crowdsourced database of road conditions
- **Safety Focus**: Helping drivers avoid hazards and plan safer routes
- **Smart Cities**: Supporting infrastructure planning and maintenance

### **Vision 2030 Alignment**
Supporting Saudi Arabia's Vision 2030 through smart transportation infrastructure and technology innovation.

## �📚 Learn More

### **Next.js Resources**
- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial  
- [Next.js GitHub Repository](https://github.com/vercel/next.js)

### **Animation Resources**
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Animation Best Practices](src/lib/ANIMATIONS_README.md)

### **Design Resources**  
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [FontAwesome Icons](https://fontawesome.com/icons)

## 🤝 Contributing

We welcome contributions to improve Tareeqi Web! Here's how you can help:

### **Getting Started**
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and test thoroughly
4. Commit with descriptive messages: `git commit -m 'Add amazing feature'`
5. Push to your branch: `git push origin feature/amazing-feature`  
6. Open a Pull Request

### **Contribution Guidelines**
- Follow the existing code style and TypeScript conventions
- Ensure all animations are mobile-optimized
- Test responsive design across different screen sizes
- Update documentation for any new features
- Keep components modular and reusable

### **Areas for Contribution**
- 🎨 UI/UX improvements and new animations
- 🐛 Bug fixes and performance optimizations  
- 📱 Mobile experience enhancements
- 🌐 Internationalization (i18n) support
- ♿ Accessibility improvements
- 📖 Documentation and code examples

## 🏆 Project Highlights

### **Academic Excellence**
- **University Project**: Developed at Jouf University, Saudi Arabia
- **Innovation Focus**: Aligns with Saudi Vision 2030 smart city initiatives
- **Technology Integration**: Combines AI, mobile sensors, and web technologies

### **Technical Achievements**  
- **Modern Stack**: Latest Next.js, TypeScript, and React features
- **Performance**: Optimized bundle size and loading speeds
- **Animations**: Smooth, accessible animations across all devices
- **Responsive**: Pixel-perfect design from mobile to desktop

### **User Experience**
- **Intuitive Navigation**: Clear information architecture
- **Interactive Elements**: Engaging animations and micro-interactions
- **Accessibility**: WCAG compliant design patterns
- **Cross-Platform**: Consistent experience across devices

## 📊 Performance & Analytics

- **Lighthouse Score**: Optimized for performance, accessibility, and SEO
- **Bundle Size**: Minimized with automatic code splitting
- **Loading Speed**: Optimized images and fonts
- **Mobile Performance**: Smooth 60fps animations on mobile devices

## 🔮 Future Roadmap

### **Planned Features**
- [ ] **Multi-language Support** - Arabic and English localization
- [ ] **Dark/Light Mode** - User preference theme switching  
- [ ] **Interactive Map Integration** - Real-time road condition visualization
- [ ] **Blog Section** - Technical articles and project updates
- [ ] **API Documentation** - Integration guides for developers

### **Technical Improvements**
- [ ] **PWA Support** - Offline functionality and app-like experience
- [ ] **Advanced Analytics** - User behavior and performance tracking
- [ ] **Microinteractions** - Enhanced user feedback systems
- [ ] **3D Animations** - Three.js integration for advanced visuals

## 📞 Contact & Support

### **Development Team**
- **Institution**: Jouf University, Sakaka, Saudi Arabia
- **Email**: tareeqiapp@gmail.com
- **Project Lead**: Available through GitHub issues

### **Getting Help**
- 🐛 **Bug Reports**: Use GitHub Issues with detailed reproduction steps
- 💡 **Feature Requests**: Open a GitHub Discussion
- 📧 **Direct Contact**: Email us for partnership or collaboration inquiries
- 📖 **Documentation**: Check the `/src/lib/ANIMATIONS_README.md` for animation guides

## 🏷️ Keywords

`Next.js` `TypeScript` `React` `Tailwind CSS` `Framer Motion` `Road Monitoring` `AI` `Saudi Vision 2030` `Smart Cities` `Mobile Sensors` `Web Development` `Animation` `Responsive Design` `GitHub Pages`

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### **MIT License Summary**
- ✅ Commercial use allowed
- ✅ Modification allowed  
- ✅ Distribution allowed
- ✅ Private use allowed
- ❗ License and copyright notice required

---

<div align="center">

**Built with ❤️ by the Tareeqi Team**

[🌐 Visit Live Site](https://mohab0p.github.io/TareeqWeb/) • [📱 Learn About Tareeqi App](https://mohab0p.github.io/TareeqWeb/about) • [🚀 Join Beta Program](https://mohab0p.github.io/TareeqWeb/contact)

</div>
