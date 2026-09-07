/**
 * @file routes.js
 * @description Static route definitions used by:
 * 1. The automated sitemap generator (`scripts/generate-sitemap.js`) to create `sitemap.xml`
 * 2. Can be extended for breadcrumb generation, route-level meta tags, etc.
 *
 * When adding a new page to the website:
 * 1. Add the route in App.jsx
 * 2. Add the route entry here for SEO sitemap inclusion
 *
 * @property {string} path - The URL path (must match React Router route)
 * @property {string} changefreq - How often search engines should re-crawl ('daily' | 'weekly' | 'monthly')
 * @property {string} priority - SEO priority weight from '0.0' to '1.0' (homepage = '1.0')
 */

export const staticRoutes = [
  {
    path: '/',
    changefreq: 'daily',
    priority: '1.0'
  },
  {
    path: '/about',
    changefreq: 'weekly',
    priority: '0.8'
  },
  {
    path: '/impact',
    changefreq: 'weekly',
    priority: '0.8'
  },
  {
    path: '/discovery',
    changefreq: 'daily',
    priority: '0.9'
  }
];
