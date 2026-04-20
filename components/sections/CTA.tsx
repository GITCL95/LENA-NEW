import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { CLIENT } from '@data/client';

export default function CTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-espresso-800 text-ivory">
      <Image
        src="/assets/img/cta_bg.jpg"
        alt=""
        fill
        aria-hidden
        sizes="100vw"
        className="object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-espresso-800/80 via-espresso-800/70 to-corail-600/30" />
      <div className="absolute inset-0 grain-overlay" />

      <div className="container-premium relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="eyebrow !text-corail-300 before:!bg-corail-400 justify-center">
            Prêt à commencer&nbsp;?
          </span>
          <h2 className="mt-6 font-display text-display-xl tracking-tightest text-balance">
            Transformons vos intérieurs,<br />
            <span className="italic text-corail-300 font-normal">ensemble.</span>
          </h2>
          <p className="mt-8 text-ivory/75 text-lg max-w-2xl mx-auto leading-relaxed">
            Devis gratuit sous 24h après visite. Léna se déplace dans tout le Val-d&apos;Oise et les Yvelines.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact-peintre-magny-en-vexin.html" className="btn-primary">
              Demander un devis
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
            <a href={`tel:${CLIENT.phoneIntl}`} className="btn-outline-light">
              <Phone size={16} strokeWidth={1.8} />
              {CLIENT.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
