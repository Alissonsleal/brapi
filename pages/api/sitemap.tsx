import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).setHeader('Content-Type', 'application/xml');
  res.send(`<?xml version="1.0" encoding="utf-8" standalone="yes" ?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://bovespa-api.vercel.app/</loc>
      <lastmod>2021-02-06</lastmod>
      <changefreq>monthly</changefreq>
      <priority>1</priority>
    </url>
    <url>
      <loc>https://bovespa-api.vercel.app/about</loc>
      <lastmod>2021-02-06</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.9</priority>
    </url>
    <url>
      <loc>https://bovespa-api.vercel.app/quotes</loc>
      <lastmod>2021-02-06</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.9</priority>
    </url>
    <url>
      <loc>https://bovespa-api.vercel.app/docs</loc>
      <lastmod>2021-02-06</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.9</priority>
    </url>
    <url>
      <loc>https://bovespa-api.vercel.app/contact</loc>
      <lastmod>2021-02-06</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.9</priority>
    </url>
    <url>
      <loc>https://bovespa-api.vercel.app/login</loc>
      <lastmod>2021-02-06</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.9</priority>
    </url>
    <url>
      <loc>https://bovespa-api.vercel.app/create-account</loc>
      <lastmod>2021-02-06</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.9</priority>
    </url>
    <url>
      <loc>https://bovespa-api.vercel.app/legal</loc>
      <lastmod>2021-02-06</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.9</priority>
    </url>
    <url>
      <loc>https://bovespa-api.vercel.app/quotes/OIBR3</loc>
      <lastmod>2021-02-06</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://bovespa-api.vercel.app/quotes/CIEL3</loc>
      <lastmod>2021-02-06</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://bovespa-api.vercel.app/quotes/IRBR3</loc>
      <lastmod>2021-02-06</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://bovespa-api.vercel.app/quotes/GFSA3</loc>
      <lastmod>2021-02-06</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://bovespa-api.vercel.app/quotes/COGN3</loc>
      <lastmod>2021-02-06</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://bovespa-api.vercel.app/quotes/PETR3</loc>
      <lastmod>2021-02-06</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://bovespa-api.vercel.app/quotes/VVAR3</loc>
      <lastmod>2021-02-06</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://bovespa-api.vercel.app/quotes/VALE3</loc>
      <lastmod>2021-02-06</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://bovespa-api.vercel.app/quotes/MGLU3</loc>
      <lastmod>2021-02-06</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://bovespa-api.vercel.app/quotes/CSNA3</loc>
      <lastmod>2021-02-06</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://bovespa-api.vercel.app/quotes/DMMO3</loc>
      <lastmod>2021-02-06</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://bovespa-api.vercel.app/quotes/BBAS3</loc>
      <lastmod>2021-02-06</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://bovespa-api.vercel.app/quotes/BRDT3</loc>
      <lastmod>2021-02-06</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://bovespa-api.vercel.app/quotes/ABEV3</loc>
      <lastmod>2021-02-06</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://bovespa-api.vercel.app/quotes/BRML3</loc>
      <lastmod>2021-02-06</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://bovespa-api.vercel.app/quotes/INTB3</loc>
      <lastmod>2021-02-06</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://bovespa-api.vercel.app/quotes/JHSF3</loc>
      <lastmod>2021-02-06</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://bovespa-api.vercel.app/quotes/MRFG3</loc>
      <lastmod>2021-02-06</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://bovespa-api.vercel.app/quotes/RAIL3</loc>
      <lastmod>2021-02-06</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://bovespa-api.vercel.app/quotes/PRIO3</loc>
      <lastmod>2021-02-06</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.8</priority>
    </url>
  </urlset>`);
};
