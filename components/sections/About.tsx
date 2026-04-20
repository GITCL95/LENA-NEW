import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { CLIENT } from '@data/client';

const CHECKS = [
  'CAP Peintre en Bâtiment — Diplôme d\'État',
  'RC Professionnelle — Assurance garantie',
  'Peintures Tollens & Sikkens — Qualité professionnelle',
  'Application manuelle & airless — Résultat impeccable',
];

export default function About() {
  return (
    <section className="section relative overflow-hidden">
      <div className="container-premium">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-4xl">
              <Image
                src="/assets/img/about_heading_bg.jpg"
                alt="Léna Renaud, artisan peintre en bâtiment à Magny-en-Vexin"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>

            {/* Badge expérience */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
              className="absolute -bottom-8 -right-4 md:-right-10 bg-ivory rounded-3xl shadow-card px-7 py-5 border border-border/70"
            >
              <div className="flex items-center gap-4">
                <div className="font-display text-6xl text-corail-500 leading-none">
                  {CLIENT.credentials.experience}
                </div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-espresso-500 leading-relaxed max-w-[100px]">
                  ans<br />d&apos;excellence
                </div>
              </div>
            </motion.div>

            {/* Signature décorative */}
            <div className="hidden lg:block absolute -top-6 -left-6 font-display text-[160px] text-corail-500/10 leading-none select-none pointer-events-none">
              L
            </div>
          </motion.div>

          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, delay: 0.15, ease: [0.19, 1, 0.22, 1] }}
            className="lg:col-span-7"
          >
            <span className="eyebrow">À propos · Léna Rénove</span>
            <h2 className="mt-5 font-display text-display-lg tracking-tightest text-balance">
              Artisan passionnée,<br />
              <span className="italic text-corail-600 font-normal">basée à Vétheuil</span> depuis {CLIENT.credentials.experience} ans.
            </h2>

            <div className="mt-8 space-y-5 text-espresso-500 leading-relaxed text-[17px] max-w-2xl">
              <p>
                {CLIENT.owner} a fondé <strong className="text-espresso-800">{CLIENT.brand}</strong> après
                l&apos;obtention de son <strong className="text-espresso-800">CAP Peintre en Bâtiment</strong> et
                plusieurs années en bureau d&apos;études. Basée à Vétheuil ({CLIENT.address.postalCode}),
                elle intervient dans tout le Val-d&apos;Oise et les Yvelines avec un seul objectif&nbsp;:
                un travail soigné, livré dans les délais.
              </p>
              <p>
                Chaque chantier est réalisé personnellement, avec des peintures professionnelles{' '}
                <strong className="text-espresso-800">Tollens et Sikkens</strong>, pour un résultat
                durable et esthétique.
              </p>
            </div>

            <ul className="mt-10 grid sm:grid-cols-2 gap-4">
              {CHECKS.map((check, i) => (
                <motion.li
                  key={check}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.08 }}
                  className="flex items-start gap-3 text-[15px] text-espresso-700"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-corail-500 grid place-items-center mt-0.5">
                    <Check size={14} className="text-ivory" strokeWidth={3} />
                  </span>
                  <span>{check}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/lena-renaud-peintre-magny-en-vexin.html" className="btn-primary">
                Notre histoire
                <ArrowRight size={16} strokeWidth={2} />
              </Link>
              <Link href="/contact-peintre-magny-en-vexin.html" className="btn-outline">
                Demander un devis
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
