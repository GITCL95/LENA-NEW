import SEO from '@components/layout/SEO';
import Layout from '@components/layout/Layout';
import Hero from '@components/sections/Hero';
import Marquee from '@components/sections/Marquee';
import Stats from '@components/sections/Stats';
import About from '@components/sections/About';
import Services from '@components/sections/Services';
import PortfolioPreview from '@components/sections/PortfolioPreview';
import Testimonials from '@components/sections/Testimonials';
import CitiesGrid from '@components/sections/CitiesGrid';
import FAQ from '@components/sections/FAQ';
import CTA from '@components/sections/CTA';
import {
  buildWebSiteSchema,
  buildWebPageSchema,
  buildLocalBusinessSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
} from '@data/schemas';
import { SITE_URL } from '@data/client';

export default function Home() {
  const title = 'Peintre Magny-en-Vexin (95) · Devis Gratuit · Léna Rénove';
  const description =
    "Artisan peintre à Magny-en-Vexin (95) depuis 10 ans. Peinture intérieure, enduits, ratissage, papier peint, vinyle adhésif. CAP Peintre, RC Pro. Devis gratuit 24h.";

  const jsonLd = [
    buildWebSiteSchema(),
    buildWebPageSchema({ path: '/', title, description }),
    buildLocalBusinessSchema(),
    buildFAQSchema(),
    buildBreadcrumbSchema([{ name: 'Accueil', url: `${SITE_URL}/` }]),
  ];

  return (
    <>
      <SEO title={title} description={description} path="/" jsonLd={jsonLd} />
      <Layout>
        <Hero />
        <Marquee />
        <Stats />
        <About />
        <Services />
        <PortfolioPreview />
        <Testimonials />
        <CitiesGrid />
        <FAQ />
        <CTA />
      </Layout>
    </>
  );
}
