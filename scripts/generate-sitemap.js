/**
 * @file generate-sitemap.js
 * @description Build-time script to automatically generate `sitemap.xml` and an SEO-optimized `robots.txt`.
 * 
 * Domain Configuration:
 * - Production domain: https://academicoption.in
 * 
 * Flow:
 * 1. Reads static routes from `src/data/routes.js`.
 * 2. Reads dynamic university data from `src/data/colleges.js`.
 * 3. Generates XML for the sitemap and writes it to `public/sitemap.xml`.
 * 4. Generates an SEO-optimized `public/robots.txt` that allows all public pages and assets,
 *    while blocking crawlers from accessing sensitive security configs, source code, and build artifacts.
 * 
 * This runs automatically before `vite build` via the package.json scripts.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { staticRoutes } from '../src/data/routes.js';
import { colleges } from '../src/data/colleges.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Official domain address for Academic Options
const BASE_URL = process.env.SITE_URL || 'https://academicoption.in';
const currentDate = new Date().toISOString().split('T')[0];

/**
 * Generates valid Sitemap XML format for search engines
 */
function generateSitemapXml() {
  const urls = [];

  // 1. Add all static main navigation pages
  staticRoutes.forEach(route => {
    urls.push({
      loc: `${BASE_URL}${route.path}`,
      lastmod: currentDate,
      changefreq: route.changefreq || 'weekly',
      priority: route.priority || '0.8'
    });
  });

  // 2. Automatically add all university cards and pathways from colleges database
  colleges.forEach(college => {
    urls.push({
      loc: `${BASE_URL}/discovery#${college.slug}`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.85'
    });
  });

  // 3. Build XML String conforming to sitemaps.org standards
  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return xmlContent;
}

/**
 * Generates an SEO-optimized robots.txt:
 * - Grants search engine crawlers full access to public indexable pages and visual assets
 * - Strictly protects internal security files (_headers, _redirects), build scripts, and source directories
 */
function generateRobotsTxt() {
  return `# ==============================================================================
# Robots.txt for Academic Options (https://academicoption.in)
# Optimized for Google, Bing, and major search engine crawlers
# ==============================================================================

User-agent: *

# Allow public-facing pages and assets
Allow: /
Allow: /about
Allow: /bootcamps
Allow: /discovery
Allow: /impact
Allow: /contact
Allow: /assets/
Allow: /favicon.png
Allow: /logo.png

# Disallow access to security configs, source files, and internal directories
Disallow: /_headers
Disallow: /_redirects
Disallow: /scripts/
Disallow: /src/
Disallow: /node_modules/
Disallow: /*.json$
Disallow: /*.lock$
Disallow: /*.md$
Disallow: /*.config.js$
Disallow: /*?*preview=*
Disallow: /api/
Disallow: /admin/

# Search Engine XML Sitemap
Sitemap: ${BASE_URL}/sitemap.xml
`;
}

// Write to public directory
const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const sitemapXml = generateSitemapXml();
const robotsTxt = generateRobotsTxt();

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf-8');
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt, 'utf-8');

console.log('✅ sitemap.xml generated successfully in public/sitemap.xml');
console.log('✅ robots.txt generated successfully in public/robots.txt');
console.log(`📊 Total URLs in sitemap: ${staticRoutes.length + colleges.length}`);
