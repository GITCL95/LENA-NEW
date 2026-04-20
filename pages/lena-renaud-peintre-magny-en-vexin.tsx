import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Award, Shield, Palette, Sparkles, Check, ArrowRight } from 'lucide-react';
import SEO from '@components/layout/SEO';
import Layout from '@components/layout/Layout';
import PageHero from '@components/sections/PageHero';
import CTA from '@components/sections/CTA';
import Testimonials from '@components/sections/Testimonials';
import { CLIENT, SITE_URL } from '@data/client';
import { buildWebPageSchema, buildBreadcrumbSchema } from '@data/schemas';

const VALUES = [
  {
    icon: Award,
    number: '01',
    title: 'Formation & Expertise',
    text: 'CAP Peintre en Bâtiment — diplôme d\'État. 10 ans de pratique quotidienne du métier sur tous types de chantiers.',
  },
  {
    icon: Shield,
    number: '02',
    title: 'Assurance & Sérénité',
    text: 'RC Professionnelle active, SIRET validé. Vous savez à qui vous confiez vos murs et plafonds.',
  },
  {
    icon: Palette,
    number: '03',
    title: 'Matériaux Premium',
    text: 'Peintures Tollens et Sikkens exclusivement. Produits professionnels pour une tenue et un rendu supérieurs.',
  },
  {
    icon: Sparkles,
    number: '04',
    title: 'Finition obsessive',
    text: 'Chaque chantier est réalisé personnellement. Le diable se cache dans les détails — et ils ne m\'échappent pas.',
  },
];

const PROCESS = [
  { step: '01', title: 'Visite et diagnostic', text: 'Je me déplace gratuitement pour évaluer votre chantier, comprendre vos attentes et mesurer les surfaces.' },
  { step: '02', title: 'Devis détaillé sous 24h', text: 'Vous recevez un devis clair et précis : quantités, matériaux, main-d\'œuvre, délai. Sans surprise.' },
  { step: '03', title: 'Préparation du chantier', text: 'Protection des meubles et sols, préparation des supports (nettoyage, rebouchage, ratissage, ponçage).' },
  { step: '04', title: 'Application & finition', text: 'Peinture, pose de papier peint ou de vinyle — dans les règles de l\'art, avec un œil rigoureux sur chaque détail.' },
  { step: '05', title: 'Contrôle et livraison', text: 'Inspection finale avec vous. Le chantier est livré net, les déchets évacués. Votre satisfaction valide la fin du projet.' },
];

export default function APropos() {
  const title = 'Léna Renaud · Artisan peintre à Magny-en-Vexin · Léna Rénove';
  const description =
    "Léna Renaud, artisan peintre titulaire du CAP Peintre en Bâtiment, fondatrice de Léna Rénove. 10 ans d'expérience dans le Val-d'Oise et les Yvelines. RC Pro. Tollens & Sikkens.";
  const path = '/lena-renaud-peintre-magny-en-vexin.html';

  const jsonLd = [
    buildWebPageSchema({ path, title, description }),
    buildBreadcrumbSchema([
      { name: 'Accueil', url: `${SITE_URL}/` },
      { name: 'À propos', url: `${SITE_URL}${path}` },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: CLIENT.owner,
      jobTitle: 'Artisan Peintre en Bâtiment',
      worksFor: { '@type': 'LocalBusiness', '@id': `${SITE_URL}/#business` },
      hasCredential: 'CAP Peintre en Bâtiment',
      url: `${SITE_URL}${path}`,
    },
  ];

  return (
    <>
      <SEO title={title} description={description} path={path} jsonLd={jsonLd} />
      <Layout>
        <PageHero
          eyebrow="À propos"
          title={<>Léna Renaud, <span className="italic text-corail-300 font-normal">artisan peintre.</span></>}
          description="Un parcours, une passion et un engagement — transformer vos intérieurs avec rigueur et sensibilité. Voici l'histoire derrière Léna Rénove."
          breadcrumb={[
            { label: 'Accueil', href: '/' },
            { label: 'À propos' },
          ]}
        />

        {/* Portrait / Story */}
        <section className="section">
          <div className="container-premium">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
                className="lg:col-span-5 relative lg:sticky lg:top-32"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-4xl">
                  <Image
                    src="/assets/img/about_heading_bg.jpg"
                    alt="Léna Renaud, artisan peintre à Vétheuil"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -right-4 md:-right-10 bg-ivory rounded-3xl shadow-card px-7 py-5 border border-border/70">
                  <div className="flex items-center gap-4">
                    <div className="font-display text-6xl text-corail-500 leading-none">10</div>
                    <div className="text-[11px] uppercase tracking-[0.2em] text-espresso-500 leading-relaxed max-w-[100px]">
                      ans<br />d&apos;excellence
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 1, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
                className="lg:col-span-7 space-y-6 text-espresso-600 leading-relaxed text-[17px]"
              >
                <span className="eyebrow">L&apos;artisan</span>
                <h2 className="mt-5 font-display text-display-md tracking-tightest text-balance text-espresso-800">
                  Du bureau d&apos;études<br />
                  <span className="italic text-corail-600 font-normal">au pinceau.</span>
                </h2>
                <p>
                  Passionnée par la décoration d&apos;intérieur et sensible à l&apos;architecture depuis toujours,
                  Léna a d&apos;abord travaillé plusieurs années en bureau d&apos;études. Un parcours qui lui a
                  donné une vision globale du bâtiment — structures, matériaux, contraintes techniques.
                </p>
                <p>
                  Mais c&apos;est dans la matière, à la main, que sa passion a trouvé sa vraie place. Après
                  l&apos;obtention de son <strong className="text-espresso-800">CAP Peintre en Bâtiment</strong>,
                  elle fonde <strong className="text-espresso-800">Léna Rénove</strong> en 2016, basée à Vétheuil
                  dans le Val-d&apos;Oise.
                </p>
                <p>
                  Depuis, elle réalise chaque chantier personnellement, dans le respect strict des délais
                  et des finitions. Peintures professionnelles Tollens et Sikkens exclusivement, application
                  manuelle ou airless selon le support, préparation minutieuse — chaque détail compte.
                </p>
                <p className="text-espresso-800 font-display text-2xl italic leading-snug pl-5 border-l-2 border-corail-500">
                  « Je ne livre que ce que j&apos;accepterais chez moi. »
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Valeurs */}
        <section className="section bg-ivory-300">
          <div className="container-premium">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="max-w-3xl mb-14"
            >
              <span className="eyebrow">Engagements</span>
              <h2 className="mt-5 font-display text-display-lg tracking-tightest text-balance">
                Quatre piliers,<br />
                <span className="italic text-corail-600 font-normal">une exigence.</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
              {VALUES.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: [0.19, 1, 0.22, 1] }}
                  className="group relative bg-ivory rounded-3xl p-8 lg:p-10 border border-border/60 hover:border-corail-500 hover:shadow-card transition-all duration-500"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-corail-500/10 text-corail-600 grid place-items-center group-hover:bg-corail-500 group-hover:text-ivory transition-colors duration-500">
                      <v.icon size={22} strokeWidth={1.6} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-3 mb-3">
                        <span className="font-display text-sm text-corail-600 tracking-[0.3em]">{v.number}</span>
                        <span className="h-px flex-1 bg-border" />
                      </div>
                      <h3 className="font-display text-2xl text-espresso-800 tracking-tight">{v.title}</h3>
                      <p className="mt-4 text-espresso-500 leading-relaxed text-[15px]">{v.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section">
          <div className="container-premium">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className="lg:col-span-4 lg:sticky lg:top-32"
              >
                <span className="eyebrow">Méthode</span>
                <h2 className="mt-5 font-display text-display-md tracking-tightest text-balance">
                  De la visite<br />
                  <span className="italic text-corail-600 font-normal">à la livraison.</span>
                </h2>
                <p className="mt-6 text-espresso-500 leading-relaxed">
                  Cinq étapes claires, pour un chantier sans surprise. Transparence du devis à la remise des clés.
                </p>
              </motion.div>

              <div className="lg:col-span-8 relative">
                <div className="absolute left-6 top-0 bottom-0 w-px bg-border" aria-hidden />
                <div className="space-y-10">
                  {PROCESS.map((p, i) => (
                    <motion.div
                      key={p.step}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ duration: 0.7, delay: i * 0.08 }}
                      className="relative pl-20"
                    >
                      <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-ivory border-2 border-corail-500 text-corail-600 grid place-items-center font-display text-sm tracking-widest">
                        {p.step}
                      </div>
                      <h3 className="font-display text-xl lg:text-2xl text-espresso-800 tracking-tight">
                        {p.title}
                      </h3>
                      <p className="mt-3 text-espresso-500 leading-relaxed">{p.text}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials badges */}
        <section className="section-sm bg-ivory-300 border-y border-border/60">
          <div className="container-premium">
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 text-espresso-700">
              {[
                { title: 'CAP Peintre', subtitle: 'Diplôme d\'État' },
                { title: 'RC Pro', subtitle: 'Assurance garantie' },
                { title: 'SIRET 888 808 250 00011', subtitle: 'RCS Pontoise' },
                { title: 'Tollens & Sikkens', subtitle: 'Peintures pro' },
                { title: `${CLIENT.stats.rating} / 5`, subtitle: `${CLIENT.stats.reviews} avis` },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="font-display text-lg text-espresso-800">{item.title}</div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-espresso-400 mt-1">
                    {item.subtitle}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Testimonials />
        <CTA />
      </Layout>
    </>
  );
}
