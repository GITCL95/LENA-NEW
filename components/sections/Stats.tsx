import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { CLIENT } from '@data/client';

const STATS = [
  { value: CLIENT.stats.experience, label: 'Années d\'expérience', suffix: '' },
  { value: CLIENT.stats.projects, label: 'Projets réalisés', suffix: '' },
  { value: CLIENT.stats.rating, label: 'Note Google', suffix: '/5' },
  { value: CLIENT.stats.deadline, label: 'Délai devis', suffix: '' },
];

export default function Stats() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative bg-ivory-300 border-y border-border/60">
      <div className="container-premium">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border/70">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.19, 1, 0.22, 1] }}
              className="px-4 md:px-10 py-10 md:py-14 text-center first:border-l first:border-border/70 last:border-r last:border-border/70"
            >
              <div className="font-display text-display-md text-corail-600 leading-none">
                {stat.value}
                <span className="text-espresso-300">{stat.suffix}</span>
              </div>
              <div className="mt-3 text-[11px] uppercase tracking-[0.2em] text-espresso-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
