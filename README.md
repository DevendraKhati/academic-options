# Academic Options - React Application

A modern, responsive React web application built from the Figma design for **Academic Options** ("Bridging the Gap between Ambition and Opportunity") configured for seamless hosting on **Cloudflare Pages**.

---

## 🚀 Quick Start

### 1. Development Server
Run the local dev server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Production Build & Local Preview
To test the production build locally:
```bash
npm run build
npm run preview
```

---

## ☁️ Deploying to Cloudflare Pages

### Option 1: Git Integration (Recommended for CI/CD)
1. Push this repository to GitHub or GitLab.
2. In the [Cloudflare Dashboard](https://dash.cloudflare.com/), go to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Select your repository and configure the build settings:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node.js version**: `18+` or `20+` (specified via environment variable `NODE_VERSION=20`)
4. Click **Save and Deploy**.

### Option 2: Direct CLI Deployment
Deploy directly to Cloudflare Pages from your terminal:
```bash
npm run build
npm run deploy
```
*Note: On your first deploy, Wrangler will prompt you to authenticate with your Cloudflare account.*

---

## 📁 Project Structure

```
academic-options-app/
├── public/
│   ├── _headers           # Cloudflare security and caching headers
│   └── _redirects         # SPA routing fallback rule (/* /index.html 200)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Sticky glass header with mobile drawer
│   │   ├── Hero.jsx         # Hero section with live badges & visual studio preview
│   │   ├── Ecosystem.jsx    # Bento grid (C2C, ESG Hub, Bootcamps, Social Awareness)
│   │   ├── Stats.jsx        # 4-column key metrics & impact statistics
│   │   ├── Categories.jsx   # 6 interactive internship categories with filters
│   │   ├── Bootcamps.jsx    # 4 practitioner-led bootcamps
│   │   ├── HowItWorks.jsx   # 6-step journey from classroom to corporate
│   │   ├── Testimonials.jsx # Intern testimonials with 5-star ratings
│   │   ├── CtaBanner.jsx    # Blue gradient call-to-action banner
│   │   ├── Footer.jsx       # Multi-column footer with socials and contact info
│   │   └── ApplyModal.jsx   # Interactive modal application/consultation form
│   ├── App.jsx              # Main App layout & modal state management
│   ├── index.css            # Tailwind directives, custom glassmorphism & gradients
│   └── main.jsx             # React entrypoint
├── index.html               # HTML5 template with Google Fonts (Plus Jakarta Sans)
├── package.json             # Dependencies and build scripts
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.js       # Tailwind theme colors and shadow utilities
├── vite.config.js           # Vite server and build config
└── wrangler.toml            # Cloudflare Pages configuration
```

---

## 🎨 Design Implementation Highlights
- **Typography**: Clean `Plus Jakarta Sans` & `Inter` system.
- **Brand Colors**: Royal Blue (`#1d4ed8`), Electric Accent (`#2563eb`), Mint Green (`#10b981`), Slate typography.
- **Interactivity**: Filterable internship categories, interactive application modal, smooth scroll navigation, responsive mobile menu.
