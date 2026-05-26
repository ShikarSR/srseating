import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const siteUrl = (process.env.SITE_URL || 'https://srseating.com').replace(/\/+$/, '');

// Only index the public marketing pages, not auth, dashboard, or test routes.
const staticRoutes = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/our-story', changefreq: 'monthly', priority: '0.9' },
  { path: '/leadership', changefreq: 'monthly', priority: '0.8' },
  { path: '/manufacturing', changefreq: 'monthly', priority: '0.8' },
  { path: '/sustainability', changefreq: 'monthly', priority: '0.8' },
  { path: '/cinema', changefreq: 'weekly', priority: '0.9' },
  { path: '/auditorium', changefreq: 'weekly', priority: '0.9' },
  { path: '/educational-institution', changefreq: 'weekly', priority: '0.8' },
  { path: '/hospitality-convention', changefreq: 'weekly', priority: '0.8' },
  { path: '/defense-government', changefreq: 'weekly', priority: '0.8' },
  { path: '/home-theatre', changefreq: 'weekly', priority: '0.8' },
  { path: '/product-list', changefreq: 'weekly', priority: '0.9' },
  { path: '/wall-of-success', changefreq: 'weekly', priority: '0.8' },
  { path: '/blog', changefreq: 'weekly', priority: '0.9' },
  { path: '/resource', changefreq: 'weekly', priority: '0.8' },
  { path: '/photo-gallery', changefreq: 'weekly', priority: '0.7' },
  { path: '/contact-us', changefreq: 'monthly', priority: '0.8' },
  { path: '/privacy-policy', changefreq: 'yearly', priority: '0.3' },
  { path: '/terms-conditions', changefreq: 'yearly', priority: '0.3' },
];

const PRODUCT_DATA_PATH = path.join(
  rootDir,
  'src',
  'assets',
  'jsonData',
  'product',
  'productlist',
  'ProductDetailsData.json'
);

const BLOG_DATA_PATH = path.join(
  rootDir,
  'src',
  'assets',
  'jsonData',
  'blog',
  'BlogData.json'
);

const xmlEscape = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

async function readJson(filePath) {
  const raw = await fs.readFile(filePath, 'utf8');
  return JSON.parse(raw);
}

async function getModifiedDate(filePath) {
  const stats = await fs.stat(filePath);
  return stats.mtime.toISOString().split('T')[0];
}

function normalizeDate(dateText, fallbackDate) {
  if (!dateText) return fallbackDate;

  const parsed = new Date(dateText);
  if (Number.isNaN(parsed.getTime())) {
    return fallbackDate;
  }

  return parsed.toISOString().split('T')[0];
}

function createUrlEntry({ path: routePath, lastmod, changefreq, priority }) {
  const lines = ['  <url>', `    <loc>${xmlEscape(`${siteUrl}${routePath}`)}</loc>`];

  if (lastmod) lines.push(`    <lastmod>${lastmod}</lastmod>`);
  if (changefreq) lines.push(`    <changefreq>${changefreq}</changefreq>`);
  if (priority) lines.push(`    <priority>${priority}</priority>`);

  lines.push('  </url>');
  return lines.join('\n');
}

async function main() {
  const [products, blogs, productLastmod, blogFallbackLastmod] = await Promise.all([
    readJson(PRODUCT_DATA_PATH),
    readJson(BLOG_DATA_PATH),
    getModifiedDate(PRODUCT_DATA_PATH),
    getModifiedDate(BLOG_DATA_PATH),
  ]);

  const routes = new Map();

  for (const route of staticRoutes) {
    routes.set(route.path, route);
  }

  for (const product of products) {
    if (!product?.id) continue;

    const routePath = `/product-details/${product.id}`;
    routes.set(routePath, {
      path: routePath,
      lastmod: productLastmod,
      changefreq: 'monthly',
      priority: '0.7',
    });
  }

  for (const blog of blogs) {
    if (!blog?.slug) continue;

    const routePath = `/blog/${blog.slug}`;
    routes.set(routePath, {
      path: routePath,
      lastmod: normalizeDate(blog.date, blogFallbackLastmod),
      changefreq: 'monthly',
      priority: '0.7',
    });
  }

  const sitemapXml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...Array.from(routes.values()).map(createUrlEntry),
    '</urlset>',
    '',
  ].join('\n');

  const robotsTxt = ['User-agent: *', 'Allow: /', `Sitemap: ${siteUrl}/sitemap.xml`, ''].join('\n');

  await fs.mkdir(publicDir, { recursive: true });
  await fs.writeFile(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf8');
  await fs.writeFile(path.join(publicDir, 'robots.txt'), robotsTxt, 'utf8');

  console.log(`Generated sitemap.xml with ${routes.size} URLs.`);
  console.log('Generated robots.txt.');
}

main().catch((error) => {
  console.error('Failed to generate sitemap assets.');
  console.error(error);
  process.exitCode = 1;
});
