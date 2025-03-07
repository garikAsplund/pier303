export async function GET() {
  const website = 'https://pier303seafood.com';
  
  // Define your sections/pages
  const pages = [
    { url: '/', priority: '1.0' },
    { url: '/#about', priority: '0.8' },
    { url: '/#contact', priority: '0.8' },
    { url: '/#farmers-market', priority: '0.8' },
    { url: '/#catering', priority: '0.8' }
  ];
  
  // Generate the XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
  <url>
    <loc>${website}${page.url}</loc>
    <priority>${page.priority}</priority>
  </url>
  `).join('')}
</urlset>`;
  
  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}