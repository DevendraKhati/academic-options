import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { staticRoutes } from '../src/data/routes.js';
import { colleges } from '../src/data/colleges.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = process.env.SITE_URL || 'https://academicoptions.org';
const currentDate = new Date().toISOString().split('T')[0];

function generateSitemapXml() {
  const urls = [];

  // 1. Add all static pages
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

  // 3. Build XML String
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

function generateRobotsTxt() {
  return `User-agent: *
Allow: /

# Sitemap
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
