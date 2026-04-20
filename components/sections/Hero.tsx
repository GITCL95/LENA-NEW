import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { CLIENT } from '@data/client';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] flex items-end overflow-hidden bg-espresso-800 pt-36 pb-16 md:pb-24"
    >
      {/* Background image with parallax */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <Image
          src="/assets/img/hero_bg.jpg"
          alt="Rénovation intérieure à Magny-en-Vexin par Léna Rénove"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-espresso-800/50 via-espresso-800/40 to-espresso-800/90" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-espresso-800/60 via-transparent to-transparent" />
      <div className="absolute inset-0 z-10 grain-overlay" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="container-premium relative z-20 w-full"
      >
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
          >
            <span className="eyebrow !text-corail-300 before:!bg-corail-400">
              Artisan Peintre · Val-d&apos;Oise (95)
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
            className="mt-6 font-display text-display-2xl text-ivory tracking-tightest text-balance"
          >
            Peintre en bâtiment<br />
            <span className="italic text-corail-300 font-normal">à Magny-en-Vexin</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.19, 1, 0.22, 1] }}
            className="mt-8 max-w-2xl text-[17px] md:text-[19px] text-ivory/80 leading-relaxed"
          >
            {CLIENT.credentials.experience} ans d&apos;expérience, CAP Peintre, RC Pro.
            Peinture intérieure, enduits de ratissage, pose de papier peint et vinyle adhésif.
            <span className="block mt-2 text-ivory/60">Devis gratuit sous 24h.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.19, 1, 0.22, 1] }}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <Link href="/contact-peintre-magny-en-vexin.html" className="btn-primary">
              Devis Gratuit
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
            <a href={`tel:${CLIENT.phoneIntl}`} className="btn-outline-light">
              <Phone size={16} strokeWidth={1.8} />
              Appeler maintenant
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-[12px] uppercase tracking-[0.2em] text-ivory/50"
          >
            <span>Tollens</span>
            <span className="h-px w-6 bg-ivory/20" />
            <span>Sikkens</span>
            <span className="h-px w-6 bg-ivory/20" />
            <span>CAP Peintre</span>
            <span className="h-px w-6 bg-ivory/20" />
            <span>RC Pro</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 right-8 z-20 hidden md:flex flex-col items-center gap-3 text-ivory/50 text-[11px] uppercase tracking-[0.25em]"
      >
        <span>Scroll</span>
        <div className="h-12 w-px bg-ivory/30 relative overflow-hidden">
          <motion.span
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-x-0 top-0 h-1/2 bg-corail-400"
          />
        </div>
      </motion.div>
    </section>
  );
}
