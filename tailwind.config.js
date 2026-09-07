/**
 * @file tailwind.config.js
 * @description Tailwind CSS design system configuration for Academic Options.
 * Defines the custom brand color palette, typography stack, shadow tokens,
 * and border-radius extensions used across all components.
 */

/** @type {import('tailwindcss').Config} */
export default {
  // Scan these files for Tailwind class usage (tree-shaking unused styles)
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      /**
       * Custom Color Palettes
       * - `brand`: Primary blue palette (used for CTAs, links, active states, accents)
       * - `mint`: Secondary green palette (used for ESG Hub, success states, eco themes)
       */
      colors: {
        brand: {
          50: '#f0f6fe',
          100: '#ddeafc',
          200: '#c3dbfa',
          300: '#9bc4f7',
          400: '#6ca4f2',
          500: '#4380eb',
          600: '#2563eb',   // Primary CTA color
          700: '#1d4ed8',   // Hover state
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        mint: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
        }
      },

      /**
       * Typography
       * Primary: Plus Jakarta Sans (headings & body)
       * Fallback: Inter, then system fonts
       */
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },

      /**
       * Custom Box Shadows
       * - `soft`: Subtle elevation for containers
       * - `glow-blue`: Brand-colored glow for primary CTA buttons
       * - `card`: Default card resting state shadow
       * - `card-hover`: Elevated shadow on card hover interaction
       */
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'glow-blue': '0 10px 30px -5px rgba(37, 99, 235, 0.25)',
        'card': '0 2px 12px -2px rgba(15, 23, 42, 0.06), 0 1px 3px -1px rgba(15, 23, 42, 0.04)',
        'card-hover': '0 12px 30px -4px rgba(15, 23, 42, 0.1), 0 4px 10px -2px rgba(15, 23, 42, 0.05)',
      },

      /**
       * Extended Border Radius Tokens
       * Provides larger radius options for modern card and section styling
       */
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}
