# Tareeqi Web 🛣️

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-blue)](https://mohab0p.github.io/TareeqWeb/)
[![Next.js](https://img.shields.io/badge/Next.js-13.0-black)](https://nextjs.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A modern Next.js website for the Tareeqi road monitoring application. Experience real-time road condition monitoring and reporting.

## 🌟 Live Demo

Visit our live site: [Tareeqi Web](https://mohab0p.github.io/TareeqWeb/)

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

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Update `.env.local` with your values:
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

- **Framework**: [Next.js 13](https://nextjs.org/)
- **Styling**: Tailwind CSS
- **Form Handling**: Formspree
- **Deployment**: GitHub Pages
- **Font**: Geist (by Vercel)

## 📝 Form Handling

This project uses [Formspree](https://formspree.io) for form submissions. To configure your forms:

1. Create a free account at [Formspree](https://formspree.io)
2. Create two forms (Beta Registration and Contact)
3. Add the form IDs to your `.env.local`:
   ```env
   NEXT_PUBLIC_FORMSPREE_BETA_ID=your_beta_form_id
   NEXT_PUBLIC_FORMSPREE_CONTACT_ID=your_contact_form_id
   ```

## 🚀 Deployment

### GitHub Pages Deployment

The site automatically deploys to GitHub Pages via GitHub Actions:

1. Push changes to the `main` branch
2. GitHub Actions will build and deploy automatically
3. Visit your site at `https://mohab0p.github.io/TareeqWeb/`

Manual deployment:
```bash
npm run deploy
```

### Alternative Deployment

You can also deploy on [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mohab0p/TareeqWeb)

## 🧑‍💻 Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run production build locally
npm run start
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js GitHub Repository](https://github.com/vercel/next.js)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
